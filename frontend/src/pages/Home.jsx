import React, { useState, useEffect } from 'react'

import { Loader, Card, FormField } from '../components/index'

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) return data.map((post) => <Card key={post._id} {...post}/>)

  return (
    <h2 className='mt-5 font-bold text-[#6449ff] text-xl uppercase'>
      {title}
    </h2>
  )
}

const Home = () => {
  
  const [loading, setLoading] = useState(false)
  const [allPosts, setAllPosts] = useState(null)

  const [searchText, setSearchText] = useState('')
  const [searchedResults, setSearchedResults] = useState(null)
  const [searchTimeout, setSearchTimeout] = useState(null)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)

      try {
        const response = await fetch('http://localhost:8080/api/v1/posts', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        if (response.ok) {
          const result = await response.json()

          setAllPosts(result.data.reverse())
        }
      } catch (error) {
        alert(error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const handleSearchChange = (e) => {
    setSearchText(e.target.value)

    setSearchTimeout(
      setTimeout(() => {
        const searchResults = allPosts.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()) || 
        item.prompt.toLowerCase().includes(searchText.toLowerCase()))
  
        setSearchedResults(searchResults)
  
      }, 500)
    )
  }

  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-black text-[32px]'>팀 로고 모아보기</h1>
        <p className='mt-2 text-gray-400 text-[16px] max-w-[500px]'>그려줘! 로고에서 만들어진 로고들입니다.</p>
      </div>

      <div className='mt-16'>
        <FormField 
          labelName='로고 찾아보기'
          type='text'
          name='text'
          placeholder='검색어를 입력하세요.'
          value={searchText}
          handleChange={handleSearchChange}
        />
      </div>

      <div className='mt-10'>
        {loading ? (
          <div className='flex justify-center items-center'>
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className='font-medium text-[#666e75] text-xl mb-3'>검색어 {searchText}에대한 결과</h2>
            )}
            <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3'>
              {searchText ? (
                <RenderCards 
                  data={searchedResults}
                  title='검색 결과가 없습니다.'
                />
              ) : (
                <RenderCards 
                  data={allPosts}
                  title='만든 로고가 없습니다.'
                />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Home