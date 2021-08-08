import React from 'react'
import { Row, Col, Image,Card } from 'react-bootstrap';
import '../App.css'

//import component

import Mouse from '../components/Mouse'

// importing Images
// import Avatar from '../img/ravatar.png'
import Avatar from '../img/avatar.svg'
import Js from "../img/js.svg"
import Sass from "../img/sass.svg"
import Bs from "../img/bootstrap.svg"
import RJs from "../img/reactjs.svg"
import HTML from "../img/html5.svg"
import CSS from "../img/css3.svg"
import RB from "../img/RB.svg"
import MUi from "../img/material-ui.svg"
import TW from "../img/tailwindcss.svg"
import Postman from "../img/postman.svg"
import Git from "../img/git.svg"
import Pokedex from "../img/pokedex.jpg"
import ATLA from "../img/avatartla.jpg"
import What from "../img/whatareu.jpg"

import Resume from '../files/resume.pdf'


const Homepage = () => {
    return (
        <div>
            <Row className="mainRow" style={{backgroundColor:'#2e2e35', 
                minHeight:'85vh' }} >
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
                                <a className="button" href = {Resume} target = "_blank" rel="noopener noreferrer"><button style={{margin:'0px auto', borderRadius: '5px'}}>Resume</button> </a>
                                </Card>    
                        </Col>
                        <Col className="contacts" style={{padding:'2px 10px', margin:'0px auto', display:'flex', justifyContent:'center'}}
                         sm={12} xl ={12}>
                            <a id="link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sudiptaKD">
                                <strong>Linkdin</strong></a>
                            <a id="link" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/sudiptakd/">
                                <strong>Facebook</strong></a>
                            <a id="link" target="_blank" rel="noopener noreferrer"
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
                <Card className='p-1  rounded text-center p-3 ' style={{ border: 'none', backgroundColor:'#2e2e35', margin:'0px auto' }}>
                        <Card.Body>
                            <Card.Title className="skills" style={{color:'#e4aa48',fontSize:"22px"}}>Skills</Card.Title>
                            <Card.Text style={{color:'#dadada'}}>
                                <Row xl={3} lg={3} md={3} sm={3} xs={3} >
                                    <Col className="skill1"><Image src={HTML} style={{width:'48px', height:'48px', marginTop:'11px'}} rounded />
                                        <span className="tooltiptext">HTML5</span>
                                    </Col>
                                    <Col className="skill2"><Image src={CSS} style={{width:'48px', height:'48px', marginTop:'11px'}} rounded />
                                        <span className="tooltiptext">CSS3</span>
                                        </Col>
                                    <Col className="skill3"><Image src={Js} style={{width:'48px', height:'48px', marginTop:'11px'}} rounded />
                                        <span className="tooltiptext">JavaScript </span>
                                    </Col>
                                    <Col className="skill4"><Image src={Bs} style={{width:'48px', height:'48px', marginTop:'11px'}} rounded />
                                        <span className="tooltiptext">Bootstrap</span>
                                    </Col>
                                    <Col className="skill5"><Image src={Sass} style={{width:'48px', height:'48px', marginTop:'11px'}} rounded />
                                        <span className="tooltiptext">Sass</span>
                                    </Col>
                                    <Col className="skill6"><Image src={RJs} style={{width:'48px', height:'48px', marginTop:'11px'}} rounded />
                                        <span className="tooltiptext">React</span>
                                    </Col>
                                    <Col className="skill7"><Image src={RB} style={{width:'48px', height:'48px', marginTop:'11px'}} rounded />
                                        <span className="tooltiptext">React-Bootstrap</span>
                                    </Col>
                                    <Col className="skill8"><Image src={MUi} style={{width:'48px', height:'48px', marginTop:'11px'}} rounded />
                                        <span className="tooltiptext">Material-UI</span>
                                    </Col>
                                    <Col className="skill9"><Image src={TW} style={{width:'48px', height:'48px', marginTop:'11px'}} rounded />
                                        <span className="tooltiptext">Tailwind CSS</span>
                                    </Col>
                                    <Col className="skill10"><Image src={Git} style={{width:'48px', height:'48px', marginTop:'11px'}} rounded />
                                        <span className="tooltiptext">Git</span>
                                    </Col>
                                    <Col className="skill11"><Image src={Postman} style={{width:'44px', height:'44px', marginTop:'11px'}} rounded />
                                        <span className="tooltiptext">Postman</span>
                                    </Col>
                                </Row>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                </Col>
                <Col className="mouseScroll" xs={12} sm={12} md={12} >
                    <Mouse/>
                </Col>
            </Row>
            <Row  id="projects" style={{backgroundColor:'#343a40', minHeight:'100vh'}}>
                <Col sm={12} style={{marginTop:'25px'}}>
                    <h1 style={{textAlign:'center',color:'#e4aa48',fontSize:"30px"}} >Projects</h1>
                </Col>
                <Col xs={12} sm={12} md={6} xl={4}  style={{marginTop:'25px', padding:'15px'}} >
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
                        <Card.Title style={{color:'#e41148',fontSize:"15px"}}>React &ensp; | &ensp; React Bootstrap | &ensp; CSS</Card.Title>
                            <Card.Link target="_blank" href="https://pokemondeck.netlify.app/"
                            id="link2">Live Page</Card.Link>
                            <Card.Link target="_blank" href="https://github.com/SudiptaKD/Pokemon-Deck"
                            id="link2">Code</Card.Link>
                        </Card.Body>
                        </Card>
                </Col>
                <Col xs={12} sm={12} md={6} xl={4} style={{marginTop:'25px', padding:'15px'}}>
                    <Card  className=' p-3 rounded text-center shadow p-3 mb-5' 
                    style={{ width: '22rem',backgroundColor:'#2e2e35',border:'none', margin:'0px auto' }}>
                        <Card.Img variant="top" src={ATLA} />
                        <Card.Body>
                            <Card.Title style={{color:'#e4aa48',fontSize:"20px"}}>Avatar The Last Airbinder</Card.Title>
                            <Card.Text style={{color:'#dadada'}}>
                            Showing Avatar: The Last Airbinder characters.
                             Also you can search through the characters from the API. 
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                        <Card.Title style={{color:'#e41148',fontSize:"15px"}}>React &ensp; | &ensp; CSS</Card.Title>
                            <Card.Link target="_blank" href="https://avatar-the-last-airbinder.netlify.app/"
                            id="link2">Live Page</Card.Link>
                            <Card.Link target="_blank" href="https://github.com/SudiptaKD/Avatar-The-Last-Airbinder"
                            id="link2">Code</Card.Link>
                        </Card.Body>
                        </Card>
                </Col>
                <Col xs={12} sm={12} md={6} xl={4} style={{marginTop:'25px', padding:'15px'}}>
                    <Card  className=' p-3 rounded text-center shadow p-3 mb-5' 
                    style={{ width: '22rem',backgroundColor:'#2e2e35',border:'none', margin:'0px auto' }}>
                        <Card.Img variant="top" src={What} />
                        <Card.Body>
                            <Card.Title style={{color:'#e4aa48',fontSize:"20px"}}>A Responsive Website</Card.Title>
                            <Card.Text style={{color:'#dadada'}}>
                            This is just a responsive website with form functionality. Used CSS Grid, Flexbox and animation.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                        <Card.Title style={{color:'#e41148',fontSize:"15px"}}>HTML &ensp; | &ensp; CSS</Card.Title>
                            <Card.Link target="_blank" href="https://whatareu.netlify.app/"
                            id="link2">Live Page</Card.Link>
                            <Card.Link target="_blank" href="https://github.com/SudiptaKD/SampleLandingPage"
                            id="link2">Code</Card.Link>
                        </Card.Body>
                        </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Homepage
