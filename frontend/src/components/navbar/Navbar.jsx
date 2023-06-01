import "./Navbar.css"

import SocialsButton from "../socials button/Socials Button";
import Frenzy from "./../../assects/imgs/Frenzy_05.png";
import LinkeDin from "./../../assects/imgs/Link.png";
import Instagram from "./../../assects/imgs/Insta.png";
import WhatsApp from "./../../assects/imgs/What.png"
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {motion as m, useScroll} from "framer-motion"

const Navbar = ({width}) => {
    const { scrollYProgress } = useScroll()
    const [hidden, setHidden] = useState(true)
    const [yPosition, setYPosition] = useState(0);
    const location = useLocation().pathname.split("/")[1]
  
    useEffect(()=>{
        
      scrollYProgress.onChange(v => {
        if(scrollYProgress.getPrevious() > v){
            setHidden(false)
        }else if(scrollYProgress.getPrevious() < v ){
            setHidden(true)
        }
        setYPosition(v)})
    }, [scrollYProgress])


  return (
    <>
    { yPosition < 0.2 && location === "" ? <header className="firstNav">
        <div className="navbar">
            <div>
            <Link to={"/"}><img src={Frenzy} alt="Logo" className="logo" /></Link>
            </div>
            <SocialsButton/>
        </div>
    </header>
    : width <= 900 ? <m.header className={yPosition > 0.2 ? "color" : ""}
        animate={hidden && yPosition > 0.2 ? {display: "hidden", y: -120} : {display: "bloc", y: 0}}
        transition={{ease: [0.1, 0.25, 0.3, 1], duration: 0.6}}>
        <div className="navbar">
            <div>
                <Link to={"/"}><img src={Frenzy} alt="Logo" className="logo" /></Link>
            </div>
            <div>
                <ul className="links">
                    <li><a href="#">PROJECTS</a></li>
                    <li><a href="#">ABOUT US</a></li>
                    <li><a href="#">CONTACT</a></li>
                    <li><a href="#"><img src={LinkeDin} alt="Linkedin" style={{width:"40px"}}/></a></li>
                    <li><a href="#"><img src={Instagram} alt="Instagram" style={{width:"40px"}}/></a></li>
                    <li><a href="#"><img src={WhatsApp} alt="Whatsapp" style={{width:"40px"}}/></a></li>
                </ul>
            </div>
        </div>
    </m.header> 
    : <m.header className={yPosition > 0.2 ? "color" : ""}
        animate={hidden && yPosition > 0.2 ? {display: "hidden", y: -120} : {display: "bloc", y: 0}}
        transition={{ease: [0.1, 0.25, 0.3, 1], duration: 0.6}}>
        <div className="navbar">
            <div>
                <Link to={"/"}><img src={Frenzy} alt="Logo" className="logo" /></Link>
            </div>
            <div>
                <ul className="links">
                    <li><a href="#">PROJECTS</a></li>
                    <li><a href="#">ABOUT US</a></li>
                    <li><a href="#">CONTACT</a></li>
                    <li><a href="#"><img src={LinkeDin} alt="Linkedin" style={{width:"40px"}}/></a></li>
                    <li><a href="#"><img src={Instagram} alt="Instagram" style={{width:"40px"}}/></a></li>
                    <li><a href="#"><img src={WhatsApp} alt="Whatsapp" style={{width:"40px"}}/></a></li>
                </ul>
            </div>
        </div>
    </m.header>
    }
    
    </>
  )
}

export default Navbar;
