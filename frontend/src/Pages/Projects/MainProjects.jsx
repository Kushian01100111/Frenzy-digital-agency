import "./MainProjects.css"
import Navbar from "../../components/navbar/Navbar";
import ContactBar from "../../components/contact bar/ContactBar";
import Footer from "../../components/footer/Footer";
import ContentProjects from "./ContentProjects/ContentProjects";
import { useState, useEffect } from "react";
import {motion as m} from "framer-motion"

const MainProjects = () => {
    const [width, setWidth] = useState(window.innerWidth);
    function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  const firstAnimation = {
    initial: {y:60, opacity: 0.5},
    whileInView :{y: 0, opacity: 1, transition: {
      type: "spring",
      bounce: 0.4,
      duration: 2
    }}
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
        <div className="contentProjectsTitle">
            <m.h1 
            variants={firstAnimation}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="greenH3">PROYECTOS</m.h1>
        </div>
        <div className="mainProjects">
            <ContentProjects/>
        </div>
        <div>
            <ContactBar/>
            <Footer/>
        </div>
    </div>
  )
}

export default MainProjects
