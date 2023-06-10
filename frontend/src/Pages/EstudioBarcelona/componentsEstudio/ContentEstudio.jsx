import "./ContentEstudio.css"
import barcelonaImgs from "../../../assects/js files/barcelonaImgs"
import TextImgPro from "../../../components/text img project/TextImgPro"

const ContentEstudio = () => {
  return (
    <div className="estudioContent">
        <div>
            <div>
                <TextImgPro img={barcelonaImgs[0]} description={["rediseño de logo que identificara a la marca.", "se desarrollaron 3 propuestas y sus aplicaciones, de dónde salió la propuesta elegida.", "se realizó un manual de marca de uso normativo básico que incluyó el diseño de los distintos elementos visuales que darían identidad a la marca.", "se desarrolló el look & feel para website y redes sociales."]} service={"rebranding"} date={"septiembre, 2022"}/>
            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default ContentEstudio
