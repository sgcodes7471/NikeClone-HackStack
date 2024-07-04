import './navbar.css'
import left from '../assets/left.svg'
import right from '../assets/right.svg'
import { useEffect, useState } from 'react'
const NavbarSlider = ()=>{
    const [current , setCurrent]=useState(0);
    useEffect(()=>{
        const sliderTimer = setInterval(function(){
            if(current===-2) setCurrent(0)
            else setCurrent(current-1)
        },2000)
        return ()=>clearInterval(sliderTimer)
    },[current])
    const handleCurrent=(sign)=>{
        if(current===-2 && sign<0) setCurrent(0)
        else if(current===0 && sign>0) setCurrent(-2)
        else setCurrent(current+sign)
        
    }
    
return(
    <div className='nav-btm flex'>
            <img style={{width:'25px'}} src={left} alt='left' onClick={()=>{handleCurrent(1)}}/>
            <div className='slider-outer flex'>
                <div style={{textDecoration:'underline' , 
                transform:window.innerWidth>600?`translateX(${current*50}vw)`:`translateX(${current*90}vw)`}} className='slider-inner flex'>
                <p>Members:Free Shippping for $50+</p>
                <p>Extra 20% for code FLASH20</p>
                <p>Look for store Pickup at checkout</p>
                </div>
            </div>
            <img style={{width:'25px'}} src={right} alt='right' onClick={()=>{handleCurrent(-1)}}/>
    </div>
)
}
export default NavbarSlider