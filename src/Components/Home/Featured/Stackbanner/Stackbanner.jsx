import React from 'react'
import "./stackbanner.css"
import Imageset from './Imageset/Imageset'
import FeaturedBody from './FeaturedBody/FeaturedBody'

const Stackbanner = () => {
    return (
        <div className='featured-main-container'>
            <Imageset />
            <FeaturedBody />
        </div>
    )
}

export default Stackbanner