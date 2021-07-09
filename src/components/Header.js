import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar,  Row, Nav } from 'react-bootstrap';
import '../App.css'

const Header = () => {
    return (
        <header>
            <Navbar expand="lg" style={{minHeight:'90px', backgroundColor:'#2e2e35'}}
             className=" justify-content-between" collapseOnSelect>
                <Navbar.Brand style={{marginLeft:'30px',  color:'#dadada'}}>
                    <LinkContainer to="/">
                        <Row  >
                        <h2 className='myFName'>Sudipta</h2>
                        <h2 className='myMName'>Kumar</h2>
                        <h2 className='myLName'>Dam</h2>
                        </Row>
                    </LinkContainer>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
                        <Nav className="mr-2">
                            <Nav.Link style={{marginRight:'2px', marginLeft:'60px', color:'#dadada', fontSize:'18px'}} 
                            href="#home">Home</Nav.Link>
                            <Nav.Link style={{marginRight:'2px', marginLeft:'66px' , color:'#dadada', fontSize:'18px'}}
                             href="#projects">Projects</Nav.Link>
                            <Nav.Link style={{marginRight:'150px', marginLeft:'66px', color:'#dadada', fontSize:'18px'}}
                             href="#resume">Resume</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header;