import React from 'react'
import {BsLinkedin, BsGithub, BsTwitter} from 'react-icons/bs'
export const HeaderSocials = () => {
  return (
    <div>
        <div className="header_socials">
            <a href="https://www.linkedin.com/in/princeobi/" target='blank'><BsLinkedin/></a>
            <a href="https://github.com/chimoski" target='blank'><BsGithub/></a>
            <a href="https://twitter.com/Princechamoo" target='blank'><BsTwitter/></a>
        </div>
    </div>
  )
}
