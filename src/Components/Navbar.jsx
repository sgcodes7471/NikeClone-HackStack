import './navbar.css'
import cart from '../assets/cart.svg'
import converse from '../assets/converse.svg'
import jordan from '../assets/jordan.svg'
import love from '../assets/love.svg'
import search from '../assets/search.svg'
import nike from '../assets/nike.svg'
import hamburger from '../assets/hamburger.svg'
import profile from '../assets/profile.svg'
import NavbarSlider from './NavbarSlider.jsx'
import Search from './Search.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Hamburger from './Hamburger.jsx'

const Navbar=({width})=>{

    const [searchMenu , setSearchMenu]=useState(false)
    const [showHam , setShowHam]=useState(false)
    const navigate = useNavigate()

    const NavTop = ()=>{
        return(
            <div className='nav-top flex' >
            <div className='nav-top-left flex'>
            <p><img src={jordan} alt='jordon'/></p>
            <p><img src={converse} alt='converse'/></p>
            </div>
            <div className='nav-top-right flex'>
            <p>Find a Store</p> <hr className='hr-hori'/>
            <p>Help</p> <hr className='hr-hori'/>
            <Link to='/Joinus'><p>Join Us</p></Link> <hr className='hr-hori'/>
            <Link to='/Signin'><p>Signin</p></Link> 
            </div>
            </div>
        )
    }

    
    return(
        <>
        {width<=960 && <Hamburger setShowHam={setShowHam} showHam={showHam}/>}
        {width>960 && <NavTop/>}
        
            <div style={{transform:searchMenu?'translateY(0px)':'translateY(100vh)',width:'100vw',transition:'0.2s',height:'100vh',position:'fixed',backgroundColor:'rgb(0,0,0,0.4',zIndex:'9'}}>
                <Search setSearchMenu={setSearchMenu}/>
            </div>

        <div className='nav-btw flex'>
        <div className='logo-wrapper'><img style={{width:'40px'}} src={nike} alt='logo'
        onClick={()=>{navigate('/',{replace:true})}}/></div>
        {
            width>960 && 
            <div className='nav-category-wrapper'>
            <ul className='flex'>
            <li className='nav-li'>New & Featured</li>
            <li className='nav-li'>Men</li>
            <li className='nav-li'>Women</li>
            <li className='nav-li'>Kids</li>
            <li className='nav-li'>Jordon</li>
            </ul>
            </div>
        }
        <div className='icons-wrapper flex' >
        <p style={{position:'relative'}} onClick={()=>{setSearchMenu(true)}}>
        <img src={search} alt='search' style={{position:'absolute', margin:'5px'}}/>
        <input type='text' placeholder='search here'/>
        </p>
        <p className='icon'><img src={profile} alt='profile' onClick={()=>{navigate('/Profile',{replace:true})}}/></p>
        <p className='icon'><img src={love} alt='love' onClick={()=>{navigate('/Fav',{replace:true})}}/></p>
        <p className='icon'><img src={cart} alt='cart' onClick={()=>{navigate('/Cart' ,{replace:true})}}/></p>
        {width<960 && <p onClick={()=>{setShowHam(true)}}><img src={hamburger} alt='hamburger'/></p>}
        </div>
        </div>
        
        <NavbarSlider />
        
        </>
    )
}

export default Navbar