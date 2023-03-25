import  "./TextTracker.css"
import main from "../../assects/imgs/0W8A9413.jpg"
import other1 from "../../assects/imgs/1E766062-5AA0-4901-B8B7-9061FA306EA7.JPG"
import other2 from "../../assects/imgs/3D8E4363-4C66-4035-93F5-B8D75450C208.JPG"
import other3 from "../../assects/imgs/C10274BF-E506-4C91-9BD1-A176B3C08CE5.JPG"
import { useRef } from "react";
import {motion as m, useScroll} from "framer-motion";

const TextTracker = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]  
      });

    return (
        <section>
            <div ref={ref} className="ref">
                        <img src={main} alt="Test"  className="main"/>
                        <div className="progress">
                            <span>Descripcion del proyecto</span>
                            <p>Producción de fotos y estilismo para Vichka.</p>
                        </div>
            </div>
            <div className="other">
                <img src={other1} alt="" className="others"/>
                <img src={other2} alt="" className="others"/>
                <img src={other3} alt="" className="others"/>
            </div>
        </section>
        
    )
}

export default TextTracker
