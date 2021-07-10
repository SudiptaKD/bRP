import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar,  Row, Nav } from 'react-bootstrap';
import '../App.css'

import Resume from '../files/resume.pdf'

const Header = () => {
    return (
        <header>
            <Navbar id="home" expand="lg" style={{minHeight:'90px', backgroundColor:'#2e2e35', padding:'20px 10px 0px 10px'}}
             className=" justify-content-between" collapseOnSelect>
                <Navbar.Brand style={{marginLeft:'30px',  color:'#dadada'}}>
                    <LinkContainer to="/">
                        <Row  >
                        <h1 className='myFName'>Sudipta</h1>
                        <h1 className='myMName'>Kumar</h1>
                        <h1 className='myLName'>Dam</h1>
                        </Row>
                    </LinkContainer>
                    </Navbar.Brand>
                    <Navbar.Toggle className="toggle" aria-controls="basic-navbar-nav" style={{margin:'0px auto'}} />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end"  >
                        <Nav style={{margin:'0px auto'}}>
                            <Nav.Link id="n" style={{margin:'0px  auto', color:'#dadada', fontSize:'18px'}} 
                            href="#home" className='home'>Home</Nav.Link>
                            <Nav.Link id="n"  style={{margin:'0px  auto' , color:'#dadada', fontSize:'18px'}}
                             href="#projects" className='projects'>Projects</Nav.Link>
                            <Nav.Link id="n"  style={{margin:'0px auto', color:'#dadada', fontSize:'18px'}}
                             href = {Resume} target = "_blank" className='resume'>Resume</Nav.Link>
                             <Nav.Link id="n" target="_blank" style={{margin:'0px auto', color:'#dadada', fontSize:'18px'}}
                             href="https://github.com/SudiptaKD" className='github'>Github</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header;