import React from 'react'
import { Link } from 'react-router-dom'
//Hooks
import useAuth from '../../hooks/useAuth'

const Header = () => {
  const { handleSetAuth } = useAuth();

  const handleLogout = () => {
    handleSetAuth({});
    localStorage.removeItem("access_token");
  }

  return (
    <nav className="flex items-center justify-between flex-wrap bg-cyan-600 p-6">
        <Link to={"/user"} className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">SOS Tutoría UC</span>
        </Link>
        <div className="w-full block flex-grow sm:flex items-center sm:w-auto gap-2">
            <div className="text-sm">
                <Link to={"request-tutoring"} className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 sm:mt-0">
                    Solicitar Tutoría
                </Link>
            </div>
            <div className="text-sm">
                <Link to={"quienes-somos"} className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 sm:mt-0">
                    Quiénes somos?
                </Link>
            </div>
            <div className="text-sm flex-1">
                <Link to={"como-interactuar"} className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 sm:mt-0">
                    Cómo interactuar?
                </Link>
            </div>
            <div>
                <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 sm:mt-0" onClick={handleLogout}>Logout</button>
            </div>
        </div>
  </nav>
  )
}

export default Header