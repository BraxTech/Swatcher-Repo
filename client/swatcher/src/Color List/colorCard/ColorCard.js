import React from 'react'
import './ColorCard.css'


function ColorCard({colors, loading}) {

  if(loading){
    return <h2> Loading..</h2>
  }
  return (
    <div>
    {colors.map((color)=>{
return(
  <a key={color._id} href={`/color/${color._id}`}>
      <div className='ColorCard'>
        <div className='color' style={{backgroundColor: color.hexcode }}></div>
        <div className='hexCode'>
             <p>{color.hexcode}</p>
        </div>
    </div>
    </a>
       ) 
         })}
  
    </div>
  )
}

export default ColorCard