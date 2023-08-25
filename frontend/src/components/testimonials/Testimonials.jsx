import "./../testimonials/Testimonial.css"
import {motion as m} from "framer-motion"


const Testimonials = ({name,company,position,exp,link}) => {
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
            <div className="contentTitle">
                <h2>{name}</h2>
                <span>{company} | <span>{position}</span></span>
            </div>  
            <div>
               <p>{exp}</p>
            </div>
        </div>
      </div>
    </m.div>
  )
}

export default Testimonials
