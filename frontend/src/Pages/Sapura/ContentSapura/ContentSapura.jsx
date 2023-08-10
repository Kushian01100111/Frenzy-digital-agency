import "./ContentSapura.css"
import {motion as m} from "framer-motion"
import TextImgPro from "../../../components/text img project/TextImgPro"
import sapuraImgs from "./../../../assects/js files/sapuraImgs"


const ContentSapura = () => {
    const firstAnimation = {
        initial: {y:60, opacity: 0},
        whileInView :{y: 0, opacity: 1, transition: {
          type: "spring",
          bounce: 0.4,
          duration: 2
        }}
      }

  return (
    <div className="contentSapura">
        <div>
            <div className="inicialSapura">
                <TextImgPro img={sapuraImgs[0]}
                    description={["social media management y diseño gráfico para la empresa de dj´s sarapura."]}
                    service={"social media, diseño grafico"}
                    date={"XXXX, 202X"}
                />
            </div>
        </div>
        <div>
            <m.div className="sapuraFlex"
                variants={firstAnimation}
                  initial="initial"
                  whileInView="whileInView">
                <div className="sapContent1"><img src={sapuraImgs[1]} alt="Sapura, Diseño grafico" /></div>
            </m.div>
            <m.div className="sapuraFlex"
            variants={firstAnimation}
                  initial="initial"
                  whileInView="whileInView">
                <div className="sapContent1"><img src={sapuraImgs[2]} alt="Sapura, Diseño grafico" /></div>
            </m.div>
            <m.div className="sapuraFlex"
            variants={firstAnimation}
                  initial="initial"
                  whileInView="whileInView">
                <div className="sapContent2"><img src={sapuraImgs[3]} alt="Sapura, Diseño grafico" clas /></div>
                <div className="sapContent2"><video src={sapuraImgs[4]} autoPlay controls loop></video></div>
                <div className="sapContent2"><img src={sapuraImgs[5]} alt="Sapura, Diseño grafico" /></div>
            </m.div>
            <m.div className="sapuraFlex"
            variants={firstAnimation}
                  initial="initial"
                  whileInView="whileInView">
                <div className="sapContent3">
                    <img src={sapuraImgs[6]} alt="Sapura, Diseño grafico" />
                </div>
                <div className="sapContent3">
                    <img src={sapuraImgs[7]} alt="Sapura, Diseño grafico" />
                </div>
            </m.div>
        </div>
    </div>
  )
}

export default ContentSapura
