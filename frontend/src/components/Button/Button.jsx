import "./Button.css"
import {motion as m } from "framer-motion"
import { useState } from "react"

const Button = ({text}) => {
    const [hoverState, setHover] = useState(false)
        return (
            <div className="buttonContainer"
            onMouseEnter={()=> setHover(!hoverState)}
            onMouseLeave={()=> setHover(!hoverState)}>
                <m.div className="button"
                animate={hoverState ? {boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.75)" , backgroundColor: "#9CEDFF"}: 
                ""}
                transition={{duration: "0.4", ease: "easeOut", }}>
                    <span>{text}</span>
                </m.div>
            </div>
        )
}

export default Button
