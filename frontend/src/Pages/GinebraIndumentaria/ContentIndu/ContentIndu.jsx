import gineIndu from "../../../assects/js files/gineIndu"
import {motion as m} from "framer-motion"
import TextImgPro from "../../../components/text img project/TextImgPro"

const ContentIndu = () => {
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
            <div className="inicialVichka">
                <TextImgPro 
                    img={gineIndu[0]}
                    description={
                        ["cobertura audiovisual de foto y video para feria de la marca de indumentaria femenina ginebra."]}
                    service={"shooting"}
                />
            </div>
        </div>
        <div>
            <m.div className="ginebraFlex1"
                variants={firstAnimation}
                  initial="initial"
                  whileInView="whileInView">
                <div className="gineContent2">
                    <img src={gineIndu[1]} alt="Ginebra - indumentaria" />
                </div>
                <div className="gineContent2">
                    <img src={gineIndu[2]} alt="Ginebra - indumentaria" />
                </div>
             </m.div>
             <m.div className="ginebraFlex1"
                variants={firstAnimation}
                  initial="initial"
                  whileInView="whileInView">
                <div className="gineContent1">
                    <img src={gineIndu[3]} alt="Ginebra - indumentaria" />
                </div>
                <div className="gineContent1">
                    <img src={gineIndu[4]} alt="Ginebra - indumentaria" />
                </div>
                <div className="gineContent1">
                    <img src={gineIndu[5]} alt="Ginebra - indumentaria" />
                </div>
             </m.div>
             <m.div className="ginebraFlex1"
                variants={firstAnimation}
                  initial="initial"
                  whileInView="whileInView">
                <div className="gineContent2">
                    <img src={gineIndu[6]} alt="Ginebra - indumentaria" />
                </div>
                <div className="gineContent2">
                    <img src={gineIndu[7]} alt="Ginebra - indumentaria" />
                </div>
             </m.div>
             <m.div className="ginebraFlex1"
                variants={firstAnimation}
                  initial="initial"
                  whileInView="whileInView">
                <div className="gineContent2">
                    <video src={gineIndu[8]} autoPlay controls loop></video>
                </div>
             </m.div>
        </div>
      </div>
  )
}

export default ContentIndu
