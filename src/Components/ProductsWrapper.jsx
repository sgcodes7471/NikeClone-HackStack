import {useSelector , useDispatch} from 'react-redux'
import ProductCard from './ProductCard.jsx';
const ProductWrapper = ({width , showFilters})=>{
    const products  = useSelector((state)=>state.ProductSlice)
    return(
        <div className='products-wrapper' style={{padding:(width>960 && showFilters)?'20px 50px':'20px 50px 20px 0px'}}>
          {products.products.length === 0 && <div>We are fetching the data...</div>}
        {
        (products.products).map((product)=>{
          return(
              <ProductCard product={product}/>
          )
        })}
      </div>
    )
}
export default ProductWrapper