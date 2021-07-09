import React from 'react'
import { Row, Col, Image,Card } from 'react-bootstrap';

// importing Images
import Avatar from '../img/AvatarMaker.png'
import Js from "../img/js.svg"
import Sass from "../img/sass.svg"
import Bs from "../img/bootstrap.svg"
import RJs from "../img/reactjs.svg"
import HTML from "../img/html5.svg"
import CSS from "../img/css3.svg"
import RB from "../img/RB.svg"
import MUi from "../img/material-ui.svg"
import Pokedex from "../img/pokedex.jpg"
import ATLA from "../img/avatartla.jpg"



const Homepage = () => {
    return (
        <div>
            <Row style={{backgroundColor:'#2e2e35', 
                minHeight:'550px', padding:'100px 30px 20px' }} >
                <Col xs={12} sm={12} md={6} lg={4} xl={4} >
                   <Row>
                       <h3 style={{ margin:'0px auto', color:'#dadada'}}>Front-end web developer</h3>
                   </Row>
                   <Row>
                      <strong  style={{ margin:'0px auto', color:'#dadada'}}> dfgd khfd sjfh ksjh  kjdshf kjsh  kjsh kjsh  kjshd skjh  skjshd kjsh sjhd kjhs s </strong>
                   </Row>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={4}  >
                    <Card className='p-1 my-3 rounded text-center ' 
                        style={{ border: 'none', backgroundColor:'#2e2e35' }}>
                        <Image src={Avatar} style={{width:'300px', height:'300px', margin:'0px auto'}} rounded />
                    </Card>
                </Col>
                <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                <Card className='p-1 my-3 rounded text-center p-3 ' style={{ border: 'none', backgroundColor:'#2e2e35', margin:'0px auto' }}>
                        <Card.Body>
                            <Card.Title style={{color:'#e4aa48',fontSize:"20px"}}>Skills</Card.Title>
                            <Card.Text style={{color:'#dadada'}}>
                                <Row xl={3} lg={3} md={2} sm={2} xs={2} >
                                    <Col><Image src={HTML} style={{width:'50px', height:'50px', marginTop:'11px'}} rounded /></Col>
                                    <Col><Image src={CSS} style={{width:'50px', height:'50px', marginTop:'11px'}} rounded /></Col>
                                    <Col><Image src={Js} style={{width:'50px', height:'50px', marginTop:'11px'}} rounded /></Col>
                                    <Col><Image src={Bs} style={{width:'50px', height:'50px', marginTop:'11px'}} rounded /></Col>
                                    <Col><Image src={Sass} style={{width:'50px', height:'50px', marginTop:'11px'}} rounded /></Col>
                                    <Col><Image src={RJs} style={{width:'50px', height:'50px', marginTop:'11px'}} rounded /></Col>
                                    <Col><Image src={RB} style={{width:'50px', height:'50px', marginTop:'11px'}} rounded /></Col>
                                    <Col><Image src={MUi} style={{width:'50px', height:'50px', marginTop:'11px'}} rounded /></Col>
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
                            <Card.Link href="https://sudiptakd.github.io/Pokedex/">Live Page</Card.Link>
                            <Card.Link href="https://github.com/SudiptaKD/Pokedex">Code</Card.Link>
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
                            <Card.Link href="https://avatar-the-last-airbinder.netlify.app/">Live Page</Card.Link>
                            <Card.Link href="https://github.com/SudiptaKD/Avatar-The-Last-Airbinder">Code</Card.Link>
                        </Card.Body>
                        </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Homepage
