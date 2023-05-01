import "./Potenciamos.css"
import {motion as m} from "framer-motion"
import Bloo from "./../../../assects/imgs/Marcas/Bloosm.png"
import Desi from "./../../../assects/imgs/Marcas/Desiderata.png"
import Galp from "./../../../assects/imgs/Marcas/Galpon.png"
import Ole from "./../../../assects/imgs/Marcas/Oleana.png"
import Sara from "./../../../assects/imgs/Marcas/Sarapura.png"
import Tre from "./../../../assects/imgs/Marcas/Trebol.png"
import Sal from "./../../../assects/imgs/Marcas/Selve.png"


const Potenciamos = () => {
  return (
    <div className='contentPoten'>
            <div className="poten">
                <m.div initial={{x:120, opacity: 0}}
                whileInView={{x: 0,  opacity: 1, transition: {
                type: "spring",
                bounce: 0.4,
                duration: 2
                }}}><h1>POTENCIAMOS TU EMPRESA</h1></m.div>
                <m.div initial={{x:120, opacity: 0}}
                whileInView={{x: 0,  opacity: 1, transition: {
                type: "spring",
                bounce: 0.4,
                duration: 2.2
                }}}><p>somos un equipo multidisciplinario de comunicadores, creativos, diseñadores, y profesionales de marketing.</p>
                <p>usamos la creatividad y la estrategia para hacer realidad los objetivos de nuestros clientes.</p>
                </m.div>
            </div>
            <div className="marcas">
                <div className="imgsMarcas">
                    <m.img src={Desi} alt="Desiderata" style={{width: "266px"}}  initial={{x:-120, opacity: 0}}
                whileInView={{x: 0,  opacity: 1, transition: {
                type: "spring",
                bounce: 0.4,
                duration: 2
                }}}/>
                    <m.img src={Galp} alt="Galpon Palermo" style={{width: "160px"}} initial={{x:-120, opacity: 0}}
                whileInView={{x: 0,  opacity: 1, transition: {
                type: "spring",
                bounce: 0.4,
                duration: 2.2
                }}}/>
                    <m.img src={Ole} alt="Oleana" style={{width: "250px"}} initial={{x:-120, opacity: 0}}
                whileInView={{x: 0,  opacity: 1, transition: {
                type: "spring",
                bounce: 0.4,
                duration: 2.4
                }}}/>
                    <m.img src={Sara} alt="Sarapura" style={{width: "160px"}} initial={{x:-120, opacity: 0}}
                whileInView={{x: 0,  opacity: 1, transition: {
                type: "spring",
                bounce: 0.4,
                duration: 2.6
                }}}/>
                    <m.img src={Bloo} alt="Blosoom Market" style={{width: "220px"}} initial={{x:-120, opacity: 0}}
                whileInView={{x: 0,  opacity: 1, transition: {
                type: "spring",
                bounce: 0.4,
                duration: 2.8
                }}}/>   
                    <m.img src={Tre} alt="Trebol" style={{width: "180px"}} initial={{x:-120, opacity: 0}}
                whileInView={{x: 0,  opacity: 1, transition: {
                type: "spring",
                bounce: 0.4,
                duration: 3
                }}}/>
                    <m.img src={Sal} alt="Selva" style={{width: "180px"}} initial={{x:-120, opacity: 0}}
                whileInView={{x: 0,  opacity: 1, transition: {
                type: "spring",
                bounce: 0.4,
                duration: 3
                }}}/>
                </div>
                <div className="nameMarcas">
                  <h2>MARCAS EMERGENTES,
                    MARCAS ESTABLECIDAS,
                    MARCAS DE LUJO.</h2>
                    <div>
                        <span>estas son algunas de las marcas que confían en nosotros.</span>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Potenciamos
