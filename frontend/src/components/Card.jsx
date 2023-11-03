import React, { useEffect, useState } from 'react'

import { download } from '../assets'
import { downloadImage } from '../utils'

const Card = ({ _id, sportsType, teamName, photo, isMyPosts }) => {
  return (
  <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
    <img
      className="w-full h-full object-cover rounded-xl"
      src={photo}
      alt={teamName + ' logo'} 
    />
    <div className="group-hover:flex flex-col max-h-16 hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
      <div className="flex justify-between items-center gap-2">
        <div className="">
          <p className="text-white text-sm overflow-y-auto prompt">종목: {sportsType}</p>
          <p className="text-white text-sm overflow-y-auto prompt">팀명: {teamName}</p>
        </div>
        {isMyPosts &&
        <button type="button" onClick={() => downloadImage(_id, photo)} className="outline-none bg-transparent border-none">
          <img src={download} alt="download" className="w-6 h-6 object-contain invert" />
        </button>
        }
      </div>
    </div>
  </div>)
}

export default Card