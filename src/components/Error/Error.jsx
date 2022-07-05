import React from 'react'
import { Link } from 'react-router-dom'
import error from '../../assets/Error.png'

export default function Error() {
  return (
    <div className='container'>
      <div className="row justify-content-center">
        <div className="col-6">
          <img src={error} alt="Error" />
          <Link className='nav-link' to='/'>Go Main Page !</Link>
        </div>
      </div>
    </div>
  )
}
