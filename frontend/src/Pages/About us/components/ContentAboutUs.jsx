import "./ContentStyles.css"
import {motion as m} from "framer-motion"
import Caro from "./../../../assects/imgs/About us/Caro.png"
import Yanina from "./../../../assects/imgs/About us/Yanina.png"


const ContentAboutUs = () => {
    const firstAnimation = {
      initial: {y:60, opacity: 0.5},
      whileInView :{y: 0, opacity: 1, transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2
      }}
    }

    const secundAnimation = {
      initial: {y:60, opacity: 0.5},
      whileInView :{y: 0, opacity: 1, transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2
      }}
    }

    const treAnimation = {
      initial: {x:120, opacity: 0.5},
      whileInView :{x: 0, opacity: 1, transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2.5
      }}
    }
    const fourAnimation = {
      initial: {x:-120, opacity: 0.5},
      whileInView :{x: 0, opacity: 1, transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2.5
      }}
    }
  return (
    <div className="contentAboutUs">
      
      <div className="contentCaro">
        <m.div className="div51"
        variants={firstAnimation}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}><img src={Caro} alt="ImageCaro" /></m.div>
        <m.div className="caro"
        variants={treAnimation }
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}>
            <h3>CAROLINA ALBARRACÍN</h3>
            <p>carolina, creativa multidisciplinaria y experta en redes sociales. directora de frenzy media boutique,con alta experiencia en el rubro y un master en marketing y comunicación de moda en ied barcelona.
            </p>
        </m.div>
      </div>
      <div className="contentYanina">
        <m.div className="div61"
        variants={secundAnimation}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}>
            <img src={Yanina} alt="ImageYanina" />
        </m.div>
        <m.div className="yanina"
        variants={ fourAnimation}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}>
            <h3>YANINA FAOUR</h3>
            <p>el área de expertise de yanina faour es el marketing de ventas, siendo la más comercial “de las creativas”.ha participado de contados programas de fellowship y mentoreo de mujeres líderes en el área deempoderamiento económico.</p>
        </m.div>
      </div>
    </div>
  )
}

export default ContentAboutUs
