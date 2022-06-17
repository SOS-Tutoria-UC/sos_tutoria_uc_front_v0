import React from 'react'

const Toast = ({children}) => {
  return (
    <div className="font-bold m-2 text-red-500">
          {children}
    </div>
  )
}

export default Toast