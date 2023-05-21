import "./ContactBar.css"
import Button from "../Button/Button"
import {motion as m}  from "framer-motion"

const ContactBar = () => {
  const firstAnimation = {
    initial: {x:-120, opacity: 0},
    whileInView :{x: 0, opacity: 1, transition: {
      type: "spring",
      bounce: 0.4,
      duration: 2
    }}
  }
  return (
    <div className="contactBar">
        <m.h3 variants={firstAnimation}
                initial="initial"
                whileInView="whileInView">POTENCIÁ TU EMPRESA</m.h3>
        <Button text={"CONTACT US"}/>
    </div>
  )
}

export default ContactBar
