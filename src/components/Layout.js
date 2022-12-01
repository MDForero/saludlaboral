import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink, Outlet } from 'react-router-dom'
import logo from "../images/logobanner.png"
import Footer from './Footer'
import logosalud from "../images/logosalud.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faSquareWhatsapp, faWhatsapp, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'

const Layout = () => {

    let activeStyle = {
        textDecoration: "underline",
    };

    let activeClassName = "underline";

    return (
        <div>
            <section>
                <div className="opaco" id="secresalud" >
                    <div style={{color:"black"}} >
                        <a  href="https://wa.me/+573112038078" style={{color:"black", margin:"0px 10px"}}><FontAwesomeIcon icon={faWhatsapp}/><span><strong>+573112038078</strong></span></a>
                        <a href="mailto:saludlaboralmonterrey@gmail.com" style={{color:"black", margin:"0px 10px"}}><FontAwesomeIcon icon={faEnvelope}/><span><strong>saludlaboralmonterrey@gmail.com</strong></span></a>
                    </div>
                    <strong>Licencia en S.O. 1165 - 01 de octubre de 2021</strong>
                </div>
            </section>
            <Navbar bg="ligth" expand="lg" sticky='top' style={{background:"#fff"}}>
                <Container>
                <div style={{ position: "relative", top: "2%" }}>
                    <figure>
                        <img src={logo} width="300px" />
                    </figure>
                </div>
                    <Navbar.Brand></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto" style={{ fontSize: "2rem" , float:"right"}}>

                            <NavLink to="/"
                                className={({ isActive }) =>
                                    isActive ? "nav-link " + activeClassName : "nav-link"
                                } >Inicio</NavLink>

                            <NavLink to="nosotros"
                                className={({ isActive }) =>
                                    isActive ? "nav-link " + activeClassName : "nav-link"
                                }>Nosotros</NavLink>

                            <NavLink to="servicios"
                                className={({ isActive }) =>
                                    isActive ? "nav-link " + activeClassName : "nav-link"
                                }>Servicios</NavLink>


                            <NavLink to="contacto"
                                className={({ isActive }) =>
                                    isActive ? "nav-link " + activeClassName : "nav-link"
                                }>Contacto</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout