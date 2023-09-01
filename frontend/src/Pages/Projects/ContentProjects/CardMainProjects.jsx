import "./CardMainProjects.css"
import {motion as m} from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

const CardMainProjects = ({img,title,list,anchor}) => {
    const [hover, setHover] = useState(false)
    const firstAnimation = {
        initial: {y:60, opacity: 0.5},
        whileInView :{y: 0, opacity: 1, transition: {
          type: "spring",
          bounce: 0.4,
          duration: 2
        }}
      }
  return (
    
    <m.div
    variants={firstAnimation}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="anchorCont">
        <Link to={anchor}>
            <m.div className="gridMainProjects"
            initial={{boxShadow: `rgba(0, 0, 0, 0.35) 0px 5px 15px`, backgroundColor:` #DAE9F2;`}}
            animate={hover ? {scale: 1.05}: ""}
            onMouseEnter={()=> setHover(true)}
            onMouseLeave={()=> setHover(false)}
            onTouchStart={()=> setHover(true)}
            onTouchEnd={()=>setHover(false)}
            transition={{ease: [0.1, 0.25, 0.3, 1], duration: 0.4}}>
                <div className="div131"
                style={{backgroundImage: `linear-gradient(314.36deg, rgba(0, 0, 0, 0.4) 2.29%, rgba(0, 0, 0, 0) 98.94%), url(${img})`}}></div>
                <div className="div132">
                    <h2>{title}</h2>
                    {list.map((n, i) => {
                        return <li key={i} className="buttelt liProjects">{n}</li>
                    })}
                </div>
            </m.div>
        </Link>
    </m.div>
  )
}

export default CardMainProjects
