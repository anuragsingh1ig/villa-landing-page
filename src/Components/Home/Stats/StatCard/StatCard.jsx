import React from 'react'
import './statcard.css'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const StatCard = ({ card }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5
    });

    return (
        <div className='statcard-main-container' ref={ref}>
            <div className="statcard-circle" />
            <h1>
                {inView ? <CountUp end={card.count} duration={2} /> : 0}
            </h1>
            <p>{card.caption}</p>
        </div>
    );
}

export default StatCard