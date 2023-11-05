import express from 'express'
import * as dotenv from 'dotenv'

import { COOKIE_NAME, USER_COOKIE } from '../utils/constants.js'
import { createToken } from '../utils/token-manager.js'
import User from '../models/User.js'
import * as oauthService from '../services/oauthService.js'


dotenv.config()

const router = express.Router()

router.route('/').get(async (req, res) => {
  const code = req.query.code
  const state = req.query.state

  const naverResponse = await oauthService.requestNaverLogin(code, state)
  const { access_token, refresh_token } = naverResponse.data

  const naverUserInfo = await oauthService.getNaverUserInfo(access_token)
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

  res.redirect(process.env.NAVER_CLIENT_REDIRECT_URI)
})

export default router