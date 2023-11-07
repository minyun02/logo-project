import jwt from 'jsonwebtoken'
import { COOKIE_NAME } from './constants.js'

export const createToken = (id, name, expiresIn) => {
  const payload = {id, name}
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn
  })
  return token
}

export const verifyToken = async (req, res, next) => {
  // const token = req.signedCookies[`${COOKIE_NAME}`]
  const token = req.cookies[`${COOKIE_NAME}`]  
  if (!token || token === '') {
    return res.status(401).json({ message: "토큰 정보가 없습니다." })
  }
  
  jwt.verify(token, process.env.JWT_SECRET, (error, success) => {
    if (error) {
      return res.status(401).json({ message: "유효기간이 만료된 토큰입니다.", data: error })
    } else {
      res.locals.jwtData = success
      return next()
    }
  }) 
}