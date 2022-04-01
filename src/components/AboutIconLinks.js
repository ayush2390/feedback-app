import {FaQuestion} from 'react-icons/fa'
import React from 'react'
import {Link} from 'react-router-dom'

function AboutIconLinks() {
  return (
    <div className='about-link'>
        <Link to='/about'>
      <FaQuestion size={30} />
      </Link>
    </div>
  )
}

export default AboutIconLinks
