import "./PageTestimonios.css"
import { useState, useEffect } from "react"
import Navbar from "../../components/navbar/Navbar"
import ContactBar from "../../components/contact bar/ContactBar"
import Footer from "../../components/footer/Footer"
import ContentTesti from "./ContentTesti/ContentTesti"

const PageTestimonios = () => {
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
        <div className="contentTesti">
            <ContentTesti/>
        </div>
        <div>
            <ContactBar/>
            <Footer/>
        </div>
    </div>
  )
}

export default PageTestimonios
