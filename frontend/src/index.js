import React from 'react';
import ReactDOM from 'react-dom/client';
import './Reset.css'
import './index.css';
import App from './App';
import Root from "./Root";

import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([{
  path: "/",
  element: <Root/>,
    children:[
      {
        index: true,
        element: <App/>
      },
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
