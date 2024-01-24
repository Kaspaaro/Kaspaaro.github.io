import {Col, Container, Row} from "react-bootstrap";
import '../cssFiles/sectionOne.css'
import Three3D from "./Three3D";
import React from "react";
const ExperienceTimeline = () => {
    const experiences = [
        {
            title: "BRAVORI OY - JUNIOR FULL-STACK DEVELOPER",
            date: "May 2023 - Nov 2023",
            description1: "• Developed a mobile-software / application (Typescript,React Native.js)",
            description2: "• Designed and developed websites with javascript and wordpress",
            description3: "• Developed and designed data with firebase."
        },
        {
            title: "OMNIA - IT-HELPDESK STAFF",
            date: "Jan 2021 - May 2021",
            description1: "• Problem Documenting",
            description2: "• Helping a customer with IT related difficulties",
            description3: "• Updating softwares on school machines",
            description4: "• Guiding customers how to use VR-Devices"
        },

        {
            title: "ALACARTE COOK",
            date: "May 2017 - May 2021",
            description1: "• Customer Service",
            description2: "• Food preparation",
            description3: "• Taking in customer's orders ",
            description4: "• Discussing orders with the customer",
            description5: "• Catering food preparation"
        },
    ];

    return (
        <section className={'timeLineSection'}>
        <Container>
            <Row>
                <Col md={6} className="timeline">
                    {experiences.map((experience, index) => (
                        <div key={index} className="experienceDiv">
                            <div className="timeline-content">
                                <h5 className={'glowTexttimelineH5'}>{experience.title}</h5>
                                <p className="glowTexttimelineParag">{experience.date}</p>
                                <p className="glowTexttimelineParagTwo">
                                    {experience.description1}<br/>
                                    {experience.description2}<br/>
                                    {experience.description3}<br/>
                                    {experience.description4}<br/>
                                    {experience.description5}
                                </p>
                            </div>
                        </div>
                    ))}
                </Col>
            </Row>
        </Container>
        </section>
    );
};

export default ExperienceTimeline;
