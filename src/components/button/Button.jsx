import React from 'react'

function Button({btnValue,size,textColor,bgColor}) {
  return (
    <div>
      <button className={`border-2 border-white p-3 rounded-lg ${textColor} ${bgColor} ${size}`}>{btnValue}</button>
    </div>
  )
}

export default Button
