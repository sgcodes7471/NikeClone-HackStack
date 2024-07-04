import nike from '../assets/nike.svg'
import search from '../assets/search.svg'
import {  useDispatch} from 'react-redux'
import { searchProducts,clearSearch } from '../Redux/Slices/productSlice.js'
import { useNavigate } from 'react-router-dom'
import './search.css'
import { useState } from 'react'

const Search = ({setSearchMenu})=>{
    const [searchKeyWord , setSearchKeyWord] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return(
        <div className='search-box'>
            <div><img style={{width:'90px'}} src={nike} alt='Nike'/></div>
            <div style={{position:'relative',padding:'0px 50px'}}>
            <div>
                <form onSubmit={(e)=>{
                    e.preventDefault()
                    dispatch(clearSearch())
                    dispatch(searchProducts({searchKeyWord}))
                    navigate("/Search")
                    setSearchMenu(false)
                }}>
                <img src={search} alt='search' style={{position:'absolute', margin:'5px'}} />
                <input className='search-txt' type='text' placeholder='search here' onChange={(e)=>{setSearchKeyWord(e.target.value)}}/>
                </form>
            </div>
            <div>
                <div style={{color:'gray',fontSize:'0.7rem',padding:'20px 0px',fontWeight:'bold'}}>Some Popular Search Items</div>
                <div className='popular'>Air Force 1</div>
                <div className='popular'>Jordan</div>
                <div className='popular'>Air Max</div>
                <div className='popular'>Blazer</div>
            </div>
            </div>
            <div className='cancel-btn' onClick={()=>{setSearchMenu(false)}}>Cancel</div>
        </div>
    )
}

export default Search