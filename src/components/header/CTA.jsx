import React from 'react'
import { Link } from 'react-router-dom'
import CV from '../../assets/Masud Pervez.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download={CV} className='btn btn-outline-primary'>Download CV</a>
      <Link className='btn btn-primary ' to="/contact">Let's Talk</Link>
    </div>
  )
}

export default CTA