import Category from './Category'
import './filter.css'
import { useEffect, useState } from 'react'
import DropArrow from './DropArrow.jsx'
import { addFilters, sortProducts } from '../Redux/Slices/productSlice.js'
import {useDispatch} from 'react-redux'

const FiltersChart = (props)=>{
    const width=props.width
    const Struct = (props)=>{
        const [show , setShow]=useState(width>960?false:true)
        const [more , setMore]=useState(false)
        
        const dispatch = useDispatch()

        return(

            <div className='filter-box' style={{paddingLeft:width<=960?'20px':'0px'}}>
                
                <div onClick={()=>{width>960?setShow(!show):setShow(true)}}
                style={{cursor:'pointer', display:'flex' , justifyContent:'space-between' , fontSize:'1.1rem' , fontWeight:'600'}}>
                    <span>{props.heading}</span>
                   {width>960 && <DropArrow open={show}/>}
                </div>
                {show && 
                <div className='options-box'>
                    {(props.options).map((option , index)=>{ 
                        let value = props.heading==='Shop By Prices'?`$${option[0]}-$${option[1]}`:option
                        value = props.heading==='Shop By Prices' && option.length<2?'above $150':value
                        if(index<4 || more) return(
                        <div key={index} className='flex'>
                            <input type='checkbox' name={props.heading} 
                            value={value}
                            onChange={(e)=>{
                                if(e.target.checked) dispatch(addFilters({key:props.heading , value:option, state:true}))
                                else dispatch(addFilters({key:props.heading , value:option, state:false}))
                            }}/>
                            <span>{value}</span>
                            </div>
                        )
                        else if(index==4 && !more) return(
                            <div key={index} style={{cursor:'pointer' , color:'gray'}} onClick={()=>{setMore(true)}}>+More</div>
                        )
                        })
                    }
                    {more && <div style={{cursor:'pointer' , color:'gray'}} onClick={()=>{setMore(false)}}>-Less</div>}
                    
                </div>}
                
            </div>
        )
    }

    return(
        <>
            <div style={{fontSize:'1.3rem' , fontWeight:'500'}}>Filters</div>
            {width>960?<div><Category/></div>:
                <div style={{display:'flex',flexDirection:'column',paddingLeft:'20px'}}>
                <div className='flex'><input type='radio' name='sort' value='Featured'/><span>Featured</span></div>
                <div className='flex'><input type='radio' name='sort' value='Newest'/><span>Newest</span></div>
                <div className='flex'><input type='radio' name='sort' value='Price:High to Low'/><span onClick={()=>{dispatch(sortProducts({order:-1}))}}>Price:High to Low</span></div>
                <div className='flex'><input type='radio' name='sort' value='Price:Low to High'/><span onClick={()=>{dispatch(sortProducts({order:1}))}}>Price:Low to High</span></div>
                </div>}
                <hr className='hr'/>
            <Struct heading='Sales & Offers' options= {['Offers In Bag' , 'SALE']}/>
            <hr className='hr'/>
            <Struct heading='Gender' options={['Men' , 'Women' , 'Unisex']}/>
            <hr className='hr'/>
            <Struct heading='Kids' options={['Boys','Girls']}/>
            <hr className='hr'/>
            <Struct heading='Shop By Prices' options={[[0,25],[25,50],[50,100],[100,150],[150]]}/>
            <hr className='hr'/>
            <Struct heading='Sports & Activities' options={['Lifestyle','Running' , 'Training & Gym' , 'Basketball' , 'Football' ,'Soccer' , 'Yoga' , 'Baseabll' , 'Golf' , 'Skateboarding' , 'Tennis' , 'Track & Field' , 'Lacrose' , 'Walking',  'Outdoor','Volleyball','Swimming' , 'Hiking','Hockey','Dance','Cheerleading' , 'Cycling' ]}/>

        </>
    )
}

export default FiltersChart