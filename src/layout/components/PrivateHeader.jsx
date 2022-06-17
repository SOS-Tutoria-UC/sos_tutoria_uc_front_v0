import React from 'react'

const Header = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-cyan-600 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">SOS Tutoría UC</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
                <button className="block mt-4 lg:inline-block lg:mt-0 text-cyan-200 hover:text-white mr-4">
                    Solicitudes
                </button>
            </div>
            <div>
                <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Logout</button>
            </div>
        </div>
  </nav>
  )
}

export default Header