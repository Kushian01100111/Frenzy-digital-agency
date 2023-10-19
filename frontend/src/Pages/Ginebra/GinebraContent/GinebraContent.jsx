import "./GinebraContent.css"
import ginebraImgs from "../../../assects/js files/ginebraImgs"
import {motion as m} from "framer-motion"
import TextImgPro from "../../../components/text img project/TextImgPro"

const GinebraContent = () => {
    const firstAnimation = {
        initial: {y:60, opacity: 0},
        whileInView :{y: 0, opacity: 1, transition: {
          type: "spring",
          bounce: 0.4,
          duration: 2
        }}
      }
  return (
    <div className="contentGinebra">
        <div>
            <div className="initialGinebra">
                <TextImgPro 
                    img={ginebraImgs[0]}
                    description={
                        ["cobertura audiovisual en evento - perfume metanoia de la marca de indumentaria femenina Ginebra. entrega de contenido (foto y video) en vivo."]}
                    service={"shooting"}
                />
            </div>
        </div>
        <div>
            <m.div className="ginebraFlex1"
                variants={firstAnimation}
                  initial="initial"
                  whileInView="whileInView">
                <div className="gineContent1">
                    <img src={ginebraImgs[1]} alt="Ginebra - Perfume" />
                </div>
                <div className="gineContent1">
                    <img src={ginebraImgs[2]} alt="Ginebra - Perfume" />
                </div>
                <div className="gineContent1">
                    <img src={ginebraImgs[3]} alt="Ginebra - Perfume" />
                </div>
             </m.div>
             <m.div className="ginebraFlex1"
                variants={firstAnimation}
                  initial="initial"
                  whileInView="whileInView">
                <div className="gineContent2">
                    <img src={ginebraImgs[4]} alt="Ginebra - Perfume" />
                </div>
                <div className="gineContent2">
                    <img src={ginebraImgs[5]} alt="Ginebra - Perfume" />
                </div>
             </m.div>
             <m.div className="ginebraFlex1"
                variants={firstAnimation}
                  initial="initial"
                  whileInView="whileInView">
                <div className="gineContent1">
                    <img src={ginebraImgs[6]} alt="Ginebra - Perfume" />
                </div>
                <div className="gineContent1">
                    <img src={ginebraImgs[7]} alt="Ginebra - Perfume" />
                </div>
                <div className="gineContent1">
                    <img src={ginebraImgs[8]} alt="Ginebra - Perfume" />
                </div>
             </m.div>
             <m.div className="ginebraFlex1"
                variants={firstAnimation}
                  initial="initial"
                  whileInView="whileInView">
                <div className="gineContent2">
                    <img src={ginebraImgs[9]} alt="Ginebra - Perfume" />
                </div>
                <div className="gineContent2">
                    <video src={ginebraImgs[10]} autoPlay controls loop></video>
                </div>
             </m.div>
        </div>
      
    </div>
  )
}

export default GinebraContent
