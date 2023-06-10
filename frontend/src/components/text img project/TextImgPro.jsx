import "./TextImgPro.css"

const TextImgPro = ({img, description, service, date}) => {
  return (
    <div>
        <div> <img src={img} alt="Foto principal proyecto" /></div>
        <div>
            <div><span>descripcion del proyecto:</span></div>
            <div>
                <ul>
                    {description.map((n, i) =>{
                        <li key={`key${i}`}>{n}</li>
                    })}
                </ul>
                <span>servicios: {service}</span>
                <hr />
                <span>fecha: {date}</span>
                <hr />
            </div>
        </div>
    </div>
  )
}

export default TextImgPro
