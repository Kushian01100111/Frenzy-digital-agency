import "./Navbar.css"
import Frenzy from "./../../assects/imgs/Frenzy_05.png";
import LinkeDin from "./../../assects/imgs/Link.png";
import Instagram from "./../../assects/imgs/Insta.png";
import WhatsApp from "./../../assects/imgs/What.png"

const Navbar = () => {
  return (
    <header>
        <div className="navbar">
            <div>
                <img src={Frenzy} alt="Logo" className="logo" />
            </div>
            <div>
                <ul className="links">
                    <li><a href="#">Sobre nosotros</a></li>
                    <li><a href="#">Proyectos</a></li>
                    <li><a href="#">Servicios</a></li>
                    <li><a href="#">Testimonios</a></li>
                    <li><a href="#">Contacto</a></li>
                    <li><a href="#"><img src={LinkeDin} alt="Linkedin" style={{width:"40px"}}/></a></li>
                    <li><a href="#"><img src={Instagram} alt="Instagram" style={{width:"40px"}}/></a></li>
                    <li><a href="#"><img src={WhatsApp} alt="Whatsapp" style={{width:"40px"}}/></a></li>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Navbar
