import { useState, useEffect } from 'react';
import Helmet from "react-helmet"
import Navbar from "../../components/navbar/Navbar";
import ContactBar from "../../components/contact bar/ContactBar";
import Footer from "../../components/footer/Footer";
import TitlesProjects from "../../components/title projects/TitlesProjects";
import ContentIndu from "./ContentIndu/ContentIndu";

const GineIndumentaria = () => {
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
        <title>Ginebra Indumentaria | Frenzy Media</title>
        <meta name="description" content="Cobertura audiovisual de foto y video para feria de la marca de indumentaria femenina ginebra. Con Frenzy transforma tu presencia en línea, Potencia tu marca, conecta con tu audiencia y alcanza resultados excepcionales en el mundo digital, All Rights Reserved 2023© Frenzy Media. All materials on these pages are copyrighted."/>
        <meta property="og:title" content="Ginebra Indumentaria | Frenzy Media"></meta>
        <meta name="twitter:title" content="Ginebra Indumentaria | Frenzy Media"></meta>
    </Helmet>
    <div className="mainGine">
        <Navbar width={width}/>
        <TitlesProjects title={"ginebra - indumentaria"}
            services={"shooting"}
        />
        <div className="mainGinebra">
            <ContentIndu/>
        </div>
        <div>
            <ContactBar/>
            <Footer/>
        </div>
    </div>
    </>
  )
}

export default GineIndumentaria
