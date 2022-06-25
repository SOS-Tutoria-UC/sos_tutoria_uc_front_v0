import { Outlet } from "react-router-dom";

import React from 'react'

const Public = () => {
  return (
    <div className="bg-gray-100">
        <div className="md:flex md:min-h-screen">
          <main className="flex-1 p-5">
              <Outlet />
          </main>
        </div>
    </div>
  )
}

export default Public