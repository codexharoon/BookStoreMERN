import React from "react";
import {AiOutlineEdit} from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import {MdOutlineDelete} from 'react-icons/md'
import { Link } from 'react-router-dom'

function Table({ books }) {
  return (
    <table className="w-full border-separate border-spacing-2">
      <thead>
        <tr>
          <th className="border border-slate-600 rounded-md">No</th>
          <th className="border border-slate-600 rounded-md">Title</th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Author
          </th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Publish Year
          </th>
          <th className="border border-slate-600 rounded-md">Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id}>
            <td className="border border-slate-700 rounded-md">{index + 1}</td>
            <td className="border border-slate-700 rounded-md">{book.title}</td>
            <td className="border border-slate-700 rounded-md max-md:hidden">
              {book.author}
            </td>
            <td className="border border-slate-700 rounded-md max-md:hidden">
              {book.publishYear}
            </td>
            <td className="border border-slate-700 rounded-md">
              <div className="flex justify-center">
                <Link to={`/showbook/${book._id}`}>
                  <BsInfoCircle className="text-2xl mx-1" />
                </Link>
                <Link to={`/editbook/${book._id}`}>
                  <AiOutlineEdit className="text-2xl mx-1" />
                </Link>
                <Link to={`/deletebook/${book._id}`}>
                  <MdOutlineDelete className="text-2xl mx-1" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
