import './App.css';
import { useState, useEffect } from 'react';
import Helmet from "react-helmet";
import Testimonios from './components/homepage componets/testimonios/Testimonios';
import Services from './components/homepage componets/services/Services';
import Navbar from './components/navbar/Navbar';
import Typewriter from './components/typewriter/Typewriter';
import Potenciamos from './components/homepage componets/potenciamos/Potenciamos';
import Proyects from './components/homepage componets/proyects/Proyects';
import ContactBar from './components/contact bar/ContactBar';
import Footer from './components/footer/Footer';

function App() {
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
  return (
    <>
    <Helmet>
        <title>Frenzy Media - Boutique</title>
        <meta name="description" content="Con Frenzy transforma tu presencia en línea, Potencia tu marca, conecta con tu audiencia y alcanza resultados excepcionales en el mundo digital, All Rights Reserved 2023© Frenzy Media. All materials on these pages are copyrighted."/>
        <meta property="og:title" content="Frenzy Media - Boutique"></meta>
        <meta name="twitter:title" content="Frenzy Media - Boutique"></meta>
    </Helmet>
    <div className="App">
      <Navbar width={width}/>
        <div className='principalBanner'>
            <Typewriter/>
        </div>
        <div className='contents'>
            <Potenciamos/>
        </div>
        <div className='contents responsiveProyects'>
          <Proyects /> 
        </div>
        <div className='contents'>
          <Services width={width}/>
        </div>
        <div className='contentsLastSection'>
             <Testimonios/>
             <div className='end'>
                <ContactBar/>
                <Footer/>
             </div>
        </div>
    </div>
    </>
  );
}

export default App;
