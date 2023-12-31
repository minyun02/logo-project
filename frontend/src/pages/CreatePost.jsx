import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { preview } from '../assets'
import { FormField, Loader } from '../components'
import { useLoginContext } from '../utils/LoginContext'
import { formFieldData } from '../constants/constans'
import { getGeneratedImage, saveLogoImage } from '../helpers/api-communitor'

const CreatePost = () => {
  const navigate = useNavigate()
  const {isLoggedIn} = useLoginContext()
  const [form, setForm] = useState({
    sportsType: '',
    teamName: '',
    logoStyle: '',
    logoColor: '',
    photo: ''
  })
  const [generatingImg, setGeneratingImg] = useState(false)
  const [loading, setLoading] = useState(false)

  const generateImage = async () => {
    if (form.sportsType && form.teamName) {
      try {
        setGeneratingImg(true)
        const response = await getGeneratedImage(form)
        setForm({ ...form, photo: `data:image/jpeg;base64,${response.photo[0].b64_json}`})

      } catch (error) {
        console.log(error)
      } finally {
        setGeneratingImg(false)
      }
    } else {
      if (!form.sportsType) {
        alert('운동 종류를 입력해주세요.')
      } else if (!form.teamName) {
        alert('팀 이름을 입력해주세요.')
      }
      
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (form.sportsType && form.photo) {
      setLoading(true)
      
      try {
        const response = await saveLogoImage(form)
        console.log(response)
        if (response.success) navigate('/') 
        // else
      } catch (error) {
        alert(error)
      } finally {
        setLoading(false)
      }
    }
  }

  const handleChange = (e) => {
    console.log(e.target.value)
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/')
    }
  }, [])

  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-black text-[32px]'>로고 만들기</h1>
        <p className='mt-2 text-gray-400 text-[16px] max-w-[500px]'>아래 항목을 채우고 우리 팀 로고를 만들어 보세요!</p>
      </div>

      <form action="" className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5'>
          {
            formFieldData.map((data) => (
              <FormField 
                labelName={data.labelName}
                title={data.title}
                type={data.type}
                name={data.name}
                placeholder={data.placeholder}
                value={form[`${data.name}`]}
                handleChange={handleChange}
                required={data.required}
              />
            ))
          }

          <div className='relative bg-gray-50 border border-gray-300 text-gray-900 text-sm
          rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center'>
            {form.photo ? (
              <img 
                src={form.photo}
                alt={form.teamName + '-logo'}
                className='w-full h-full object-contain'
              />
            ) : (
              <img 
                src={preview}
                alt="preview"
                className='w-9/12 h-9/12 object-contain
                opacity-40'
              />
            )}

            {generatingImg && (
              <div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0,5)] rounded-lg'>
                <Loader />
              </div>
            )}
          </div>

          <div className='flex'>
            <div className='mt-5 gap-5'>
              <button
                type='button'
                onClick={generateImage}
                className='text-white bg-green-700 font-medium rounded-md text-sm w-full 
                sm:w-auto px-5 py-2.5 text-center mr-4'
              >
                {generatingImg ? '로고를 만드는 중입니다...' : '로고 만들기'}
              </button>
            </div>
            
            {form.photo && 
              (<div className='mt-5 gap-5'>
                <button
                  type='submit'
                  className='text-white bg-[#6469ff] font-medium rounded-md text-sm w-full 
                  sm:w-auto px-5 py-2.5 text-center'
                >
                  {loading ? '로고를 저장하는 중입니다...' : '로고 저장하기'}
                </button>
              </div>)
            }
          </div>
        </div>
      </form>
    </section>
  )
}

export default CreatePost