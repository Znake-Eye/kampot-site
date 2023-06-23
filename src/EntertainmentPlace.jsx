import { useState,useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link,useNavigate} from "react-router-dom"

const EntertainmentPlace = ({items}) => {
    useEffect(()=>{
        AOS.init();
    },[])
   
    // console.log(items)
    const NoCotent = () => {
        alert("No More content")
    }
    const navigate = useNavigate();

    const toDetail = (item) => {
        navigate('/enterDetail',{state:{item}});
    }

    return (
        <article className="container" id="1">
            <h1 data-aos="fade-up" me="hello">ទីតាំងកំសាន្ត</h1>
            <ul className="entertain-ul">
                {/* {items.map((item) => {
                    return <li key={item.id}>
                        <div className="box box1">
                            <p>{item.title}</p>
                            <p>{item.body}</p>
                        </div>
                    </li>
                })} */}

                {items.map(item => (
                    <li
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        key={item.id}>
                        <div className="box">
                            <img src={item.image} alt="image" onClick={() => toDetail(item)}/>
                            <p className="text-center all-title">{item.title}</p>

                            <p className="all-boby">{item.body.length <= 70 ? (item.body) : `${(item.body).slice(0,70)} ...`}</p>
                            {/* <p className="all-boby">{item.body.length <= 100 ? item.body : `${(item.body).slice(0,100)} ...`}</p> */}
                        </div>
                    </li>
                ))}

            </ul>
            <div className="btn-part">
                <button  className="btn-more" onClick={NoCotent}>មើលបន្ថែម</button>
            </div>
        </article>
    )
}
export default EntertainmentPlace