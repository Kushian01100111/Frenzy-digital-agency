import "./Footer.css"
import Frenzy from "./../../assects/imgs/Frenzy_04.png";
import LinkeDin from "./../../assects/imgs/LinkedIn.png";
import Instagram from "./../../assects/imgs/Instagram.png";
import WhatsApp from "./../../assects/imgs/WhatsApp.png";

const Footer = () => {
    const date = (new Date).getFullYear()
  return (
    <footer className="footer">
        <div className="contentFooter">
            <div>
                <small> &copy;2018 - {date} Frenzy, Boutique digital agency.</small>
            </div>
            <div>
                <img src={Frenzy} alt="Logo" style={{width: "84px", height: "auto"}}/>
            </div>
            <div>
                <ul>
                    <li><a href="#"><img src={LinkeDin} alt="Linkedin" style={{width:"35px"}}/></a></li>
                    <li><a href="#"><img src={Instagram} alt="Instagram" style={{width:"35px"}}/></a></li>
                    <li><a href="#"><img src={WhatsApp} alt="Whatsapp" style={{width:"35px"}}/></a></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer
