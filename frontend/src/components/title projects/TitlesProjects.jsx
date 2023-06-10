import "./TitlesProjects.css"

const TitlesProjects = ({title, services}) => {
  return (
    <div className="areaTitle">
        <h1>{title}</h1>
        <div className="titleServices"> <hr className="titleBar"/><span>{services}</span> <hr  className="titleBar"/></div>
    </div>
  )
}

export default TitlesProjects
