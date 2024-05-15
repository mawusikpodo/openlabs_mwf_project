import React from 'react'
import { Link } from 'react-router-dom'

export  function Header() {
  return (
    <div className="bg-green-900 bg-opacity-70 py-6">
       <div className='container mx-auto flex justify-between'>
          <span className='text-3xl text-white font-bold tracking-tight italic'>
            <Link to="/">RentMe</Link>
          </span>
          <span className='flex space-x-2'>
            <Link className='flex rounded bg-white items-center text-green-600 px-3 font-bold hover:bg-gray-300' to="/login">Sign In</Link>
          </span>
        </div> 
    </div>
  )
}
