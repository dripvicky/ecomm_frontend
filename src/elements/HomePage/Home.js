import React from 'react'
import Navbar from './Navbar'
import HomeCarousel from './homeCarousel'
import HomeSlider from './HomeSlider'
import Hero from './Hero'
import Bannerpage from './Bannerpage'

const Home = ({handleCart,cart}) => {
  return (
    <div>
      <Navbar cart={cart} />
      <Bannerpage/>
      <HomeCarousel/>
      <HomeSlider/>
      <Hero handleCart={handleCart}/>
    </div>
  )
}

export default Home
