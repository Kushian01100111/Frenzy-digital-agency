import './App.css';
import { useState, useEffect } from 'react';
import Testimonios from './components/homepage componets/testimonios/Testimonios';
import TestimoniosTablet from './components/homepage componets/testimonios/TestimoniosTablet';
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
          <Services />
        </div>
        <div className='contentsLastSection'>
            { width <= 1090 ? <TestimoniosTablet/> : <Testimonios/>}
             <div>
                <ContactBar/>
                <Footer/>
             </div>
        </div>
    </div>
  );
}

export default App;
