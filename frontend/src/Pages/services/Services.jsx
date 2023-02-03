import "./Services.css"
import ServicesCards from "../../components/services cards/ServicesCards"
import { useState } from "react"
import Blossom from "./../../assects/imgs/blossom.png"
import Selva from "./../../assects/imgs/selva.png"

const Services = () => {
  const [active, setActive]= useState(false)
  const [s1, setS1] = useState(false);
  const [s2, setS2] = useState(false);
  const [s3, setS3] = useState(false);
  const [s4, setS4] = useState(false);
  const [s5, setS5] = useState(false);

  return (
    <div className="services">
      <div>
        <div><ServicesCards title={"Social media management"} condicional={active}/></div>
        <div><ServicesCards title={"Paid media management"} condicional={active}/></div>
        <div><ServicesCards title={"Creacion de contenidos"} condicional={active}/></div>
        <div><ServicesCards title={"Diseño grafico"} condicional={active}/></div>
        <div><ServicesCards title={"Influencer marketing"} condicional={active}/></div>
      </div>
      <div>
        <div>
        <h2>Social media management</h2>
        </div>
        <div>
        <p>Cómo llegar a tu cliente ideal, atraer nuevos usuarias y agrandar tu comunidad a través de una planificación y una estrategia de comunicación sólida y establecida en el tiempo.</p>
        </div>
        <div>
          <img src={Blossom} alt="blossom" />
          <img src={Selva} alt="Selva" />
        </div>
      </div>
    </div>
  )
}

export default Services
