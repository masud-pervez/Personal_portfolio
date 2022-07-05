import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {GoMarkGithub} from 'react-icons/go'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.facebook.com/masud.pervez.31337" target="blank"><BsFacebook /></a>
      <a href="https://www.linkedin.com/in/masud-pervez-71792b223/" target="blank"><BsLinkedin /></a>
      <a href="https://github.com/masudpervez05" target="blank"><GoMarkGithub /></a>
    </div>
  )
}

export default HeaderSocial;