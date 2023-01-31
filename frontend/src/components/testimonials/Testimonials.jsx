import "./../testimonials/Testimonial.css"

const Testimonials = ({name,company,exp,img}) => {
  return (
    <div>
      <div className="cardTest">
        <div className="content">
            <div>
                <h3>{name}</h3>
                <span>{company}</span>
            </div>
            <div>
                <p>{exp}</p>
            </div>
        </div>
        <div className="preContainerTest">
            <div className="containerTest">
                <div style={{backgroundImage: `url(${img})`}} className="imgTest"></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
