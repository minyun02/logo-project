import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Loader, Card, FormField } from '../components/index'
import { login as nlogin } from '../assets'

const RenderCards = ({ data, title, isMyPosts }) => {
  if (data?.length > 0) return data.map((post) => <Card key={post._id} {...post} isMyPosts={isMyPosts}/>)

  return (
    <h2 className='mt-5 font-bold text-[#6449ff] text-xl uppercase'>
      {title}
    </h2>
  )
}

const Home = ({ isLoggedIn }) => {

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
          credentials: 'include'
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

    if (isLoggedIn) fetchPosts()
  }, [])

  const handleSearchChange = (e) => {
    setSearchText(e.target.value)

    setSearchTimeout(
      setTimeout(() => {
        const searchResults = allPosts.filter((item) => item.teamName.includes(searchText.toLowerCase()) || 
        item.sportsType.includes(searchText.toLowerCase()))
  
        setSearchedResults(searchResults)
  
      }, 500)
    )
  }

  return (
    <section className="max-w-7xl mx-auto">
      {isLoggedIn ? (
        <>
          <div>
            <h1 className="font-extrabold text-black text-[32px]">
              팀 로고 모아보기
            </h1>
            <p className="mt-2 text-gray-400 text-[16px] max-w-[500px]">
              그려줘! 로고에서 만들어진 로고들입니다.
            </p>
          </div>
          <div className="mt-16">
            <FormField
              labelName="로고 찾아보기"
              type="text"
              name="text"
              placeholder="종목 또는 팀명을 입력하세요."
              value={searchText}
              handleChange={handleSearchChange}
            />
          </div>
          <div className="mt-10">
            {loading ? (
              <div className="flex justify-center items-center">
                <Loader />
              </div>
            ) : (
              <>
                {searchText && (
                  <h2 className="font-medium text-[#666e75] text-xl mb-3">
                    검색어 {searchText}에대한 결과
                  </h2>
                )}
                <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
                  {searchText ? (
                    <RenderCards
                      data={searchedResults}
                      title="검색 결과가 없습니다."
                      isMyPosts={false}
                    />
                  ) : (
                    <RenderCards
                      data={allPosts}
                      title="등록된 로고가 없습니다."
                      isMyPosts={false}
                    />
                  )}
                </div>
              </>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="md:mb-0 lg:mt-36 my-28 w-full h-[500px] relative z-10 text-center
            bg-[#DDF7E3] flex justify-center rounded-3xl">
            <div className="relative flex flex-col items-center justify-center">
              <h1 className='text-6xl my-10'>우리 팀의 특별한 로고를 만들어 보세요!</h1>
              <div className="text-lg mb-8 max-w-[850px]">
                <p>
                  AI 기술을 사용해서 로고를 손쉽게 만드는 서비스입니다.
                </p>
                <p>
                  운동 종목과 팀 이름만 입력하고 원하는 스타일과 색을 선택하면 끝입니다!
                </p>
              </div>
              <Link to="/naver-login">
                <a
                  className="ck-box rounded-full px-6 py-3 mb-8 flex flex-row items-center 
                    leading-none gap-2 text-sm md:text-base transition-all bg-[#C7E8CA]
                    hover:bg-blue-500/[.01] text-gray-700 hover:text-black outline outline-1 
                    outline-transparent hover:outline-[#5D9C59] ring-4 ring-transparent 
                    hover:ring-[#446A46]/[.16] ease-in-out"
                >
                  <div className="flex items-center gap-2 leading-5 text-left">
                    <div>
                      <div className="flex items-center">
                        <span className="sm:inline hidden">
                          로그인 후 이용해 보세요!&nbsp;&nbsp;&nbsp;
                        </span>
                        <Link to="/naver-login">
                          <img src={nlogin} alt="naver login" className="w-20" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default Home