import "./Services.css"
import ServicesCards from "../../services cards/ServicesCards"
import { useState } from "react"
import {motion as m} from "framer-motion"
import companiesImgs from "../../../assects/js files/companiesImgs"

const Services = ({width}) => {
  const [s1, setS1] = useState(true);
  const [s2, setS2] = useState(false);
  const [s3, setS3] = useState(false);
  const [s4, setS4] = useState(false);
  const [s5, setS5] = useState(false);
  const [firstImg, setFirstImg] =  useState(false);
  const [secundImg, setSecundImg] = useState(false);
  const firstAnimation = {
    initial: {y:60, opacity: 0},
    whileInView :{y: 0, opacity: 1, transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.8
    }}
  }

  return (
    <div className="contentServices">
      <m.div className="textServices" 
      variants={firstAnimation}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}>
      <h2>SERVICIOS</h2>
      <p>conocé nuestros servicios pasando el mouse por cada uno. pero recordá, nuestro foco siempre estará en adaptarnos a las necesidades de nuestros clientes, así que contactanos, contanos acerca de tu proyecto, y armamos una propuesta a medida</p></m.div>
        <div className="services">
          <div className="selectService">
            <m.div 
            initial={{y:60, display: "hidden", opacity: 0}}
            whileInView={{y: 0, display: "bloc",  opacity: 1, transition: {
              type: "spring",
              bounce: 0.4,
              duration: 2
            }}}
            viewport={{ once: true }}
            onMouseEnter={()=>{
              if(!s1){setS1(!s1)}
              setS2(false)
              setS3(false)
              setS4(false)
              setS5(false)
            }} className="containerService"
            onTouchStart={()=>{
              if(!s1){setS1(!s1)}
              setS2(false)
              setS3(false)
              setS4(false)
              setS5(false)
            }}>
            <ServicesCards title={"Social media management"} condicional={s1}/>
            </m.div>
            <m.div 
            initial={{y:60, display: "hidden", opacity: 0}}
            whileInView={{y: 0, display: "bloc",  opacity: 1, transition: {
              type: "spring",
              bounce: 0.4,
              duration: 2
            }}}
            viewport={{ once: true }}
            onMouseEnter={()=>{
              setS1(false)
              if(!s2){setS2(!s2)}
              setS3(false)
              setS4(false)
              setS5(false)
            }} className="containerService"
            onTouchStart={()=>{
              setS1(false)
              if(!s2){setS2(!s2)}
              setS3(false)
              setS4(false)
              setS5(false)
            }}>
            <ServicesCards title={"Paid media management"} condicional={s2}/></m.div>
            <m.div 
            initial={{y:60, display: "hidden", opacity: 0}}
            whileInView={{y: 0, display: "bloc",  opacity: 1, transition: {
              type: "spring",
              bounce: 0.4,
              duration: 2
            }}}
            viewport={{ once: true }}
            onMouseEnter={()=>{
              setS1(false)
              setS2(false)
              if(!s3){setS3(!s3)}
              setS4(false)
              setS5(false)
            }} className="containerService"
            onTouchStart={()=>{
              setS1(false)
              setS2(false)
              if(!s3){setS3(!s3)}
              setS4(false)
              setS5(false)
            }}>
            <ServicesCards title={"CREACIÓN DE CONTENIDOS"} condicional={s3}/></m.div>
            <m.div 
            initial={{y:60, display: "hidden", opacity: 0}}
            whileInView={{y: 0, display: "bloc",  opacity: 1, transition: {
              type: "spring",
              bounce: 0.4,
              duration: 2
            }}}
            viewport={{ once: true }}
            onMouseEnter={()=>{
              setS1(false)
              setS2(false)
              setS3(false)
              if(!s4){setS4(!s4)}
              
              setS5(false)
            }} className="containerService"
            onTouchStart={()=>{
              setS1(false)
              setS2(false)
              setS3(false)
              if(!s4){setS4(!s4)}
              setS5(false)
            }}>
            <ServicesCards title={"DISEÑO GRÁFICO"} condicional={s4}/></m.div>
            <m.div 
            initial={{y:60, display: "hidden", opacity: 0}}
            whileInView={{y: 0, display: "bloc",  opacity: 1, transition: {
              type: "spring",
              bounce: 0.4,
              duration: 2
            }}}
            viewport={{ once: true }}
            onMouseEnter={()=>{
              setS1(false)
              setS2(false)
              setS3(false)
              setS4(false)
              if(!s5){setS5(!s5)}
            }} className="containerService"
            onTouchStart={()=>{
              setS1(false)
              setS2(false)
              setS3(false)
              setS4(false)
              if(!s5){setS5(!s5)}
            }}>
            <ServicesCards title={"Influencer marketing"} condicional={s5}/></m.div>
          </div>
          <m.div 
          initial={{opacity:0, display:"none", y:100 }}
          animate={s1 ? {opacity: 1, display: "block", y:0}: ""}
          className="parent2">
            <div className="div12">
            <h2>Social media management</h2>
            <p>cómo llegar a tu cliente ideal, atraer nuevos usuarias y agrandar tu comunidad a través de una planificación y una estrategia de comunicación sólida y establecida en el tiempo.</p>
            </div>
            <div className="div22">
            <m.img initial={{opacity: 0.5}} 
              animate={s1 && firstImg ? {opacity: 1}: ""} 
              onMouseEnter={()=> setFirstImg(!firstImg)} 
              onMouseLeave={()=> setFirstImg(!firstImg)}
              src={companiesImgs[4]} alt="blossom" 
              style={width <= 500 ?{width: "100px", height: "auto"} 
                      :{width: "190px", height: "auto"}} />
              <m.img initial={{opacity: 0.5}} 
              animate={s1 && secundImg ? {opacity: 1}: ""} 
              onMouseEnter={()=> setSecundImg(!secundImg)} 
              onMouseLeave={()=> setSecundImg(!secundImg)}
              src={companiesImgs[6]} alt="Selva" 
              style={width <= 500  ?{width: "90px", height: "auto"} 
              : {width: "180px", height: "auto"} }/>
            </div>
          </m.div>
          <m.div 
          initial={{opacity:0, display:"none", y:100 }}
          animate={s2 ? {opacity: 1, display: "block", y:0}: ""}
          className="parent2">
            <div className="div12">
            <h2>Paid media management</h2>
            <p>gestión de estrategias y compañas de marketing digital personalizadas para el negocio con el objetivo de lograr un posicionamiento de marca sostenido y maximizar el retorno de la inversón.</p>
            </div>
            <div className="div22">
              <m.img initial={{opacity: 0.5}} animate={s2 && firstImg ? {opacity: 1}: ""} onMouseEnter={()=> setFirstImg(!firstImg)} 
              onMouseLeave={()=> setFirstImg(!firstImg)}
              src={companiesImgs[4]} alt="blossom" style={width <= 500 ?{width: "100px", height: "auto"} 
              :{width: "190px", height: "auto"}} />
              <m.img initial={{opacity: 0.5}} animate={s2 && secundImg ? {opacity: 1}: ""} onMouseEnter={()=> setSecundImg(!secundImg)} 
              onMouseLeave={()=> setSecundImg(!secundImg)}
              src={companiesImgs[6]} alt="Selva" style={
              width <= 500  ?{width: "90px", height: "auto"} 
              : {width: "180px", height: "auto"} }/>
            </div>
          </m.div>
          <m.div 
          initial={{opacity:0, display:"none", y:100 }}
          animate={s3 ? {opacity: 1, display: "block", y:0}: ""}
          className="parent2">
            <div className="div12">
            <h2>Creación de contenidos</h2>
            <p>cómo mostrar tu producto de la forma mas atractiva y creativa</p>
            </div>
            <div className="div22">
            <m.img initial={{opacity: 0.5}} 
            animate={s3 && firstImg ? {opacity: 1}: ""} 
            onMouseEnter={()=> setFirstImg(!firstImg)} 
            onMouseLeave={()=> setFirstImg(!firstImg)}
            src={companiesImgs[4]} alt="blossom" 
            style={width <= 500 ?{width: "100px", height: "auto"} 
            :{width: "190px", height: "auto"}} />
            <m.img initial={{opacity: 0.5}} 
            animate={s3 && secundImg ? {opacity: 1}: ""} 
            onMouseEnter={()=> setSecundImg(!secundImg)} 
            onMouseLeave={()=> setSecundImg(!secundImg)}
            src={companiesImgs[6]} alt="Selva" 
            style={width <= 500  ?{width: "90px", height: "auto"} 
            : {width: "180px", height: "auto"} }/>
            </div>
          </m.div>
          <m.div 
          initial={{opacity:0, display:"none", y:100 }}
          animate={s4 ? {opacity: 1, display: "block", y:0}: ""}
          className="parent2">
            <div className="div12">
            <h2>Diseño gráfico</h2>
            <p>diseño de comunicaciones visuales destinadas a trasmitir mensajes especificos.</p>
            </div>
            <div className="div22">
            <m.img initial={{opacity: 0.5}} 
            animate={s4 && firstImg ? {opacity: 1}: ""} 
            onMouseEnter={()=> setFirstImg(!firstImg)} 
            onMouseLeave={()=> setFirstImg(!firstImg)}
            src={companiesImgs[4]} alt="blossom" 
            style={width <= 500 ?{width: "100px", height: "auto"} 
            :{width: "190px", height: "auto"}} />
            <m.img initial={{opacity: 0.5}} 
            animate={s4 && secundImg ? {opacity: 1}: ""} 
            onMouseEnter={()=> setSecundImg(!secundImg)} 
            onMouseLeave={()=> setSecundImg(!secundImg)}
            src={companiesImgs[6]} alt="Selva" 
            style={width <= 500  ?{width: "90px", height: "auto"} 
            : {width: "180px", height: "auto"} }/>
            </div>
          </m.div>
          <m.div 
          initial={{opacity:0, display:"none", y:100 }}
          animate={s5 ? {opacity: 1, display: "block", y:0}: ""}
          className="parent2">
            <div className="div12">
            <h2>Influencer marketing</h2>
            <p>acciones con generadores de contenido que alineen con el mensaje de la marca, para dar a conocer el producto o servicio de una marva.</p>
            </div>
            <div className="div22">
            <m.img initial={{opacity: 0.5}} 
            animate={s5 && firstImg ? {opacity: 1}: ""} 
            onMouseEnter={()=> setFirstImg(!firstImg)} 
            onMouseLeave={()=> setFirstImg(!firstImg)}
            src={companiesImgs[4]} alt="blossom" 
            style={width <= 500 ?{width: "100px", height: "auto"} 
                    :{width: "190px", height: "auto"}} />
            <m.img initial={{opacity: 0.5}} 
            animate={s5 && secundImg ? {opacity: 1}: ""} 
            onMouseEnter={()=> setSecundImg(!secundImg)} 
            onMouseLeave={()=> setSecundImg(!secundImg)}
            src={companiesImgs[6]} alt="Selva" 
            style={width <= 500  ?{width: "90px", height: "auto"} 
            : {width: "180px", height: "auto"} }/>
            </div>
          </m.div>
        </div>
    </div>
  )
}

export default Services
