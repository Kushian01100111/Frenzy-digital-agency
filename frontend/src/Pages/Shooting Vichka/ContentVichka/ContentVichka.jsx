import "./ContentVichka.css"
import {motion as m} from "framer-motion"
import TextImgPro from "../../../components/text img project/TextImgPro"
import vichkaImgs from "./../../../assects/js files/vichkaImgs"

const ContentVichka = () => {
    const firstAnimation = {
        initial: {y:60, opacity: 0},
        whileInView :{y: 0, opacity: 1, transition: {
          type: "spring",
          bounce: 0.4,
          duration: 2
        }}
      }
  return (
    <div className="contentVichka"> 
      <div>
        <div className="inicialVichka">
        <TextImgPro img={vichkaImgs[0]}
              description={["producción de fotos y estilismo para vichka"]}
              service={"shooting"}
              date={"XXXX, 202X"}/>
        </div>
        <div>
            <m.div className="vichkaFlex"
            variants={firstAnimation}
                  initial="initial"
                  whileInView="whileInView">
              <div className="viContent"><img src={vichkaImgs[1]} alt="Shooting Vichka" /></div>
              <div className="viContent"><img src={vichkaImgs[2]} alt="Shooting Vichka" /></div>
            </m.div>
            <m.div className="vichkaFlex"
            variants={firstAnimation}
                  initial="initial"
                  whileInView="whileInView">
              <div className="viContent"><img src={vichkaImgs[3]} alt="Shooting Vichka" /></div>
              <div className="viContent"><img src={vichkaImgs[4]} alt="Shooting Vichka" /></div>
            </m.div>
            <m.div className="vichkaFlex"
            variants={firstAnimation}
                  initial="initial"
                  whileInView="whileInView">
              <div className="viContent2"><video src={vichkaImgs[5]} autoPlay controls loop></video></div>
            </m.div>
        </div>
      </div>
    </div>
  )
}

export default ContentVichka
