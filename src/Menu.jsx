import {Routes, Route, Link} from "react-router-dom"
import menu1 from "./Image/menu1.jpg"
import menu2 from "./Image/menu2.jpg"
import menu3 from "./Image/menu3.jpg"
import menu4 from "./Image/menu4.jpg"
import EntertainmentPlace from "./EntertainmentPlace"
const Menu = () => {
    return (
            <nav>
                <ul>
                    <li>
                        {/* <Link to="/entertainmentplace">
                            
                        </Link> */}
                        <a href="#1">
                            <img className="image-menu" src={menu1} />
                        </a>
                    </li>
                    <li>
                        {/* <Link to="/action">
                            <img className="image-menu" src={menu2} />
                        </Link> */}
                        <a href="#2">
                        <img className="image-menu" src={menu2} />
                        </a>
                    </li>
                    <li>
                        {/* <Link to="/food">
                            <img className="image-menu"  src={menu3} />
                        </Link> */}
                        <a href="#3">
                            <img className="image-menu"  src={menu3} />
                        </a>
                    </li>
                    <li>
                        {/* <Link to="/hotel">
                            <img className="image-menu" src={menu4} />
                        </Link> */}
                        <a href="#4">
                            <img className="image-menu" src={menu4} />
                        </a>
                    </li>
                </ul>
                {/* <Routes>
                    <Route path="/entertainmentplace"  element={<EntertainmentPlace />}/>
                </Routes> */}
            </nav>
    )
}
export default Menu