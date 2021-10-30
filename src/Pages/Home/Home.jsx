import React from 'react'
import About from '../../components/About/About'
import Banner from '../../components/Banner/Banner'
import Features from '../../components/Features/Features'
import Tours from '../../components/Tours/Tours'

const Home = () => {
  return (
    <div id="home">
      <Banner />
      <Tours />
      <Features />
      <About />
    </div>
  )
}

export default Home
