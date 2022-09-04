import React from 'react'

export const RadioButton = ({id, name, handleChangeScore, ...props}) => {  

  return (
    <div className="flex justify-end items-center mb-2 col-span-2 gap-2">
        <div>
          <input disabled={props.disabled} id={`${id}-1`} type="radio" defaultChecked defaultValue="1" name={id} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={ (e) => handleChangeScore(e, name)}/>
          <label htmlFor={`${id}-1`} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">1</label>
        </div>
        <div>
          <input disabled={props.disabled} id={`${id}-2`} type="radio" defaultValue="2" name={id} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={ (e) => handleChangeScore(e, name)}/>
          <label htmlFor={`${id}-2`} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">2</label>
        </div>
        <div>
          <input disabled={props.disabled} id={`${id}-3`} type="radio" defaultValue="3" name={id} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={ (e) => handleChangeScore(e, name)}/>
          <label htmlFor={`${id}-3`} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">3</label>
        </div>
        <div>
          <input disabled={props.disabled} id={`${id}-4`} type="radio" defaultValue="4" name={id} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={ (e) => handleChangeScore(e, name)}/>
          <label htmlFor={`${id}-4`} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">4</label>
        </div>
        <div>
          <input disabled={props.disabled} id={`${id}-5`} type="radio" defaultValue="5" name={id} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={ (e) => handleChangeScore(e, name)}/>
          <label htmlFor={`${id}-5`} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">5</label>
        </div>
    </div>
)

}
