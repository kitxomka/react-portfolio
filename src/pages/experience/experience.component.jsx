import React from 'react'
import Tilt from 'react-tilt'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from 'react-bootstrap/Card'

// import L_ACCENTURE from '../../assets/img/experience/accenture-3.svg'
import './experience.style.css'

const Experience = () => {
    return (
        <div id="experience">
            <h1 className="pt-3 text-center font-details-b pb-3">Experience</h1>
            <Jumbotron className="jumbo-style">
                <Container>
                    <Tilt options={{ max: 25 }}>
                        <Card>
                            {/* <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                                <Card.Img variant="top" className="img-resize"  alt="Accenture logo" />
                            </Card.Header> */}
                            <Card.Body className="d-flex justify-content-center flex-column">
                                <div>
                                    <Card.Title className="text-center">Name of some company</Card.Title>
                                </div>
                                <div>
                                    <Card.Text className="text-center style">
                                        <strong className="body-title-style ">Full Stack Developer</strong><br />
                                        <strong>Technology:</strong> <br />
                                        <strong>Duration:</strong><br />
                                        <strong> Description </strong>
                                        <ul className="text-left">
                                            <li>Plase holder.</li>
                                            <li>Plase holder.</li>
                                            <li>Plase holder.</li>
                                            <li><strong>Some</strong> Plase holder.</li>
                                        </ul>
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Tilt>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Experience
