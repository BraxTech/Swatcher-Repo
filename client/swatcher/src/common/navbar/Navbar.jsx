import React from 'react'
import './Navbar.css'
import Logo from './logo-symbol.svg'
function Navbar() {
  return (
      <>
      <div className='Navbar'>
        <div className='Logo'><img src={Logo}></img></div>
        <input className='search' placeholder='search'></input>
      </div>
     
      </>
  )
}

export default Navbar