import React from 'react'
import Navbar from './Navbar/Navbar'
import ControlledCarousel from './ControlledCarousel/ControlledCarousel'
import Spacer from './Spacer/Spacer'
import Stackbanner from './Stackbanner/Stackbanner'
import VideoSection from './VideoSection/VideoSection'
import Stats from './Stats/Stats'

const Home = () => {
  return (
    <>
      <Navbar />
      <ControlledCarousel />
      <Spacer height={"100px"} />
      <Stackbanner />
      <Spacer height={"100px"} />
      <VideoSection />
      <Spacer height={"180px"} />
      <Stats />
      <Spacer height={"100px"} />
    </>
  )
}

export default Home