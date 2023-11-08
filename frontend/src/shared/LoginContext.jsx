import React, { useState } from 'react'
import { useContext } from 'react'
import { Cookies } from 'react-cookie'

const token = new Cookies().get('auth_token')

export const LoginContext = React.createContext(null)

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(token !== undefined)
  const value = {isLoggedIn, setIsLoggedIn}

  return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
}

export const useLoginContext = () => useContext(LoginContext)