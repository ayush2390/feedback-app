import React from 'react'

function Header() {
  const headerStyling = {
    backgroundColor : 'rgba(0,0,0,0.4)',
    color: '#ff6a95'
  }
  return (
    <header style ={headerStyling}>
      <div className='container'>
          <h2>Feedback UI</h2>
      </div>
    </header>
  )
}

export default Header
