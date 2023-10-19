import React from 'react';
import ReactDOM from 'react-dom/client';
import './Reset.css'
import './index.css';
import Error from './Pages/Error';
import App from './App';
import Root from "./Root";
import AboutUs from './Pages/About us/aboutUs';
import Contact from './Pages/Contact/Contact';
import MainProjects from './Pages/Projects/MainProjects';
import PageTestimonios from './Pages/PageTestimonios/PageTestimonios';
import EstudioBarcelona from './Pages/EstudioBarcelona/EstudioBarcelona';
import BySofiaLeather from './Pages/BySofiaLeather/BySofiaLeather';
import Desiderata from './Pages/Desiderata/Desiderata';
import Oleana from './Pages/Oleana/Oleana'
import Sarapura from './Pages/Sapura/Sarapura';
import ShootingVichka from './Pages/Shooting Vichka/ShootingVichka';
import Ginebra from './Pages/Ginebra/Ginebra';
import GineIndumentaria from './Pages/GinebraIndumentaria/GineIndumentaria';


import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([{
  path: "/",
  element: <Root/>,
  errorElement: <Error/>,
    children:[
      {
        index: true,
        element: <App/>
      },
      {
        path: "/about_us",
        element: <AboutUs/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/testimonials",
        element: <PageTestimonios/>
      },
      {
        path: "/projects",
        element: <MainProjects/>
      },
      {
        path: "/projects/estudio_barcelona",
        element: <EstudioBarcelona/>
      }
      ,
      {
        path: "/projects/by_sofía_leather",
        element: <BySofiaLeather/>
      },
      {
        path: "/projects/desiderata",
        element: <Desiderata/>
      },
      {
        path: "/projects/oleana",
        element: <Oleana/>
      },
      {
        path: "/projects/sarapura",
        element: <Sarapura/>
      },
      {
        path: "/projects/shooting_vichka",
        element: <ShootingVichka/>
      },
      {
        path: "/projects/ginebra_perfume",
        element: <Ginebra/>
      },
      {
        path: "/projects/ginebra_indumentaria",
        element: <GineIndumentaria/>
      }
    ]
}])




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
