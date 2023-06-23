import {useLocation} from "react-router-dom"
import { useState,useEffect } from "react"


const EntertainmentDetail = ({}) => {

    const location = useLocation()

    const [data, setData] = useState([]) // create state
 
    useEffect(()=> {     //useEffect to get data from state in navigate
        setData(location.state.item)  
    },[])

    console.log(data)

    return (
        <div className="view-image-container">
            <div className="container">
                <h1>Detail Entertainment page</h1>
                <img src={data.image} alt="" className="image-detail" />
                <h1 className="body-detail color-detail">{data.title}</h1>
                <p className="body-detail">{data.body}</p>
            </div>
        </div>
    )
}
export default EntertainmentDetail