import "./ProjectCards.css"
import {motion as m } from "framer-motion"
import { useState } from "react"
import {Link} from "react-router-dom"

const ProjectCards = ({img, link, title, description, pageWidth}) => {
  const [hoverCard, setHover] =  useState(false)
  const firstAnimation = {
    initial: {y:-120, opacity: 0},
    whileInView :{y: 0, opacity: 1, transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1
    }}
  }
  return (
      <m.div 
      variants={firstAnimation}
                initial="initial"
                whileInView="whileInView"
      className="container"
      onMouseEnter={()=> setHover(!hoverCard)}
      onMouseLeave={()=> setHover(!hoverCard)}
      style={ pageWidth <= 1090 ? {height: "40vw", minWidth: "29vw"}: ""}
      >
      <Link to={`${link}`}>
          <m.div 
          className="card"
          animate={hoverCard?{ 
                      boxShadow: "inset 0px 0px 10px #000000",
                  }: ""}>
              <div className="containerImg">
                  <m.div 
                  className="img" 
                  style={{backgroundImage: `linear-gradient(314.36deg, rgba(0, 0, 0, 0.4) 2.29%, rgba(0, 0, 0, 0) 98.94%), url(${img})`}}
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
                  y:-80 }: 
                {opacity: 0,
                  y:-80 }
              }
              transition={{duration: 0.05}}>
                  <h3>{title}</h3>
                  <span>
                    {description}
                  </span>
              </m.div>
          </m.div>
        </Link>
      </m.div>
  )
}

export default ProjectCards
