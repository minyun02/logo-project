import React from 'react'

const FormField = ({ labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe, required }) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label
          htmlFor={name}
          className='block text-sm font-medium text-gray-900'
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type='button'
            onClick={handleSurpriseMe}
            className='font-semibold text-xs bg-[#ECECF1] py-1 
            px-2 rounded-[5px] text-black'
          >
            surprise me
          </button>
        )}
      </div>

      {(() => {
        switch (type) {
          case "text":
            return <input 
                    type={type} 
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[$4649ff]
                    focus:border-[$4649ff] outline-none block w-full p-3'
                    required={required}
                  />
          case "checkbox":
            return <>
                      <ul className="items-center w-full text-sm font-medium text-gray-900 bg-gray-50 border
                      border-gray-300 rounded-lg sm:flex">
                        <li className="w-full border-b border-gray-300 sm:border-b-0">
                            <div className="flex items-center pl-3">
                                <input 
                                  id={name + '-mascot'}
                                  type={type} value='mascot'
                                  name={name}
                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300
                                   rounded focus:ring-blue-500  focus:ring-2"
                                   onChange={handleChange}   
                                />
                                <label htmlFor={name + '-mascot'} className="w-full py-3 ml-2 text-sm font-medium text-gray-900">
                                  마스코트
                                </label>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-300 sm:border-b-0">
                            <div className="flex items-center pl-3">
                                <input 
                                  id={name + '-emblem'}
                                  type={type}
                                  name={name}
                                  value='emblem'
                                  className="w-4 h-4 text-blue-600 
                                bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2"
                                  onChange={handleChange}
                                />
                                <label htmlFor={name + '-emblem'} className="w-full py-3 ml-2 text-sm font-medium text-gray-900">
                                  엠블럼
                                </label>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-300 sm:border-b-0">
                            <div className="flex items-center pl-3">
                                <input 
                                  id={name + '-wordmark'}
                                  type={type}
                                  name={name}
                                  value='wordmark'
                                  className="w-4 h-4 text-blue-600 
                                bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2"
                                  onChange={handleChange}
                                />
                                <label htmlFor={name + '-wordmark'} className="w-full py-3 ml-2 text-sm font-medium text-gray-900">
                                  글자
                                </label>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-300 sm:border-b-0">
                            <div className="flex items-center pl-3">
                                <input 
                                  id={name + '-vintage'}
                                  type={type}
                                  name={name}
                                  value='vintage'
                                  className="w-4 h-4 text-blue-600 
                                bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2"
                                  onChange={handleChange}
                                />
                                <label htmlFor={name + '-vintage'} className="w-full py-3 ml-2 text-sm font-medium text-gray-900">
                                빈티지
                                </label>
                            </div>
                        </li>
                    </ul>
                  </>
          case "radio":
            return <>
                      <ul className=" items-center w-full text-sm font-medium text-gray-900 bg-gray-50 border
                      border-gray-300 rounded-lg sm:flex">
                        <li className="w-full border-b border-gray-300 sm:border-b-0">
                          <div className="flex items-center mr-4">
                            <input id={name+'-blue'} type="radio" value="blue" name={name} className="w-4 h-4 
                            text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2" onChange={handleChange}/>
                            <label htmlFor={name+'-blue'} className="ml-2 text-sm font-medium text-gray-900">파랑</label>
                          </div>
                        </li>     
                        <li className="w-full border-b border-gray-300 sm:border-b-0">
                          <div className="flex items-center mr-4">
                            <input id={name+'-purple'} type="radio" value="purple" name={name} className="w-4 h-4 
                            text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 focus:ring-2" onChange={handleChange}/>
                            <label htmlFor={name+'-purple'} className="ml-2 text-sm font-medium text-gray-900">보라</label>
                          </div>
                        </li> 
                        <li className="w-full border-b border-gray-300 sm:border-b-0">
                          <div className="flex items-center mr-4">
                            <input id={name+'-pink'} type="radio" value="pink" name={name} className="w-4 h-4 
                            text-pink-400 bg-gray-100 border-gray-300 focus:ring-pink-400 focus:ring-2" onChange={handleChange}/>
                            <label htmlFor={name+'-pink'} className="ml-2 text-sm font-medium text-gray-900">분홍</label>
                          </div>
                        </li> 
                        <li className="w-full border-b border-gray-300 sm:border-b-0">
                          <div className="flex items-center mr-4">
                            <input id={name+'-red'} type="radio" value="red" name={name} className="w-4 h-4 
                            text-red-600 bg-gray-100 border-gray-300 focus:ring-red-600 focus:ring-2" onChange={handleChange}/>
                            <label htmlFor={name+'-red'} className="ml-2 text-sm font-medium text-gray-900">빨강</label>
                          </div>
                        </li> 
                        <li className="w-full border-b border-gray-300 sm:border-b-0">
                          <div className="flex items-center mr-4">
                            <input id={name+'-orange'} type="radio" value="orange" name={name} className="w-4 h-4 
                            text-orange-400 bg-gray-100 border-gray-300 focus:ring-orange-400 focus:ring-2" onChange={handleChange}/>
                            <label htmlFor={name+'-orange'} className="ml-2 text-sm font-medium text-gray-900">주황</label>
                          </div>
                        </li> 
                        <li className="w-full border-b border-gray-300 sm:border-b-0">
                          <div className="flex items-center mr-4">
                            <input id={name+'-green'} type="radio" value="green" name={name} className="w-4 h-4 
                            text-green-400 bg-gray-100 border-gray-300 focus:ring-green-400 focus:ring-2" onChange={handleChange}/>
                            <label htmlFor={name+'-green'} className="ml-2 text-sm font-medium text-gray-900">초록</label>
                          </div>
                        </li> 
                    </ul>
                  </>
          default:
            return null;
        }
      })()}
    </div>
  )
}

export default FormField