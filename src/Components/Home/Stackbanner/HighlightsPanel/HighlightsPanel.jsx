import React from 'react'
import json from './highlightspanel.json'
import "./highlightspanel.css"

const HighlightsPanel = () => {
    return (
        <section className='highlights-main-container'>
            <ul className='higlights-list'>
                {
                    json.highlightData.map((el, idx) => {
                        return (
                            <li key={idx + "hl"}>
                                <div>
                                    <img src={el.imgSrc} alt={el.title} />
                                </div>
                                <div className='highlights-content'>
                                    <h4>{el.title}</h4><span>{el.caption}</span>
                                </div>
                                <hr />
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default HighlightsPanel