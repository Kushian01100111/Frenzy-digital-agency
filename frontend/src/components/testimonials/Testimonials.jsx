import "./../testimonials/Testimonial.css"
import { Link } from "react-router-dom"
import {motion as m} from "framer-motion"


const Testimonials = ({name,company,position,exp,img,link}) => {
  const firstAnimation = {
    initial: {y: 60, opacity: 0},
    whileInView :{y: 0, opacity: 1, transition: {
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
      <div className="cardTest">
        <div className="content" >
            <div>
                <h2>{name}</h2>
                <span>{company}</span>
                <span>{position}</span>
            </div>  
            <div>
               <p>{exp}<Link to={`${link}`}><m.span className={"longtext"} >...</m.span></Link></p>
            </div>
        </div>
        <m.div
          className="preContainerTest" animate={{y: 30}}>
            <div className="containerTest">
                <div style={{backgroundImage: `url(${img})`}} className="imgTest"></div>
            </div>
        </m.div>
      </div>
    </m.div>
  )
}

export default Testimonials
