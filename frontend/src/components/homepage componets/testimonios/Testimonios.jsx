import "./Testimonios.css"
import Testimonials from '../../testimonials/Testimonials'

const Testimonios = () => {
  return (
    <>
    <div className='testShowCase'>
        <Testimonials name={"emilia gazotti"} company={"Vichka Oficial"} position={"Co-Fundadora"} exp={"conocí a la agencia frenzy desde sus inicios. es una agencia con la que podes contar para crear una estrategia 360 de comunicación para tu empresa"} extraExp={".entendiendo 100% el mundo digital proponen también ideas para conectar con el mundo físico. lo logran teniendo un equipo creativo, responsable, innovador y alegre. trabajar con las chicas de frenzy siempre es un verdadero placer."} img={"https://res.cloudinary.com/dpsobnvtv/image/upload/v1684079156/Frenzy/Captura_htfmzn.png"}/>
        <Testimonials name={"agustina petralia"} company={"Desiderata, Grupo Mazalosa"} position={"Analista de marketing"} exp={`trabajar con el equipo de trenzy es casi como tener un equipo indoors. si tuviera que reducirlo solo en una frase diria que : "Tienen la camiseta puesta" y eso para mi vale oro`} extraExp={".la dedicacion, el compromiso, la respuesta inmediata. Aceptar las devoluciones y construir cada dia una dinamica mas consolidada y poderosa que se traduce en una mejora constante de resultdos. tengo la suerte de haber visto el crecimiento exponecial que tuvo el ultimo año, y solo puedo decir que confio cada dia mas en las manos y en la cabeza de una agencia que esta 100% comprometida con mi marca."} img={"https://res.cloudinary.com/dpsobnvtv/image/upload/v1684107306/Rectangle_3857_awwf2t.png"}/>
        <Testimonials name={"montserrat zaefferer"} company={"Sarapura DJs"} position={"Marketing Manager"} exp={"hace más de un año que trabajo con Frenzy y no dejan de soprenderme. fui parte de todo su crecimiento profesional y puedo dar fe que todo lo que hacen lo hacen con la mayor dedicación y profesionalismo, pero sobre todo con amor."} extraExp={"Estoy muy agradecida del gran equipo que me acompaña, asesora y ayuda a llevar mi marca al lugar que siempre soñé. Sin dudas hoy no estaríamos donde estamos sin la agencia. Vamos por más!."} img={"https://res.cloudinary.com/dpsobnvtv/image/upload/v1684277664/Frenzy/Rectangleg_3857_gwtgo2.png"}/>
    </div>
    </>
  )
}

export default Testimonios
