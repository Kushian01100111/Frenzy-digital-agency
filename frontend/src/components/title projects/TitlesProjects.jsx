import "./TitlesProjects.css"
import {motion as m} from "framer-motion"

const TitlesProjects = ({title, services}) => {
  const firstAnimation = {
    initial: {y:60, opacity: 0},
    whileInView :{y: 0, opacity: 1, transition: {
      type: "spring",
      bounce: 0.4,
      duration: 2
    }}
  }
  const secundAnimation = {
    initial: {y:60, opacity: 0},
    whileInView :{y: 0, opacity: 1, transition: {
      type: "spring",
      bounce: 0.4,
      duration: 2.6
    }}
  }
  
  return (
    <div className="areaTitle">
        <m.h1 variants={firstAnimation}
                initial="initial"
                whileInView="whileInView"
                >{title}</m.h1>
        <m.div className="titleServices"
        variants={secundAnimation}
                initial="initial"
                whileInView="whileInView"> <hr className="titleBar"/><span>{services}</span> <hr  className="titleBar"/>
        </m.div>
    </div>
  )
}

export default TitlesProjects
