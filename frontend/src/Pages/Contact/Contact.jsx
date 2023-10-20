import "./Contact.css"
import Helmet from "react-helmet"
import { useState, useEffect } from "react"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import ContentContact from "./components contact/ContentContact"



const Contact = () => {
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
        <title>Contact | Frenzy Media</title>
        <meta name="description" content="¿Tienes alguna pregunta o inquietud? ¡Estamos aquí para ayudarte! Ponte en contacto con nosotros para discutir tus ideas, proyectos o cualquier consulta que tengas. Esperamos poder colaborar contigo y llevar tus ideas al siguiente nivel. Con Frenzy transforma tu presencia en línea, Potencia tu marca, conecta con tu audiencia y alcanza resultados excepcionales en el mundo digital, All Rights Reserved 2023© Frenzy Media. All materials on these pages are copyrighted."/>
        <meta property="og:title" content="Contact | Frenzy Media"></meta>
        <meta name="twitter:title" content="Contact | Frenzy Media"></meta>
    </Helmet>
    <div>
        <Navbar width={width}/>
        <div className="mainContact">
            <ContentContact/>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
    </>
  )
}

export default Contact
