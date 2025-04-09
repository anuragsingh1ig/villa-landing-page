import React, { useContext, useState } from 'react'
import "./featuredbody.css"
import json from "./featurebody.json"
import Spacer from '../../Spacer/Spacer'

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
    const [activeKey, setActiveKey] = useState(0);
    return (
        <Accordion className='accordion-main-container' defaultActiveKey={0}>
            {json.cardData.map((el, idx) => {
                return (
                    <Card key={idx + 'cd'}>
                        <Card.Header>
                            <CustomToggle eventKey={idx} activeKey={activeKey} setActiveKey={setActiveKey}>{el.title}</CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={idx}>
                            <Card.Body>{el.body}</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                )
            })}
        </Accordion>
    );
}

const FeaturedBody = () => {
    return (
        <div className="featured-body-container">
            <p>| FEATURED</p>
            <Spacer height={"20px"} />
            <h2>Best Appartment <br /> & Sea view</h2>
            <Spacer height={"50px"} />
            <AccordionSection />
        </div>
    )
}

export default FeaturedBody