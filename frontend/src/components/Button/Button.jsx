import "./Button.css"
import {motion as m } from "framer-motion"
import { useState } from "react"

const Button = ({text}) => {
    const [hoverState, setHover] = useState(false)
    const firstAnimation = {
        initial: {y:60, opacity: 0},
        whileInView:{y: 0, opacity: 1, transition: {
          type: "spring",
          bounce: 0.4,
          duration: 2
        }}
      }
        return (
            <m.div className="buttonContainer"
            onMouseEnter={()=> setHover(!hoverState)}
            onMouseLeave={()=> setHover(!hoverState)}
            variants={firstAnimation}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}>
                <m.div className="button"
                animate={hoverState ? {boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.75)" , backgroundColor: "#9CEDFF"}: 
                ""}
                transition={{duration: "0.4", ease: "easeOut", }}>
                    <span>{text}</span>
                </m.div>
            </m.div>
        )
}

export default Button
