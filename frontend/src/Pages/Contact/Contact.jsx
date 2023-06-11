import "./Contact.css"
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
    <div>
        <Navbar width={width}/>
        <div className="mainContact">
            <ContentContact/>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default Contact
