import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer>
            <div >
                <h4>Salud laboral Monterrey IPS</h4>
                <h4>👇!Síguenos en nuestras redes¡👇</h4>
                <ul className="redes">
                    <li><a href='https://www.facebook.com/saludlaboralmonterrey' target="_blank" className='nav-link'><FontAwesomeIcon icon={faFacebook} size="2x" /></a></li>
                    <li><a href='wa.me/+573219251480' className='nav-link' target="_blank"><FontAwesomeIcon icon={faWhatsapp} target="_blank" size="2x" /></a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><Link to="servicios" className='nav-link'>Servicios</Link></li>
                    <li><Link to="nosotros" className='nav-link'>Nosotros</Link></li>
                    <li><Link to='nosotros' className='nav-link'>Misión</Link></li>
                    <li><Link to='nosotros' className='nav-link'>Visión</Link></li>
                </ul>
            </div>
            <div>
                <h4>Horarios de atención</h4>
                <dl>
                    <dt>Lunes - Viernes</dt>
                    <dd> 7:00 am - 5:00 pm</dd>
                    <dt>Sábado</dt>
                    <dd>7:00 am - 11:00 pm</dd>
                </dl>
            </div>
        </footer>
    )
}

export default Footer