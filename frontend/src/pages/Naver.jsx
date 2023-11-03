import React from 'react'
import { useNavigate } from 'react-router-dom'

const Naver = () => {

  const NAVER_CLIENT_ID = process.env.NAVER_CLIENT_ID
  const REDIRECT_URI = process.env.NAVER_REDIRECT_URI
  const STATE = 'false'
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&state=${STATE}`
  
  window.location.href = NAVER_AUTH_URL
}

export default Naver