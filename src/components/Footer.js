import React from 'react'
import {FaFacebook,FaLinkedin} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

export const Footer = () => {
  return (
   <footer>
    <a href="#home" className='footer_logo'>P.C.O</a>

    <ul className="permalinks">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#potfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer_socials">
      <a href="https://facebook.com"><FaFacebook/></a>
      <a href="https://linkedin.com"><FaLinkedin /></a>
      <a href="https://instagram.com"><FiInstagram/></a>
      <a href="https://twitter.com"><IoLogoTwitter/></a>
    </div>

    <div className="footer_copyright">
      <small> &copy; 2022 Prince Chimaobi All rights reserved</small>
    </div>
   </footer>
  )
}
