import React from 'react'

import { CiSearch } from "react-icons/ci";


function SearchField() {
  return (
    <div className = 'bg-gray-100 w-full p-3 flex justify-between items-center mb-7'>
        <div>
            <h1>Search Keywords</h1>
            <input type="text" placeholder='SEARCH...' className = 'w-full outline-none' />
        </div>
        <div className='bg-yellow-400 p-3 cursor-pointer transition-all duration-200 hover:bg-black hover:text-white'>
            <CiSearch className='text-3xl'/>
        </div>
    </div>
  )
}

export default SearchField