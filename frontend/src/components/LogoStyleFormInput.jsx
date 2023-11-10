import React from 'react'
import { logoStyleData } from '../constants/constans'

const LogoStyleFormInput = ({ props }) => {
  return (
    <ul className="items-center w-full text-sm font-medium text-gray-900 bg-gray-50 border
    border-gray-300 rounded-lg sm:flex">
      {
        logoStyleData.map((style) => (
          <li className="w-full border-b border-gray-300 sm:border-b-0">
            <div className="flex items-center pl-3">
                <input 
                  id={props.name + `${style.styleEng}`}
                  type={props.type} value={style.styleEng}
                  name={props.name}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300
                    rounded focus:ring-blue-500  focus:ring-2"
                    onChange={props.handleChange}   
                />
                <label htmlFor={props.name + `${style.styleEng}`} className="w-full py-3 ml-2 text-sm font-medium text-gray-900">
                  {style.styleName}
                </label>
            </div>
          </li>
        ))
      }
  </ul>
  )
}

export default LogoStyleFormInput