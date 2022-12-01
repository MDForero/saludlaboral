import React from 'react'
import { Carousel } from 'react-bootstrap'
import { slider, sliderempresas } from '../images/data'
import logo from "../images/logo.png"
import logosalud from "../images/logosalud.png"
import fotografia from "../images/compressed_foto1.jpg"
import razon from "../images/slider.png"

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
                        <p style={{ textAlign: "justify" }}><strong>SALUD LABORAL MONTERREY E.U.</strong>, es una empresa que presta servicios de asesoría y asistencia en el área de salud ocupacional, higiene y seguridad industrial, basando su actividad en la responsabilidad, profesionalismo, discreción, fiabilidad y cumplimiento, buscando el mejoramiento continuo de nuestros servicios. En el área de medicina preventiva y del trabajo ofrecemos valoración de aptitud laboral de ingreso, periódico y de egreso: Médico Especialista en Salud Ocupacional, Audiometría, Espirómetria, Visiometria y Laboratorio Clínico.</p>
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
                    <div className='razon'><div className='razones'><h1>1</h1><p>Somos pioneros en Monterrey Casanare en la implementación y oferta de exámenes ocupacionales, respaldados con una trayectoria en el mercado de más de 12 años, realizamos nuestra actividad con responsabilidad, profesionalismo, discreción y cumplimiento.</p></div><div></div></div>
                    <div className='razon'><div className='razones'><h1>2</h1><p>Somos la única IPS local Certificada en calidad en Medicina del Trabajo y Laboratorio Clínico con Resolución 0397 del 22 de marzo de 2.018, tras el cumplimiento a todos los estándares de calidad establecidos por el Ministerio de Protección social y la Secretaria de Salud.</p></div><div></div></div>
                    <div className='razon'><div className='razones'><h1>3</h1><p>Contamos con un equipo interdisciplinario de profesionales, técnicos y asistentes calificados, certificados y con experiencia en el área de Salud Ocupacional para cubrir la demanda de su empresa en la valoración de sus trabajadores.</p></div><div></div></div>
                    <div className='razon'><div className='razones'><h1>4</h1><p>Todos los equipos biomédicos utilizados para la prestación de nuestros servicios cuentan con: Hoja de vida, control de mantenimiento periódico y calibración avalada por ICONTEC y NORMAS INTERNACIONALES DE CALIBRACIÓN, garantizando confiabilidad en los resultados.</p></div><div></div></div>
                    <div className='razon'><div className='razones'><h1>5</h1><p>El Instituto Nacional de Salud, certifico nuestro LABORATORIO CLÍNICO, por su IDONEIDAD y alto desempeño en química clínica y hematología.</p></div><div></div></div>
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