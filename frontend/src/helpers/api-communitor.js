export const getPosts = async () => {
  const response = await fetch('http://localhost:8080/api/v1/posts', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include'
  })
  
  return await response.json()
}

export const getGeneratedImage = async (form) => {
  const response = await fetch('http://localhost:8080/api/v1/dalle', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ 
      sportsType: form.sportsType,
      teamName: form.teamName,
      logoStyle: form.logoStyle,
      logoColor: form.logoColor,
    })
  })

  return await response.json()
}

export const saveLogoImage = async (form) => {
  const response = await fetch('http://localhost:8080/api/v1/posts', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          credentials: 'include',
          body: JSON.stringify(form)
        })

  return await response.json()
}

export const getMyPosts = async () => {
  const response = await fetch('http://localhost:8080/api/v1/posts/my', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include'
        })

  return await response.json()
}