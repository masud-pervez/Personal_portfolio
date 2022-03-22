import React from 'react'
import './nav.css'
import {ImHome} from 'react-icons/im'
import {AiOutlineUser} from 'react-icons/ai'
import {ImBook} from 'react-icons/im'
import {RiServiceLine} from 'react-icons/ri'
import {SiGooglemessages} from 'react-icons/si'


const Nav = () => {
  return (
    <nav>
      <a href="#" className='active'><ImHome /></a>
      <a href="#about"><AiOutlineUser /></a>
      <a href="#experince"><ImBook /></a>
      <a href="#services"><RiServiceLine /></a>
      <a href="#contact"><SiGooglemessages /></a>

    </nav>
  )
}

export default Nav;