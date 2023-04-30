import "./Socials Button.css"
import { useState } from "react"
import {motion as m, transform} from "framer-motion"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LinkeDin from "./../../assects/imgs/Link.png";
import Instagram from "./../../assects/imgs/Insta.png";
import WhatsApp from "./../../assects/imgs/What.png";


const SocialsButton = () => {
    const [active, setActive] = useState(false);

    const onClick= () =>{
        setActive(!active)

        console.log(active)
    }
  return (
    <>
    <m.div className="containerLinks" animate={{y: 63}}>
        <m.button onClick={onClick} className="buttonLinks"><ExpandMoreIcon sx={{ width: 35, height: 35 }}/></m.button>
        <m.ul className="linksButton" animate={active ? {y:0, opacity: 1}: ""} initial={{y:-10, opacity: 0}}>
                    <m.li initial={{y:-7, opacity:0}} animate={active ? {y:0, opacity: 1}: ""} transition={{
                        type: "spring",
                        bounce: 0.5,
                        duration: 1.2
                    }}><a href="#"><img src={LinkeDin} alt="Linkedin" style={{width:"35px"}}/></a></m.li>
                    <m.li initial={{y:-7, opacity:0}} animate={active ? {y:0, opacity: 1}: ""} transition={{
                        type: "spring",
                        bounce: 0.5,
                        duration: 1.4
                    }}><a href="#"><img src={Instagram} alt="Instagram" style={{width:"35px"}}/></a></m.li>
                    <m.li initial={{y:-7, opacity:0}} animate={active ? {y:0, opacity: 1}: ""} transition={{
                        type: "spring",
                        bounce: 0.5,
                        duration: 1.6
                    }}><a href="#"><img src={WhatsApp} alt="Whatsapp" style={{width:"35px"}}/></a></m.li>
        </m.ul>
      </m.div>
    </>
  )
}

export default SocialsButton
