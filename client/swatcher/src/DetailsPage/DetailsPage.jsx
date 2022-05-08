import React from 'react'
import Navbar from '../common/navbar/Navbar'
import Sidebar from '../common/sidebar/Sidebar'
import ColorDetailCard from './colorCard/ColorDetailCard'
import './DetailsPage.css'


function DetailsPage(props) {
  
  return (
 
    <div>
 
        <Navbar/>
        <Sidebar/>   
      
        <ColorDetailCard/>
        <a className='clear-link'href='/'><div className='clear-button'><p>Clear</p></div></a>
    </div>
  )
}

export default DetailsPage