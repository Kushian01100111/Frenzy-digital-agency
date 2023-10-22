import "./TextImgPro.css"
import {motion as m} from "framer-motion"

const TextImgPro = ({img, description, service, date}) => {
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
          duration: 2.6
        }}
      }
  return (
    <div className="contentText">
        <m.div className="div71"
        variants={firstAnimation}
                initial="initial"
                whileInView="whileInView"
                > <img src={img} alt="Foto principal proyecto"  className="imgDiv71"/></m.div>
        <div className="div72">
            <m.div className="titleDiv72"
            variants={secundAnimation}
                initial="initial"
                whileInView="whileInView"
                ><span>descripción del proyecto:</span></m.div>
            <div>
                <m.ul
                    variants={secundAnimation}
                        initial="initial"
                        whileInView="whileInView">
                    {description.map((n, i) =>{
                        return <li key={`key${i}`} className="buttelt"
                        >{n}</li>
                    })}
                </m.ul>
                <m.div className="serviceDiv72"
                 variants={secundAnimation}
                        initial="initial"
                        whileInView="whileInView"
                        >
                    <p className="servicePara">servicios: <span>{service}</span></p>
                    <hr  className="bar1"/>
                </m.div>
            </div>
        </div>
    </div>
  )
}

export default TextImgPro
