import React from 'react'
import './Hero.css'
import photo from '../../assets/Profail.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={photo} alt=''/>
        <h1><span>I'm Soham Deb ,</span> full stack  developer based in India </h1>
        <p>As a full-stack developer, I possess a comprehensive skill set that enables me to seamlessly navigate the entire development process.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link'offset={50}href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume">My resume </div>
        </div>

    </div>
  )
}

export default Hero
