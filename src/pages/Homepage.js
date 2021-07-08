import React from 'react'
import { Row, Col, Image,Card } from 'react-bootstrap';

// importing Images
import Avatar from '../img/AvatarMaker.png'
import Js from "../img/js.svg"
import Sass from "../img/sass.svg"
import Bs from "../img/bootstrap.svg"
import RJs from "../img/reactjs.svg"



const Homepage = () => {
    return (
        <div style={{backgroundColor:'#343a40'}}>
            <Row style={{backgroundColor:'#2e2e35', color:'white', 
                minHeight:'400px', padding:'100px 40px 20px 40px' }} >
                <Col sm={4}>
                    <Card className='p-1 my-3 rounded text-center p-3 ' style={{ border: 'none', backgroundColor:'#2e2e35' }}>
                        <Card.Body>
                            <Card.Title style={{color:'#e4aa48',fontSize:"20px"}}>Skills</Card.Title>
                            <Card.Text style={{color:'#dadada'}}>
                                <Row>
                                    <Col><strong>HTML5</strong></Col>
                                    <Col><strong>CSS3</strong></Col>
                                    <Col><Image src={Js} style={{width:'50px', height:'50px'}} rounded /></Col>
                                </Row>
                                <Row>
                                    <Col><Image src={Bs} style={{width:'50px', height:'50px'}} rounded /></Col>
                                    <Col><Image src={Sass} style={{width:'50px', height:'50px'}} rounded /></Col>
                                    <Col><Image src={RJs} style={{width:'50px', height:'50px'}} rounded /></Col>
                                </Row>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                </Col>
                <Col sm={4}>
                    <Image src={Avatar} style={{width:'300px', height:'300px'}} rounded />
                </Col>
                <Col sm={4}>
                ljkhh
                </Col>
            </Row>
        </div>
    )
}

export default Homepage
