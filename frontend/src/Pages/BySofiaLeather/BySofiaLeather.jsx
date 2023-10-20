import "./BySofiaLeather.css"
import Helmet from "react-helmet"
import { useState, useEffect } from "react"
import Navbar from "../../components/navbar/Navbar"
import ContactBar from "../../components/contact bar/ContactBar"
import ComponentsBySofia from "./componentsBySofia/ComponentsBySofia"
import Footer from "../../components/footer/Footer"
import TitlesProjects from "../../components/title projects/TitlesProjects"

const BySofiaLeather = () => {
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
        <title>By Sofia Leather | Frenzy Media</title>
        <meta name="description" content="Organización y producción de fotos para la marca de carteras se realizó la selección y contratación del equipo. modelo, fotógrafa, estilista, maquilladora. Con Frenzy transforma tu presencia en línea, Potencia tu marca, conecta con tu audiencia y alcanza resultados excepcionales en el mundo digital, All Rights Reserved 2023© Frenzy Media. All materials on these pages are copyrighted."/>
        <meta property="og:title" content="By Sofia Leather | Frenzy Media"></meta>
        <meta name="twitter:title" content="By Sofia Leather | Frenzy Media"></meta>
    </Helmet>
    <div>
        <Navbar width={width}/>
        <TitlesProjects title={"by sofia leather"}
            services={"shooting"}
        />
        <div className="mainBySofia">
            <ComponentsBySofia />
        </div>
        <div>
            <ContactBar/>
            <Footer/>
        </div>
    </div>
    </>
  )
}

export default BySofiaLeather
