import { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './product.css'
import { useDispatch } from 'react-redux';
import {setCurrent} from '../Redux/Slices/currentSlice.js'
const ProductCard = ({product})=>{
    const [ishover , setIshover]=useState(false);
    const [defUrl , setDefUrl]=useState(product.imageUrl)
    const navigate = useNavigate()
    const dispatch =useDispatch()
    
    useEffect(() => {
        setDefUrl(product.imageUrl);
      }, [product.imageUrl]);

    return(
        <div className='card' 
        onClick={()=>{
            dispatch((setCurrent(product)))
            navigate(`/${product.productName}`)}} 
        onMouseEnter={()=>{setIshover(true)}} onMouseLeave={()=>{setIshover(false)}}>
            <div>
                <img style={{width:'100%' , backgroundColor:'#f3f3f3'}} src={defUrl}/>
            </div>
            <div>
                {!ishover && <p style={{fontSize:'1.1rem' , fontWeight:'bold'}}>{product.productName}</p>}
                {!ishover && <p style={{color:'gray'}}>{product.division} {product.category}</p>}
                {!ishover && <p style={{color:'gray'}}>{product.colors.length} Colors</p>}
                {ishover && 
                <div style={{display:'flex',alignItems:'center'}}>
                {(product.colors).map((imageUrl,index)=>{
                    if(index<3) return(
                        <p>
                        <img style={{width:'50px',margin:'0px 2px'}} key={index} src={imageUrl} onMouseEnter={()=>{setDefUrl(imageUrl)}}/>
                        </p>
                    ) 
                    else if(index==3)
                        return(<span style={{color:'gray'}}>+{product.colors.length-index} Colors</span>)
                })}
                </div>
                }
                {product.salePrice===null?<p>${product.listPrice}</p>
                :<p>${product.salePrice} <span style={{fontSize:'0.8rem',color:'gray', textDecoration:'line-through'}}>${product.listPrice}</span></p>}
                {!(product.salePrice===null)?<p className='sale'>{Math.round(100*(-product.salePrice+product.listPrice)/product.salePrice)}% off</p>:''}
            </div>
        </div>
    )
}
export default ProductCard