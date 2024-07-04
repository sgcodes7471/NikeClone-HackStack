import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

let products=[]
export const getProducts = createAsyncThunk('products/getProducts' , async ()=>{
    const response = await axios.get('http://localhost:3000/products')
    products= response.data

    let firstOcc = new Map()
    products.forEach((product)=>{
        if(firstOcc.has(product.productName))
            firstOcc.get(product.productName).colors.push(product.imageUrl)
        else{
            firstOcc.set(product.productName,{
                ...product,
                colors:[product.imageUrl]
            })
        }
    })
    products = Array.from(firstOcc.values())
    return products
})

let filters=[];


export const productSlice = createSlice({
    name:'products',
    initialState:{
        products:[]
    },
    reducers:{
        addFilters:(state, actions)=>{
            const filter = actions.payload
            if(filter.state) filters.push(filter)
                else filters=filters.filter((item)=>(item.key !== filter.key || item.value !== filter.value))
            
            if(filters.length===0)
                state.products=products
            

            else{
                const filterGroups = filters.reduce((accumulte, current) => {
                    if (!accumulte[current.key]) accumulte[current.key] = []
                    accumulte[current.key].push(current.value);
                    return accumulte;
                }, {});
                console.log(filterGroups)
                state.products = products.filter((product) => {
                    
                    for (let key in filterGroups) {
                        const values = filterGroups[key];
                        switch (key) {
                            case 'Sales & Offers':
                            if (!product.salePrice) return false;
                            break;
                            case 'Gender':
                            if (!values.includes(product.division)) return false;
                            break;
                            case 'Shop By Prices':
                            if (!values.some((range) => {
                                const price = product.salePrice || product.listPrice;
                                return price > range[0] && price <= (range[1] || Infinity);
                            })) return false;
                            break;
                            case 'Sports & Activities':
                            if (!values.includes(product.subCategory)) return false;
                            break;
                            case 'Kids':
                            if (product.division !== 'Kids') return false;
                            break;
                            default:
                            console.log("Nahi milega");
                        }
                    }
                    return true;
                })
            }   
        },
        sortProducts:(state,actions)=>{
            const sign= actions.payload
            state.products=(state.products).sort((product1, product2)=>{
                const value1=product1.salePrice||product1.listPrice
                const value2=product2.salePrice||product2.listPrice
                return ((value1-value2)*sign)
            })
        },
        searchProducts:(state,actions)=>{
            const searchKeyWord = actions.payload.searchKeyWord
            const searchResults = (state.products).filter((product)=>(product.productName).toLowerCase().includes(searchKeyWord))
            state.products=searchResults
        },
        clearSearch:(state)=>{
            state.products=products
            
        }
    },
    extraReducers:(builder) => {
        builder.addCase(getProducts.fulfilled, (state, actions) => {
                state.products = actions.payload
            });
    }
})

export const {addFilters,clearSearch,searchProducts,sortProducts} = productSlice.actions

export default productSlice.reducer