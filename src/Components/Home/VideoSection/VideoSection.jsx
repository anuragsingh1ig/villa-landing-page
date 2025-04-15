import React from 'react'
import './videosection.css'

const VideoSection = () => {
    return (
        <section className='videosection-main-container'>
            <div className='videosection-content'>
                <h6>
                    | Video View
                </h6>
                <h2>
                    Get Closer View & <br /> Different Feeling
                </h2>
            </div>

            <div className='videosection-modal'>
                <iframe className='youtube-video-player' width="889rem" height="500rem"
                    src="https://www.youtube.com/embed/R_9-JElwV2A?si=nFMpPfXcUZ2UtE0o"
                    title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </section>
    )
}

export default VideoSection