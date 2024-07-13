import React from 'react'

export const servicios = [
  {
    title: 'Medicina laboral y del trabajo',
    description: 'Valoración de aptitud laboral de ingreso, periódico y de egreso, trabajo en altura y espacios confinados. <br/> Promoción, prevención y control de la salud de los trabajadores logrando buscar resultados eficientes en el programa de medicina preventiva enmarcado en el SG-SST.',
    img: '/images/compressed_foto12.webp',
  },

  {
    title: 'Audiometría Clínica y Ocupacional.',
    description: 'Terapia de lenguaje, medición de la capacidad auditiva, detección de perdida inducida por ruido, PVE auditiva, atención a trastornos de la comunicación.',
    img: '/images/compressed_Foto2.webp',
  },

  {
    title: 'Pruebas de función pulmonar:',
    description: 'Espirometría - Evaluación de la función pulmonar para el diagnóstico y monitoreo de enfermedades que afectan a los pulmones y dificultan la respiración.',
    img: '/images/compressed_Foto5.webp',
  },

  {
    title: 'Electrocardiograma:',
    description: 'Prueba diagnóstica que registra la actividad eléctrica del corazón con el fin de detectar isquemias y arritmias cardíacas, evaluar los factores de riesgos cardiovasculares y realizar valoración preoperatoria.',
    img: '/images/electrocardiograma.webp',
  },

  {
    title: 'Visiometria:',
    description: 'Valoración de capacidad visual del trabaiador, incluye capaci ad para percepción de colores, profundidad y balance muscular.',
    img: '/images/optometria.webp',
  },

  {
    title: 'Valoración en Psicología: ',
    description: 'Aplicación de pruebas psicotécnicas para el proceso de contratación de personal: prueba psicológica en Salud Ocupacional, prueba psicológica para trabajo en alturas y prueba psicológica para espacios connados.',
    img: '/images/compressed_foto3.webp',
  },

  {
    title: 'Prueba de coordinación motriz: ',
    description: 'En cumplimiento de la Resolución 1565 de 2014, se implementó la prueba de aptitud mental a conductores y evaluación de las capacidades de motricidad na, gruesa, atención y memoria para ingreso laboral de conductores y operadores.',
    img: '/images/conduccion.webp',
  },

  {
    title: 'Laboratorio clínico de I y II nivel:',
    description: 'Manejamos procesos de alta calidad que garantizan confiablidad y exactitud en los resultados, el laboratorio clínico cuenta con equipos automatizados y sistematizados que garantizan la trazabilidad de los exámenes realizados. ',
    img: '/images/compressed_Foto10.webp',
  },

]

const Servicios = () => {
  return (
    <div>
      
      <section className='container space-y-16'>
        {servicios.map( item => <article key={item.title} className="services bg-white border-2 p-8 max-w-6xl mx-auto rounded-xl shadow-xl">
          <div className='text'>
            <h3>{item.title}</h3>
            <p style={{ textAlign: "justify" }}>{item.description}</p>
          </div>
          <figure className='figure shadow-xl shadow-cyan-600' id="medicina">
            <img src={item.img} alt={item.title} className='img ' />
          </figure>
        </article>)}

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