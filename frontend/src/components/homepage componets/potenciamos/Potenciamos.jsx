import "./Potenciamos.css"
import {motion as m} from "framer-motion"
import companies from "../../../assects/imgs/Marcas/Compañias.png"

const Potenciamos = () => {
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
          duration: 2
        }}
      }

  return (
    <div className='contentPoten'>
            <div className="poten">
                <m.div variants={secundAnimation}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}>
                <h1>POTENCIAMOS TU EMPRESA</h1></m.div>
                <m.div variants={firstAnimation}
                initial="initial"
                whileInView="whileInView" 
                viewport={{ once: true }}>
                <p>somos un equipo multidisciplinario de comunicadores, creativos, diseñadores, y profesionales de marketing.</p>
                <p>usamos la creatividad y la estrategia para hacer realidad los objetivos de nuestros clientes.</p>
                </m.div>
            </div>
            <div className="marcas">
                <div className="imgsMarcas">
                    <img src={companies} alt="Compañias"  className="compañias"/>
                </div>
                <m.div className="nameMarcas" variants={secundAnimation}
                    initial="initial"
                    whileInView="whileInView" viewport={{ once: true }}>
                    <div>
                      <h2>MARCAS EMERGENTES,</h2>
                      <h2>MARCAS ESTABLECIDAS,</h2>
                      <h2>MARCAS DE LUJO.</h2>
                    </div>
                    <m.div variants={secundAnimation}
                    initial="initial"
                    whileInView="whileInView" viewport={{ once: true }}>
                        <span>estas son algunas de las marcas que confían en nosotros.</span>
                    </m.div>
                </m.div>
            </div>
    </div>
  )
}

export default Potenciamos
