import image from "./Image/waterfall.jpg"
import image2 from "./Image/waterfall2.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Bigview = () => {
    useEffect(() => {
        AOS.init();
    },[])
    

    return (
        <div className="view-image-container">
            <div className="first-container">
                <div className="first-view" data-aos="fade-right">
                    <img src={image} alt="" />
                </div>
                <div className="second-view" data-aos="fade-left">
                    <img src={image2} alt="" />
                </div>
            </div>
            
        </div>
    )
}
export default Bigview