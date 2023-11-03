import jwt from 'jsonwebtoken'

export const createToken = (id, name, expiresIn) => {
  const payload = {id, name}
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn
  })
  return token
}