import "./Navbar.css"
import InterativeText from "../interative text/InterativeText";
import SocialsButton from "../socials button/Socials Button";
import Frenzy from "./../../assects/imgs/Frenzy_05.png";
import LinkeDin from "./../../assects/imgs/Link.png";
import Instagram from "./../../assects/imgs/Insta.png";
import WhatsApp from "./../../assects/imgs/What.png"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {motion as m, useScroll} from "framer-motion"

const Navbar = () => {
    const { scrollYProgress } = useScroll()
    const [hidden, setHidden] = useState(true)
    const [yPosition, setYPosition] = useState(0);
  
    useEffect(()=>{
        
      scrollYProgress.onChange(v => {
        if(scrollYProgress.getPrevious() > v){
            setHidden(false)
        }else if(scrollYProgress.getPrevious() < v ){
            setHidden(true)
        }
        setYPosition(v)})
    }, [scrollYProgress])

    console.log(yPosition)

  return (
    <>
    { yPosition > 0.2 ? 
    <m.header className={yPosition > 0.2 ? "color" : ""}
        animate={hidden && yPosition > 0.2 ? {display: "hidden", y: -120} : {display: "bloc", y: 0}}
        transition={{ease: [0.1, 0.25, 0.3, 1], duration: 0.6}}>
        <div className="navbar">
            <div>
                <Link to={"/"}><img src={Frenzy} alt="Logo" className="logo" /></Link>
            </div>
            <div>
                <ul className="links">
                    <li><a href="#"><InterativeText Text={"projects"}/></a></li>
                    <li><a href="#"><InterativeText Text={"about us"}/></a></li>
                    <li><a href="#"><InterativeText Text={"contact"}/></a></li>
                    <li><a href="#"><img src={LinkeDin} alt="Linkedin" style={{width:"40px"}}/></a></li>
                    <li><a href="#"><img src={Instagram} alt="Instagram" style={{width:"40px"}}/></a></li>
                    <li><a href="#"><img src={WhatsApp} alt="Whatsapp" style={{width:"40px"}}/></a></li>
                </ul>
            </div>
        </div>
    </m.header> : 
    <header className="firstNav">
        <div className="navbar">
            <div>
            <Link to={"/"}><img src={Frenzy} alt="Logo" className="logo" /></Link>
            </div>
            <SocialsButton/>
        </div>
    </header>
    }
    
    </>
  )
}

export default Navbar;
