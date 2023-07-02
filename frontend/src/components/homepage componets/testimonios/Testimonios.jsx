import "./Testimonios.css"
import { useState } from "react"
import Button from "./../../Button/Button"
import Testimonials from '../../testimonials/Testimonials'

import {motion as m} from "framer-motion"
import { Link } from "react-router-dom"

const Testimonios = () => {
  const [activeN1, setActiveN1] = useState(true)
  const [activeN2, setActiveN2] = useState(false)
  const [activeN3, setActiveN3] = useState(false)
  const changeActive = (n) =>{
    if(n === "N1"){
      setActiveN1(true)
      setActiveN2(false)
      setActiveN3(false)
    } else if(n === "N2"){
      setActiveN1(false)
      setActiveN2(true)
      setActiveN3(false)
    }else if(n === "N3"){
      setActiveN1(false)
      setActiveN2(false)
      setActiveN3(true)
    }
  }

  return (
    <>
      <div className="parentCarusel">
      <h2>TESTIMONIOS</h2>
        <m.div className='testShowCase' animate={ activeN1 ? {opacity: 1, display: "flex"}: ""} initial={{opacity: 0, display: "none"}} drag={"x"} dragConstraints={{right: 0, left: 0}} onDrag={(e)=> {
          if(e.movementX < -5) changeActive("N2")
        }}>
          <Testimonials name={"emilia gazotti"} company={"Vichka Oficial"} position={"Co-Fundadora"} exp={"conocí a la agencia frenzy desde sus inicios. es una agencia con la que podes contar para crear una estrategia 360 de comunicación para tu empresa. entendiendo 100% el mundo digital proponen también ideas para conectar con el mundo físico. lo logran teniendo un equipo creativo, responsable, innovador y alegre. trabajar con las chicas de frenzy siempre es un verdadero placer."} link={"/testimonials#emilia"}/>
        </m.div>
        <m.div className='testShowCase' animate={ activeN2 ? {opacity: 1, display: "flex"}: ""} initial={{opacity: 0, display: "none"}} drag={"x"} dragConstraints={{right: 0, left: 0}} onDrag={(e)=> {
          if(e.movementX < -5) changeActive("N3")
          else if(e.movementX > 5) changeActive("N1")
        }}>
          <Testimonials name={"agustina petralia"} company={"Desiderata, Grupo Mazalosa"} position={"Analista de marketing"} exp={`trabajar con el equipo de trenzy es casi como tener un equipo indoors. si tuviera que reducirlo solo en una frase diria que : "Tienen la camiseta puesta" y eso para mi vale oro. la dedicacion, el compromiso, la respuesta inmediata. aceptar las devoluciones y construir cada dia una dinamica mas consolidada y poderosa que se traduce en una mejora constante de resultdos. tengo la suerte de haber visto el crecimiento exponecial que tuvo el ultimo año, y solo puedo decir que confio cada dia mas en las manos y en la cabeza de una agencia que esta 100% comprometida con mi marca.`} link={"/testimonials#agustina"}/>
        </m.div>
        <m.div className='testShowCase' animate={ activeN3 ? {opacity: 1, display: "flex"}: ""} initial={{ opacity: 0, display: "none"}} drag={"x"} dragConstraints={{right: 0, left: 0}} onDrag={(e)=> {
          if(e.movementX > 5) changeActive("N2")
        }}>
          <Testimonials name={"montserrat zaefferer"} company={"Sarapura DJs"} position={"Marketing Manager"} exp={"hace más de un año que trabajo con Frenzy y no dejan de soprenderme. fui parte de todo su crecimiento profesional y puedo dar fe que todo lo que hacen lo hacen con la mayor dedicación y profesionalismo pero sobre todo con amor. estoy muy agradecida del gran equipo que me acompaña, asesora y ayuda a llevar mi marca al lugar que siempre soñé. sin dudas hoy no estaríamos donde estamos sin la agencia. Vamos por más!."} link={"/testimonials#monserrat"}/>
        </m.div>
        <div className="masTestimonios">
          <Link to={"/testimonials"}><Button text={"MÁS TESTIMONIOS"}/></Link>
        </div>
          <div className="balls">
              <m.div animate={activeN1 ? {borderRadius: 50, width: 21, height: 21, backgroundColor: "#000" }: {borderRadius: 50, width: 18, height: 18, backgroundColor: "#BFBFBF" }} 
              onClick={() => changeActive("N1")}></m.div>
              <m.div animate={activeN2 ? {borderRadius: 50, width: 21, height: 21, backgroundColor: "#000" }: {borderRadius: 50, width: 18, height: 18, backgroundColor: "#BFBFBF" }} 
              onClick={() => changeActive("N2")}></m.div>
              <m.div animate={activeN3 ? {borderRadius: 50, width: 21, height: 21, backgroundColor: "#000" }: {borderRadius: 50, width: 18, height: 18, backgroundColor: "#BFBFBF" }} 
              onClick={() => changeActive("N3")}></m.div>
          </div>
      </div>
    </>
  )

  
}

export default Testimonios
