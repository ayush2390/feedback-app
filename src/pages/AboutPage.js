import React from 'react'
import Card from '../shared/Card'
import {Link} from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h1>About This Project</h1>
        <p>This is a React App to leave feedback for a product and service </p>
        <p>Version: 1.0.0</p>
        <p>
          <Link to='/'>Back To Home</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage
