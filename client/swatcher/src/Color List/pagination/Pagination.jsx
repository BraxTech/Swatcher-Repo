import React from 'react'
import './Pagination.css'
import { motion } from 'framer-motion';
export const Pagination = ({colorsPerPage,totalColors, paginate}) => {
    const pageNumbers= [];
    for(let i = 1; i<=Math.ceil(totalColors/colorsPerPage); i++){
        pageNumbers.push(i)
    }
  return (
    <div>
        <ul className='page-numberList'>
            {pageNumbers.map(number =>(
                <motion.div whileHover={{
                    scale:1.2
                }}>
                <li key={number}>
                    <a onClick={()=>paginate(number)}href="#">
                        {number}
                    </a>
                </li>
                </motion.div>
            ))}
        </ul>
    </div>
  )
}
export default Pagination