import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import sliderData from './Slider'

const HomeSlider = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <Carousel
        responsive={responsive}
    >
      {
        sliderData.map((item,ind)=>{
            return(
                <div style={{marginLeft:'5px',marginTop:'10px'}} className='card' key={ind}>
                    <img style={{height:'200px',objectFit:'fill'}} src={item.url} alt='' />
                    <p style={{padding:0,margin:0}}>{item.discount}</p>
                    <p style={{padding:0,margin:0}}>{item.tagline}</p>
                </div>
            )
        })
      }
    </Carousel>
  )
}

export default HomeSlider
