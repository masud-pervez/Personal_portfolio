import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'



const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h4>Hello I'm</h4>
        <h1>MASUD PERVEZ</h1>
        <h4 className='mt-2'>Fullstack Developer</h4>
        
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img className='me_image img-fluid' src={ME} alt="" />
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header