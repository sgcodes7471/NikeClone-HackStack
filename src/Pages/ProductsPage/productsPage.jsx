import './productsPage.css'
import cross from '../../assets/cross.svg'
import filter from '../../assets/filter.svg'
import FiltersChart from '../../Components/FiltersChart.jsx';
import { useEffect, useState } from 'react';
import {useSelector , useDispatch} from 'react-redux'
import { clearSearch , getProducts, sortProducts} from '../../Redux/Slices/productSlice.js';
import { useNavigate } from 'react-router-dom';
import ProductWrapper from '../../Components/ProductsWrapper.jsx';

const Products = ({width,search})=>{
   
    const [sortDropDown , setSortDropDown] = useState(false)
    const [showFilters , setShowFilters]=useState(width>960?true:false)

    const dispatch =useDispatch()
    const navigate = useNavigate()

    const SortByDropDown = ()=>{
        return(
            <ul className='drop-down'>
                <li>Featured</li>
                <li>Newest</li>
                <li onClick={()=>{dispatch(sortProducts(-1))}}>Price:High to Low</li>
                <li onClick={()=>{dispatch(sortProducts(1))}}>Price:Low to High</li>
            </ul>
        )
      }

      useEffect(()=>{
        dispatch(getProducts())
      },[dispatch])

    return(
        <div>
        <div style={{display:"flex" , padding:'10px 50px' , position:'sticky'}}>
            <div style={{ fontSize:'1.5rem', width:'30vw'}}>{search && <span style={{cursor:'pointer'}} onClick={()=>{
              dispatch(clearSearch())
              navigate(-1)
            }}>Go Back | </span>}  {!search ? <span>All Products</span>:<span>Results</span>}
            </div>
            
            <div className="flex" onClick={()=>{setShowFilters(!showFilters)}} 
                style={{cursor:'pointer' , borderRadius:'50px' , width:'70vw' , padding:'0px 5px' , justifyContent:'right'}}>
                {width>960? showFilters?'Hide':'Show' : ''} Filters <img src={filter} alt=""/>
            </div>

            {width>960 && <div className='flex' onClick={()=>{setSortDropDown(!sortDropDown)}} 
            style={{cursor:'pointer',width:'10vw', justifyContent:'right'}}>Sort By</div>}
            
           {sortDropDown && <SortByDropDown/>} 
        </div>
         
         <div className='flex'>
          {width>960 &&
          <div className="side-bar" style={{width:showFilters?'300px':'0px' , color:showFilters?'black':'white' , padding:'10px 2px 10px 50px' }} >
          <FiltersChart width={width}/>
          </div>}

          {width<=960 &&
          <div className='drop-bar' style={showFilters?{transform:'translateY(0px)',opacity:'1'}:{transform:'translateY(-100vh)' , opacity:'0'}}>
            <div style={{position:'absolute' , right:'5px' , top:'5px'}}>
              <p onClick={()=>{setShowFilters(false)}} 
              style={{backgroundColor:'black', width:'20px',  display:'flex' , alignItems:'center' , justifyContent:'center', height:'20px' , padding:'3px' , borderRadius:'1000px'}}>
                <img style={{width:'17px'}} src={cross} alt='' />
              </p></div>
            <FiltersChart width={width} />
          </div>}

            <ProductWrapper width={width} showFilters={showFilters}/>
        </div>
        </div>
    )
}

export default Products