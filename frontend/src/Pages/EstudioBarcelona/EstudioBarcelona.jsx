import "./EstudioBarcelona.css"
import Helmet from "react-helmet"
import { useState, useEffect } from "react"
import ContactBar from "../../components/contact bar/ContactBar"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import ContentEstudio from "./componentsEstudio/ContentEstudio"
import TitlesProjects from "../../components/title projects/TitlesProjects"

const EstudioBarcelona = () => {
    const [width, setWidth] = useState(window.innerWidth);
    function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    }, []);
  return (
    <>
    <Helmet>
        <title>Estudio Barcelona | Frenzy Media</title>
        <meta name="description" content="Rediseño de logo que identificara a la marca. Se desarrollaron 3 propuestas y sus aplicaciones, de dónde salió la propuesta elegida. Entrega de contenido (foto y video) en vivo. Con Frenzy transforma tu presencia en línea, Potencia tu marca, conecta con tu audiencia y alcanza resultados excepcionales en el mundo digital, All Rights Reserved 2023© Frenzy Media. All materials on these pages are copyrighted."/>
        <meta property="og:title" content="Estudio Barcelona | Frenzy Media"></meta>
        <meta name="twitter:title" content="Estudio Barcelona | Frenzy Media"></meta>
    </Helmet>
    <div>
        <Navbar width={width}/>
        <TitlesProjects title={"estudio barcelona"} services={"rebranding"}/>
        <div className="mainEstudio">
            <ContentEstudio/>
        </div>
        <div>
            <ContactBar/>
            <Footer/>
        </div>
    </div>
    </>
  )
}

export default EstudioBarcelona
