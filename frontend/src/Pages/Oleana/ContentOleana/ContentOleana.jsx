import "./ContentOleana.css"
import {motion as m} from "framer-motion"
import TextImgPro from "../../../components/text img project/TextImgPro"
import oleanaImgs from "./../../../assects/js files/oleanaImgs"

const ContentOleana = () => {
  const firstAnimation = {
    initial: {y:60, opacity: 0},
    whileInView :{y: 0, opacity: 1, transition: {
      type: "spring",
      bounce: 0.4,
      duration: 2
    }}
  }
  return (
    <div className="contentOleana">
        <div>
          <div className="inicialOleana">
            <TextImgPro img={oleanaImgs[0]}
              description={["producción de fotos para la firma de joyas oleana jewelry."]}
              service={"shooting"}
              date={"XXXX, 202X"}
            />
          </div>
          <div>
              <m.div className="oleanaFlex1"
              variants={firstAnimation}
                  initial="initial"
                  whileInView="whileInView">
                <div className="oleContent1"><img src={oleanaImgs[1]} alt="Oleana Shooting" /></div>
                <div className="oleContent1"><img src={oleanaImgs[2]} alt="Oleana Shooting" /></div>
                <div className="oleContent1"><img src={oleanaImgs[3]} alt="Oleana Shooting" /></div>
              </m.div>
              <m.div className="oleanaFlex2"
              variants={firstAnimation}
                  initial="initial"
                  whileInView="whileInView">
                  <div className="oleContent2"><img src={oleanaImgs[4]} alt="Oleana Shooting" /></div>
              </m.div>
              <m.div className="oleanaFlex3"
              variants={firstAnimation}
                  initial="initial"
                  whileInView="whileInView">
                  <div className="oleContent3"><img src={oleanaImgs[5]} alt="Oleana Shooting" /></div>
                  <div className="oleContent3"><img src={oleanaImgs[6]} alt="Oleana Shooting" /></div>
              </m.div>
          </div>          
        </div>
    </div>
  )
}

export default ContentOleana
