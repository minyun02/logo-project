import React from 'react'
import { logoColorData } from '../constants/constans'

const LogoColorFormInput = ({ props }) => {
  return (
    <ul className=" items-center w-full text-sm font-medium text-gray-900 bg-gray-50 border
    border-gray-300 rounded-lg sm:flex">
      {
        logoColorData.map((color) => (
          <li className="w-full border-b border-gray-300 sm:border-b-0">
            <div className="flex items-center pl-3">
              <input 
                id={props.name + `-${color.colorNameEng}`} 
                type="radio" value={color.colorNameEng} 
                name={props.name} 
                className={`w-4 h-4 text-${color.textColor} bg-gray-100 border-gray-300 focus:ring-${color.ringColor} focus:ring-2`}
                onChange={props.handleChange}
              />
              <label 
                htmlFor={props.name + `-${color.colorNameEng}`} 
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
              >
                {color.colorName}
              </label>
            </div>
          </li>     
        ))
      }
  </ul>
  )
}

export default LogoColorFormInput