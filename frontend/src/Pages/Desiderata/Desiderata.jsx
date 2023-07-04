import "./Desiderata.css"
import { useState, useEffect } from "react"
import Navbar from "../../components/navbar/Navbar"
import ContactBar from "../../components/contact bar/ContactBar"
import Footer from "../../components/footer/Footer"
import TitlesProjects from "../../components/title projects/TitlesProjects"
import ContentDesiderata from "./ContentDesiderata/ContentDesiderata"


const Desiderata = () => {
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
    <div className="mainDesi">
        <Navbar width={width}/>
        <TitlesProjects title={"desiderata"}
            services={"social media"}
        />
        <div className="mainDesiderata">
            <ContentDesiderata/>
        </div>
        <div>
            <ContactBar/>
            <Footer/>
        </div>
    </div>
  )
}

export default Desiderata
