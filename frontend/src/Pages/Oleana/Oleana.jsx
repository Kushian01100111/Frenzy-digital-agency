import "./Oleana.css"
import Helmet from "react-helmet"
import { useState, useEffect } from "react"
import Navbar from "../../components/navbar/Navbar"
import ContactBar from "../../components/contact bar/ContactBar"
import Footer from "../../components/footer/Footer"
import TitlesProjects from "../../components/title projects/TitlesProjects"
import ContentOleana from "./ContentOleana/ContentOleana"

const Oleana = () => {
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
        <title>Oleana | Frenzy Media</title>
        <meta name="description" content="Producción de fotos para la firma de joyas oleana jewelry. Con Frenzy transforma tu presencia en línea, Potencia tu marca, conecta con tu audiencia y alcanza resultados excepcionales en el mundo digital, All Rights Reserved 2023© Frenzy Media. All materials on these pages are copyrighted."/>
        <meta property="og:title" content="Oleana | Frenzy Media"></meta>
        <meta name="twitter:title" content="Oleana | Frenzy Media"></meta>
    </Helmet>
    <div>
        <Navbar width={width}/>
        <TitlesProjects title={"oleana jewelry"}
            services={"shooting"}
        />
        <div className="mainByOleana">
            <ContentOleana />
        </div>
        <div>
            <ContactBar/>
            <Footer/>
        </div>
    </div>
    </>
  )
}

export default Oleana
