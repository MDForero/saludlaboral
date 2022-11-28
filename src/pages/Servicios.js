import React from 'react'
import { slider } from '../images/data'
import logo from "../images/logo.png"
import medicina from "../images/compressed_foto12.jpg"
import audiometria from "../images/compressed_Foto2.jpg"
import pulmonar from "../images/compressed_Foto5.jpg"
import electro from "../images/compressed_Foto8.jpg"
import psicologica from "../images/compressed_foto3.jpg"
import psicomotriz from "../images/compressed_Foto7.jpg"
import clinico from "../images/compressed_Foto10.jpg"

const Servicios = () => {
  return (
    <div>
      <main className='preview' id="servicios">
        <div className='logo'><img src={logo} width="400px" /></div>
      </main>
      <section className='container'>
        <article className="services">
          <div className='text'>
            <h5>Medicina laboral - Valoración de aptitud laboral de ingreso, periódico y de egreso, trabajo en altura y espacios confinados:</h5>
            <p>Promoción, prevención y control de la salud de los trabajadores logrando buscar resultados eficientes en el programa de medicina preventiva enmarcado en el SG-SST.</p>
          </div>
          <figure className='figure' id="medicina">
            <img src={medicina} alt="Medicina laboral" className='img' />
          </figure>
        </article>

        <article className="services">
          <div className='text'>
            <h5>Audiometría Clínica y Ocupacional. Terapia de lenguaje:</h5>
            <p>Medición de la capacidad auditiva, detección de perdida inducida por ruido, PVE auditiva, atención a trastornos de la comunicación.</p>
          </div>
          <figure className='figure' id="audiometría">
            <img src={audiometria} alt="Audiometría" className='img' />
          </figure>
        </article>

        <article className="services">
          <div className='text'>
            <h5>Pruebas de función pulmonar:</h5>
            <p>Espirometría - Evaluación de la función pulmonar para el diagnóstico y monitoreo de enfermedades que afectan a los pulmones y dicultan la respiración.</p>
          </div>
          <figure className='figure' id="pulmonar">
            <img src={pulmonar} alt="Medicina   " className='img' />
          </figure>
        </article>

        <article className="services">
          <div className='text'>
            <h5> Electrocardiograma:</h5>
            <p>Prueba diagnóstica que registra la actividad eléctrica del corazón con el fin de detectar isquemias y arritmias cardíacas, evaluar los factores de riesgos cardiovasculares y realizar valoración preoperatoria.</p>
          </div>
          <figure className='figure' id="electrocardiograma">
            <img src={electro} alt="Electrocardiograma" className='img' />
          </figure>
        </article>

        <article className="services">
          <div className='text'>
            <h5> Valoración en Psicología: </h5>
            <p>Aplicación de pruebas psicotécnicas para el proceso de contratación de personal: prueba psicológica en Salud Ocupacional, prueba psicológica para trabajo en alturas y prueba psicológica para espacios connados.</p>
          </div>
          <figure className='figure' id="valoracion">
            <img src={psicologica} alt="Valoración psicologica" className='img' />
          </figure>
        </article>
        <article className="services">
          <div className='text'>
            <h5>Prueba de coordinación motriz: </h5>
            <p>En cumplimiento de la Resolución 1565 de 2014, se implementó la prueba de aptitud mental a conductores y evaluación de las capacidades de motricidad na, gruesa, atención y memoria para ingreso laboral de conductores y operadores.</p>
          </div>
          <figure className='figure' id="prueba">
            <img src={psicomotriz} alt="Prueba psicomotriz" className='img' />
          </figure>
        </article>
        <article className="services">
          <div className='text'>
            <h5>Laboratorio clínico de I y II nivel:</h5>
            <p> Manejamos procesos de alta calidad que garantizan conablidad y exactitud en los resultados, el laboratorio clínico cuenta con equipos automatizados y sistematizados que garantizan la trazabilidad de los exámenes realizados. </p>
          </div>
          <figure className='figure' id="laboratorio">
            <img src={clinico} alt="laboratorio clinico" className='img' />
          </figure>
        </article>
      </section>
    </div>
  )
}

export default Servicios