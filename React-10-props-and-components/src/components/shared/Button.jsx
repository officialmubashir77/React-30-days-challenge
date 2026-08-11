import React from 'react'

const Button = ({icon : Icon, label, color}) => {
  return (
    <button className={`bg-${color}-500 hover:bg-${color}-600 text-white font-bold py-2 px-4 flex items-center gap-2 rounded cursor-pointer active:scale-90 transition duration-100`}>
        <Icon/>
        {label}
    </button>
  )
}

export default Button