import React, { useState } from 'react'
import './Navbar.css'
import footerlogo from'../../assets/freepik.svg' 
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {

const [menu,setMenu] = useState("home")

  return (
    <div className='navbar'> 
    <img src={footerlogo} alt="" />
    <ul  className="nav-menu">
      
        <li><AnchorLink className='anchor-link'href='#home'><p onDoubleClick={()=>setMenu("home")}>Home</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link'offset={50}href='#about'><p onDoubleClick={()=>setMenu("about me")}>About me</p></AnchorLink> </li>
        <li><AnchorLink className='anchor-link'offset={50}href='#contact'><p onDoubleClick={()=>setMenu("contact")}>Contact</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link'offset={50}href='#footer'><p onDoubleClick={()=>setMenu("footer")}>Footer</p></AnchorLink></li>
    </ul>
    <div className="nav-connect"><AnchorLink className='anchor-link'offset={50}href='#contact'>Connect With Me</AnchorLink></div>
    
    </div>
  )
}

export default Navbar