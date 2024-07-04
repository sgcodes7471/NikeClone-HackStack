import { useDispatch, useSelector } from 'react-redux'
import './product.css'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import love from '../../assets/love.svg'
import { addCart} from '../../Redux/Slices/cartSlice.js'
import { addFav } from '../../Redux/Slices/favouritesSlice.js'

const Product=()=>{
    const product=useSelector((state)=>state.CurrentSlice)
    const [url , setUrl]=useState(product.imageUrl)
    const [size , setSize] = useState(8.5)

    const dispatch = useDispatch()

    let sizes=[]
    for(let i=6;i<=15;i+=0.5)
        sizes.push(i)

    return(
        <div className='product-outer' style={{display:'flex',padding:'20px 0px',justifyContent:'center'}}>
            <div className='img-product'>
               <div className='img-inner'> <img style={{borderRadius:'10px',width:'40vw'}} src={url} alt='image'/> </div>
            </div>

            <div className='details-product'>
            <div style={{fontSize:'2rem'}}>{product.productName}</div>
            <div style={{color:'gray'}}>{product.division} {product.category}</div>
            <div className='color-product'>
               {(product.colors).map((imageUrl,index)=>{
                    return(
                        <img onClick={()=>{setUrl(imageUrl)}} style={{width:'100px',margin:'0px 10px',border:(url === imageUrl)?'1px solid black':'',borderRadius:'5px'}} key={index} src={imageUrl} alt=''/>
                    )
                })}
            </div>
            <div>
            {product.salePrice===null?<p>${product.listPrice}</p>
                :<span>${product.salePrice} <span style={{fontSize:'0.8rem',color:'gray', textDecoration:'line-through'}}>${product.listPrice}</span></span>}
                {!(product.salePrice===null)?<span className='sale'> {Math.round(100*(-product.salePrice+product.listPrice)/product.salePrice)}% off</span>:''}
            </div>
            <div style={{margin:'50px 0px'}}>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <p>Select Size</p>
                    <p><Link to='https://www.nike.com/size-fit/mens-footwear'>Size Guide</Link></p>
                </div>
                <div className='size-wapper'>
                {
                    sizes.map((item)=>{
                        return(
                            <div style={size===item?{backgroundColor:'rgb(250,90,0)', color:'white'}:{}} className='size-box' onClick={()=>{setSize(item)}}>{item}</div>
                        )
                    })
                }
                </div>
            </div>
            <div style={{textAlign:'center'}}>
                4 interest-free payment of {product.salePrice?product.salePrice/4:product.listPrice/4} with <span style={{fontWeight:'bold'}}>Klama</span>.
            </div>
            <div className='btn-product'>
                <button className='bag-btn' onClick={()=>{dispatch(addCart({product , size, url}))}}>Add to Bag</button>
                <button className='fav-btn' onClick={()=>{dispatch(addFav({product}))}}>Favourite <img src={love} alt=''/></button>
            </div>
            <div>
                {product.description}
            </div>
            </div>
        </div>
    )
}
export default Product