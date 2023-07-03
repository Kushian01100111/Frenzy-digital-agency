import "./ComponentsBySofia.css"
import {motion as m} from "framer-motion"
import bySofiaImgs from "../../../assects/js files/bySofiaImgs"
import TextImgPro from "../../../components/text img project/TextImgPro"

const ComponentsBySofia = () => {
    const firstAnimation = {
        initial: {y:60, opacity: 0},
        whileInView :{y: 0, opacity: 1, transition: {
          type: "spring",
          bounce: 0.4,
          duration: 2
        }}
      }
  return (
    <div>
        <div>
            <div className="inicialBySofia">
                <TextImgPro
                    img={bySofiaImgs[0]}
                    description={
                        ["organización y producción de fotos para la marca de carteras.", "se realizó la selección y contratación del equipo.", "modelo, fotógrafa, estilista, maquilladora.", "curaduría de material final."]}
                    service={"shooting"}
                    date={"septiembre, 2022"}
                />
            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default ComponentsBySofia

