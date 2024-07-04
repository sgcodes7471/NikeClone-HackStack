import { useEffect, useRef, useState } from 'react'
import './joinusPage.css'

const Joinus = ()=>{
    const [error,setError] = useState('')
    const [password,setPassword]=useState('')
    const isFirstRef = useRef(true)

    useEffect(()=>{
        if(isFirstRef.current) isFirstRef.current=false;
        else if(password.length < 8) setError('Password must have 8 letters')
    },[password])

    return(<div style={{display:'flex',flexDirection:'column',alignItems:'center',padding:'40px 0px'}}>
        <div style={{fontSize:'1.5rem'}}>Being a Member is better!</div>
        <form onSubmit={(e)=>{
            e.preventDefault()
        }}>
            <input type='text' className='text-box-2' placeholder='Enter your Email'/>
            <input type='text' className='text-box-2' placeholder='Enter your Name'/>
            <input type='text' className='text-box-2' placeholder='Enter your Country'/>
            <input type='text' className='text-box-2' placeholder='Enter your password' onChange={(e)=>{setPassword(e.target.value)}}/>
            <p style={{color:password.length<8?'red':'green'}}>{error}</p>
            <input type='date' className='text-box-2' placeholder='Enter your DOB'/>
            <input className='sub-btn' type='submit' value='Submit'/>
        </form>
    </div>)
}

export default Joinus