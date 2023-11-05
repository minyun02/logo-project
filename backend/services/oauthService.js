import axios from 'axios'

export const requestNaverLogin = async (code, state) => {
  const clientId = process.env.NAVER_CLIENT_ID
  const clientSecret = process.env.NAVER_CLIENT_SECRET
  const redirectURI = process.env.NAVER_CLIENT_REDIRECT_URI
  const apiUrl = 'https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id='
                  + clientId + '&client_secret=' + clientSecret + '&redirect_uri=' + redirectURI 
                  + '&code=' + code + '&state=' + state;
  const headers = {
    'X-Naver-Client-Id': clientId, 
    'X-Naver-Client-Secret': clientSecret
  }
  
  return await axios.get(apiUrl, { headers: headers })
}

export const getNaverUserInfo = async (access_token) => {
  const url = 'https://openapi.naver.com/v1/nid/me'
  const headers = {'Authorization': 'Bearer ' + access_token}

  return await axios.get(url, { headers: headers })
}