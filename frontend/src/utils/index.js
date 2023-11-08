import FileSaver from 'file-saver'

export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.png`)
}

export const logout = async () => {
  await fetch('http://localhost:8080/api/v1/users/logout', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include'
  })
  return false
}