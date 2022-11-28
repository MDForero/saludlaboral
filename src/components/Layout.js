import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
import logo from "../images/logo.png"
import Footer from './Footer'
import logosalud from "../images/logosalud.png"

const Layout = () => {
    return (
        <div>
            <section>
                <div className="logo" id="secresalud">
                    <img src={logosalud} alt="Secretaria de salud departamental y MinSalud" width="300px" />
                </div>
            </section>
            <Navbar bg="ligth" expand="lg" >
                <Container>
                    <Navbar.Brand><Link to="/"><img src={logo} width="40px"/></Link></Navbar.Brand>
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