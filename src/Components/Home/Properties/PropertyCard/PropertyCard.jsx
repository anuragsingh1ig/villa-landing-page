import './propertycard.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const PropertyCard = ({ idx, category, price, title, bedrooms, bathrooms, area, floor, parking }) => {
    return (
        <Card className='property-card' style={{ width: '22rem' }}>
            <Card.Img variant="top" src={`https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/property-0${idx}.jpg`} />
            <Card.Body>
                <div className='price-category-container'>
                    <p className='category-text'>{category}</p> <p className='price-text'>${price}</p>
                </div>
                <Card.Title>{title}</Card.Title>
                <ul className='amenities'>
                    <li>Bedrooms: <strong>{bedrooms}</strong></li>
                    <li>Bathrooms: <strong>{bathrooms}</strong></li>
                    <li>Area: <strong>{area}</strong></li>
                    <li>Floor: <strong>{floor}</strong></li>
                    <li>Parking: <strong>{parking}</strong></li>
                </ul>
                <div style={{ flexGrow: 1 }}></div>
                <hr size="10"/>
                <Button variant="primary">Schedule a Visit</Button>
            </Card.Body>
        </Card>
    );
}

export default PropertyCard;