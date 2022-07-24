import React from 'react'

//Components
import RegisterForm from '../../../components/forms/RegisterForm';

export const Register = () => {
    return (
      <>
        <nav className="flex items-center justify-between flex-wrap bg-cyan-600 p-6 mb-10 sticky top-0 z-50">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
              <span className="font-semibold text-xl tracking-tight">Registro de nuevo usuario</span>
          </div>
        </nav>
        <RegisterForm />
      </>
    )

}
