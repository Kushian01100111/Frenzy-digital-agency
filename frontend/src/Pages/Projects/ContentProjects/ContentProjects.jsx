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
            list={["Propuesta de re branding y re naming para estudio de arquitectura."]}
            />
            <CardMainProjects
            img={"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1683484342/Frenzy/Rectangle_3865_x6dq4o.png"}
            title={"by sofía leather"}
            anchor={"/projects/by_sofía_leather"}
            list={["Producción de fotos y estilismo."]}
            />
            <CardMainProjects
            img={"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1683677461/Frenzy/Rectangle_3852_il5ar8.png"}
            title={"desiderata"}
            anchor={"/projects/desiderata"}
            list={["Estrategia Social Media Management."]}
            />
            <CardMainProjects
            img={"https://res.cloudinary.com/dpsobnvtv/image/upload/v1697741158/Frenzy/01_exsvfh.jpg"}
            title={"ginebra"}
            anchor={"/projects/ginebra_perfume"}
            list={["cobertura audiovisual foto/video en evento."]}
            />
            <CardMainProjects
            img={"https://res.cloudinary.com/dpsobnvtv/image/upload/v1697743651/Frenzy/01_1_qhg6ja.jpg"}
            title={"ginebra"}
            anchor={"/projects/ginebra_indumentaria"}
            list={["cobertura audiovisual foto/video en evento."]}
            />
            <CardMainProjects
            img={"https://res.cloudinary.com/dpsobnvtv/image/upload/v1697813815/Frenzy/01_jugpmp.jpg"}
            title={"sb collection"}
            anchor={"/projects/sb_collection"}
            list={<span className="buttelt liProjects">social media management y diseño gráfico para la empresa de sb&nbsp;collection.</span>}
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
            list={<span className="buttelt liProjects">social media management y diseño gráfico para la empresa de dj´s&nbsp;sarapura.</span>}
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
