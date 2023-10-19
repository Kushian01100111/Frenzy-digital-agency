import "./ContentProjects.css"
import CardMainProjects from "./CardMainProjects";

const ContentProjects = () => {
  return (
    <div className="contentMainProjects">  
        <div className="contenProjects">
            <CardMainProjects 
            img={"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1683483889/Frenzy/Rectangle_3852_yte9pp.png"}
            title={"estudio barcelona"}
            anchor={"/projects/estudio_barcelona"}
            list={["rediseño de logo que identificara a la marca.", "se desarrollaron 3 propuestas y sus aplicaciones, de dónde salió la propuesta elegida.", "se realizó un manual de marca de uso normativo básico que incluyó el diseño de los distintos elementos visuales que darían identidad a la marca.", "se desarrolló el look & feel para website y redes sociales."]}
            />
            <CardMainProjects
            img={"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1683484342/Frenzy/Rectangle_3865_x6dq4o.png"}
            title={"by sofía leather"}
            anchor={"/projects/by_sofía_leather"}
            list={["organización y producción de fotos para la marca de carteras.", "se realizó la selección y contratación del equipo.", "modelo, fotógrafa, estilista, maquilladora.", "curaduría de material final."]}
            />
            <CardMainProjects
            img={"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1683677461/Frenzy/Rectangle_3852_il5ar8.png"}
            title={"desiderata"}
            anchor={"/projects/desiderata"}
            list={["social media management para la marca de indumentaria femenina desiderata.","diseño de feed, redacción de copies, diseño de Instagram Stories.","estrategia digital."]}
            />
            <CardMainProjects
            img={"https://res.cloudinary.com/dpsobnvtv/image/upload/v1697741158/Frenzy/01_exsvfh.jpg"}
            title={"ginebra - perfume"}
            anchor={"/projects/ginebra_perfume"}
            list={["cobertura audiovisual en evento - perfume metanoia de la marca de indumentaria femenina Ginebra. entrega de contenido (foto y video) en vivo."]}
            />
            <CardMainProjects
            img={"https://res.cloudinary.com/dpsobnvtv/image/upload/v1697743651/Frenzy/01_1_qhg6ja.jpg"}
            title={"ginebra - indumentaria"}
            anchor={"/projects/ginebra_indumentaria"}
            list={["cobertura audiovisual de foto y video para feria de la marca de indumentaria femenina Ginebra."]}
            />
            <CardMainProjects
                img={"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1683677536/Frenzy/Rectangle_3852d_ahsptw.png"}
            title={"oleana jewelry"}
            anchor={"/projects/oleana"}
            list={["producción de fotos para la firma de joyas oleana jewelry."]}
            />
            <CardMainProjects
                img={"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1683677470/Frenzy/Rectangle_385g2_oh94ow.png"}
            title={"sarapura"}
            anchor={"/projects/sarapura"}
            list={["social media management y diseño gráfico para la empresa de dj´s sarapura."]}
            />
            <CardMainProjects
                img={"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1683679383/Frenzy/Rectangle_3904_cqwcpa.png"}
            title={"vichka"}
            anchor={"/projects/shooting_vichka"}
            list={["producción de fotos y estilismo para vichka."]}
            />
        </div>
      
    </div>
  )
}

export default ContentProjects
