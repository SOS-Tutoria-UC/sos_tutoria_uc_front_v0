import React from 'react'
import { useState } from 'react'

import { RadioButton } from './RadioButton';


export const Accordion = ({skills, handleChangeScore, label}) => {

  const [ showBody, setShowBody ] = useState("hidden")

  const handleShowBody = () => {
    if(showBody){setShowBody("")} else setShowBody("hidden")
  }

  return (
    <>
        <div className="bg-white border rounded-md border-slate-300">
            <h2 className="b-0" id="headingOne">
              <button className="
                relative
                flex
                font-bold
                text-xl
                items-center
                w-full
                py-4
                px-5
               text-gray-800 text-left
                bg-slate-100
                hover:bg-slate-200
                border-0
                rounded-none
                transition
                focus:outline-none
              " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                aria-controls="collapseOne"
                onClick={() => handleShowBody()}>
                <spam className="flex-1">{label}</spam> 
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
              </button>
            </h2>
            <div className={showBody} aria-labelledby="headingOne">
              <div className="py-4 px-5">
                {
                    skills.map((c) => (
                    <div className="mb-4 grid grid-cols-6" key={c.id}> 
                        <label htmlFor={c.id} className="ml-2 text-lg font-bold text-gray-500 col-span-4">{c.id} - {c.name}</label>
                        <RadioButton id={c.id} name={c.name} handleChangeScore={handleChangeScore} />
                    </div>
                    ))
                }   
              </div>
            </div>
          </div>
    </>
)
}
