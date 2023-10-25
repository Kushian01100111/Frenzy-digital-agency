import "./ContentStyles.css"
import {motion as m} from "framer-motion"
import Caro from "./../../../assects/imgs/About us/Caro.png"

const ContentAboutUs = () => {
    const firstAnimation = {
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
            <div className="ky">
              <h3>CAROLINA ALBARRACÍN</h3>
              <p>
                soy una creativa multidisciplinaria y experta en redes sociales. directora de frenzy media boutique,con alta experiencia en el mundo digital y un master en marketing y comunicación de moda en ied barcelona. 
              </p>
              <p>mi propuesta es llevar el perfil de mis clientes un paso más allá, a través de estrategias de marketing y comunicación persuasivas, establecidas en el tiempo.</p>
              <p>somos una agencia 24/7, porque sabemos que las redes sociales hoy en día son muy exigentes.</p>
              <p>no aceptamos a cualquier cliente, solo a aquellos que estén alineados con nuestros objetivos, y a los que sabemos que podemos ayudar.</p>
            </div>
        </m.div>
      </div>
    </div>
  )
}

export default ContentAboutUs
