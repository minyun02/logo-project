import express from 'express'
import * as dotenv from 'dotenv'
import axios from 'axios'

import { COOKIE_NAME, USER_COOKIE } from '../utils/constants.js'
import { createToken } from '../utils/token-manager.js'
import User from '../models/User.js'

dotenv.config()

const router = express.Router()

router.route('/').get(async (req, res) => {
  const code = req.query.code
  const state = req.query.state
  const clientId = process.env.NAVER_CLIENT_ID
  const clientSecret = process.env.NAVER_CLIENT_SECRET
  const redirectURI = 'http://localhost:5173'
  const apiUrl = 'https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id='
                  + clientId + '&client_secret=' + clientSecret + '&redirect_uri=' + redirectURI 
                  + '&code=' + code + '&state=' + state;
  const headers = {
    'X-Naver-Client-Id': clientId, 
    'X-Naver-Client-Secret': clientSecret
  }
  
  const result = await axios.get(apiUrl, {
    headers: headers
  }).then( async (result) => {
    const { access_token, refresh_token } = result.data

    const url = 'https://openapi.naver.com/v1/nid/me'
    const headers = {'Authorization': 'Bearer ' + access_token}

    const naverUserInfo = await axios.get(url, {headers: headers})
    const { id, gender, name } = naverUserInfo.data.response
  
    const user = User.findOne({userId: id})
    
    if (!user) {
      const newUser = User.create({
        userId: id,
        gender: gender,
        name: name
      })
    }

    res.clearCookie(COOKIE_NAME, {
      path: '/', domain: 'localhost'})

    res.clearCookie(USER_COOKIE, {
      path: '/', domain: 'localhost'})

    const token = createToken(id, name, '7d')
    const expires = new Date()
    expires.setDate(expires.getDate() + 7)
    res.cookie(COOKIE_NAME, token, {path: '/', domain: 'localhost'})
    res.cookie(USER_COOKIE, id, {path: '/', domain: 'localhost'})

    res.redirect(redirectURI)
    // res.status(200).json({ success: true, name: name  })
  })
})

export default router