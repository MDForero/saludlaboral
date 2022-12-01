import React from 'react'
import logo from "../images/logo.png"
import mision1 from "../images/compressed_Foto8.jpg"
import vision1 from "../images/compressed_Foto5.jpg"
import reps from "../file/REPS.pdf"
import acreditacion from "../file/Acreditacion.pdf"
import licencia from "../file/Licencia.pdf"


const Nosotros = () => {
  return (
    <div>
      <main className="preview">
        <div className='opaco'><img src={logo} width="400px" /></div>
      </main>
      <section className='container center'>

        <article style={{ margin: "0px 20px" }}>
          <center> <h1 className='title'>Misión</h1> </center>
          <p className="mision">Brindar servicios integrales en Salud Ocupacional al sector empresarial privado y público, creando una cultura preventiva que mitigue los riesgos ocupacionales y aumente la productividad de nuestros clientes, a través de un servicio eficiente y de calidad prestado por profesionales con alta experticia y con calidez humana, propendiendo mejorar la calidad de vida de la comunidad Casanareña, en particular</p>
          <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
            <figure className="figure">
              <img src={mision1} alt="" className="img" id='misionimg' />
            </figure>

          </div>
        </article>

        <article style={{ margin: "0px 20px" }}>
          <center> <h1 className='title'>Visión</h1> </center>
          <p className='mision'>La IPS SALUD LABORAL MONTERREY se posicionará como empresa líder en el sur de Casanare en la prestación de servicios de Salud Ocupacional, siendo referentes en la región en la realización de exámenes médicos y paraclínicos laborales, logrando ser reconocida por su <strong>calidad y excelencia operativa</strong> y respondiendo a las necesidades del cliente y a la normatividad respectiva.</p>
          <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>

            <figure className='figure' >
              <img src={vision1} alt="" className='img' id='misionimg' />
            </figure>
          </div>
        </article>
      </section >
      <section  >
        <center >
          <h2 style={{ margin: "40px 0px", fontSize: "3rem" }}>Nuestros valores corporativos:</h2>
        </center>
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
        <h1 style={{ margin: "35px 0px", textAlign: "center", fontSize: "3rem" }}>Documentos de interés</h1>
        <article className='pdf'>
          <h2>Registro Especial de Prestadores de Servicio de Salud</h2>
          <iframe src={reps} width="100%" height="100%"></iframe>
        </article>
        <article className='pdf'>
          <h2>Licencia de Prestación de Servicios de Seguridad y Salud en el Trabajo</h2>
          <iframe src={licencia} width="100%" height="100%"></iframe>
        </article>
        <article className='pdf'>
          <h2>Acreditación en Calidad</h2>
          <iframe src={acreditacion} width="100%" height="100%"></iframe>
        </article>
      </section>
    </div>
  )
}

export default Nosotros