import "./AboutUs.css"
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
    <div>
      <Navbar width={width}/>
      <div className="contentAboutUsTitle">
        <m.h1 
          variants={firstAnimation}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className="greenH3">QUIÉNES ESTÁN DETRÁS DE FRENZY</m.h1>
      </div>
      <div className="mainAboutUs">
      <ContentAboutUs/>
      </div>
      <div>
        <ContactBar/>
        <Footer/>
      </div>
    </div>
  )
}

export default AboutUs
