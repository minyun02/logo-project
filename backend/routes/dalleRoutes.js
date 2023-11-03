import express from 'express'
import * as dotenv from 'dotenv'
import OpenAIApi from 'openai'

dotenv.config()

const router = express.Router()

const openai = new OpenAIApi({
  apiKey: process.env.OPEN_AI_SECRET,
})

router.route('/').get((req, res) => {
  res.send('hellooooo')
})

router.route('/').post(async (req, res) => {
  try {
    
    const { sportsType, teamName, logoStyle, logoColor } = req.body
    const prompt = 'Create a ' + sportsType 
                    + ' logo for the team named ' + teamName 
                    + '. the name of the team should be located at the '
                    + ' bottom of the logo. the style of the logo should be ' + logoStyle 
                    + ' and the color of the logo should use different tone of ' + logoColor

    const aiResponse = await openai.images.generate({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    }).then((aiRes) => {
      res.status(200).json({ photo: aiRes.data })
    })

  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
})

export default router