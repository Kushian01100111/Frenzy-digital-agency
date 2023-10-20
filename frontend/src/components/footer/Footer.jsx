import "./Footer.css"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Frenzy from "./../../assects/imgs/Frenzy_04.png";
import LinkeDin from "./../../assects/imgs/LinkedIn.png";
import Instagram from "./../../assects/imgs/Instagram.png";
import WhatsApp from "./../../assects/imgs/WhatsApp.png";

const Footer = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const date = (new Date).getFullYear()

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
  return (
    <footer className="footer">
        <div className="contentFooter">
            <div className="div41">
                <small> &copy;2018 - {date} Frenzy - Media Boutique.</small>
            </div>
            <div>
                <Link to={"/"}><img src={Frenzy} alt="Logo" style={ width <= 790 ?{width: "60px", height: "auto"}: {width: "84px", height: "auto"}}/></Link>
            </div>
            <div>
                <ul className="linksFooter">
                    <li><a href="https://www.linkedin.com/company/frenzy-digital-media-boutique/" target="_blank" rel="noreferrer" ><img src={LinkeDin} alt="Linkedin" style={{width:"35px"}}/></a></li>
                    <li><a href="https://www.instagram.com/________frenzy/"  target="_blank" rel="noreferrer" ><img src={Instagram} alt="Instagram" style={{width:"35px"}}/></a></li>
                    <li><a href="https://wa.link/45nwa9" target="_blank" rel="noreferrer"><img src={WhatsApp} alt="Whatsapp" style={{width:"35px"}}/></a></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer
