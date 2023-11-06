import React, { useId } from 'react'
import Spinner from './Spinner'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import BackButton from './BackButton'

function CreateBook() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const titleID = useId();
    const authorID = useId();
    const pubYearID = useId();

    const handleCreateBook = ()=>{

      if(title === '' || author === '' || publishYear === ''){
        alert('Please fill all the fields');
        return;
      }

      setLoading(true);
      axios.post('http://localhost:8000/books', {
        title,
        author,
        publishYear
      }
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
    <div className='p-3'>
        <BackButton />

        <h1 className='text-2xl font-bold mb-4'>Create Book</h1>

        {
          loading ? <Spinner /> : (
            <div className='mx-auto border-2 border-sky-600 rounded-lg p-6 w-[600px]'> 

            <div>
              <label className='text-xl text-gray-500' htmlFor={titleID}>Title</label>
              <input id={titleID} value={title} onChange={(e)=>{setTitle(e.target.value)}} type="text" placeholder='My Book' className='px-4 my-4 py-2 w-full border-2 border-gray-500' />
            </div>

            <div>
              <label className='text-xl text-gray-500' htmlFor={authorID}>Author</label>
              <input id={authorID} value={author} onChange={(e)=>{setAuthor(e.target.value)}} type="text" placeholder='codexharoon' className='px-4 my-4 py-2 w-full border-2 border-gray-500' />
            </div>

            <div>
              <label className='text-xl text-gray-500' htmlFor={pubYearID}>Publish Year</label>
              <input id={pubYearID} value={publishYear} onChange={(e)=>{setPublishYear(e.target.value)}} type="number" placeholder='2023' className='px-4 my-4 py-2 w-full border-2 border-gray-500' />
            </div>

            <button className='bg-slate-500 p-4 mt-2 text-white w-full' onClick={handleCreateBook}>Create</button>

            </div>
          )
        }

    </div>
  )
}

export default CreateBook