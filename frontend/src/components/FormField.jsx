import React, { useState } from 'react'
import TextFormInput from '../components/TextFormInput'
import LogoStyleFormInput from '../components/LogoStyleFormInput'
import LogoColorFormInput from '../components/LogoColorFormInput'

const FormField = (props) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label
          htmlFor={props.name}
          className='block text-sm font-medium text-gray-900'
        >
          {props.labelName}
        </label>
      </div>

      {(() => {
        switch (props.name) {
          case "text":
            return <TextFormInput props={props}/>
          case "sportsType":
            return <TextFormInput props={props}/>
          case "teamName":
            return <TextFormInput props={props}/>
          case "logoStyle":
            return <LogoStyleFormInput props={props}/>
          case "logoColor":
            return <LogoColorFormInput props={props}/>
          default:
            return null;
        }
      })()}
    </div>
  )
}

export default FormField