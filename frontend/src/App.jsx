import React, { useEffect, useState } from 'react'
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom'

import { Home, CreatePost, Naver, MyPosts } from './pages'


import Navbar from './components/Header'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      
      <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/create-post' element={<CreatePost />}/>
          <Route path='/naver-login' element={<Naver />}/>
          <Route path='/my-posts' element={<MyPosts />}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App