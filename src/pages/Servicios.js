import React from 'react'
import { slider } from '../images/data'
import logo from "../images/logo.png"
import medicina from "../images/compressed_foto12.jpg"
import audiometria from "../images/compressed_Foto2.jpg"
import pulmonar from "../images/compressed_Foto5.jpg"
import electro from "../images/electrocardiograma.jpg"
import psicologica from "../images/compressed_foto3.jpg"
import psicomotriz from "../images/conduccion.jpg"
import clinico from "../images/compressed_Foto10.jpg"
import optometria from "../images/optometria.jpg"

const Servicios = () => {
  return (
    <div>
      <main className='preview' id="servicios">
        <div className='opaco'><img src={logo} width="400px" /></div>
      </main>
      <section className='container'>
        <article className="services">
          <div className='text'>
            <h3>Medicina laboral - Valoración de aptitud laboral de ingreso, periódico y de egreso, trabajo en altura y espacios confinados:</h3>
            <p style={{textAlign:"justify"}}>Promoción, prevención y control de la salud de los trabajadores logrando buscar resultados eficientes en el programa de medicina preventiva enmarcado en el SG-SST.</p>
          </div>
          <figure className='figure' id="medicina">
            <img src={medicina} alt="Medicina laboral" className='img' />
          </figure>
        </article>

        <article className="services">
          <div className='text'>
            <h3>Audiometría Clínica y Ocupacional. Terapia de lenguaje:</h3>
            <p style={{textAlign:"justify"}}>Medición de la capacidad auditiva, detección de perdida inducida por ruido, PVE auditiva, atención a trastornos de la comunicación.</p>
          </div>
          <figure className='figure' id="audiometría">
            <img src={audiometria} alt="Audiometría" className='img' />
          </figure>
        </article>

        <article className="services">
          <div className='text'>
            <h3>Pruebas de función pulmonar:</h3>
            <p style={{textAlign:"justify"}}>Espirometría - Evaluación de la función pulmonar para el diagnóstico y monitoreo de enfermedades que afectan a los pulmones y dificultan la respiración.</p>
          </div>
          <figure className='figure' id="pulmonar">
            <img src={pulmonar} alt="Medicina   " className='img' />
          </figure>
        </article>

        <article className="services">
          <div className='text'>
            <h3> Electrocardiograma:</h3>
            <p style={{textAlign:"justify"}}>Prueba diagnóstica que registra la actividad eléctrica del corazón con el fin de detectar isquemias y arritmias cardíacas, evaluar los factores de riesgos cardiovasculares y realizar valoración preoperatoria.</p>
          </div>
          <figure className='figure' id="electrocardiograma">
            <img src={electro} alt="Electrocardiograma" className='img' />
          </figure>
        </article>

        <article className="services">
          <div className='text'>
            <h3>Visiometria:</h3>
            <p style={{textAlign:"justify"}}>Valoración de capacidad visual del trabaiador, incluye capaci ad para percepción de colores, profundidad y balance muscular.</p>
          </div>
          <figure className='figure' id="visiometria">
            <img src={optometria} alt="Medicina   " className='img' />
          </figure>
        </article>

        <article className="services">
          <div className='text'>
            <h3> Valoración en Psicología: </h3>
            <p style={{textAlign:"justify"}}>Aplicación de pruebas psicotécnicas para el proceso de contratación de personal: prueba psicológica en Salud Ocupacional, prueba psicológica para trabajo en alturas y prueba psicológica para espacios connados.</p>
          </div>
          <figure className='figure' id="valoracion">
            <img src={psicologica} alt="Valoración psicologica" className='img'  />
          </figure>
        </article>

        <article className="services">
          <div className='text'>
            <h3>Prueba de coordinación motriz: </h3>
            <p style={{textAlign:"justify"}}>En cumplimiento de la Resolución 1565 de 2014, se implementó la prueba de aptitud mental a conductores y evaluación de las capacidades de motricidad na, gruesa, atención y memoria para ingreso laboral de conductores y operadores.</p>
          </div>
          <figure className='figure' id="prueba">
            <img src={psicomotriz} alt="Prueba psicomotriz" className='img' />
          </figure>
        </article>
        <article className="services">
          <div className='text'>
            <h3>Laboratorio clínico de I y II nivel:</h3>
            <p style={{textAlign:"justify"}}> Manejamos procesos de alta calidad que garantizan confiablidad y exactitud en los resultados, el laboratorio clínico cuenta con equipos automatizados y sistematizados que garantizan la trazabilidad de los exámenes realizados. </p>
          </div>
          <figure className='figure' id="laboratorio">
            <img src={clinico} alt="laboratorio clinico" className='img' />
          </figure>
        </article>
        <article>
          <div className='container'>

          <h3>Ofrecemos servicios en el ámbito ocupacional:</h3>
          
          <ul>
            <li>Hematología</li>
            <li>Química sanguínea: Glicemia, hemoglobina glicosilada, colesterol total, triglicéridos, pruebas renales, pruebas hepáticas.</li>
            <li>Pruebas hormonales: TSH, T3 total, T4 total</li>
            <li>Pruebas de embarazo</li>
            <li>Pruebas de sustancias psicoactivas</li>
            <li>Microscopia: Uroanálisis, coprológico, coproscópico, frotis de garganta, KOH de uñas</li>
            <li>Pruebas de virología: dengue, Antígeno de supercie de la hepatitis B (HBsAg), VIH</li>
            <li>Pruebas de parasitología: Chagas</li>
            <li>Pruebas Covid 19: Prueba rápida anticuerpos IgG/IgM, RT-PCR. paraCOVID-19, prueba de antígeno COVID-19 SARS CoV-2.</li>
          </ul>
          </div>
        </article>
      </section>
    </div>
  )
}

export default Servicios