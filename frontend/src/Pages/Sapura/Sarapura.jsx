import "./Sarapuras.css"
import Helmet from "react-helmet"
import { useState, useEffect } from "react"
import Navbar from "../../components/navbar/Navbar"
import ContactBar from "../../components/contact bar/ContactBar"
import Footer from "../../components/footer/Footer"
import TitlesProjects from "../../components/title projects/TitlesProjects"
import ContentSapura from "./ContentSapura/ContentSapura"

const Sarapura = () => {
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
        <title>Sarapura | Frenzy Media</title>
        <meta name="description" content="Social media management y diseño gráfico para la empresa de dj´s sarapura. Con Frenzy transforma tu presencia en línea, Potencia tu marca, conecta con tu audiencia y alcanza resultados excepcionales en el mundo digital, All Rights Reserved 2023© Frenzy Media. All materials on these pages are copyrighted."/>
        <meta property="og:title" content="Sarapura | Frenzy Media"></meta>
        <meta name="twitter:title" content="Sarapura | Frenzy Media"></meta>
    </Helmet>
    <div className="sarapura">
        <Navbar width={width}/>
        <TitlesProjects title={"sarapura"}
            services={"diseño grafico"}
        />
        <div className="mainSapura">
            <ContentSapura />
        </div>
        <div>
            <ContactBar/>
            <Footer/>
        </div>
    </div>
    </>
  )
}

export default Sarapura
