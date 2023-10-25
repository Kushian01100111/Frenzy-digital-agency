import "./Ginebra.css"
import Helmet from "react-helmet"
import { useState, useEffect } from 'react';
import Navbar from "../../components/navbar/Navbar";
import ContactBar from "../../components/contact bar/ContactBar";
import Footer from "../../components/footer/Footer";
import TitlesProjects from "../../components/title projects/TitlesProjects";
import GinebraContent from "./GinebraContent/GinebraContent";

const Ginebra = () => {
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
        <title>Ginebra Perfume | Frenzy Media</title>
        <meta name="description" content="Cobertura audiovisual en evento - perfume metanoia de la marca de indumentaria femenina Ginebra. Entrega de contenido (foto y video) en vivo. Con Frenzy transforma tu presencia en línea, Potencia tu marca, conecta con tu audiencia y alcanza resultados excepcionales en el mundo digital, All Rights Reserved 2023© Frenzy Media. All materials on these pages are copyrighted."/>
        <meta property="og:title" content="Ginebra Perfume | Frenzy Media"></meta>
        <meta name="twitter:title" content="Ginebra Perfume | Frenzy Media"></meta>
    </Helmet>
    <div className="mainGine">
        <Navbar width={width}/>
        <TitlesProjects title={"ginebra"}
            services={"shooting"}
        />
        <div className="mainGinebra">
            <GinebraContent/>
        </div>
        <div>
            <ContactBar/>
            <Footer/>
        </div>
    </div>
    </>
  )
}

export default Ginebra
