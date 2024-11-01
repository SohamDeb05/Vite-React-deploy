import React from 'react'
import'./Footer.css'
import footerlogo from'../../assets/freepik.svg' 
import person from'../../assets/person-circle.svg'
const Footer = () => {
  return (
    <div id='footer' className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footerlogo} alt="" />
                <p>
                    I am a full stack developer from, Kolkata with 2 years of experience .
                </p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={person} alt="" />
                    <input type="email" placeholder='Enter your email'/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
        <p className="footer-bottom-left">©️2024 Soham Deb. All right reserved.</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privecy Police</p>
            <p>Connect with me</p>
        </div>
        </div>
    </div>
  )
}

export default Footer