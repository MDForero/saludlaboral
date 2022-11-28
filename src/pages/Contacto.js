import React from 'react'
import logo from "../images/logo.png"

const Contacto = () => {
  return (
    <div>
      <main className="preview">
        <div className='opaco'><img src={logo} width="400px" /></div>
      </main>
      <section className='container'>

        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d993.8407094659531!2d-72.89727296941126!3d4.878750145799816!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6ad27f9093a389%3A0xec9408b739401bec!2sIps%20Salud%20Laboral%20Monterrey!5e0!3m2!1ses-419!2sco!4v1669642952978!5m2!1ses-419!2sco" width="600px" height="450px"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </div>
  )
}

export default Contacto