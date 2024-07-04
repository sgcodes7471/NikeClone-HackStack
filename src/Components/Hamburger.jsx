import nike from '../assets/nike.svg'
import jordan from '../assets/jordan.svg'
import cancel from '../assets/cancel.svg'
import forward from '../assets/forward.svg'
import './hamburger.css'
const Hamburger = ({setShowHam,showHam})=>{
    return(
        <div className='outer-ham' style={showHam?{transform:'translateX(0px)'}:{transform:'translateX(100vw)'}}>
            <div style={{width:'250px',backgroundColor:'white', height:'100%',padding:'0px 40px'}}>
            <div className='cross-wrapper'>
                <img src={cancel} alt='' onClick={()=>{setShowHam(false)}}/>
            </div>
            <div>
                <div className='box-ham'><p>New & Featured</p><img src={forward} alt="" /></div>
                <div className='box-ham'><p>Men</p><img src={forward} alt="" /></div>
                <div className='box-ham'><p>Women</p><img src={forward} alt="" /></div>
                <div className='box-ham'><p>Kids</p><img src={forward} alt="" /></div>
            </div>
            <div className='logos'>
                <img src={jordan} alt=''/>
                <img src={nike} alt=''/>
            </div>
            <div style={{padding:'20px 0px'}}>
            Become a Nike Member for the best products, inspiration and stories in sport.
            </div>
            <div className='btn-ham'>
                <button className='joinbtn'>Join Us</button>
                <button className='signbtn'>Sign In</button>
            </div>
            <div style={{padding:'40px 0px'}}>
                <p style={{paddingBottom:'10px'}}>Help</p>
                <p style={{paddingBottom:'10px'}}>Bag</p>
                <p style={{paddingBottom:'10px'}}>Fav</p>
                <p style={{paddingBottom:'10px'}}>Find a Store</p>
            </div>
        </div>
        </div>
    )
}
export default Hamburger