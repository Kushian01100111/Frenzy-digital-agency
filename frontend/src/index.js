import React from 'react';
import ReactDOM from 'react-dom/client';
import './Reset.css'
import './index.css';
import Error from './Pages/Error';
import App from './App';
import Root from "./Root";
import AboutUs from './Pages/About us/aboutUs';
import Contact from './Pages/Contact/Contact';
import PageTestimonios from './Pages/PageTestimonios/PageTestimonios';
import EstudioBarcelona from './Pages/EstudioBarcelona/EstudioBarcelona';
import BySofiaLeather from './Pages/BySofiaLeather/BySofiaLeather';
import Desiderata from './Pages/Desiderata/Desiderata';


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
