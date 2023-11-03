import express from 'express'
import * as dotenv from 'dotenv'
import { v2 as cloudinary } from 'cloudinary'

import Post from '../models/Post.js'
import User from '../models/User.js'

dotenv.config()

const router = express.Router()

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

router.route('/').get(async(req, res) => {
  try {
    const posts = await Post.find({})
    
    res.status(200).json({ success: true, data: posts })
  } catch (error) {
    res.status(500).json({ success: false, message: error })
  }
})

router.route('/').post( async (req, res) => {
  try {
    const userId = req.headers.userid
    const user = await User.findOne({ userId: userId })
  
    if (!user) {
      res.status(401).json({ success: false, message: "존재하지 않는 회원입니다."})
    }
    
    const username = user.name
    const { sportsType, teamName, photo } = req.body
    const photoUrl = await cloudinary.uploader.upload(photo)

    const newPost = await Post.create({
      userId,
      username,
      sportsType,
      teamName,
      photo: photoUrl.url,
    })

    res.status(201).json({ success: true, data: newPost })
  } catch (error) {
    res.status(500).json({ success: false, message: error })
  }
})

router.route('/my').get( async (req, res) => {
  try {
    const userId = req.headers.userid
  
    const myPosts = await Post.find({userId: userId})
    
    res.status(200).json({ success: true, data: myPosts })
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: error })
  }
})

export default router