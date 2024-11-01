import React from 'react'
import './About.css'
import about from '../../assets/About.svg'
import logo from'../../assets/free.svg' 
const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-titel">
            <h1>About Me</h1>
            <img src={logo} alt="" />
        </div>
        <div className="about-sections">
        <div className="about-left">
            <img src ={about} alt='' />
        </div>
        <div className="about-right">
            <div className="about-para">
                
                <p> I have 2 years of experience in this field.Aspiring Full Stack Developer with a strong foundation in web development technologies and a passion for building innovative solutions. Currently pursuing Electronics and Communication Engineering at the Heritage Institute of Technology. Seeking an internship opportunity to apply skills in HTML, CSS, JavaScript, and modern web frameworks to real-world projects while contributing to a dynamic development team.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>HTML & CSS</p><hr style={{width:"50%"}}/>
                </div>
                <div className="about-skill">
                    <p>React JS</p><hr style={{width:"70%"}}/>
                </div>
                <div className="about-skill">
                    <p>JavaScript</p><hr style={{width:"60%"}}/>
                </div>
                <div className="about-skill">
                    <p>jQuery</p><hr style={{width:"50%"}}/>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default About