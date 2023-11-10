import React from 'react'

const TextFormInput = ({ props }) => {
  return (
    <input 
      type={props.type} 
      id={props.name}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.handleChange}
      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[$4649ff]
      focus:border-[$4649ff] outline-none block w-full p-3'
      required={props.required}
    />
  )
}

export default TextFormInput