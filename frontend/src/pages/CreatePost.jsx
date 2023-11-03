import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { preview } from '../assets'
import { FormField, Loader } from '../components'
import { getRandomPrompt } from '../utils'

const CreatePost = () => {
  const navigate = useNavigate()
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
    console.log(form)
    if (form.sportsType) {
      try {
        setGeneratingImg(true)
        const response = await fetch('http://localhost:8080/api/v1/dalle', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            sportsType: form.sportsType,
            teamName: form.teamName,
            logoStyle: form.logoStyle,
            logoColor: form.logoColor,
          })
        }).then((res) => res.json()).then((data) => {
          setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo[0].b64_json}`})
        })
      } catch (error) {
        alert(error)
      } finally {
        setGeneratingImg(false)
      }
    } else {
      alert('Please enter a prompt')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (form.sportsTypep && form.photo) {
      setLoading(true)

      try {
        const response = await fetch('http://localhost:8080/api/v1/posts', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(form)
        })

        await response.json()
        navigate('/')

      } catch (error) {
        alert(error)
      } finally {
        setLoading(false)
      }
    } else {
      alert('Please enter a prompt')
    }
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    console.log(form)
  }
  
  const handleSurpriseMe = (e) => {
    const randomPrompt = getRandomPrompt(form.prompt)
    setForm({...form, prompt: randomPrompt})
  }

  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-black text-[32px]'>Create</h1>
        <p className='mt-2 text-gray-400 text-[16px] max-w-[500px]'>Create image</p>
      </div>

      <form action="" className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5'>
          <FormField 
            labelName='운동 종류'
            title='text'
            type='text'
            name='sportsType'
            placeholder='팀 마스코트를 알려주세요. 예시) 사자, 곰, 강아지 등...'
            value={form.sportsType}
            handleChange={handleChange}
            required={true}
          />
          <FormField 
            labelName='팀 이름'
            title='text'
            type='text'
            name='teamName'
            placeholder='팀명을 알려주세요.'
            value={form.name}
            handleChange={handleChange}
          />
          <FormField 
            labelName='로고 스타일'
            title='checkbox'
            type='checkbox'
            name='logoStyle'
            handleChange={handleChange}
          />
          <FormField 
            labelName='로고 색상'
            title='radio'
            type='radio'
            name='logoColor'
            handleChange={handleChange}
          />
          {/* <FormField 
            labelName='Prompt'
            title='text'
            name='prompt'
            placeholder='Prompt...'
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          /> */}

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

          <div className='mt-5 flex gap-5'>
              <button
                type='button'
                onClick={generateImage}
                className='text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto
                px-5 py-2.5 text-center'
              >
                {generatingImg ? 'Generating...' : 'Generate'}
              </button>
          </div>

          <div className='mt-10'>
              <p className='mt-2 text-[$666e75] text-[14px]'>Once you have created the image you want, you can share~</p>
              <button
                type='submit'
                className='mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full 
                sm:w-auto px-5 py-2.5 text-center'
              >
                {loading ? 'sharing...' : 'share withe the community'}
              </button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default CreatePost