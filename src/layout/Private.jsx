import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

//Components
import PrivateHeader from './components/PrivateHeader'

//Hooks
import useAuth from '../hooks/useAuth'

const Private = () => {
  const { auth } = useAuth();

  console.log(auth)

  return (
     <>{true? (
        <div className="bg-gray-100">
            <PrivateHeader />
            <div className="md:flex md:min-h-screen">
              <main className="flex-1 p-5">
                  <Outlet />
              </main>
            </div>
        </div>
    ) : <Navigate to="/" />}</>
  )
}

export default Private;