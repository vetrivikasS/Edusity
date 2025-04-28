import React, { useState } from 'react'
import './Contact.css'
import Msg_icon from '../../assets/msg-icon.png'
import Mail_icon from '../../assets/mail-icon.png'
import Phone_icon from '../../assets/phone-icon.png'
import Location_icon from '../../assets/location-icon.png'
import White_arrow from '../../assets/white-arrow.png'





const Contact = () => {

  
  const [result, setResult] = useState("");

  const OnSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9efdefa4-49e3-49a1-91cd-2613dc49024a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      
    } else {
      
      setResult("Somthing wnt wrong");
    }
  };
  
  
  

  return (


    <div className='contact'>
       <div className="contact-col">
        <h3>Send us a Message <img src={Msg_icon} alt="" /></h3>
       
       <p>Feel free to reach out through contact from or find our contact information below.Your feedback,questions,and suggestions are important to us we strive to provide exceptional service to our university community.</p>
       <ul>
        <li> <img src={Mail_icon} alt="" />contact@vetrivias.dev</li>
        <li><img src={Phone_icon} alt="" /> +1 123-456-7890</li>
        <li><img src={Location_icon} alt="" />77 Massachusetts Ave,Cambridge <br /> MA02139, United States</li>
       </ul>
       </div>
       <div className="contact-col">
        <form onSubmit={OnSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your name' required />
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required />
            <label>Write your messages</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={White_arrow} alt="" /></button>
        </form>
        <span> {result} </span>
       </div>
    </div>
  )
}

export default Contact