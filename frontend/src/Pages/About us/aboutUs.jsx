import "./AboutUs.css"
import Helmet from "react-helmet"
import Navbar from '../../components/navbar/Navbar'
import ContactBar from '../../components/contact bar/ContactBar';
import Footer from '../../components/footer/Footer';
import ContentAboutUs from "./components/ContentAboutUs";
import {motion as m} from "framer-motion"
import { useState, useEffect } from 'react';

const AboutUs = () => {
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
        <title>About Us | Frenzy Media</title>
        <meta name="description" content="Descubre quiénes somos y qué nos impulsa en el mundo digital. Conoce nuestro equipo apasionado y la misión que nos guía en la creación de soluciones innovadoras para nuestros clientes. Con Frenzy transforma tu presencia en línea, Potencia tu marca, conecta con tu audiencia y alcanza resultados excepcionales en el mundo digital, All Rights Reserved 2023© Frenzy Media. All materials on these pages are copyrighted."/>
        <meta property="og:title" content="About Us | Frenzy Media"></meta>
        <meta name="twitter:title" content="About Us | Frenzy Media"></meta>
    </Helmet>
    <div>
      <Navbar width={width}/>
      <div className="contentAboutUsTitle">
        <m.h1 
          variants={firstAnimation}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className="greenH3">QUIÉN ESTÁ DETRÁS DE FRENZY</m.h1>
      </div>
      <div className="mainAboutUs">
      <ContentAboutUs/>
      </div>
      <div>
        <ContactBar/>
        <Footer/>
      </div>
    </div>
    </>
  )
}

export default AboutUs
