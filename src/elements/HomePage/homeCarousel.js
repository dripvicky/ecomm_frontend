import React from 'react'
import { Carousel } from 'react-bootstrap'
import banner from './Banner'

const HomeCarousel = () => {
  return (
    <Carousel>
        {
            banner.map((item,ind)=>(
                <Carousel.Item key={ind}>
                    <img
                    style={{
                        height:'400px',
                        width:'100%',
                        objectFit:'cover',
                        marginTop:'10px'
                    }} src={item.url} alt=''/>
                </Carousel.Item>
            ))
        }
    </Carousel>
  )
}

export default HomeCarousel
