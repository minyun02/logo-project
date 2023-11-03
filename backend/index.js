import express from "express"
import * as dotenv from 'dotenv'
import cors from 'cors'

import connectDB from './mongodb/connect.js'
import postRoutes from './routes/postRoutes.js'
import dalleRoutes from './routes/dalleRoutes.js'
import oauthRoutes from './routes/oauthRoutes.js'
import usersRoutes from './routes/usersRoutes.js'

dotenv.config()

const app = express();
app.use(cors({ origin: 'http://localhost:5173', credentials: true }))
app.use(express.json({ limit: '50mb' }))

app.use('/api/v1/posts', postRoutes)
app.use('/api/v1/dalle', dalleRoutes)
app.use('/api/v1/oauth', oauthRoutes)
app.use('/api/v1/users', usersRoutes)

app.get('/', async (req, res) => {
  res.status(200).json({
    message: 'Hello from DALL.E!',
  });
})

const startServer = async () => {
  try {
    connectDB()
    app.listen(8080, () => console.log('Server has started on port 8080'))  
  } catch (error) {
    console.log(error)
  }
}

startServer()