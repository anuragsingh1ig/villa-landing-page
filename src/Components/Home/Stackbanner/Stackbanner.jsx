import React from 'react'
import "./stackbanner.css"
import Imageset from './Imageset/Imageset'
import FeaturedBody from './FeaturedBody/FeaturedBody'
import HighlightsPanel from './HighlightsPanel/HighlightsPanel'

const Stackbanner = () => {
    return (
        <div className='featured-main-container'>
            <Imageset />
            <FeaturedBody />
            <HighlightsPanel />
        </div>
    )
}

export default Stackbanner