import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'


import Profile from '../../assets/img/profile/profile.webp'

import './about.style.css'

const About = () => {
    return (
        <div id='about'>
            <div className='about'>
                <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
                <Container>
                    <Row className="pt-3 pb-5 align-items-center">
                        {/* Profile Pic */}
                        <Col xs={12} md={6}>
                            <Row className="justify-content-center mb-2 mr-2 ">
                                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
                            </Row>
                        </Col>

                        {/* About Me Description */}
                        <Col xs={12} md={6}>
                            <Row className=" align-items-start p-2 my-details rounded">
                                {/* Description */}
                            Hi there! I am <strong>&nbsp;Alona Shot</strong>
                                <br />A passionate programmer, born in Ukraine and brought up in Israel. I am a Junior Front-End Developer with HTML, CSS JavaScript and React.js as my tech stack.
                            <br />
                            In 2016, I completed Web Programer course in HackerU hi-tech college in Ramat-Gan.
                            <br />
                            Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them.
                            <br />
                            I love learning about new technologies, what problems are they solving and how can I use them to build better and scalable products.
                            <br /> <br />
                            </Row>
                            <Row>
                                {/* Buttons */}
                                <Col className="d-flex justify-content-center flex-wrap">
                                    <div>
                                        <a href="#contact">
                                            <Button className="m-2" variant="outline-primary">Let's Talk</Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://drive.google.com/file/d/1fT8ef24_gxSyH-v4u9sHr51pRkiHnCPY/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-success">My Resume</Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://github.com/kitxomka" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-dark">GitHub</Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://www.linkedin.com/in/alena-shot-14410989/" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-info">LinkedIn</Button>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default About
