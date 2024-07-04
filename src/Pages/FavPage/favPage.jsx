import { useDispatch, useSelector } from "react-redux"
import ProductCard from '../../Components/ProductCard.jsx'
import './favPage.css'
import { removeFav } from "../../Redux/Slices/favouritesSlice"

const Fav = ()=>{
    const products = useSelector((state)=>state.FavouritesSlice)
    const dispatch =useDispatch()
    return(
       <div style={{padding:'20px 50px'}}>
            <div className="heading-fav">Your Favourites</div>
            {(products.products).length===0 && <div style={{textAlign:'center'}}>You have no Favourites yet!</div>}
            <div className="fav-inner">
            {(products.products).map((product,index)=>{
                return(
                    <div className="fav-card">
                    <ProductCard product={product}/>
                    <p style={{color:'red',cursor:'pointer'}} onClick={()=>{dispatch(removeFav({product}))}}>Remove Item</p>
                    </div>
                )
            })}
            </div>
       </div>
    )
}
export default Fav