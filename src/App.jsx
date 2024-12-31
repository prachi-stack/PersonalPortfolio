import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Navbar, About, Contact, Hero, Projects, StarsCanvas } from './components'


const App = () => {
  return (
    <BrowserRouter>
      <div  className='relative z-0 bg-black'> 
        <div >
          <Navbar />
          <Hero />
        </div> 
        <About />
        
        <div className='relative z-0'>
        <Projects /> 
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
    
  )
}

export default App