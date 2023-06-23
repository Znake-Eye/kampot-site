import tiktok from "./Image/tiktok.png"
import facebook from "./Image/facebook.png"
import telegram from "./Image/telegram.png"

const Footer = () => {
    var Currency_year = new Date()
    return (
        <footer>
            <ul>
                <li>
                    <a href="https://www.tiktok.com/en/">
                        <img src={tiktok} alt="Tiktok" />
                    </a>
                </li>
                <li>
                    <a href="https://web.facebook.com/profile.php?id=100085337821841">
                        <img src={facebook} alt="facebook" />
                    </a>
                </li>
                <li>
                    <a href="www.telegram.com">
                        <img src={telegram} alt="Telegram" />
                    </a>
                  
                </li>
                {/* <li>Telegram</li> */}
                
            </ul>
            <p>Copyright &copy;{Currency_year.getFullYear()} Manh Vichhai</p>
        </footer>
    )
}
export default Footer