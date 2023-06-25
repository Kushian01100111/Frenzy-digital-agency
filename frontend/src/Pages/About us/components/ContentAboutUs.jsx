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
      <m.h1 
      variants={firstAnimation}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}>QUIÉNES ESTÁN DETRÁS DE FRENZY</m.h1>
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
            <p>soy un creativa multidisciplinaria y experta en
            redes sociales. directora en frenzy media
            boutique.<br/>
            fanática de la estética, la fotografía, generar
            contenido, contar historias y enseñar sobre
            el mundo digital.<br/>
            arranqué hace 5 años trabajando con clientes
            emprendedores muy chicos. hoy somos un
            equipo de profesionales que gestionan
            comunidades en las redes sociales.
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
            <p>el área de expertise de yanina faour es el
                diseño, marketing- ventas y emprendedurismo,
                siendo la más comercial “de las creativas” hoy
                es la cara comercial de la agencia.<br/>
                su background comienza siendo la infante
                terrible de la joyería de lujo en la argentina,
                una diseñadora de joyas con materiales preciosos, bajo la firma oleana jewelry.<br/>
                en los últimos años ha participado de contados
                programas de fellowship y mentoreo de mujeres
                líderes en el área de empoderamiento económico.</p>
        </m.div>
      </div>
    </div>
  )
}

export default ContentAboutUs
