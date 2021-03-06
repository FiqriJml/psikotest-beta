import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Nav } from 'react-bootstrap'

export default function Navigation() {
    return (  
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Administrator-Psikotest</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/tests">Tests</Nav.Link>
                <Nav.Link href="/bank-soal">Bank Soal</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}
