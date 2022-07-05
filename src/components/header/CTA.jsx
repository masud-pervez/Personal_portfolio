import React from 'react'
import { Link } from 'react-router-dom'
const CTA = () => {
  return (
    <div className='cta'>
      <button className='btn btn-outline-primary'>Download CV</button>
      <Link className='btn btn-primary ' to="/contact">Let's Talk</Link>
    </div>
  )
}

export default CTA