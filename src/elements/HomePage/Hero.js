import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Action from '../redux/Action'
import './Hero.css'

const Hero = ({handleCart}) => {
  const {products} = useSelector(state=>state.items)

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(Action())
  },[dispatch])

  return (
    <div>
     {
      products.map((item,ind)=>(
          <div className='productCart' key={ind}>
            <img src={item.img} alt=''/>
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>Rs.{item.price}</p>
            <p>{item.rating}</p>
            <p>{item.review}</p>
            <p>{item.desc}</p>
            <button className='btn btn-dark' onClick={()=>handleCart(item)}>add to cart</button>
          </div>

        ))
     }
    </div>
  )
}

export default Hero
