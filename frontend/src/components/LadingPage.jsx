import React from 'react'
import { Link } from 'react-router-dom'
import { login as nlogin } from '../assets'

const LadingPage = () => {
  return (
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
  )
}

export default LadingPage