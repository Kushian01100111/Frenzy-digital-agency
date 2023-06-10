import "./AboutUs.css"
import Navbar from '../../components/navbar/Navbar'
import ContactBar from '../../components/contact bar/ContactBar';
import Footer from '../../components/footer/Footer';
import ContentAboutUs from "./components/ContentAboutUs";
import { useState, useEffect } from 'react';

const AboutUs = () => {
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
