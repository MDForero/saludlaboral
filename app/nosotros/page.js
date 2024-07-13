import React from 'react'


const Nosotros = () => {
  return (
    <div className='space-y-24 mt-24' >
      
      <section className='flex justify-around flex-wrap items-center bg-gray-100 py-8'>

        <article className='bg-white border-2 max-w-2xl p-6 space-y-3 rounded-xl shadow-'>
          <h1 className='text-center text-3xl font-bold '>Misión</h1> 
          <p className="mision">Brindar servicios integrales en Salud Ocupacional al sector empresarial privado y público, creando una cultura preventiva que mitigue los riesgos ocupacionales y aumente la productividad de nuestros clientes, a través de un servicio eficiente y de calidad prestado por profesionales con alta experticia y con calidez humana, propendiendo mejorar la calidad de vida de la comunidad Casanareña, en particular</p>
          <div className='flex justify-center items-center'>
            <figure className="figure">
              <img src={'/images/servicios-salud-ocupacional.webp'} alt="" className='img object-fill' id='misionimg' />
            </figure>

          </div>
        </article>

        <article className='bg-white border-2 max-w-2xl p-6 space-y-3 rounded-xl shadow-'>
           <h1 className='text-center text-3xl font-bold '>Visión</h1> 
          <p className='mision'>La IPS SALUD LABORAL MONTERREY se posicionará como empresa líder en el sur de Casanare en la prestación de servicios de Salud Ocupacional, siendo referentes en la región en la realización de exámenes médicos y paraclínicos laborales, logrando ser reconocida por su <strong>calidad y excelencia operativa</strong> y respondiendo a las necesidades del cliente y a la normatividad respectiva.</p>
          <div className='flex justify-center items-center'>
            <figure className='figure' >
              <img src='/images/about-img.webp'alt="" className="img object-fill" id='misionimg'  />
            </figure>
          </div>
        </article>
      </section >
      <section  className='space-y-12 bg-white'>
          <h2 className='text-center font-bold sm:text-lg md:text-xl lg:text-3xl xl:text-6xl'>Nuestros valores corporativos:</h2>
        <div className='center'>
          <section className='containercard'>
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <div className="icon">
                    <h4 className='textcard'>Responsabilidad</h4>
                  </div>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <h5 className='title3'>
                    Responsabilidad
                  </h5>
                  <p>Cumplimos con motivacón.</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <div className="icon">
                    <h4 className='textcard'>Pasión</h4>
                  </div>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <h5 className='title3'>Pasión</h5>
                  <p>Trabajamos con amor y determinación.</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <div className="icon">
                    <h4 className='textcard'>Calidad</h4>
                  </div>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <h5 className='title3'>Calidad</h5>
                  <p>Lo que hacemos, lo hacemos con excelencia.</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <div className="icon">
                    <h4 className='textcard'>Colaboración</h4>
                  </div>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <h5 className='title3'>Colaboración</h5>
                  <p>Promovemos el crecimiento en equipo</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className='container'>
        <h1 className='text-6xl'>Documentos de interés</h1>
        <article className='pdf'>
          <h2>Registro Especial de Prestadores de Servicio de Salud</h2>
          <iframe src='/file/Licencia.pdf' width="100%" height="100%"></iframe>
        </article>
        <article className='pdf'>
          <h2>Licencia de Prestación de Servicios de Seguridad y Salud en el Trabajo</h2>
          <iframe src='/file/REPS.pdf' width="100%" height="100%"></iframe>
        </article>
        <article className='pdf'>
          <h2>Acreditación en Calidad</h2>
          <iframe src='/file/Acreditacion.pdf' width="100%" height="100%"></iframe>
        </article>
      </section>
    </div>
  )
}

export default Nosotros