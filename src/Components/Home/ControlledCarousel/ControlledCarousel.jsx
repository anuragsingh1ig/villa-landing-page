import React from 'react'
import { Carousel, Image } from 'react-bootstrap';
import "./controlled-carousel.css"

const ControlledCarousel = () => {
    return <Carousel>
        <Carousel.Item>
            <Image className="carousel-image" src="https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/banner-01.jpg" alt="First slide" />
            <Carousel.Caption>
                <div className="header-text">
                    <p className="category">Toronto, <span>Canada</span></p>
                    <h2>HURRY!<br />Get the best villa for you</h2>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image className="carousel-image" src="https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/banner-02.jpg" alt="Second slide" />
            <Carousel.Caption>
                <div className="header-text">
                    <p className="category">Melbourne, <span>Australia</span></p>
                    <h2>Hurry!<br />Be quick get the best villa in town</h2>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image className="carousel-image" src="https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/banner-03.jpg" alt="Third slide" />
            <Carousel.Caption>
                <div className="header-text">
                    <p className="category">Miami, <span>South Florida</span></p>
                    <h2>Act Now!<br />Get the highest level penthouse</h2>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
}

export default ControlledCarousel