import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Spinner from './Spinner';
import BackButton from './BackButton';

function ShowBook() {
    const {id} = useParams();
    const [showbook, setShowBook] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(
        ()=>{
            setLoading(true),
            axios.get(`http://localhost:8000/books/${id}`)
            .then(
                (res)=>{
                    setLoading(false);
                    setShowBook(res.data.book);
                }
            )
            .catch(
                (err)=>{
                    setLoading(false);
                    console.log(err);
                }
            ) 
        },
        []
    )
  return (
    <div className='p-4'>
        <BackButton />
        <h1 className='text-4xl'>Book Info</h1>

        {
            loading ? (
                <Spinner />
            ):(
                <div className='bg-emerald-200 p-4 rounded-lg m-4'>
                    <h1 className='text-2xl font-bold border border-black m-2 p-2'>Title : {showbook.title}</h1>
                    <h1 className='text-2xl font-bold border border-black m-2 p-2'>Author : {showbook.author}</h1>
                    <h1 className='text-2xl font-bold border border-black m-2 p-2'>Publish Year : {showbook.publishYear}</h1>
                </div>
            )
        }

    </div>
  )
}

export default ShowBook