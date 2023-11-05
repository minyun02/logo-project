import express from 'express'
import * as dotenv from 'dotenv'
import * as dalleService from '../services/dalleService.js'


dotenv.config()

const router = express.Router()

router.route('/').get((req, res) => {
  res.send('hellooooo')
})

router.route('/').post( async (req, res) => {
  try {

    const { sportsType, teamName, logoStyle, logoColor } = req.body
    const promptForGPT = dalleService.createPromptForChatGPT(sportsType, teamName, logoStyle, logoColor)
    
    //chatGPT로 prompt 생성
    const promptForDalle = await dalleService.createPromptForDalle(promptForGPT)  

    //dalle로 로고 이미지 생성
    const logoCreatedByDalle = await dalleService.createLogoImage(promptForDalle)
    
    res.status(200).json({ photo: logoCreatedByDalle })

  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
})

export default router