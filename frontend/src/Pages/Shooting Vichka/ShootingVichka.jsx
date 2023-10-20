import "./ShootingVichka.css"
import { useState, useEffect } from "react"
import Navbar from "../../components/navbar/Navbar"
import ContactBar from "../../components/contact bar/ContactBar"
import Footer from "../../components/footer/Footer"
import TitlesProjects from "../../components/title projects/TitlesProjects"
import ContentVichka from "./ContentVichka/ContentVichka"
import Helmet from "react-helmet"

const ShootingVichka = () => {
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
        <title>Vichka | Frenzy Media</title>
        <meta name="description" content="Producción de fotos y estilismo para vichka. Con Frenzy transforma tu presencia en línea, Potencia tu marca, conecta con tu audiencia y alcanza resultados excepcionales en el mundo digital, All Rights Reserved 2023© Frenzy Media. All materials on these pages are copyrighted."/>
        <meta property="og:title" content="Vichka | Frenzy Media"></meta>
        <meta name="twitter:title" content="Vichka | Frenzy Media"></meta>
    </Helmet>
    <div>
        <Navbar width={width}/>
        <TitlesProjects title={"shooting vichka"}
            services={"shooting"}
        />
        <div className="mainVichka">
            <ContentVichka/>
        </div>
        <div>
            <ContactBar/>
            <Footer/>
        </div>
    </div>
    </>
  )
}

export default ShootingVichka
