import { useState } from 'react'
import SimpleImageSlider from 'react-simple-image-slider'
import Logo from './Logo.png'
import slide1 from "./Image/slide1.jpg"
import slide2 from "./Image/slide2.jpg"
import slide3 from "./Image/slide3.jpg"
import slide4 from "./Image/slide4.jpg"
const Slider = () => {

    const images = [
        {url: slide1},
        {url:slide2},
        {url:slide3},
        {url:slide4}
    ]
    return (
        <div className='slider'>
            <img src={Logo} className='logo'/>
            <div className='slider-container'>
                    <SimpleImageSlider
                        width="100%"
                        height="100%"
                        images={images}
                        showBullets={true}
                        showNavs={true}
                    />
            </div>      
        </div>
    )
}
export default Slider