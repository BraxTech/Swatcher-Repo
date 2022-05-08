import React from 'react'
import './ColorCard.css'
import {motion} from "framer-motion"

function ColorCard({colors, loading}) {

  if(loading){
    return <h2> Loading..</h2>
  }
  return (
    <div>
    {colors.map((color)=>{
return(
  <motion.div className='ColorCard' whileHover={{scale:1.1}}>
  <a key={color._id} href={`/color/${color._id}`}>
  
        <div className='color' style={{backgroundColor: color.hexcode }}></div>
        <div className='hexCode'>
             <p>{color.hexcode}</p>
        </div>
    
    </a>
    </motion.div>
       ) 
         })}
  
    </div>
  )
}

export default ColorCard