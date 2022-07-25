import React from 'react'
import './services.css'
import {BiCheckDouble} from 'react-icons/bi'


const data = [
  {
    id : 101,
    heading: 'UI/UX Design',
    details1: 'How are UI design and UX design related?',
    details2: 'What are the drawbacks with a combined UI/UX role?',
    details3: 'How do UX and UI designers work together?',
    details4: "What's the role of research in the UX/UI design process?",
    details5: "What are the drawbacks with a combined UI/UX role?",
  },
  {
    id : 102,
    heading: 'Web Development',
    details1: 'Why is web development important?',
    details2: 'How to find a web development services company?',
    details3: 'Why would I need to use web development services?',
    details4: "How much do web development services cost?",
    details5: "How you can show your show yourself online?",
  },
  {
    id : 103,
    heading: 'Content Creation',
    details1: 'We create content that converts.',
    details2: 'Every asset aligns with your commercial goals.',
    details3: 'Great website content informs, entertains, and inspires.',
    details4: "Video is the future. Across all channels, all site visitors, and all formats.",
    details5: "video is an investment you can’t afford to cut.",
  },
]


const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container Services_container">
        {
          data.map((item=> (
            <article className="service" key={item.id}>
              <div className="service_head">
                <h3>{item.heading}</h3>
              </div>
              <ul className='service_list'>
                <li>
                  <BiCheckDouble className="service_icon"/>
                  <p>{item.details1}</p>
                </li>
                <li>
                  <BiCheckDouble className="service_icon"/>
                  <p>{item.details2}</p>
                </li>
                <li>
                  <BiCheckDouble className="service_icon"/>
                  <p>{item.details3}</p>
                </li>
                <li>
                  <BiCheckDouble className="service_icon"/>
                  <p>{item.details4}</p>
                </li>
                <li>
                  <BiCheckDouble className="service_icon"/>
                  <p>{item.details5}</p>
                </li>
              </ul>
            </article>
          )))
        }
      </div>
    </section>
  )
}

export default Services