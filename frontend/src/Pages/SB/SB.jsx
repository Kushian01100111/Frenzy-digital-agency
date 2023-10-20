import { useState, useEffect } from 'react';
import Helmet from "react-helmet"
import Navbar from "../../components/navbar/Navbar";
import ContactBar from "../../components/contact bar/ContactBar";
import Footer from "../../components/footer/Footer";
import TitlesProjects from "../../components/title projects/TitlesProjects";
import ContentSB from './ContentSB/ContentSB';

export default function SB() {
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
        <title>SB Collection | Frenzy Media</title>
        <meta name="description" content="Social media management y diseño gráfico para la empresa de sb collection. Con Frenzy transforma tu presencia en línea, Potencia tu marca, conecta con tu audiencia y alcanza resultados excepcionales en el mundo digital, All Rights Reserved 2023© Frenzy Media. All materials on these pages are copyrighted."/>
        <meta property="og:title" content="SB Collection | Frenzy Media"></meta>
        <meta name="twitter:title" content="SB Collection | Frenzy Media"></meta>
    </Helmet>
    <div className="mainGine">
        <Navbar width={width}/>
        <TitlesProjects title={"SB collection"}
            services={"diseño grafico"}
        />
        <div className="mainGinebra">
            <ContentSB/>
        </div>
        <div>
            <ContactBar/>
            <Footer/>
        </div>
    </div>
    </>
  )
}
