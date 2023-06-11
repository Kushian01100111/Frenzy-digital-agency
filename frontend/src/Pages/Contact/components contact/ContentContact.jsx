import "./ContentContact.css"
import { useFormik } from "formik"
import { useState } from "react"
import {motion as m} from "framer-motion"

const ContentContact = () => {
    const [ waitingForm, setWaitingForm] = useState(false);
    const [hover, setHover] = useState(false)
    const formik =  useFormik({
        initialValues:{
          nameCompanies: "",
          email:"",
          mensaje: ""
        },
    })
  return (
    <div className="contectContact">
        <div className="div91">
            <div>   
                <h1>potenciá tu empresa</h1>
            </div>
            <div>
            <form 
            id="contac" 
            className="contact" 
            onSubmit={formik.handleSubmit}>
            <div className="parent1">
                <div className="div101">
                  <label htmlFor="name"
                  className={`${formik.touched.name &&formik.errors.name 
                  ? "error"
                  : ""}`}>
                  {formik.touched.name && formik.errors.name 
                  ? formik.errors.name
                  : "tu nombre o el nombre tu empresa"}</label>
                    <input type="text" 
                    placeholder="escribe tu nombre"
                    id="nameCompanies"
                    value={formik.values.nameCompanies}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                </div>
                <div className="div102">
                  <label htmlFor="email"
                  className={`${formik.touched.email &&formik.errors.email 
                  ? "error"
                  : ""}`}>
                  {formik.touched.email && formik.errors.email 
                  ? formik.errors.email
                  : "email"}</label>
                    <input type="email" 
                    placeholder="escribe tu email para contarte"
                    id="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    />
                </div>
                <div className="div103">
                    <label htmlFor="mensaje"
                    className={
                    `${formik.touched.mensaje && formik.errors.mensaje
                    ? "error"
                    : ""}`}>
                    {formik.touched.mensaje && formik.errors.mensaje 
                    ? formik.errors.mensaje
                    : "en que te podemos ayudar?"}</label>
                    <textarea 
                    name="mensaje" 
                    id="mensaje" 
                    value={formik.values.mensaje}
                    onChange={formik.handleChange}>
                    </textarea>
                </div>
              {waitingForm ? (<div className="div104" key={waitingForm}>
                  <div className="loader-container">
                    <div className="spinner"></div>
                  </div>
                </div>)
               : (
                <m.div 
                key={waitingForm} className="div105" initial={{opacity:1}} animate={waitingForm ? {opacity: 0}:""}>
                <m.input 
                animate={hover ? {boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.75)" , backgroundColor: "#9CEDFF"}: 
                ""}
                onMouseEnter={()=> setHover(true)}
                onMouseLeave={()=> setHover(false)}
                transition={{duration: "0.4", ease: "easeOut", }}
                type="submit" 
                value="enviar" 
                form="contac"
                id="submit"
                className="button"
                />
              </m.div>
              ) }
              
            </div>
          </form>
            </div>
        </div>
        <div className="div92">
        </div>
    </div>
  )
}

export default ContentContact
