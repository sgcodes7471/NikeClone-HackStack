import './signup.css'
import jordan from '../../assets/jordan.svg'
import nike from '../../assets/nike.svg'
import { Link, useSubmit } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signin } from '../../Redux/Slices/userSlice.js'
const Signup = ()=>{
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [error , setError]=useState('');
    const dispatch = useDispatch()

    const handleSignin = ()=>{
        // if(email === '' || password===''){
        //     setError('all Fields are necessary')
        //     return
        // }
        dispatch(signin({email,password}))
    }

    return(
        <div style={{display:'flex',padding:'20px' , flexDirection:'column',alignItems:'center'}}>
            <div className='logo-box'>
                <img src={nike} alt='nike'/>
                <img src={jordan} alt='jordan'/>
            </div>
            <div style={{fontSize:'2rem',textAlign:'left',margin:'20px 0px'}}>
                Enter Your Email here to Sign In.
            </div>
            <div style={{margin:'30px 0px'}}>
                <form>
                <input style={{margin:'10px 0px'}} type='text' className='text-box' placeholder='Email*' onClick={(e)=>{setEmail(e.target.value)}}/>
                <input style={{margin:'10px 0px'}} type='password' className='text-box' onClick={(e)=>{setPassword(e.target.value)}} placeholder='Enter Your Password'/>
                </form>
            </div>
            <div>
                By Continuing, I agree to Nike's <Link to='https://agreementservice.svs.nike.com/rest/agreement?agreementType=privacyPolicy&country=IN&language=en&requestType=redirect&uxId=4fd2d5e7db76e0f85a6bb56721bd51df'>
                 Privacy Policy</Link> and 
                <Link to='https://agreementservice.svs.nike.com/rest/agreement?agreementType=termsOfUse&country=IN&language=en&requestType=redirect&uxId=4fd2d5e7db76e0f85a6bb56721bd51df'>
                 Terms of Use</Link>
            </div>
            <div className='btn-wrapper'><button className='continue-btn' onClick={handleSignin}>Continue</button></div>
            <div style={{padding:'20px 0px', color:'red'}}>{error}</div>
        </div>
    )
}

export default Signup