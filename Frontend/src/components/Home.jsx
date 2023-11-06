import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Spinner from './Spinner'
import axios from 'axios'
import Table from './Table'
import {MdOutlineAddBox} from 'react-icons/md'


function Home() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(
        ()=>{
            setLoading(true);
            axios.get('http://localhost:8000/books')
            .then(
                (res)=>{
                    console.log(res.data);
                    setBooks(res.data.books);
                    setLoading(false);
                }
            )
            .catch(
                (err)=>{
                    console.log(err);
                    setLoading(false);
                }
            )
        },
        []
    )
  return (
    <div className='p-4'>
        <div className='flex flex-col'>
            <h1 className='text-2xl'>Books List</h1>
            <Link to="/createbook">
                <MdOutlineAddBox className='text-3xl' />
            </Link>
        </div>

        {
            loading ? (
                <Spinner />
            ) : (
                <Table books={books} />
            )
        }
    </div>
  )
}

export default Home