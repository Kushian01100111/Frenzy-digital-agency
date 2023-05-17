import './App.css';
import { useEffect, useState } from 'react';
import { useScroll } from 'framer-motion';
import Testimonios from './components/homepage componets/testimonios/Testimonios';
import Services from './components/homepage componets/services/Services';
import Navbar from './components/navbar/Navbar';
import Typewriter from './components/typewriter/Typewriter';
import Potenciamos from './components/homepage componets/potenciamos/Potenciamos';
import Proyects from './components/homepage componets/proyects/Proyects';
import ContactBar from './components/contact bar/ContactBar';

function App() {
  return (
    <div className="App">
        <div className='principalBanner'>
            <Navbar/>
            <Typewriter/>
        </div>
        <div className='contents'>
            <Potenciamos/>
        </div>
        <div className='contents'>
          <Proyects /> 
        </div>
        <div className='contents'>
          <Services />
          {/* <TextTracker/>     Añadirlo mas adelante 23/04*/}
        </div>
        <div className='contentsLastSection'>
             <Testimonios/>
             <ContactBar/>
        </div>
    </div>
  );
}

export default App;
