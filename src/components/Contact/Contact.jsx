import React from 'react'
import './Contact.css'
import {MdOutlineAttachEmail} from 'react-icons/md'
import {SiMessenger} from 'react-icons/si'
import {RiWhatsappFill} from 'react-icons/ri'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
        <artical className="contact_option">
          <MdOutlineAttachEmail className="contact_icon"/>
          <h4>Email</h4>
          <h5>rocklucifer113@gmail.com</h5>
          <a href="mailto:rocklucifer113@gmail.com">Send a message</a>
        </artical>
        <artical className="contact_option">
          <SiMessenger className="contact_icon"/>
          <h4>Messenger</h4>
          <h5>Masud Pervez</h5>
          <a href="https://m.me/masud.pervez.31337">Send a message</a>
        </artical>
        <artical className="contact_option">
          <RiWhatsappFill className="contact_icon"/>
          <h4>WhatsApp</h4>
          <h5>+8801783-307711</h5>
          <a href="https://api.whatsapp.com/send?phone+01783307711">Send a message</a>
        </artical>
        </div> 
        {/* form site */}

        <form action="">
        <input type="text" name='name' placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message"  rows="7" placeholder='Your Message'></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact