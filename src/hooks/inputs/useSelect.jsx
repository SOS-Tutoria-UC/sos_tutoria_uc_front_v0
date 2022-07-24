import React from 'react'
import { useState } from 'react'

export const useSelect = (id, label, options, option1) => {
  const [option, setOption] = useState('');


  const Select = () => (
    <>
        <label htmlFor={id} className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400 text-bold">{label}</label>
        <select id={id} value={option} onChange={ e => setOption( e.target.value )}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value=''>{option1}</option>
            {options.map( opcion => (
                <option 
                    key={opcion.id}
                    value={opcion.id}
                >{opcion.name}</option>
            ))}
        </select>
    </>
)

  return (
    [option, Select]
  )
}
