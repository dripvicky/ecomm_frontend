import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Sign from '../signPage/Sign'
import Home from '../HomePage/Home'
import Cart from '../cart/Cart'

const Paths = ({handleCart,cart,setcart}) => {
  return (
    <Routes>
      <Route path='/' element={<Home handleCart={handleCart} cart={cart} />}/>
      <Route path='/signup' element={<Sign isSignUp={true} />}/>
      <Route path='/signin' element={<Sign isSignUp={false} />}/>
      <Route path='/cart' element={<Cart cart={cart} setcart={setcart} />}/>
    </Routes>
  )
}

export default Paths
