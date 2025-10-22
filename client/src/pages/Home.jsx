import React from 'react'
import Hero from '../components/home/Hero'
import HowItWorks from '../components/home/HowItWorks'

const Home = () => {
  return (
    <div className='flex flex-col'>
        <Hero />
        <HowItWorks />
    </div>
  )
}

export default Home