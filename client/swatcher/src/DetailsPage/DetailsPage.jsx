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
        <a href='/'><div className='clear-button'>Clear</div></a>
    </div>
  )
}

export default DetailsPage