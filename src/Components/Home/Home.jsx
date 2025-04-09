import React from 'react'
import Navbar from './Navbar/Navbar'
import ControlledCarousel from './ControlledCarousel/ControlledCarousel'
import Featured from './Featured/Featured'
import Spacer from './Spacer/Spacer'

const Home = () => {
  return (
    <>
      <Navbar />
      <ControlledCarousel />
      <Spacer height={"100px"} />
      <Featured />
      <Spacer height={"100px"} />
    </>
  )
}

export default Home