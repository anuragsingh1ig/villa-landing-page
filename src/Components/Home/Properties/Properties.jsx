import React from 'react'
import './properties.css'
import Header from './Header/Header'
import PropertyCard from './PropertyCard/PropertyCard'
import './cardcontainer.css'
import json from './properties.json'
import Spacer from '../Spacer/Spacer'

const CardContainer = () => {
    return (
        <div className='card-container-main'>
            {json.propertyData.map((el, idx) => {
                return <PropertyCard {...el} idx={idx + 1} />
            })}
        </div>
    )
}

const Properties = () => {
    return (
        <div>
            <Header />
            <Spacer height={"100px"} />
            <CardContainer />
        </div>
    )
}

export default Properties