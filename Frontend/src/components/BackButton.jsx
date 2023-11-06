import React from 'react'
import {Link} from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

function BackButton({destination = '/'}) {
  return (
    <div>
        <Link to={destination} >
            <BsArrowLeft className='text-3xl text-white bg-gray-500 rounded-lg ' />
        </Link>
    </div>
  )
}

export default BackButton