import React from 'react'
import './Contact.css'
import mail from '../../assets/envelope.svg'
import location from '../../assets/geo-alt-fill.svg'
import phone from '../../assets/phone.svg'
import logo from'../../assets/free.svg' 
const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "9a10b16a-657f-4508-ab48-f3b87c9383b5");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };
  return (
    <div id='contact' className='contact'>
         <div className="contact-title">
            <h1>
                Get in touch
            </h1>
            <img src={logo} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm Currently avaliable to talk on new projects , so feel free to send me a message about anything that you want me to work on . You can contsct anytime .</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail} alt="" /><p>sohaam.deb@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={phone} alt="" /><p>+91-9144140338</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location} alt="" /><p>Kolkata, India</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor=''>Your Name</label>
                <input type="text" placeholder='Enter Your Name' nane='name'/>
                <label htmlFor="">Your Email</label>
                <input type="Email" placeholder='Enter Your Email' name='email'/>
                <label htmlFor="">Write your massage hear</label>
                <textarea name="message" rows='8'placeholder='Enter your massage'></textarea>
                <button  type='submit' className="contact-submit">Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact