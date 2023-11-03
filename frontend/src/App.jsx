import React, { useEffect, useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Cookies } from 'react-cookie'
import { logo } from './assets'
import { Home, CreatePost, Naver, MyPosts } from './pages'

const logout = async () => {
  const response = await fetch('http://localhost:8080/api/v1/users/logout', {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        })
  window.location.reload();
}

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const cookie = new Cookies()
    setIsLoggedIn(cookie.get('auth_token') !== undefined)
  })
  
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center 
      bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
        <div>
          <Link to='/'>
            <img src={logo} alt="logo" className='w-32 object-contain'/>
          </Link>
        </div>
        <div className='flex justify-evenly items-center space-x-1'>
          {
            isLoggedIn ? (
                          <>
                            <Link to="/create-post" 
                              className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
                            >
                              만들기
                            </Link>
                            <Link to='/my-posts'
                              className="font-inter font-medium bg-blue-500 text-white px-4 py-2 rounded-md"
                            >
                              내 로고  
                            </Link>
                            <Link>
                              <img onClick={() => logout()} src="/src/assets/logout.png" alt="naver logout" className='w-28 h-10'/> 
                            </Link>
                          </>
                          )
                        :
                          (<Link to='/naver-login'>
                            <img src="/src/assets/login.png" alt="naver login" className='w-28 h-10'/>
                          </Link>)
            }
          </div>
      </header>
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