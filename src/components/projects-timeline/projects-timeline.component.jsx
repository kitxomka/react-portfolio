import React from 'react'
import { Timeline, Events, UrlButton, ImageEvent } from '@merc/react-timeline'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'


// Projects Data
import { projects } from './projects-data'


import './projects-timeline.style.css'


const ProjectsTimeline = () => {

    return (
        <div id="projects">
            <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
            <Timeline>
                <Events>
                    {projects.map((project, index) => (
                        <>
                            <ImageEvent className="text-center" key={`${project.projectName}${index}`}
                                
                                src={project.imgSrc} alt={project.imgAltText} date={project.date}>
                                <div className="d-flex justify-content-between flex-column mt-1">
                                    <div>
                                        <Accordion>
                                            <Card>
                                                <Accordion.Toggle  as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">PROJECT DETAILS</Accordion.Toggle>
                                                <Accordion.Collapse eventKey="0" className="text-left">
                                                    <Card.Body>
                                                        <strong>Description :</strong> {project.description}
                                                        <hr />
                                                        <strong>Features:</strong>
                                                        <ul className="list-styles pt-1">
                                                            {project.features.map((feature, index) => (
                                                                <li>{feature}</li>
                                                            ))
                                                            }
                                                        </ul>
                                                        <hr />
                                                        <strong>Tech used:</strong>
                                                        <ul className="list-styles pt-1">
                                                            {project.techUsed.map((tech, index) => (
                                                                <li>{tech}</li>
                                                            ))
                                                            }
                                                        </ul>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        </Accordion>
                                    </div>
                                    <div className="d-flex justify-content-between flex-nowrap text-center">
                                        {!!project.link ? <UrlButton href={project.link} target="_blank"> SEE LIVE</UrlButton> : null}     
                                        {!!project.code ? <UrlButton href={project.code} target="_blank"> SOURCE CODE</UrlButton>   : null}                
                                    </div>
                                </div>   
                            </ImageEvent>
                        </>
                        ))
                    } 
                </Events>
            </Timeline> 
        </div>
    )
}

export default ProjectsTimeline
