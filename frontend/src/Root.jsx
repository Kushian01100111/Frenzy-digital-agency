import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react";
const Root = () => {
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
    <>
    
    <Outlet context={{width}} />
    </>
  )
}

export default Root
