import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
import logo from "../images/logobanner.png"
import Footer from './Footer'
import logosalud from "../images/logosalud.png"

const Layout = () => {
    return (
        <div>
            <section>
                <div className="opaco" id="secresalud">
                    <img src={logosalud} alt="Secretaria de salud departamental y MinSalud" width="300px" />
                </div>
            </section>
            <Navbar bg="ligth" expand="lg" >
            <div style={{position:"absolute", top:"2%"}}>
                <figure>
                    <img src={logo} width="300px"/>
                </figure>
            </div>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto" style={{fontSize:"2rem"}}>
                            <Nav.Link>
                                <Link to="/" >Inicio</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="servicios">Servicios</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="nosotros">Nosotros</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="contacto">Contacto</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
            <Footer/>
        </div>
    )
}

export default Layout