import React from 'react'
import logo from "../images/logo.png"
import mision1 from "../images/compressed_foto14.jpg"
import mision2 from "../images/compressed_foto15.jpg"
import vision1 from "../images/compressed_foto15.jpg"
import vision2 from "../images/compressed_foto15.jpg"

const Nosotros = () => {
  return (
    <div>
      <main className="preview">
        <div className='logo'><img src={logo} width="400px" /></div>
      </main>
      <section className='container'>
        <article className='about'>
          <center> <h1>Misión</h1> </center>
          <p style={{fontSize:"2rem"}}>Brindar servicios integrales en Salud Ocupacional al sector empresarial privado y público, creando una cultura preventiva que mitigue los riesgos ocupacionales y aumente la productividad de nuestros clientes, a través de un servicio eficiente y de calidad prestado por profesionales con alta experticia y con calidez humana, propendiendo mejorar la calidad de vida de la comunidad Casanareña, en particular</p>
          <div style={{ display: "flex" }}>
            <figure>
              <img src={mision1} alt="" width="200px" />
            </figure>
            <figure>
              <img src={mision2} alt="" width="200px" />
            </figure>
          </div>
        </article>

        <article className='about'>
          <center> <h1>Visión</h1> </center>
          <p>La IPS SALUD LABORAL MONTERREY se posicionará como empresa líder en el sur de Casanare en la prestación de servicios de Salud Ocupacional, siendo referentes en la región en la realización de exámenes médicos y paraclínicos laborales, logrando ser reconocida por su <strong>calidad y excelencia operativa</strong> y respondiendo a las necesidades del cliente y a la normatividad respectiva.</p>
          <div style={{ display: "flex" }}>
            <figure>
              <img src={vision1} alt="" width="200px" />
            </figure>
            <figure>
              <img src={vision2} alt="" width="200px" />
            </figure>
          </div>
        </article>
      </section>
    </div>
  )
}

export default Nosotros