import React from 'react'
import Hero from '../components/home/Hero'
import HowItWorks from '../components/home/HowItWorks'
import Features from '../components/home/Features'
import CTASection from '../components/home/CTASection'

const Home = () => {
  return (
    <div className='flex flex-col'>
        <Hero />
        <HowItWorks />
        <Features />
        <CTASection />
    </div>
  )
}

export default Home