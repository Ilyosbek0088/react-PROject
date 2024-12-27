import React from 'react'

const Button = ({onClick,icon,text,active=false}) => {
  return (
    <div onClick={onClick} className={` btn bg-[black] text-black p-2 flex justify-center items-center gap-x-2 cursor-pointer rounded-md border-[3px] border-solid border-white hover:border-white hover:bg-[white] hover:text-slate-600 transition-all  ${active ? 'border-yellow-100' : 'border-white'}`}>{icon &&  <i>{icon}</i>}  <span>{text}</span></div>
  )
}

export default Button