import React from 'react'
import Home from './Components/Home'
import './App.css'
import About from './Components/About'
import Work from './Components/Work'
import Testimonial from './Components/Testimonial'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='App'>
      <Home/>
      <About/>
      <Work/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App