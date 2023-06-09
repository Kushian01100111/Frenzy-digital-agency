import "./ContentStyles.css"
import Caro from "./../../../assects/imgs/About us/Caro.png"
import Yanina from "./../../../assects/imgs/About us/Yanina.png"


const ContentAboutUs = () => {
  return (
    <div>
      <h1>QUIÉNES ESTÁN DETRÁS DE FRENZY</h1>
      <div className="contentCaro">
        <div className="div51"><img src={Caro} alt="ImageCaro" /></div>
        <div className="caro">
            <h3>CAROLINA ALBARRACÍN</h3>
            <p>soy un creativa multidisciplinaria y experta en
            redes sociales. directora en frenzy media
            boutique.<br/>
            fanática de la estética, la fotografía, generar
            contenido, contar historias y enseñar sobre
            el mundo digital.<br/>
            arranqué hace 5 años trabajando con clientes
            emprendedores muy chicos. hoy somos un
            equipo de profesionales que gestionan
            comunidades en las redes sociales.
            </p>
        </div>
      </div>
      <div className="contentYanina">
        <div className="div61">
            <img src={Yanina} alt="ImageYanina" />
        </div>
        <div className="yanina">
            <h3>YANINA FAOUR</h3>
            <p>el área de expertise de yanina faour es el
                diseño, marketing- ventas y emprendedurismo,
                siendo la más comercial “de las creativas” hoy
                es la cara comercial de la agencia.<br/>
                su background comienza siendo la infante
                terrible de la joyería de lujo en la argentina,<br/>
                una diseñadora de joyas con materiales preciosos, bajo la firma oleana jewelry. en los últimos años ha participado de contados<br/>
                programas de fellowship y mentoreo de mujeres
                líderes en el área de empoderamiento económico.</p>
        </div>
      </div>
    </div>
  )
}

export default ContentAboutUs
