import React from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Nav } from './components/Nav'
import { Potfolio } from './components/Potfolio'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Toaster } from 'react-hot-toast'
const App = () => {
  return (
    <>
    <Toaster/>
  <Header />
  <Nav />
  <About />
  <Experience />
  <Services />
  <Potfolio/>
  <Testimonials />
  <Contact />
  <Footer />
    </>
  )
}

export default App