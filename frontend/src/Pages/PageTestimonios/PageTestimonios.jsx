import "./PageTestimonios.css"
import Helmet from "react-helmet"
import { useState, useEffect } from "react"
import {motion as m} from "framer-motion"
import Navbar from "../../components/navbar/Navbar"
import ContactBar from "../../components/contact bar/ContactBar"
import Footer from "../../components/footer/Footer"
import ContentTesti from "./ContentTesti/ContentTesti"

const PageTestimonios = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const firstAnimation = {
      initial: {y:60, opacity: 0.5},
      whileInView :{y: 0, opacity: 1, transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2
      }}
    }
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
        <title>Testimonios | Frenzy Media</title>
        <meta name="description" content="Descubre lo que nuestros clientes dicen sobre su experiencia trabajando con nosotros. Lee testimonios auténticos que destacan nuestro compromiso con la excelencia y la satisfacción del cliente en cada proyecto. Con Frenzy transforma tu presencia en línea, Potencia tu marca, conecta con tu audiencia y alcanza resultados excepcionales en el mundo digital, All Rights Reserved 2023© Frenzy Media. All materials on these pages are copyrighted."/>
        <meta property="og:title" content="Testimonios | Frenzy Media"></meta>
        <meta name="twitter:title" content="Testimonios | Frenzy Media"></meta>
    </Helmet>
    <div>
        <Navbar width={width}/>
        <div className="contentTestimoniosTitle">
        <m.h1 
          variants={firstAnimation}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className="greenH3">TESTIMONIOS</m.h1>
      </div>
        <div className="contentTesti">
            <ContentTesti/>
        </div>
        <div>
            <ContactBar/>
            <Footer/>
        </div>
    </div>
    </>
  )
}

export default PageTestimonios
