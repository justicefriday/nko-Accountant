import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import WhatsAppButton from './components/WhatsApp'
import Footer from './components/Footer'
import Statistics from './components/Statistics'
import Process from './components/Process'

const App = () => {
  return (
      <>
        <Nav />
          <Hero />
          <Statistics />
          
        <About />
          <Services />
          <WhyChooseUs />
          <WhatsAppButton />
          <Process />
          <Footer/>
          
      </>
  )
}

export default App