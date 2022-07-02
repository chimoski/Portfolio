import React from 'react'
import image from '../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

export const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <img src={image} alt="me" />
        </div>
         <div className="about_content">
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
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Magnam sapiente accusamus ipsum necessitatibus voluptate 
            consectetur assumenda quos, recusandae ad? Natus ullam possimus
             blanditiis est officiis autem esse dolor, corporis commodi?</p>
             <a href="#contact" className='btn btn-primary'>Let's Talk</a>
         </div>
      </div>
    </section>
  )
}
