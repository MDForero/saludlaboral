import React from 'react'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
        <footer>
            <div >
                <h4>!Síguenos en nuestras redes¡</h4>
                <ul className="redes">
                    <li><a href='https://www.facebook.com/elmiradorpanorama' target="_blank" className='nav-link'><FontAwesomeIcon icon={faFacebook} size="2x" /></a></li>
                    <li><a href='https://www.instagram.com/elmiradorpanorama/' target="_blank" className='nav-link'><FontAwesomeIcon icon={faInstagram} size="2x" /></a></li>
                    <li><a href='wa.me/+573219251480' className='nav-link' target="_blank"><FontAwesomeIcon icon={faWhatsapp} target="_blank" size="2x" /></a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><Link to="restaurante" className='nav-link'>Servicios</Link></li>
                    <li><Link to="glamping" className='nav-link'>Nosotros</Link></li>
                    <li><Link to='' className='nav-link'>Misión</Link></li>
                    <li><Link to='' className='nav-link'>Visión</Link></li>
                </ul>
            </div>
            <div>

                <ul>
                    <li><a href='' className='nav-link'>Políticas de privacidad </a></li>
                    <li><a href='' className='nav-link'>Aviso Legal</a></li>
                    <li><a href='' className='nav-link'>Acerca de las Cookies</a></li>
                </ul>
            </div>
            <div>
                <h4>Horarios de atención</h4>
                <dl>
                    <dt>Lunes - Viernes</dt>
                    <dd> pm - 10:00 pm</dd>
                    <dt>Sábado - Domingo</dt>
                    <dd>2:00 pm - 10:00 pm</dd>
                </dl>
            </div>
        </footer>
  )
}

export default Footer