import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import './ColorDetailCard.css'
import { useParams } from 'react-router-dom'
function ColorDetailCard() {
  const [color, setColor] = useState([])
  const [loading, setLoading] = useState(false)
  let {id} = useParams();
    // const product 
    useEffect(()=>{
      const fetchColors =async()=>
      {
        setLoading(true)
        const requestBody = {query:
          `
  query {
    getColorByID(id:"${id}"){
      color_name
      color_family
      hexcode
      _id
    }
  }
  `
        }
  const res = await axios({
  
    method: 'POST',
    url: 'https://swatcher-backend.herokuapp.com/graphql',
    data: requestBody,
  })
    setColor(res.data.data.getColorByID)
    setLoading(false)
  
      }
  
      fetchColors()
    
      }, [id])
  return (
    
<div className='ColorDetailCard'>

        <div className='color' style={{ backgroundColor: color.hexcode}}></div>
        <div className='hexcode'>
             <p>{color.hexcode}</p>
        </div>
        </div>
  )}

export default ColorDetailCard