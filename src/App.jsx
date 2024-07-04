import { useEffect, useState } from "react"
import Navbar from "./Components/Navbar.jsx"
import Products from "./Pages/ProductsPage/productsPage.jsx"
import {  Routes , Route, useLocation, BrowserRouter} from 'react-router-dom'
import Cart from "./Pages/CartPage/cartPage.jsx"
import Fav from "./Pages/FavPage/favPage.jsx"
import Signup from "./Pages/SignupPage/signup.jsx"
import Product from "./Pages/Product/Product.jsx"
import Joinus from "./Pages/JoinusPage/joinusPage.jsx"
import Profile from "./Pages/ProfilePage/ProfilePage.jsx"

const Routing = ()=>{
  const [width , setWidth]=useState(window.innerWidth)

  useEffect(()=>{
    const handleWidth = ()=>{
        setWidth(window.innerWidth)
      }
      window.addEventListener('resize', handleWidth)
      return ()=>{
        window.removeEventListener('resize' , handleWidth)
      }
    })

    const location=useLocation()
    const hasNavbar = !['/signin'].includes(location.pathname)
  return(
    <>
    {hasNavbar&&<Navbar width={width}/>}
        <Routes>
          <Route exact path="/" element={<Products width={width} search={false}/>}/>
          <Route exact path="/Search" element={<Products width={width} search={true}/>}/>
          <Route exact path="/Cart" element={<Cart/>} />
          <Route exact path="/Fav" element={<Fav/>} />
          <Route exact path="/:productName" element={<Product/>}/>
          <Route exact path='/Signin' element={<Signup/>}/>
          <Route exact path='/Joinus' element={<Joinus/>}/>
          <Route exact path="/Profile" element={<Profile/>} />
        </Routes>
    </>
  )
}

function App() {
  return(
<BrowserRouter>
  <Routing/>
 </BrowserRouter>
  )
 
}

export default App
