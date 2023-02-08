import {motion as m} from "framer-motion"
import "./../services cards/ServicesCard.css"

const ServicesCards = ({title,condicional,icon}) => {
  return (
    <>
      <m.div
      animate={ condicional ? {backgroundColor: "#9CEDFF", boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.75)"}: ""} className="serviceCard"
      transition={{duration: "0.4", ease: "easeOut", }}>
        <div className="insideStyle parent">
          <div className="div1">
            {icon}
          </div>
          <div className="div2">
            <span>{title}</span>
          </div>
        </div>
      </m.div>
    </>
  )
}

export default ServicesCards
