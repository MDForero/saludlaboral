import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import logo from "../images/logo.png"

const Contacto = () => {
  return (
    <div>
      <main className="preview">
        <div className='opaco'><img src={logo} width="400px" /></div>
      </main>
      <div style={{margin:"20px 0px"}}>
        <section className='container center' >
          <div style={{margin:"20px 0px"}}>
            <a style={{ display: "flex", alignItems: "center", justifyContent: "center" }} target="_blank" href='https://wa.me/+573112038078'><FontAwesomeIcon icon={faWhatsapp} size="3x" beat /><p><strong>Escribenos</strong></p></a>
          </div>
          <div style={{margin:"20px 0px"}}>
            <a style={{ display: "flex", alignItems: "center", justifyContent: "center" }} target="_blank" href='tel:+573112038078'><FontAwesomeIcon icon={faPhone} size="3x" beat /><p><strong>+57 311 2038 078</strong></p></a>
          </div>
          <div style={{margin:"20px 0px"}}>
            <a style={{ display: "flex", alignItems: "center", justifyContent: "center" }} target="_blank" href='mailto:saludlaboralmonterrey@gmail.com'><FontAwesomeIcon icon={faEnvelope} size="3x" beat /><p><strong>saludlaboralmonterrey@gmail.com</strong></p></a>
          </div>
        </section>
      </div>
        <section className='container'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d993.8407094659531!2d-72.89727296941126!3d4.878750145799816!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6ad27f9093a389%3A0xec9408b739401bec!2sIps%20Salud%20Laboral%20Monterrey!5e0!3m2!1ses-419!2sco!4v1669642952978!5m2!1ses-419!2sco" width="100%" height="450px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
    </div >
  )
}

export default Contacto