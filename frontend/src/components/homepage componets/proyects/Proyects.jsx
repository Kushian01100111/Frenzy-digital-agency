import "./Proyects.css"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ProjectCards from '../../project cards/ProjectCards'
import Button from "../../Button/Button"

const Proyects = () => {
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
}
useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
}, []);
  return (
    <div className="containerProjects">
        <div><h2>PROYECTOS</h2></div>
        <div className='projectsGrid'>
          <ProjectCards link={"/projects/estudio_barcelona"} title={"estudio barcelona"} description={"rebranding"} img={"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1683483889/Frenzy/Rectangle_3852_yte9pp.png"} pageWidth={width}/>
          <ProjectCards link={"/projects/by_sofía_leather"} title={"by sofía leather"} description={"shooting"} img={"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1683484342/Frenzy/Rectangle_3865_x6dq4o.png"} pageWidth={width}/>
          <ProjectCards link={"/projects/desiderata"} title={"desiderata"} description={"social media"} img={"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1683677461/Frenzy/Rectangle_3852_il5ar8.png"} pageWidth={width}/>
          <ProjectCards link={"/projects/oleana"} title={"oleana jewelry"} description={"shooting"} img={"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1683677536/Frenzy/Rectangle_3852d_ahsptw.png"} pageWidth={width}/>
          <ProjectCards link={"/projects/sarapura"} title={"sarapura"} description={"diseño gráfico"} img={"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1683677470/Frenzy/Rectangle_385g2_oh94ow.png"} pageWidth={width}/>
          <ProjectCards link={"/projects/shooting_vichka"} title={"shooting vichka"} description={"shooting"} img={"https://res.cloudinary.com/dpsobnvtv/image/upload/f_auto/v1683679383/Frenzy/Rectangle_3904_cqwcpa.png"} pageWidth={width}/> 
        </div>
        <div className="buttonMoreProjects"><Link to={"/projects"}><Button text={"MÁS PROYECTOS"}/></Link></div>
    </div>
  )
}

export default Proyects
