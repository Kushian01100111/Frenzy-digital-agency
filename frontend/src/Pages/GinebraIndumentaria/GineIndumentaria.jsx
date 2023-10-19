import { useState, useEffect } from 'react';
import Navbar from "../../components/navbar/Navbar";
import ContactBar from "../../components/contact bar/ContactBar";
import Footer from "../../components/footer/Footer";
import TitlesProjects from "../../components/title projects/TitlesProjects";
import ContentIndu from "./ContentIndu/ContentIndu";

const GineIndumentaria = () => {
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
    <div className="mainGine">
        <Navbar width={width}/>
        <TitlesProjects title={"ginebra - indumentaria"}
            services={"shooting"}
        />
        <div className="mainGinebra">
            <ContentIndu/>
        </div>
        <div>
            <ContactBar/>
            <Footer/>
        </div>
    </div>
  )
}

export default GineIndumentaria
