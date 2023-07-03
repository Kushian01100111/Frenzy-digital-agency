import "./BySofiaLeather.css"
import { useState, useEffect } from "react"
import Navbar from "../../components/navbar/Navbar"
import ContactBar from "../../components/contact bar/ContactBar"
import ComponentsBySofia from "./componentsBySofia/ComponentsBySofia"
import Footer from "../../components/footer/Footer"
import TitlesProjects from "../../components/title projects/TitlesProjects"

const BySofiaLeather = () => {
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
        <div>
            <ComponentsBySofia />
        </div>
        <div>
            <ContactBar/>
            <Footer/>
        </div>
    </div>
  )
}

export default BySofiaLeather
