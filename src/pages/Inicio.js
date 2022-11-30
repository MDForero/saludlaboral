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
            <section style={{minHeight:"70vh", width:"95%", margin:"0% 3%"}}>
                <center><h2 style={{ fontSize: "3rem", margin:"50px 0px" }}><i>¿Quienes somos?</i></h2></center>
                <div className="services">
                    <div style={{maxWidth:"600px"}}>
                        <p style={{textAlign:"justify"}}><strong>SALUD LABORAL MONTERREY E.U.</strong>, es una empresa que presta servicios de asesoría y asistencia en el área de salud ocupacional, higiene y seguridad industrial, basando su actividad en la responsabilidad, profesionalismo, discreción, fiabilidad y cumplimiento, buscando el mejoramiento continuo de nuestros servicios.
                        En el área de medicina preventiva y del trabajo ofrecemos valoración de aptitud laboral de ingreso, periódico y de egreso: Médico Especialista en Salud Ocupacional, Audiometría, Espirómetria, Visiometria y Laboratorio Clínico.</p>
                    </div>
                    <img
                        src={fotografia}
                        alt="enfermera"
                        width="300px"
                        height="300px"
                        style={{ borderRadius: "100%", boxShadow: "20px 20px 20px", objectFit:"cover" }}
                    />
                </div>
            </section>
            <section className='razon'>
                <center><h2 style={{fontSize:"3rem", margin:"50px 0px"}}><i>Razones para elegirnos</i></h2></center>           
            <div  id="razon">
                <img src={razon} alt="Razones para elegirnos" width="100%"/>
            </div>
            </section>
            <section>
                <center><h2 style={{fontSize:"3rem", margin:"50px 0px"}}><i>Empresas que confían en nosotros</i></h2></center>
                <Carousel fade>
                    {sliderempresas.map((element) => <Carousel.Item interval={1000}>
                        <div className='services' style={{margin:"50px 0px"}}>
                            {element.map((i) => <img src={i.img} alt={i.alt} width="200px" style={{margin:"20px 0px"}}/>)}
                        </div>
                    </Carousel.Item>
                    )}
                </Carousel>
            </section>
        </div>
    )
}

export default Inicio