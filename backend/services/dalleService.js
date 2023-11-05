import { configureOpenAI } from "../config/openAi.js"


export const createPromptForChatGPT = (sportsType, teamName, logoStyle, logoColor) => {
  let prompt = "Dalle2한테 전달 할 prompt를 영어로 만들어줘. 운동 동호회 로고를 만들거고, 운동 종목은 " + sportsType
                    + "이고, 팀 이름은 " + teamName + "."
    if (logoStyle) prompt += " 만들어야 하는 로고는 " + logoStyle + " 같은 스타일이어야해."
    if (logoColor) prompt += " 로고의 색깔은 " + logoColor + " 계열의 색을 사용해줘"

  return prompt
}

export const createPromptForDalle = async (promptForGPT) => {
  const openai = configureOpenAI()

  const chatResponse = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{
      'role': 'user',
      'content': promptForGPT
    }]
  })

  const dallePrompt = chatResponse.choices[0].message.content
  return dallePrompt
}

export const createLogoImage = async (promptForDalle) => {
  const openai = configureOpenAI()
  
  const dalleResponse = await openai.images.generate({
    prompt: promptForDalle,
    n: 1,
    size: '1024x1024',
    response_format: 'b64_json',
  })
  return dalleResponse.data
}