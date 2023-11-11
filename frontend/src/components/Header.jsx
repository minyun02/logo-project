import React from 'react'
import { Link } from 'react-router-dom'
import { useLoginContext } from '../contexts/LoginContext'
import { logo, logout as nlogout, login as nlogin } from '../assets'
import { logout } from '../utils'

const Navbar = () => {

  const {isLoggedIn, setIsLoggedIn} = useLoginContext()

  const handleLogout = () => {
    setIsLoggedIn(logout())

    window.location.reload();
  }

  return (
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
                              <img onClick={() => handleLogout()} src={nlogout} alt="naver logout" className='w-28 h-10'/> 
                            </Link>
                          </>
                          )
                        :
                          (<Link to='/naver-login'>
                            <img src={nlogin} alt="naver login" className='w-28 h-10'/>
                          </Link>)
            }
          </div>
      </header>
  )
}

export default Navbar