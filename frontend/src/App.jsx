import './App.css';
import Testimonios from './components/homepage componets/testimonios/Testimonios';
import Services from './components/homepage componets/services/Services';
import Navbar from './components/navbar/Navbar';
import Typewriter from './components/typewriter/Typewriter';
import Potenciamos from './components/homepage componets/potenciamos/Potenciamos';
import Proyects from './components/homepage componets/proyects/Proyects';
import ContactBar from './components/contact bar/ContactBar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <div className='principalBanner'>
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
             <div>
                <ContactBar/>
                <Footer/>
             </div>
        </div>
    </div>
  );
}

export default App;
