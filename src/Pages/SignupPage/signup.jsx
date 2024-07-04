import './signup.css'
import jordan from '../../assets/jordan.svg'
import nike from '../../assets/nike.svg'
import { Link } from 'react-router-dom'
const Signup = ()=>{
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
                <input type='text' className='text-box' placeholder='Email*'/>
            </div>
            <div>
                By Continuing, I agree to Nike's <Link to='https://agreementservice.svs.nike.com/rest/agreement?agreementType=privacyPolicy&country=IN&language=en&requestType=redirect&uxId=4fd2d5e7db76e0f85a6bb56721bd51df'>
                 Privacy Policy</Link> and 
                <Link to='https://agreementservice.svs.nike.com/rest/agreement?agreementType=termsOfUse&country=IN&language=en&requestType=redirect&uxId=4fd2d5e7db76e0f85a6bb56721bd51df'>
                 Terms of Use</Link>
            </div>
            <div className='btn-wrapper'><button className='continue-btn'>Continue</button></div>
        </div>
    )
}

export default Signup