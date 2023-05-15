import "./../testimonials/Testimonial.css"
import { useState } from "react"
import {motion as m} from "framer-motion"


const Testimonials = ({name,company,position,exp,extraExp,img}) => {
  const [readMore, setReadMore] = useState(false)
  const onClick = ()=>{
    setReadMore(!readMore)
  }

  return (
    <div>
      <div className="cardTest">
        <div className="content">
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
          animate={{y:50}} 
          className="preContainerTest">
            <div className="containerTest">
                <div style={{backgroundImage: `url(${img})`}} className="imgTest"></div>
            </div>
        </m.div>
      </div>
    </div>
  )
}

export default Testimonials
