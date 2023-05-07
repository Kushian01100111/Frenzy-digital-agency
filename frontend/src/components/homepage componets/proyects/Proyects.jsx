import "./Proyects.css"
import ProjectCards from '../../project cards/ProjectCards'

const Proyects = () => {
  return (
    <div className="containerProjects">
        <div><h2>PROYECTOS</h2></div>
        <div className='projectsGrid'>
          <ProjectCards link={"/projects/estudio_barcelona"} title={"Estudio Barcelona"} description={"rebranding"} img={"https://res.cloudinary.com/dpsobnvtv/image/upload/v1683483889/Frenzy/Rectangle_3852_yte9pp.png"}/>
          <ProjectCards link={"/projects/by_sofía_leather"} title={"By Sofía Leather"} description={"Shooting"} img={"https://res.cloudinary.com/dpsobnvtv/image/upload/v1683484342/Frenzy/Rectangle_3865_x6dq4o.png"}/>
          <ProjectCards/>
          <ProjectCards/>
          <ProjectCards/>
          <ProjectCards/> 
        </div>
        <div></div>
    </div>
  )
}

export default Proyects
