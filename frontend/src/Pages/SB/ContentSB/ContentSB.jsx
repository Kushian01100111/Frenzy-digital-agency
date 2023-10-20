import {motion as m} from "framer-motion"
import TextImgPro from "../../../components/text img project/TextImgPro"
import sbImgs from "../../../assects/js files/sbImgs"

export default function ContentSB() {
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
                    img={sbImgs[0]}
                    description={
                        ["social media management y diseño gráfico para la empresa de sb collection."]}
                    service={"social media, diseño grafico"}
                />
            </div>
        </div>
        <div>
            <m.div className="ginebraFlex1"
                variants={firstAnimation}
                  initial="initial"
                  whileInView="whileInView">
                <div className="gineContent1">
                    <img src={sbImgs[3]} alt="SB Collection" />
                </div>
                <div className="gineContent1">
                    <video src={sbImgs[4]} autoPlay controls loop></video>
                </div>
                <div className="gineContent1">
                    <img src={sbImgs[5]} alt="SB Collection" />
                </div>
             </m.div>
             <m.div className="ginebraFlex1"
                variants={firstAnimation}
                  initial="initial"
                  whileInView="whileInView">
                <div className="gineContent2">
                    <img src={sbImgs[1]} alt="SB Collection" />
                </div>
                <div className="gineContent2">
                    <video src={sbImgs[2]} autoPlay controls loop></video>
                </div>
             </m.div>            
        </div>
    </div>
  )
}
