import "./ProjectCards.css"
import Projecto1 from "./../../assects/imgs/proyecto #1.jpg"
// import {Link} from "react-router-dom"

const ProjectCards = () => {
  return (
    <div className="container">
     <a href="https://www.instagram.com/pedro_comas/" target="_blank" rel="noopener noreferrer">
        <div className="card">
            <div className="containerImg">
                <img src="https://images.unsplash.com/photo-1671726203382-8ea3393d7ad6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)" alt=""  className="img"/>
            </div>
            <div className="text">
                <h3>Proyecto #1</h3>
                <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
            </div>
        </div>
     </a>
    </div>
  )
}

export default ProjectCards
