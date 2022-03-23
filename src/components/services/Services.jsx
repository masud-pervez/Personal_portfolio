import React from 'react'
import './services.css'
import {RiCheckDoubleLine} from 'react-icons/ri'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container Services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service_list'>
            <li>
              <RiCheckDoubleLine className="service_icon"/>
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <RiCheckDoubleLine className="service_icon"/>
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <RiCheckDoubleLine className="service_icon"/>
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <RiCheckDoubleLine className="service_icon"/>
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <RiCheckDoubleLine className="service_icon"/>
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>

          </ul>
        </article>

              {/* END UI/UX */}

        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <RiCheckDoubleLine className="service_icon"/>
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <RiCheckDoubleLine className="service_icon"/>
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <RiCheckDoubleLine className="service_icon"/>
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <RiCheckDoubleLine className="service_icon"/>
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <RiCheckDoubleLine className="service_icon"/>
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <RiCheckDoubleLine className="service_icon"/>
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        
            {/* Web Development */}

        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service_list'>
            <li>
              <RiCheckDoubleLine className="service_icon"/>
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <RiCheckDoubleLine className="service_icon"/>
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <RiCheckDoubleLine className="service_icon"/>
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <RiCheckDoubleLine className="service_icon"/>
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <RiCheckDoubleLine className="service_icon"/>
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services