import React, { useContext, useState } from 'react'
import "./featuredbody.css"

import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';

const CustomToggle = ({ children, eventKey, activeKey, setActiveKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey, () => {
        setActiveKey(activeKey === eventKey ? null : eventKey);
    },);

    return (
        <button
            type="button"
            className={activeKey === eventKey ? "toggle-button active" : "toggle-button"}
            onClick={decoratedOnClick}
        >
            {children}
        </button>
    );
}

const AccordionSection = () => {
    const [activeKey, setActiveKey] = useState("0");
    return (
        <Accordion className='accordion-main-container' defaultActiveKey="0">
            <Card className='accordian-card'>
                <Card.Header>
                    <CustomToggle eventKey="0" activeKey={activeKey} setActiveKey={setActiveKey}>Best useful links ?</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>Get the best villa website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the best free CSS templates in the world. Please tell your friends about it.</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className='accordian-card'>
                <Card.Header>
                    <CustomToggle eventKey="1" activeKey={activeKey} setActiveKey={setActiveKey}>How does this work ?</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>Dolor almesit amet, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className='accordian-card'>
                <Card.Header>
                    <CustomToggle eventKey="2" activeKey={activeKey} setActiveKey={setActiveKey}>Why is Villa Agency the best ?</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>Dolor almesit amet, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}

const FeaturedBody = () => {
    return (
        <div className="featured-body-container">
            <p>| FEATURED</p>
            <h2>Best Appartment & Sea view</h2>
            <AccordionSection />
        </div>
    )
}

export default FeaturedBody