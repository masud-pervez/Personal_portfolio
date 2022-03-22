import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {GoMarkGithub} from 'react-icons/go'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com" target="_blank"><BsLinkedin /></a>
      <a href="https://github.com" target="_blank"><GoMarkGithub /></a>
      <a href="https://dribbble.com" target="_blank"><FiDribbble /></a>
    </div>
  )
}

export default HeaderSocial;