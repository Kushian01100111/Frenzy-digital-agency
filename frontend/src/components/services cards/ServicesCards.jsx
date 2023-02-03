import { useState } from "react"
import {motion as m} from "framer-motion"
import "./../services cards/ServicesCard.css"

const ServicesCards = ({title,condicional}) => {
    const [active, setActive] = useState(condicional)
  return (
    <>
      <m.button
      animate={ active ? {backgroundColor: "#9CEDFF", boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.75)"}: ""} className="serviceCard"
      transition={{duration: "0.4", ease: "easeOut", }}>{title}</m.button>
    </>
  )
}

export default ServicesCards
