import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Statistics from './components/Statistics'
// import About from './components/About'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Process from './components/Process'
import Testimonials from'./components/Testimonials'
import Contact from'./components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsApp'


const App = () => {
  return (
      <>
        <Nav />
          <Hero />
           <Statistics />
           {/* <About /> */}

          <Services />
          <WhyChooseUs />
          <Testimonials/>
          <Process />
          <Contact/>
          <WhatsAppButton />

          <Footer/> 
          
      </>
  )
}

export default App