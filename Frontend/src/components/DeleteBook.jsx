import React, { useEffect, useId } from 'react'
import Spinner from './Spinner'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import BackButton from './BackButton'
import { useParams } from 'react-router-dom'

function DeleteBook() {
    const {id} = useParams();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const handleDeleteBook = ()=>{
      setLoading(true);
      axios.delete(`http://localhost:8000/books/${id}` 
      )
      .then(
        (response) => {
          setLoading(false);
          console.log(response.data);
          navigate('/');
        }
      )
      .catch(
        (error) => {
          setLoading(false);
          alert('Error occured while creating book');
          console.log(error)
        }
      )
    }

  return (
    <div className='p-4'>
        <BackButton />

        <h1 className='text-2xl font-bold mb-4 my-4'>Delete Book</h1>

        {
          loading ? <Spinner /> : (
            <div className='mx-auto border-2 border-sky-600 rounded-lg p-6 w-[600px]'> 

            <h2 className='text-2xl my-4'>Are you sure to want to Delete?</h2>
            <button onClick={handleDeleteBook} className='w-full bg-red-500 text-white text-xl p-4'>Yes</button>

            </div>
          )
        }

    </div>
  )
}

export default DeleteBook