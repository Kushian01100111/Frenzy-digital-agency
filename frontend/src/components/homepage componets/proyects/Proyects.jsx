import React from 'react'
import ProjectCards from '../../project cards/ProjectCards'
import EstudioBarcelona from "../../../assects/imgs/Rectangle 3852.png"

const Proyects = () => {
  return (
    <div>
      <ProjectCards img={EstudioBarcelona} link={"/projects/estudio_barcelona"} title={"estudio barcelona"} description={"rebranding"}/>
      {/* <ProjectCards/>
      <ProjectCards/>
      <ProjectCards/>
      <ProjectCards/>
      <ProjectCards/> */}
    </div>
  )
}

export default Proyects
