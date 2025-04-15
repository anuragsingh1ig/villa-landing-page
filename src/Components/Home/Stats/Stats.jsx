import React from 'react'
import "./stats.css"
import json from './stats.json'
import StatCard from './StatCard/StatCard'

const Stats = () => {
    return (
        <div className='stats-main-container'>
            {
                json.statsData.map((el, idx) => {
                    return <StatCard key={idx + "sts"} card={el} />
                })
            }
        </div>
    )
}

export default Stats