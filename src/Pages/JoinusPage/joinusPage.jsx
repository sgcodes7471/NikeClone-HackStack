import { useEffect, useRef, useState } from 'react'
import './joinusPage.css'
import { useDispatch } from 'react-redux'
import { joinus } from '../../Redux/Slices/userSlice.js'


const Joinus = ()=>{
    const [email, setEmail]=useState('')
    const [name, setName]=useState('')
    const [dob, setDob]=useState('')
    const [password,setPassword]=useState('')
    const [error, setError]=useState('')

    const isFirstRef = useRef(true)

    const dispatch = useDispatch()

    const handleJoinus = ()=>{
        dispatch(joinus({email , name, password , dob}))
    }

    useEffect(()=>{
        if(isFirstRef.current) isFirstRef.current=false;
        else if(password.length < 8) setError('Password must have 8 letters')
    },[password])

    return(<div style={{display:'flex',flexDirection:'column',alignItems:'center',padding:'40px 0px'}}>
        <div style={{fontSize:'1.5rem'}}>Being a Member is better!</div>
        <form onSubmit={(e)=>{
            e.preventDefault()
            handleJoinus()
        }}>
            <input type='text' className='text-box-2' placeholder='Enter your Email' onChange={(e)=>{setEmail(e.target.value)}} required/>
            <input type='text' className='text-box-2' placeholder='Enter your Name' onChange={(e)=>{setName(e.target.value)}} required/>
            <input type='password' className='text-box-2' placeholder='Enter your password' onChange={(e)=>{setPassword(e.target.value)}} required/>
            <p style={{color:password.length<8?'red':'green'}}>{error}</p>
            <input type='date' className='text-box-2' placeholder='Enter your DOB' onChange={(e)=>{setDob(e.target.value)}} required/>
            <input className='sub-btn' type='submit' value='Submit'/>
        </form>
    </div>)
}

export default Joinus