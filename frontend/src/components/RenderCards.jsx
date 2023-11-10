import React from 'react'
import { Card } from '../components/index'

const RenderCards = () => {
  if (data?.length > 0) return data.map((post) => <Card key={post._id} {...post} isMyPosts={isMyPosts}/>)

  return (
    <h2 className='mt-5 font-bold text-[#6449ff] text-xl uppercase'>
      {title}
    </h2>
  )
}

export default RenderCards