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
    const [active, setActive] = useState(false)
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
    { width <= 900 ? <m.header className={yPosition > 0.01 ? "color" : ""}
        animate={hidden && yPosition > 0.01 ? {display: "hidden", y: -290} : {display: "bloc", y: 0}}
        transition={{ease: [0.1, 0.25, 0.3, 1], duration: 0.6}}>
        <div className="navbar">
            <div>
                <Link to={"/"}><img src={Frenzy} alt="Logo" className="logo" /></Link>
            </div>
            <div>
                <ul className="links">
                    <div onClick={()=> setActive(!active)}>
                        <m.div animate={ !active ? {width: 35, height:4, backgroundColor: "#000", margin: 5, borderRadius: 20, 
                        transform: "translateY(0px) rotate(0deg)"}:
                        {width: 35, height:4, backgroundColor: "#000", margin: 5, borderRadius: 20, transform: "translateY(8px) rotate(45deg)"}    }></m.div>
                        <m.div animate={ !active ? {width: 35, height:4, backgroundColor: "#000", margin: 5, borderRadius: 20}:
                        {width: 35, height:4, backgroundColor: "#000", margin: 5, borderRadius: 20, opacity: 0}    }></m.div>
                        <m.div animate={ !active ? {width: 35, height:4, backgroundColor: "#000", margin: 5, borderRadius: 20, transform: "translateY(0px) rotate(0deg)"}:
                        {width: 35, height:4, backgroundColor: "#000", margin: 5, borderRadius: 20, transform: "translateY(-10px) rotate(-45deg)"}}></m.div>    
                    </div>
                </ul>
            </div>
        </div>
        <m.div className="contentLinksSmaller"
        animate={active ? {x: 0 , y: -1, display: "block", opacity: 1, zIndex: 1} : ""} initial={{x: -1000,y: 0, display: "hidden", opacity: 0, zIndex: -1}} transition={{ease: [0.1, 0.25, 0.3, 1], duration: 0.6}}>
            <ul className="linksSmaller">
                <li><a href="#">PROJECTS</a></li>
                <li><Link to={"/about_us"}>ABOUT US</Link></li>
                <li><Link to={"/contact"}>CONTACT</Link></li>
                <div className="socialsLinks">
                    <li><a href="https://www.linkedin.com/in/carolina-albarracin-90146593/" target="_blank"><img src={LinkeDin} alt="Linkedin" style={{width:"40px"}} className="linkLogo"/></a></li>
                    <li><a href="https://www.instagram.com/________frenzy/" target="_blank"><img src={Instagram} alt="Instagram" style={{width:"40px"}} className="linkLogo"/></a></li>
                    <li><a href="#"><img src={WhatsApp} alt="Whatsapp" style={{width:"40px"}} className="linkLogo"/></a></li>
                </div>
            </ul>      
        </m.div>
    </m.header> 
    : <m.header className={yPosition > 0.01 ? "color" : ""}
        animate={hidden && yPosition > 0.01 ? {display: "hidden", y: -120} : {display: "bloc", y: 0}}
        transition={{ease: [0.1, 0.25, 0.3, 1], duration: 0.6}}>
        <div className="navbar">
            <div>
                <Link to={"/"}><img src={Frenzy} alt="Logo" className="logo" /></Link>
            </div>
            <div>
                <ul className="links">
                    <li><a href="#">PROJECTS</a></li>
                    <li><Link to={"/about_us"}>ABOUT US</Link></li>
                    <li><Link to={"/contact"}>CONTACT</Link></li>
                    <li><a href="https://www.linkedin.com/in/carolina-albarracin-90146593/" target="_blank"><img src={LinkeDin} alt="Linkedin" style={{width:"40px"}}/></a></li>
                    <li><a href="https://www.instagram.com/________frenzy/" target="_blank"><img src={Instagram} alt="Instagram" style={{width:"40px"}}/></a></li>
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
