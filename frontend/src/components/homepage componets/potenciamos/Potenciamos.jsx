import "./Potenciamos.css"
import {motion as m} from "framer-motion"
import companiesImgs from "../../../assects/js files/companiesImgs"
import { useEffect, useState } from "react"



const Potenciamos = () => {
  const [width, setWidth] = useState(window.innerWidth);
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

      const treAnimation = {
        initial: {x:-110, opacity: 0},
        whileInView :{x: 0, opacity: 1, transition: {
          type: "spring",
          bounce: 0.4,
          duration: 2
        }}
      }

      function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
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
                    <div className="div1">
                      <m.img src={companiesImgs[0]} alt="Desiderata" style={
                      width <= 500 ? {width: "80px"} 
                      :width <= 1090 ? {width: "180px"}
                      : {width: "10vw"}}  variants={treAnimation}
                      initial="initial"
                      whileInView="whileInView"
                      viewport={{ once: true }}
                      />
                    </div>
                    <div className="div2">
                      <m.img src={companiesImgs[1]} alt="Galpon Palermo" style={
                      width <= 500 ? {width: "70px"} 
                      : width <= 1090 ? {width: "120px"}
                      : {width: "8vw"}} variants={secundAnimation}
                      initial="initial"
                      whileInView="whileInView"
                      viewport={{ once: true }}
                      />
                    </div>
                    <div className="div3">
                      <m.img src={companiesImgs[2]} alt="Oleana" style={ 
                      width <= 500 ? {width: "120px"} 
                      : width <= 1090 ? {width: "250px"}
                      : {width: "15vw"}} variants={secundAnimation}
                      initial="initial"
                      whileInView="whileInView" 
                      viewport={{ once: true }}/>
                    </div>
                    <div className="div4">
                      <m.img src={companiesImgs[3]} alt="Sarapura" style={
                        width <= 500 ? {width: "60px"} 
                        :width <= 1090 ? {width:"120px"}
                        : {width: "8vw"}} 
                      initial={{x: -100, opacity: 0}}
                      whileInView={{x: 0, opacity: 1, transition: {
                                type: "spring",
                                bounce: 0.4,  
                                duration: 2
                              }}}
                      viewport={{ once: true }}
                      />
                    </div>
                    <div className="div5">
                      <m.img src={companiesImgs[4]} alt="Blosoom Market" style={
                        width <= 500 ? {width:"90px"} : width <= 1090 ?{width:"180px"}
                        : {width: "10vw"}} variants={secundAnimation}
                      initial="initial"
                      whileInView="whileInView"
                      viewport={{ once: true }}
                      />
                    </div>
                    <div className="div6">  
                      <m.img src={companiesImgs[5]} alt="Trebol" style={
                        width <= 500 ? {width:"70px"} : width <= 1090 ?{width:"120px"}
                        : {width:"10vw"}} variants={secundAnimation}
                      initial="initial"
                      whileInView="whileInView"
                      viewport={{ once: true }}
                      />
                    </div> 
                    <div className="div7">
                    <m.img src={companiesImgs[6]} alt="Selva" style={
                      width <= 500 ? {width: "70px"} 
                      :width <= 1090 ? {width: "180px"}
                      :{width: "10vw"}} variants={secundAnimation}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    />
                    </div>
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
