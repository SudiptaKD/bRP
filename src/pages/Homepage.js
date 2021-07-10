import React from 'react'
import { Row, Col, Image,Card, Button } from 'react-bootstrap';

// importing Images
import Avatar from '../img/avatar.svg'
import Js from "../img/js.svg"
import Sass from "../img/sass.svg"
import Bs from "../img/bootstrap.svg"
import RJs from "../img/reactjs.svg"
import HTML from "../img/html5.svg"
import CSS from "../img/css3.svg"
import RB from "../img/RB.svg"
import MUi from "../img/material-ui.svg"
import Git from "../img/git.svg"
import Pokedex from "../img/pokedex.jpg"
import ATLA from "../img/avatartla.jpg"

import Resume from '../files/resume.pdf'



const Homepage = () => {
    return (
        <div>
            <Row style={{backgroundColor:'#2e2e35', 
                minHeight:'550px', padding:'80px 30px 20px' }} >
                <Col xs={12} sm={12} md={6} lg={4} xl={4} >
                   <Row>
                       <h3 className="frontend" style={{ margin:'50px auto 10px', color:'#dadada'}}>
                           Front-end <span style={{color:'#e4aa48'}}>web</span> developer</h3>
                   </Row>
                   <Row>
                      <strong className='frontend-text' style={{ margin:'10px auto', color:'#dadada', textAlign:'center'}}>
                           Familiarizing myself with Web. Currently working on React JS skills as a newbie </strong>
                   </Row>
                   <br/>
                   <Row >
                        <Col sm={12} xl={12} >
                            <Card className='p-1 rounded text-center p-3 ' 
                            style={{ border: 'none', backgroundColor:'#2e2e35', margin:'0px auto' }}>
                                <a className="button" href = {Resume} target = "_blank"><button style={{margin:'0px auto'}}>Resume</button> </a>
                                </Card>    
                        </Col>
                        <Col className="contacts" style={{padding:'20px 10px', margin:'0px auto', display:'flex', justifyContent:'center'}} sm={12} xl ={12}>
                            <a id="link" target="_blank" href="https://www.linkedin.com/in/sudiptaKD">
                                <strong>Linkdin</strong></a>
                            <a id="link" target="_blank" href="https://www.facebook.com/sudiptakd/">
                                <strong>Facebook</strong></a>
                            <a id="link" target="_blank" 
                            href="https://mail.google.com/mail/u/0/?fs=1&to=sudiptakumardam@gmail.com&tf=cm">
                                <strong>Gmail</strong></a>
                        </Col>
                   </Row>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={4}  >
                    <Card className='p-1 my-3 rounded text-center ' 
                        style={{ border: 'none', backgroundColor:'#2e2e35' }}>
                        <Image className="avatar" src={Avatar} style={{width:'300px', height:'300px', margin:'0px auto'}} rounded />
                    </Card>
                </Col>
                <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                <Card className='p-1 my-3 rounded text-center p-3 ' style={{ border: 'none', backgroundColor:'#2e2e35', margin:'0px auto' }}>
                        <Card.Body>
                            <Card.Title className="skills" style={{color:'#e4aa48',fontSize:"22px"}}>Skills</Card.Title>
                            <Card.Text style={{color:'#dadada'}}>
                                <Row xl={3} lg={3} md={3} sm={3} xs={3} >
                                    <Col className="skill1"><Image src={HTML} style={{width:'50px', height:'50px', marginTop:'13px'}} rounded /></Col>
                                    <Col className="skill2"><Image src={CSS} style={{width:'50px', height:'50px', marginTop:'13px'}} rounded /></Col>
                                    <Col className="skill3"><Image src={Js} style={{width:'50px', height:'50px', marginTop:'13px'}} rounded /></Col>
                                    <Col className="skill4"><Image src={Bs} style={{width:'50px', height:'50px', marginTop:'13px'}} rounded /></Col>
                                    <Col className="skill5"><Image src={Sass} style={{width:'50px', height:'50px', marginTop:'13px'}} rounded /></Col>
                                    <Col className="skill6"><Image src={RJs} style={{width:'50px', height:'50px', marginTop:'13px'}} rounded /></Col>
                                    <Col className="skill7"><Image src={RB} style={{width:'50px', height:'50px', marginTop:'13px'}} rounded /></Col>
                                    <Col className="skill8"><Image src={MUi} style={{width:'50px', height:'50px', marginTop:'13px'}} rounded /></Col>
                                    <Col className="skill9"><Image src={Git} style={{width:'50px', height:'50px', marginTop:'13px'}} rounded /></Col>
                                </Row>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                </Col>
            </Row>
            <Row id="projects" style={{backgroundColor:'#343a40'}}>
                <Col sm={12} style={{marginTop:'25px'}}>
                    <h1 style={{textAlign:'center',color:'#e4aa48',fontSize:"30px"}} >Projects</h1>
                </Col>
                <Col xs={12} sm={12} md={6}  style={{marginTop:'25px', padding:'15px'}} >
                    <Card  className=' p-3 rounded text-center shadow p-3 mb-5 ' 
                    style={{ width: '22rem',backgroundColor:'#2e2e35', border:'none', margin:'0px auto' }}>
                        <Card.Img variant="top" src={Pokedex} />
                        <Card.Body>
                            <Card.Title style={{color:'#e4aa48',fontSize:"20px"}}>Pokemon Deck</Card.Title>
                            <Card.Text style={{color:'#dadada'}}>
                            A React app showing Pokemons and their stats. All the data the app getting from a collection of API's
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link target="_blank" href="https://sudiptakd.github.io/Pokedex/"
                            id="link2">Live Page</Card.Link>
                            <Card.Link target="_blank" href="https://github.com/SudiptaKD/Pokedex"
                            id="link2">Code</Card.Link>
                        </Card.Body>
                        </Card>
                </Col>
                <Col xs={12} sm={12} md={6} style={{marginTop:'25px', padding:'15px'}}>
                    <Card  className=' p-3 rounded text-center shadow p-3 mb-5' 
                    style={{ width: '22rem',backgroundColor:'#2e2e35',border:'none', margin:'0px auto' }}>
                        <Card.Img variant="top" src={ATLA} />
                        <Card.Body>
                            <Card.Title style={{color:'#e4aa48',fontSize:"20px"}}>Card Title</Card.Title>
                            <Card.Text style={{color:'#dadada'}}>
                            Showing Avatar: The Last Airbinder characters.
                             Also you can search through the characters from the API. 
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link target="_blank" href="https://avatar-the-last-airbinder.netlify.app/"
                            id="link2">Live Page</Card.Link>
                            <Card.Link target="_blank" href="https://github.com/SudiptaKD/Avatar-The-Last-Airbinder"
                            id="link2">Code</Card.Link>
                        </Card.Body>
                        </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Homepage
