import { useState } from "react";
import "./InterativeText.css"

const InterativeText = ({Text}) => {
  const splitedText = Text.split("")
  const [arrOfStyles, setArrOfStyles] = useState(Array.from({length: splitedText.length}, (v, i) => "notHover")) 
  const startMouse = (i) =>{
    setArrOfStyles(arrOfStyles.map((e,index) =>{
      if(index === i) return "Hover"
      else if(index === i-1) return "Hover"
      else if(index === i-2) return "closeHover"
      else if(index === i+1) return "Hover"
      else if(index === i+2) return "closeHover"
      else return "notHover"
    }))
  };

  const endMouse = () =>{
    setArrOfStyles(arrOfStyles.map((e,index) =>{
        return "notHover"
    }))
  }
  return (
    <div>
      {splitedText.map((elm,i)=>{
        return <span onMouseOver={() => startMouse(i)} onMouseOut={() => endMouse()} key={i}  className={arrOfStyles[i]}>{elm}</span>
      })}
    </div>
  )
}

export default InterativeText
