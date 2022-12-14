import React from 'react'
import { Carousel } from 'react-bootstrap'
import { slider, sliderempresas } from '../images/data'
import logo from "../images/logo.png"
import fotografia from "../images/compressed_foto1.jpg"
import razon from "../images/calidad.png"


const Inicio = () => {
    return (
        <div>

            <main className="preview">
                <div className='opaco'><img src={logo} width="400px" /></div>
            </main>
            <section style={{ minHeight: "70vh", width: "95%", margin: "0% 3%" }}>
                <center><h2 style={{ fontSize: "3rem", margin: "50px 0px" }}><i>¿Quienes somos?</i></h2></center>
                <div className="services">
                    <div style={{ maxWidth: "600px" }}>
                        <p style={{ textAlign: "justify" }}><strong>Somos una IPS especializada</strong> en la prestación de servicios integrales, asesoría y asistencia en <strong>salud ocupacional y ayudas diagnósticas.</strong> En el área de Medicina Preventiva y del trabajo ofrecemos exámenes médicos ocupacionales de ingreso, periódico y de egreso, Audiometría, Espirometria, Visiometria, Electrocardiograma, Laboratorio Clínico, Psicología, Pruebas para conductores y Centro de imágenes diagnósticas. Basamos nuestra actividad en la responsabilidad, profesionalismo, fiabilidad y cumplimiento, buscando el mejoramiento continuo de nuestros servicios.</p>
                    </div>
                    <img
                        src={fotografia}
                        alt="enfermera"
                        width="300px"
                        height="300px"
                        style={{ borderRadius: "100%", boxShadow: "20px 20px 20px", objectFit: "cover" }}
                    />
                </div>
            </section>
            <section >
                <center><h2 style={{ fontSize: "3rem", margin: "50px 0px" }}><i>Razones para elegirnos</i></h2></center>
                <div id="razon" className="container">
                    <img src={razon} alt="razones por las que nos eligen" width="100%"/>
                </div>
            </section>
            <section style={{margin:"50px 0px"}}>
                <center><h2 style={{ fontSize: "3rem", margin: "50px 0px" }}><i>Empresas que confían en nosotros</i></h2></center>
                <Carousel fade>

                    {sliderempresas.map((element) => <Carousel.Item interval={2000}>
                        <div className='services' style={{ margin: "50px 0px" }} >
                            <div className='wrapper'>
                                {element.map((i) => <img src={i.img} alt={i.alt} width="200px" style={{ margin: "20px 0px" }} />)}
                            </div>
                        </div>
                    </Carousel.Item>
                    )}
                </Carousel>
            </section>
        </div>
    )
}

export default Inicio