import "./Typewrite.css"
import Typewriter from "typewriter-effect";


const Typewriters = () => {
  return (
    <>
      <div className="typewriter">
        <Typewriter
        options={{
          strings: ['<span style="font-family: FrankGoth;">FRENZY IS </span> <span style="font-family: Clearface Italic;">-A MEDIA BOUTIQUE</span>', '<span style="font-family: FrankGoth;">CREAMOS EXPERIENCIAS MULTICANAL ÚNICAS</span>', '<span style="font-family: FrankGoth;">HACEMOS FOCO EN RESULTADOS</span>'],
          autoStart: true,
          loop: true,
        }}
        />
      </div>
      
    </>
  )
}

export default Typewriters
