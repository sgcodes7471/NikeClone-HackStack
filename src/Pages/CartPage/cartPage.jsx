import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import './cartPage.css'
import { removeCart } from "../../Redux/Slices/cartSlice"

const Cart=()=>{
    const products=useSelector((state)=>state.CartSlice)
    const user = useSelector((state)=>state.UserSlice)
    const dispatch = useDispatch()

    let subTotal=0;
    (products.products).forEach(product => {
        subTotal+= (product.salePrice || product.listPrice)
    });
    return(
        <>
    <div style={{display:'flex' , justifyContent:'center',padding:'20px 50px' }}>
        <div className="left-section">
            {!user.isLoggedIn && 
                <div style={{border:'1px solid rgb(200,200,200)' , padding:'10px' , width:'max-content'}}>
                    <div style={{color:'rgb(250 ,80,0)' , fontSize:'1.4rem', fontWeight:'bold'}}>Members get free shipping on orders $50+</div>
                    <div style={{color:'gray', fontSize:'0.9rem'}}>Become a Nike Member for fast free shipping on orders $50+ <Link to='/Joinus'>Join us</Link> or <Link to='/Signin'>Sign-in</Link></div>
                </div>}
            <div style={{fontSize:'1.4rem' , fontWeight:'600'}}>Bag</div>
            <div style={{overflowY:'scroll', height:'50vh'}}>
            {products.products.length===0?<p>There are no Items in your Bag</p>:
                (products.products).map((product , index)=>{
                    return(
                        <div className="bag-box" key={index}>
                            <div><img style={{width:'120px'}} src={product.color}/></div>
                            <div style={{padding:'0px 0px 0px 20px'}}>
                                <div style={{fontSize:'1.1rem'}}>{product.productName}</div>
                                <div style={{color:'gray'}}>{product.division} {product.category}</div>
                                <div>Size:{product.size}</div>
                                {product.salePrice===null?<p>${product.listPrice}</p>
                                :<p>${product.salePrice} <span style={{fontSize:'0.8rem',color:'gray', textDecoration:'line-through'}}>${product.listPrice}</span></p>}
                                <div style={{color:'red',cursor:'pointer'}} onClick={()=>{dispatch(removeCart({product}))}}>Remove Item</div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
        <div className="right-section" style={{padding:'0px 10px'}}>
            <div style={{fontSize:'1.4rem' , fontWeight:'600'}}>Summary</div>
            <div style={{display:'flex' , justifyContent:'space-between' , fontWeight:'500'}}>
                <p style={{paddingRight:'10px'}}>SubTotal</p> {subTotal===0?<p>-</p>:<p>${subTotal}</p>}
            </div>
            <div style={{display:'flex', justifyContent:'space-between'  , fontWeight:'500'}}>
                <p style={{paddingRight:'10px'}}>Estimated Shipping and Handling</p> {subTotal===0?<p>FREE</p>:<p>${8+4*(products.products.length-1)}</p>}
            </div>
            <div style={{display:'flex', justifyContent:'space-between'  , fontWeight:'500'}}>
                <p style={{paddingRight:'10px'}}>Estimated Tax</p>  <p>-</p>
            </div>
            <hr className="hr"/>
            <div style={{display:'flex', justifyContent:'space-between'  , fontWeight:'500'}}>
                <p style={{paddingRight:'10px'}}>Total</p> {subTotal===0?<p>-</p>:<p>${subTotal+8}</p>}
            </div>
            <hr className="hr"/>
            <div className="bag-btn-wrapper">
                <button className="checkout-btn" style={{color:(products.products.length==0 || !user.isLoggedIn)?'gray':'green'}}>Checkout</button>
                <button className="pay-btn" style={{color:(products.products.length==0 || !user.isLoggedIn)?'gray':'green'}}>PayPal</button>
            </div>
        </div>
    </div>
    <div style={{padding:'20px 50px'}}>
        <div style={{fontSize:'1.4rem' , fontWeight:'600'}}>Favourites</div>
        <div style={{color:'gray', fontSize:'0.9rem'}}>Want to view your Favorites?
            {!user.isLoggedIn?<span><Link to='/Joinus'>Join us</Link> or <Link to='/Signin'>Sign in</Link></span>:<span><Link to='/Fav'>View Here</Link></span>}
        </div>
    </div>
    </>
    )
}
export default Cart