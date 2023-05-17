import "./Potenciamos.css"
import {motion as m} from "framer-motion"
import companiesImgs from "../../../assects/js files/companiesImgs"


const Potenciamos = () => {
    const firstAnimation = {
        initial: {x:120, opacity: 0},
        whileInView :{x: 0, opacity: 1, transition: {
          type: "spring",
          bounce: 0.4,
          duration: 2
        }}
      }
      const secundAnimation = {
        initial: {x:-120, opacity: 0},
        whileInView :{x: 0, opacity: 1, transition: {
          type: "spring",
          bounce: 0.4,
          duration: 2
        }}
      }
  return (
    <div className='contentPoten'>
            <div className="poten">
                <m.div variants={firstAnimation}
                initial="initial"
                whileInView="whileInView">
                <h1>POTENCIAMOS TU EMPRESA</h1></m.div>
                <m.div variants={firstAnimation}
                initial="initial"
                whileInView="whileInView">
                <p>somos un equipo multidisciplinario de comunicadores, creativos, diseñadores, y profesionales de marketing.</p>
                <p>usamos la creatividad y la estrategia para hacer realidad los objetivos de nuestros clientes.</p>
                </m.div>
            </div>
            <div className="marcas">
                <div className="imgsMarcas">
                    <m.img src={companiesImgs[0]} alt="Desiderata" style={{width: "266px"}}  variants={secundAnimation}
                    initial="initial"
                    whileInView="whileInView"/>
                    <m.img src={companiesImgs[1]} alt="Galpon Palermo" style={{width: "160px"}} variants={secundAnimation}
                    initial="initial"
                    whileInView="whileInView"/>
                    <m.img src={companiesImgs[2]} alt="Oleana" style={{width: "250px"}} variants={secundAnimation}
                    initial="initial"
                    whileInView="whileInView"/>
                    <m.img src={companiesImgs[3]} alt="Sarapura" style={{width: "160px"}} variants={secundAnimation}
                    initial="initial"
                    whileInView="whileInView"/>
                    <m.img src={companiesImgs[4]} alt="Blosoom Market" style={{width: "220px"}} variants={secundAnimation}
                    initial="initial"
                    whileInView="whileInView"/>   
                    <m.img src={companiesImgs[5]} alt="Trebol" style={{width: "180px"}} variants={secundAnimation}
                    initial="initial"
                    whileInView="whileInView"/>
                    <m.img src={companiesImgs[6]} alt="Selva" style={{width: "180px"}} variants={secundAnimation}
                    initial="initial"
                    whileInView="whileInView"/>
                </div>
                <m.div className="nameMarcas" variants={secundAnimation}
                    initial="initial"
                    whileInView="whileInView">
                  <h2>MARCAS EMERGENTES,
                    MARCAS ESTABLECIDAS,
                    MARCAS DE LUJO.</h2>
                    <m.div variants={secundAnimation}
                    initial="initial"
                    whileInView="whileInView">
                        <span>estas son algunas de las marcas que confían en nosotros.</span>
                    </m.div>
                </m.div>
            </div>
    </div>
  )
}

export default Potenciamos
