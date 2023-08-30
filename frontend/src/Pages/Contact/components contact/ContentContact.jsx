import "./ContentContact.css"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useState } from "react"
import swal from "sweetalert"
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

        validationSchema: Yup.object({
          nameCompanies: Yup.string()
          .max(20, "name must be 20 charracter or less")
          .required("Debe de escribir un nombre"),
          email: Yup.string()
          .email("Email invalido")
          .required("debe de escribir un mail"),
          mensaje: Yup.string()
          .min(20, "el mensaje debe de poseer minimo 5 caracteres o mas")
          .required("debe de escribir un mensaje para ser enviado.")
        }),

      onSubmit: async (values, {resetForm})=>{
        setWaitingForm(true)
        console.log(values)
          const response = await fetch("/api/form", {
            method: "POST",
            headers:{
              'Content-type': 'application/json',
            },
            body: JSON.stringify(values),
            credentials: "include",
          })

          const json = await response.json()

          if(json){
            setWaitingForm(false)
            resetForm({values: ""})
            console.log("form submitted")
            swal({
              title: "tu mensaje fue enviado!",
              text: "tu mensaje ha sido enviado, ¡espera en breve a que te respondamos!",
              icon: "success",
          })
          }else{
            console.log("Error")
          }
      }
    })

    const firstAnimation = {
      initial: {y: 60, opacity: 0},
      whileInView :{y: 0, opacity: 1, transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2
      }}
    }
  return (
    <m.div className="contectContact"
    variants={firstAnimation}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}>
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
                  <label htmlFor="nameCompanies"
                  className={`${formik.touched.nameCompanies &&formik.errors.nameCompanies 
                  ? "error"
                  : ""}`}>
                  {formik.touched.nameCompanies && formik.errors.nameCompanies 
                  ? formik.errors.nameCompanies
                  : "tu nombre o el nombre tu empresa"}</label>
                    <input type="text" 
                    placeholder="escribe tu nombre"
                    id="nameCompanies"
                    value={formik.values.nameCompanies}
                    onChange={formik.handleChange}
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
                    : "¿en que te podemos ayudar?"}</label>
                    <textarea 
                    name="mensaje" 
                    id="mensaje" 
                    value={formik.values.mensaje}
                    onChange={formik.handleChange}>
                    </textarea>
                </div>
              {waitingForm ? (
                <div className="div105" key={waitingForm}>
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
    </m.div>
  )
}

export default ContentContact
