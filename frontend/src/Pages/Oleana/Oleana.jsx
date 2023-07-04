import "./Oleana.css"
import { useState, useEffect } from "react"
import Navbar from "../../components/navbar/Navbar"
import ContactBar from "../../components/contact bar/ContactBar"
import Footer from "../../components/footer/Footer"
import TitlesProjects from "../../components/title projects/TitlesProjects"
import ContentOleana from "./ContentOleana/ContentOleana"

const Oleana = () => {
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
        <TitlesProjects title={"by sofia leather"}
            services={"shooting"}
        />
        <div className="mainBySofia">
            <ComponentsBySofia />
        </div>
        <div>
            <ContactBar/>
            <Footer/>
        </div>
    </div>
  )
}

export default Oleana
