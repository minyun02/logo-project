import React, { useEffect, useState } from 'react'
import { Loader, Card, FormField } from '../components/index'
import { Cookies } from 'react-cookie'
import { useLoginContext } from '../utils/LoginContext'
import { useNavigate } from 'react-router-dom'
import { getMyPosts } from '../helpers/api-communitor'

const RenderCards = ({ data, title, isMyPosts }) => {
  if (data?.length > 0) return data.map((post) => <Card key={post._id} {...post} isMyPosts={isMyPosts}/>)

  return (
    <h2 className='mt-5 font-bold text-[#6449ff] text-xl uppercase'>
      {title}
    </h2>
  )
}

const MyPosts = () => {
  const navigate = useNavigate()
  const {isLoggedIn} = useLoginContext()
  const [loading, setLoading] = useState(false)
  const [myPosts, setMyPosts] = useState(null)

  useEffect(() => {
    const fetchMyPosts = async () => {
      setLoading(true)

      try {
        const response = await getMyPosts()
        if (response.success) setMyPosts(response.data.reverse())
        
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    if (!isLoggedIn) {
      navigate('/')
    } else {
      fetchMyPosts()  
    }
  }, [])

  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-black text-[32px]'>내 로고</h1>
      </div>

      <div className='mt-10'>
        {loading ? (
          <div className='flex justify-center items-center'>
          <Loader />
          </div>
        ) : (
          <>
            <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3'>
              <RenderCards 
                data={myPosts}
                title='만든 로고가 없습니다.'
                isMyPosts={true}
              />
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default MyPosts