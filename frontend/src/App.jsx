import './App.css';
import { useEffect, useState } from 'react';
import { useScroll } from 'framer-motion';
import Button from './components/Button/Button';
import Testimonials from './components/testimonials/Testimonials';
import Services from './components/homepage componets/services/Services';
import Navbar from './components/navbar/Navbar';
import Typewriter from './components/typewriter/Typewriter';
import Potenciamos from './components/homepage componets/potenciamos/Potenciamos';
import Proyects from './components/homepage componets/proyects/Proyects';
import TextTracker from './components/text tracker/TextTracker';

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
          {/* <Button text={"Mas proyectos"} /> */}
        </div>
        <div className='contents'>
          <Services />
          {/* <TextTracker/>     Añadirlo mas adelante 23/04*/}
        </div>
        <div className='contents'>
            <Testimonials name={"Nombre"} company={"Compañia"} exp={"Donec blandit tortor nec tortor lacinia luctus. Nam laoreet quam quis neque pretium, ac pulvinar metus viverra. Donec egestas fringilla pellentesque. Donec et velit at metus semper ullamcorper sed imperdiet nisi. Proin eget dolor in nunc dignissim tincidunt. Nam varius quis dolor mollis malesuada."} img={"https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}/>    
        </div>
    </div>
  );
}

export default App;
