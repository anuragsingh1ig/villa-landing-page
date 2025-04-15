import React from 'react'
import "./imageset.css"

const Imageset = () => {
    return (
        <div className='featured-image-container'>
            <img width={"100%"} src="https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/featured.jpg" alt="Best Appartment & Sea view" />
            <div className='pop-up-image'>
                <img src="https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/featured-icon.png" alt="Property Details" />
            </div>
        </div>
    )
}

export default Imageset