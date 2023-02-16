import "./ProjectCards.css"
import {motion as m } from "framer-motion"
import { useState } from "react"
// import {Link} from "react-router-dom"

const ProjectCards = () => {
  const [hoverCard, setHover] =  useState(false)
  return (
    <m.div 
    initial={{y:-120, display: "hidden"}}
    className="container"
    onMouseEnter={()=> setHover(!hoverCard)}
    onMouseLeave={()=> setHover(!hoverCard)}
    whileInView={{y: 0, display: "bloc", transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1
    }}}
    viewport={{once: true}}>
     <a href="https://www.instagram.com/pedro_comas/" target="_blank" rel="noopener noreferrer">
        <m.div 
        className="card"
        animate={hoverCard?{ 
                    boxShadow: "inset 0px 0px 10px #000000",
                }: ""}>
            <div className="containerImg">
                <m.div 
                className="img" 
                style={{backgroundImage: "linear-gradient(314.36deg, rgba(0, 0, 0, 0.4) 2.29%, rgba(0, 0, 0, 0) 98.94%), url(https://images.unsplash.com/photo-1671726203382-8ea3393d7ad6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)"}}
                animate={
                  hoverCard?{ 
                    height:"75%",
                }: {
                  height:"100%"
                } }
                >
                </m.div>
            </div>
            <m.div className="text"
            animate={
              hoverCard ? 
              {opacity: 1,
                y:-120 }: 
              {opacity: 0,
                y:-120 }
            }
            transition={{duration: 0.1}}>
                <h3>Proyecto #1</h3>
                <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
            </m.div>
        </m.div>
     </a>
    </m.div>
  )
}

export default ProjectCards
