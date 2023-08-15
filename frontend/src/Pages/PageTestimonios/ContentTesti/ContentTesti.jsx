import "./ContentTesti.css"
import {motion as m} from "framer-motion"
import companiesImgs from "../../../assects/js files/companiesImgs"

const ContentTesti = () => {
    const firstAnimation = {
        initial: {y:60, opacity: 0.5},
        whileInView :{y: 0, opacity: 1, transition: {
          type: "spring",
          bounce: 0.4,
          duration: 2
        }}
      }
  return (
    <div className="testiContent">
      <m.div 
      variants={firstAnimation}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
      id="emilia">
            <div className="div111">
                <m.img src={companiesImgs[7]} alt="Vichka Oficial"/>
            </div>
            <div className="div112">
                <div className="titleDiv112">
                    <h2>emilia gazotti</h2>
                    <span>Vichka Oficial - <span>Co-Fundadora</span></span>
                </div>
                <div>
                    <p>conocí a la agencia frenzy desde sus inicios. es una agencia con la que podes contar para crear una estrategia 360 de comunicación para tu empresa. entendiendo 100% el mundo digital proponen también ideas para conectar con el mundo físico. lo logran teniendo un equipo creativo, responsable, innovador y alegre. trabajar con las chicas de frenzy siempre es un verdadero placer.</p>
                </div>
            </div>
            <div className="div113"></div>
      </m.div>
      <m.div
      variants={firstAnimation}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
      id="agustina">
            <div className="div111">
                <m.img src={companiesImgs[0]} alt="Desiderata"  className="div111"/>
            </div>
            <div className="div112">
                <div className="titleDiv112">
                    <h2>agustina petralia</h2>
                    <span>Desiderata, Grupo Mazalosa - <span>Analista de marketing</span></span>
                    
                </div>
                <div>
                    <p>trabajar con el equipo de frenzy es casi como tener un equipo indoors. si tuviera que reducirlo solo en una frase diria que : "tienen la camiseta puesta" y eso para mi vale oro.la dedicacion, el compromiso, la respuesta inmediata. aceptar las devoluciones y construir cada dia una dinamica mas consolidada y poderosa que se traduce en una mejora constante de resultdos. tengo la suerte de haber visto el crecimiento exponecial que tuvo el ultimo año, y solo puedo decir que confio cada dia mas en las manos y en la cabeza de una agencia que esta 100% comprometida con mi marca.</p>
                </div>
            </div>
            <div className="div113"></div>
      </m.div>
      <m.div 
      variants={firstAnimation}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
      id="monserrat">
            <div className="div111">
                <m.img src={companiesImgs[3]} alt="Desiderata"  className="div111"/>
            </div>
            <div className="div112">
                <div className="titleDiv112">
                    <h2>montserrat zaefferer</h2>
                    <span>Sarapura DJs - <span>Marketing Manager</span></span>
                </div>
                <div>
                    <p>hace más de un año que trabajo con Frenzy y no dejan de soprenderme. fui parte de todo su crecimiento profesional y puedo dar fe que todo lo que hacen lo hacen con la mayor dedicación y profesionalismo pero sobre todo con amor. estoy muy agradecida del gran equipo que me acompaña, asesora y ayuda a llevar mi marca al lugar que siempre soñé. Sin dudas hoy no estaríamos donde estamos sin la agencia. Vamos por más!.</p>
                </div>
            </div>
            <div className="div113"></div>
      </m.div>
    </div>
  )
}

export default ContentTesti
