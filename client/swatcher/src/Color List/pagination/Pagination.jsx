import React from 'react'
import './Pagination.css'

export const Pagination = ({colorsPerPage,totalColors, paginate}) => {
    const pageNumbers= [];
    for(let i = 1; i<=Math.ceil(totalColors/colorsPerPage); i++){
        pageNumbers.push(i)
    }
  return (
    <div>
        <ul className='page-numberList'>
            {pageNumbers.map(number =>(
                <li key={number}>
                    <a onClick={()=>paginate(number)}href="#">
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    </div>
  )
}
export default Pagination