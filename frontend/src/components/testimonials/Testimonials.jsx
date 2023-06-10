import "./../testimonials/Testimonial.css"
import { useState } from "react"
import {motion as m} from "framer-motion"


const Testimonials = ({name,company,position,exp,extraExp,img}) => {
  const [readMore, setReadMore] = useState(false)
  const onClick = ()=>{
    setReadMore(!readMore)
  }
  const firstAnimation = {
    initial: {x: -50, opacity: 0},
    whileInView :{x: 0, opacity: 1, transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1
    }}
  }

  return (
    <m.div className="testContainers" variants={firstAnimation}
    initial="initial"
    whileInView="whileInView"
    viewport={{ once: true }}>
      <m.div className="cardTest"
      animate={readMore ? {
        height: "auto"
      }: ""}>
        <div className="content" >
            <div>
                <h2>{name}</h2>
                <span>{company}</span>
                <span>{position}</span>
            </div>  
            <div>
               <p>{exp}<m.span className={`longtext ${readMore ? "readMore": "clickReadMore"}`} onClick={onClick}>{readMore ? extraExp: "..."}</m.span></p>
            </div>
        </div>
        <m.div
          className="preContainerTest" animate={{y: 30}}>
            <div className="containerTest">
                <div style={{backgroundImage: `url(${img})`}} className="imgTest"></div>
            </div>
        </m.div>
      </m.div>
    </m.div>
  )
}

export default Testimonials
