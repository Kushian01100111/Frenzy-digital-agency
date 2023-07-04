import "./ContentDesiderata.css"
import desiderataImgs from "./../../../assects/js files/desiderataImgs"
import {motion as m} from "framer-motion"
import TextImgPro from "../../../components/text img project/TextImgPro"

const ContentDesiderata = () => {
    const firstAnimation = {
        initial: {y:60, opacity: 0},
        whileInView :{y: 0, opacity: 1, transition: {
          type: "spring",
          bounce: 0.4,
          duration: 2
        }}
      }
  return (
    <div className="contentDesiderata">
        <div>
            <div className="initialDesiderata">
                <TextImgPro 
                    img={desiderataImgs[0]}
                    description={
                        ["social media management para la marca de indumentaria femenina desiderata.",
                        "diseño de feed, redacción de copies, diseño de Instagram Stories.",
                        "estrategia digital."]}
                    service={"social media management"}
                    date={"XXXX, 202X"}
                />
            </div>
        </div>
        <div>
             <m.div className="desiderataFlex1">
                <div className="desiContent iframe">
                    <img src={desiderataImgs[1]} alt="Desiderata" />
                </div>
                <div className="desiContent">
                    <img src={desiderataImgs[1]} alt="Desiderata" />
                </div>
             </m.div>
             <m.div className="desiderataFlex2">
                <div className="desiContent">
                    <img src={desiderataImgs[3]} alt="Desiderata" />
                </div>
                <div className="desiContent">       
                    <img src={desiderataImgs[4]} alt="Desiderata" />
                </div>
             </m.div>          
        </div>
    </div>
  )
}

export default ContentDesiderata
