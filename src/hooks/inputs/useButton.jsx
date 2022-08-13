import React from 'react'
import { useState } from 'react'

const GREEN  = "bg-green-500 hover:bg-grey-700 text-green-500 font-bold py-2 px-4 border border-slate-700 rounded";
const GREY    = "bg-slate-500 hover:bg-grey-700 text-slate-500 font-bold py-2 px-4 border border-slate-700 rounded";

export const useButton = (label) => {
  const [btn, setBtn] = useState(false);
  const [c, setC] = useState("bg-slate-500 hover:bg-grey-700 text-slate-500 font-bold py-2 px-4 border border-slate-700 rounded")

  const handleChangeColor = (e) => {
    if(btn)
        setC(GREY);
    else
        setC(GREEN);

    setBtn(!btn);
  }


  const Button = () => (
    <>
        <button className={c} onClick={() => handleChangeColor()}>{label}</button>
    </>
)

  return (
    [btn, Button]
  )
}
