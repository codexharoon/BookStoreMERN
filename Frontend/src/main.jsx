import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import CreateBook from './components/CreateBook.jsx'
import EditBook from './components/EditBook.jsx'
import ShowBook from './components/ShowBook.jsx'
import DeleteBook from './components/DeleteBook.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/createbook' element={<CreateBook/>}/>
      <Route path='/showbook/:id' element={<ShowBook/>} />
      <Route path='/editbook/:id' element={<EditBook/>}/>
      <Route path='/deletebook/:id' element={<DeleteBook/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
