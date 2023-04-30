import "./Typewrite.css"
import Typewriter from "typewriter-effect";


const Typewriters = () => {
  return (
    <>
    <Typewriter
  
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString("GeeksForGeeks")
         
       .pauseFor(1000)
       .deleteAll()
       .typeString("Welcomes You")
       .start();
       }}
       />
    </>
  )
}

export default Typewriters
