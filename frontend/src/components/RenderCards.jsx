import React from 'react'
import { Card } from '../components/index'

const RenderCards = (props) => {
  if (props.data?.length > 0) return props.data.map((post) => <Card key={post._id} {...post} isMyPosts={props.isMyPosts}/>)

  return (
    <h2 className='mt-5 font-bold text-[#6449ff] text-xl uppercase'>
      {props.title}
    </h2>
  )
}

export default RenderCards