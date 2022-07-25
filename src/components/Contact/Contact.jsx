import React ,{ useState } from "react";
import "./Contact.css";
import { MdOutlineAttachEmail } from "react-icons/md";
import { SiMessenger } from "react-icons/si";
import { RiWhatsappFill } from "react-icons/ri";


const Contact = () => {
  const [form, setForm] = useState({})
  const [data, setData] = useState([])

  const handleChange = ({target})=>{
    setForm({...form,[target.name]:target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setData(form)
    setForm(data)
  }

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <artical className="contact_option">
            <MdOutlineAttachEmail className="contact_icon" />
            <h4 className="text-light fs-5">Email</h4>
            <h5 className="text-muted fs-6">rocklucifer113@gmail.com</h5>
            <a href="mailto:rocklucifer113@gmail.com">Send a message</a>
          </artical>
          <artical className="contact_option">
            <SiMessenger className="contact_icon" />
            <h4 className="text-light fs-5">Messenger</h4>
            <h5 className="text-muted fs-6">Masud Pervez</h5>
            <a href="https://m.me/masud.pervez.31337">Send a message</a>
          </artical>
          <artical className="contact_option">
            <RiWhatsappFill className="contact_icon" />
            <h4 className="text-light fs-5">WhatsApp</h4>
            <h5 className="text-muted fs-6">+8801783-307711</h5>
            <a href="https://api.whatsapp.com/send?phone+01783307711">
              Send a message
            </a>
          </artical>
        </div>
        {/* form site */}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            onChange={handleChange}
          />
          <input type="email" name="email" onChange={handleChange} placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
