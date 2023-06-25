import "./ContactBar.css"
import Button from "../Button/Button"
import { Link } from "react-router-dom"
import {motion as m}  from "framer-motion"

const ContactBar = () => {
  const firstAnimation = {
    initial: {y:60, opacity: 0},
    whileInView :{y: 0, opacity: 1, transition: {
      type: "spring",
      bounce: 0.4,
      duration: 2
    }}
  }
  return (
    <div className="contactBar">
      <div className="div31">
      <m.h3 variants={firstAnimation}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}>POTENCIÁ TU EMPRESA</m.h3>
      </div>
      <div className="32">
      <Link to={"/contact"}><Button text={"CONTACT US"}/></Link>
      </div>
        
    </div>
  )
}

export default ContactBar
