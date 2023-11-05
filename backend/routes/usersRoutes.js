import express from 'express'
import * as dotenv from 'dotenv'

import { COOKIE_NAME, USER_COOKIE } from '../utils/constants.js'
import Post from '../models/Post.js'

dotenv.config()

const router = express.Router()

router.route('/').get(async (req, res) => {
  try {
    const mylogos = await Post.find({})

    res.status(200).json({ success: true, data: mylogos })
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: error })
  }
})

router.route('/logout').get(async (req, res) => {
  try {

    res.clearCookie(COOKIE_NAME, {
      path: '/', domain: 'localhost'})

    res.clearCookie(USER_COOKIE, {
      path: '/', domain: 'localhost'})

    return res.status(200).json({ success: true })
  } catch (error) {
    console.log(error)
  }
})

export default router