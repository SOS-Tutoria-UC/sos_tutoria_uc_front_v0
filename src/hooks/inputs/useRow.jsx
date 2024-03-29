import React from 'react'
import { useState } from 'react'

import { useButton } from './useButton'


export const useRow = (hour) => {

    const [ state0, Button0 ] = useButton("Seleccionar");
    const [ state1, Button1 ] = useButton("Seleccionar");
    const [ state2, Button2 ] = useButton("Seleccionar");
    const [ state3, Button3 ] = useButton("Seleccionar");
    const [ state4, Button4 ] = useButton("Seleccionar");
    const [ state5, Button5 ] = useButton("Seleccionar");

  const Row = ({...props}) => (
    <>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="font-medium text-gray-900 dark:text-black whitespace-nowrap bg-white">
              {hour}
            </th>
            <td style={{width:"10px"}}>
               <Button0 disabled={props.disabled}/>
             </td>
           <td style={{width:"10px"}}>
                <Button1 disabled={props.disabled}/>
            </td>
            <td style={{width:"10px"}}>
              <Button2 disabled={props.disabled}/>
            </td>
            <td style={{width:"10px"}}>
              <Button3 disabled={props.disabled}/>
            </td>
            <td style={{width:"10px"}}>
              <Button4 disabled={props.disabled}/>
            </td>
            <td style={{width:"10px"}}>
              <Button5 disabled={props.disabled}/>
            </td>
        </tr>
    </>
)

  return (
    [[state0, state1, state2, state3, state4, state5], Row]
  )
}
