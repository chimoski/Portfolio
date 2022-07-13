import React from 'react'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import port1 from '../portf1.jpeg'
import {motion,Variants} from 'framer-motion';





const imageAnim = {
  offScreen:{
    opacity:0,
     x:50,
   },
  onScreen:{
    opacity:1,
    x:0,
    transition:{duration: .5, ease:'linear',}
  }
}

const aboutAnime ={
  offScreen:{
    opacity:0,
    y:200,
  },

  onScreen:{
    opacity:1,
    y:0,
    transition:{duration: 1, ease:'linear',}
  }

}
export const About = React.forwardRef((props, about) => {
  return (
    <section id="about" ref={about}>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div 
      className="container about_container">
        <motion.div
          initial="offScreen"
          whileInView="onScreen"
          variants={imageAnim}
         className="about_me">
          <img 
          src={port1} alt="me" height='100%' />
        </motion.div>
         <div
          className="about_content">
          <div className="about_cards">
            <article className="about_card">
            <FaAward  className="about_icon"/>
              <h5>Experience</h5>
              <small>1+ years working</small>
            </article>
            <article className="about_card">
            <FiUsers  className="about_icon"/>
              <h5>worked with</h5>
              <small>2 startups</small>
            </article>
            <article className="about_card">
            <VscFolderLibrary className="about_icon"/>
              <h5>Projects</h5>
              <small>25+ completed</small>
            </article>
          </div>
          <motion.p
          initial="offScreen"
          whileInView="onScreen"
            variants={aboutAnime}
          >I will describe myself as an industrous and dilligent worker, a problem solver  and someone who has the skills and confidence 
            to match your Job description. Over the period of my experience, I have workked with several people and startups remotely and provided 100% efficiency to each Job.
            I am ready to add value your company or Project. Contact me let's join hands and solve problems together.
          </motion.p>
             <a href="#contact" className='btn btn-primary'>Let's Talk</a>
         </div>
      </div>
    </section>
  )
})
