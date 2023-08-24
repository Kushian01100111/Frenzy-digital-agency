import "./Navbar.css"
import Frenzy from "./../../assects/imgs/Frenzy_05.png";
import LinkeDin from "./../../assects/imgs/Link.png";
import Instagram from "./../../assects/imgs/Insta.png";
import WhatsApp from "./../../assects/imgs/What.png"
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {motion as m, useScroll} from "framer-motion"

const Navbar = ({width}) => {
    const { scrollYProgress } = useScroll()
    const [scrollY, setScrollY] = useState({
            y: 0,
            lastY:0
    })
    const [hidden, setHidden] = useState(false)
    const [yPosition, setYPosition] = useState(0);
    const [active, setActive] = useState(false)
    const location = useLocation().pathname.split("/")[1]
  
    useEffect(()=>{

        const handleScroll = () =>{
            setScrollY(prevState =>{
                return{
                    y: window.scrollY,
                    lastY: prevState.y
                }
            })
        }

        window.addEventListener("scroll", handleScroll)

        console.log(scrollY)
        return () => window.removeEventListener("scroll", handleScroll )
    }, [])

    useEffect(()=>{
        if(scrollY.y < scrollY.lastY && (location === "" && scrollY.y > 500)){
            setHidden(false)
        }else if(scrollY.y > scrollY.lastY && (location === "" && scrollY.y > 500)){
            setHidden(true)
        }

        if(scrollY.y < scrollY.lastY && location !== ""){
            setHidden(false)
        }else if(scrollY.y > scrollY.lastY && location !== ""){
            setHidden(true)
        }

    }, [scrollY])

    useEffect(()=>{
        scrollYProgress.onChange(v => {
            setYPosition(v)})
    }, [scrollYProgress])

  return (
    <> 
    { yPosition <= 0.1 && width <= 900 && location === "" ? <m.header className={hidden ? "color hiddenNav header" : "color header"}>
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
                <li className={location.includes("projects") ? "currentPage": ""}><Link to={"/projects"}>PROJECTS</Link></li>
                <li className={location.includes("about_us") ? "currentPage": ""}><Link to={"/about_us"}>ABOUT US</Link></li>
                <li className={location.includes("contact") ? "currentPage": ""}><Link to={"/contact"}>CONTACT</Link></li>
                <div className="socialsLinks">
                    <li><a href="https://www.linkedin.com/company/frenzy-digital-media-boutique/" target="_blank" rel="noreferrer"><img src={LinkeDin} alt="Linkedin" style={{width:"40px"}} className="linkLogo"/></a></li>
                    <li><a href="https://www.instagram.com/________frenzy/" target="_blank" rel="noreferrer"><img src={Instagram} alt="Instagram" style={{width:"40px"}} className="linkLogo"/></a></li>
                    <li><a href="https://wa.link/45nwa9" target="_blank" rel="noreferrer"><img src={WhatsApp} alt="Whatsapp" style={{width:"40px"}} className="linkLogo"/></a></li>
                </div>
            </ul>      
        </m.div>
    </m.header> 
    : width <= 900 ? 
    <m.header className={hidden ? "color hiddenNav header" : "color header"}>
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
                <li className={location.includes("projects") ? "currentPage": ""}><Link to={"/projects"}>PROJECTS</Link></li>
                <li className={location.includes("about_us") ? "currentPage": ""}><Link to={"/about_us"}>ABOUT US</Link></li>
                <li className={location.includes("contact") ? "currentPage": ""}><Link to={"/contact"}>CONTACT</Link></li>
                <div className="socialsLinks">
                    <li><a href="https://www.linkedin.com/company/frenzy-digital-media-boutique/" target="_blank" rel="noreferrer"><img src={LinkeDin} alt="Linkedin" style={{width:"40px"}} className="linkLogo"/></a></li>
                    <li><a href="https://www.instagram.com/________frenzy/" target="_blank" rel="noreferrer"><img src={Instagram} alt="Instagram" style={{width:"40px"}} className="linkLogo"/></a></li>
                    <li><a href="https://wa.link/45nwa9" target="_blank" rel="noreferrer"><img src={WhatsApp} alt="Whatsapp" style={{width:"40px"}} className="linkLogo"/></a></li>
                </div>
            </ul>      
        </m.div>
    </m.header>
    : (yPosition <= 0.1) && (width > 900) && (location === "") ? <m.header className={hidden ? "color hiddenNav header" : "color header"}>
        <div className="navbar">
            <div>
                <Link to={"/"}><img src={Frenzy} alt="Logo" className="logo" /></Link>
            </div>
            <div>
                <ul className="links">
                    <li><Link to={"/projects"}>PROJECTS</Link></li>
                    <li><Link to={"/about_us"}>ABOUT US</Link></li>
                    <li><Link to={"/contact"}>CONTACT</Link></li>
                    <li><a href="https://www.linkedin.com/company/frenzy-digital-media-boutique/" target="_blank" rel="noreferrer"><img src={LinkeDin} alt="Linkedin" style={{width:"40px"}}/></a></li>
                    <li><a href="https://www.instagram.com/________frenzy/" target="_blank" rel="noreferrer"><img src={Instagram} alt="Instagram" style={{width:"40px"}}/></a></li>
                    <li><a href="https://wa.link/45nwa9" target="_blank" rel="noreferrer" ><img src={WhatsApp} alt="Whatsapp" style={{width:"40px"}}/></a></li>
                </ul>
            </div>
        </div>
    </m.header>
    : <m.header className={hidden ? "color hiddenNav header" : "color header"}>
        <div className="navbar">
            <div>
                <Link to={"/"}><img src={Frenzy} alt="Logo" className="logo" /></Link>
            </div>
            <div>
                <ul className="links">
                <li className={location.includes("projects") ? "currentPage": ""}><Link to={"/projects"}>PROJECTS</Link></li>
                <li className={location.includes("about_us") ? "currentPage": ""}><Link to={"/about_us"}>ABOUT US</Link></li>
                <li className={location.includes("contact") ? "currentPage": ""}><Link to={"/contact"}>CONTACT</Link></li>
                    <li><a href="https://www.linkedin.com/company/frenzy-digital-media-boutique/" target="_blank" rel="noreferrer"><img src={LinkeDin} alt="Linkedin" style={{width:"40px"}}/></a></li>
                    <li><a href="https://www.instagram.com/________frenzy/" target="_blank" rel="noreferrer"><img src={Instagram} alt="Instagram" style={{width:"40px"}}/></a></li>
                    <li><a href="https://wa.link/45nwa9" target="_blank" rel="noreferrer"><img src={WhatsApp} alt="Whatsapp" style={{width:"40px"}}/></a></li>
                </ul>
            </div>
        </div>
    </m.header>
    }
    
    </>
  )
}

export default Navbar;
