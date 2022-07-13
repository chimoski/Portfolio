import React, { useRef } from 'react'
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
import { useEffect } from 'react'


const App = () => {
  const header = useRef(null);
  const about = useRef(null);
  let headerID 
  
  // useEffect(()=>{
  // //  headerID = header.current.getBoundingClientRect()
  // console.log(about.current.getBoundingClientRect().y);
  // console.log(header.current.getBoundingClientRect().y);
  // })
  // console.log(document.body);

  return (
    <>
  <Toaster/>
  <Header ref={header} />
  <Nav  headerID = {headerID}/>
  <About ref={about} />
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