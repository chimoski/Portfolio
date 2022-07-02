import React from 'react'
import cv from '../assets/cv.pdf'

 const Cta = () => {
  return (
    <div className="cta">
        <a href={cv} download className='btn'>Dowload CV</a>
        <a href="#contact" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default Cta
