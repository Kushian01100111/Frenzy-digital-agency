import "./EstudioBarcelona.css"
import { useState, useEffect } from "react"
import ContactBar from "../../components/contact bar/ContactBar"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import ContentEstudio from "./componentsEstudio/ContentEstudio"
import TitlesProjects from "../../components/title projects/TitlesProjects"

const EstudioBarcelona = () => {
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
    <div>
        <Navbar width={width}/>
        <TitlesProjects title={"estudio barcelona"} services={"rebranding"}/>
        <div className="mainEstudio">
            <ContentEstudio/>
        </div>
        <div>
            <ContactBar/>
            <Footer/>
        </div>
    </div>
  )
}

export default EstudioBarcelona
