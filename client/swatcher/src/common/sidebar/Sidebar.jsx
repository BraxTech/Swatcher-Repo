import React, {useEffect, useState} from 'react'
import axios from 'axios'
import'./Sidebar.css'


function Sidebar() {
  const [randomColor, setRandomColor]= useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage,setCurrentPage] = useState(1)
  const [colorsPerPage, setColorsPerPage] = useState(12)
  
  useEffect(()=>{
    const fetchColors =async()=>
    {
      setLoading(true)
      const requestBody = {query:
        `
query {
  getRandomColor{
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
  setRandomColor(res.data.data.getRandomColor)
  setLoading(false)

    }

    fetchColors()
  
    }, [])
  return (
    <div className='Sidebar'>
      {randomColor.map(color=>{
        return(
        <a href={`/color/${color._id}`}><div className='button'><p className='button-text'>Random Color{console.log(color._id)}</p></div></a>
      )})}
      
        <ul>
            <li>Red</li>
            <li>Yellow</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
  )
}

export default Sidebar