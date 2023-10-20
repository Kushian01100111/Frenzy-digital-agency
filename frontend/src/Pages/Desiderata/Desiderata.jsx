import "./Desiderata.css"
import Helmet from "react-helmet"
import { useState, useEffect } from "react"
import Navbar from "../../components/navbar/Navbar"
import ContactBar from "../../components/contact bar/ContactBar"
import Footer from "../../components/footer/Footer"
import TitlesProjects from "../../components/title projects/TitlesProjects"
import ContentDesiderata from "./ContentDesiderata/ContentDesiderata"


const Desiderata = () => {
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
        <title>Desiderata | Frenzy Media</title>
        <meta name="description" content="Social media management para la marca de indumentaria femenina desiderata diseño de feed, redacción de copies, diseño de Instagram Stories estrategia digital. Con Frenzy transforma tu presencia en línea, Potencia tu marca, conecta con tu audiencia y alcanza resultados excepcionales en el mundo digital, All Rights Reserved 2023© Frenzy Media. All materials on these pages are copyrighted."/>
        <meta property="og:title" content="Desiderata | Frenzy Media"></meta>
        <meta name="twitter:title" content="Desiderata | Frenzy Media"></meta>
    </Helmet>
    <div className="mainDesi">
        <Navbar width={width}/>
        <TitlesProjects title={"desiderata"}
            services={"social media"}
        />
        <div className="mainDesiderata">
            <ContentDesiderata/>
        </div>
        <div>
            <ContactBar/>
            <Footer/>
        </div>
    </div>
    </>
  )
}

export default Desiderata
