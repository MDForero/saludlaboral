'use client'
import { Carousel } from 'react-bootstrap'

import { sliderempresas } from './data'


const Inicio = () => {
    return (
        <div className=' space-y-24 '>
            
            <section className='max-w-7xl bg-white  lg:mx-auto sm:mx-2  md:p-2 xl:p-8 border-2 rounded-xl '>
                <h2 className='text-center text-xl md:text-2xl xl:text-6xl'>¿Quienes somos?</h2>
                <div className="flex justify-evenly items-center">
                    <div className='max-w-xl  text-balance'>
                        <p>Somos una IPS especializadaen la prestación de servicios integrales, asesoría y asistencia en salud ocupacional y ayudas diagnósticas. En el área de Medicina Preventiva y del trabajo ofrecemos exámenes médicos ocupacionales de ingreso, periódico y de egreso, Audiometría, Espirometria, Visiometria, Electrocardiograma, Laboratorio Clínico, Psicología, Pruebas para conductores y Centro de imágenes diagnósticas. Basamos nuestra actividad en la responsabilidad, profesionalismo, fiabilidad y cumplimiento, buscando el mejoramiento continuo de nuestros servicios.</p>
                    </div>
                    <img
                        src='/images/compressed_foto1.webp'
                        alt="enfermera"
                        width="300px"
                        height="300px"
                        className='rounded-full shadow-2xl'
                    />
                </div>
            </section>
            <section className='max-w-7xl bg-white  lg:mx-auto sm:mx-2 p-1 md:p-2 xl:p-4 border-2 rounded-xl '>
                <center><h2 style={{ fontSize: "3rem", margin: "50px 0px" }}><i>Razones para elegirnos</i></h2></center>
                <div id="razon" className="container">
                    <img src='/images/calidad.webp' alt="razones por las que nos eligen" width="100%" />
                </div>
            </section>
            <section className='max-w-7xl bg-white  lg:mx-auto sm:mx-2 p-1 md:p-2 xl:p-4 border-2 rounded-xl '>
                <center><h2 style={{ fontSize: "3rem", margin: "50px 0px" }}><i>Empresas que confían en nosotros</i></h2></center>
                <Carousel fade>

                    {sliderempresas.map((element, index) => <Carousel.Item interval={2000} key={index}>
                        <div className='services' style={{ margin: "50px 0px" }} >
                            <div className='wrapper'>
                                {element.map((i, index) => <img key={index} src={i.img} alt={i.alt} width="200px" style={{ margin: "20px 0px" }} />)}
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