import "./ContentEstudio.css"
import barcelonaImgs from "../../../assects/js files/barcelonaImgs"
import TextImgPro from "../../../components/text img project/TextImgPro"
import {motion as m} from "framer-motion"

const ContentEstudio = () => {
  const firstAnimation = {
    initial: {y:60, opacity: 0},
    whileInView :{y: 0, opacity: 1, transition: {
      type: "spring",
      bounce: 0.4,
      duration: 2
    }}
  }
  return (
    <div className="estudioContent">
        <div>
            <div>
                <TextImgPro img={barcelonaImgs[0]} description={["rediseño de logo que identificara a la marca.", "se desarrollaron 3 propuestas y sus aplicaciones, de dónde salió la propuesta elegida.", "se realizó un manual de marca de uso normativo básico que incluyó el diseño de los distintos elementos visuales que darían identidad a la marca.", "se desarrolló el look & feel para website y redes sociales."]} service={"rebranding"} date={"septiembre, 2022"}/>
            </div>
            <div className="mapSliceImgs">
              {barcelonaImgs.slice(1).map((n,i)=>{
                return <m.img key={`key${i}`} src={n} alt={`image${i}`} 
                  variants={firstAnimation}
                  initial="initial"
                  whileInView="whileInView"
                />
              })}
            </div>
        </div>
    </div>
  )
}

export default ContentEstudio
