import React from 'react'
import ColorList from './Color List/ColorList';
import Navbar from './common/navbar/Navbar'
import Sidebar from './common/sidebar/Sidebar'

function Index() {
  return (
    <div>
        <Navbar/>
        <Sidebar/>
        <ColorList/>
    </div>
  )
}

export default Index;