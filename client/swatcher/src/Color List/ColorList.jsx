
import React, { useState } from 'react'
import ColorCard from './colorCard/ColorCard'
import Pagination from './pagination/Pagination'
import axios from 'axios'
import { useEffect } from 'react'



function ColorList() {
  const [colors, setColors]= useState([])
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
  getColors{
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
  setColors(res.data.data.getColors)
  setLoading(false)

    }

    fetchColors()
  
    }, [])

  
    // Get current Colors for page
    const indexOfLastColor = currentPage * colorsPerPage;
    const indexOfFirstColor = indexOfLastColor - colorsPerPage
    const currentColors = colors.slice(indexOfFirstColor,indexOfLastColor)
// Change between pages
const paginate = (pageNumber)=> setCurrentPage(pageNumber)
  return (
    <div>
       <ColorCard 
       colors={currentColors} 
       loading={loading} 
       />
       <Pagination 
       colorsPerPage={colorsPerPage} 
       totalColors={colors.length} 
       paginate={paginate}/>
    </div>
  )
}

export default ColorList