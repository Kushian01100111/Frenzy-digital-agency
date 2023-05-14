import "./../testimonials/Testimonial.css"
import {motion as m} from "framer-motion"


const Testimonials = ({name,company,exp,img}) => {
  return (
    <div>
      <div className="cardTest">
        <div className="content">
            <div>
                <h2>{name}</h2>
                <span>{company}</span>
            </div>
            <div>
               {exp}
            </div>
        </div>
        <m.div
          animate={{y:5}} 
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
