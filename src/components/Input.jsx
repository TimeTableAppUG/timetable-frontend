import { useState } from "react"


export default function Input(props){
  const [focused, setFocus]=useState(false)
  const {label, id, message, onChange,...inputProps} = props
  const handleFocus =(e)=> {
    setFocus(true)
  }
  return (
    <div id= "inputField"className="grid items-center justify-center text-center ">
      <label htmlFor={id} className="text-[15px] text-left  pb-[5px] font-[500]"> {label} </label>
      <input  className="pl-[10px] pr-[30%] mb-[5px] rounded-[8px] border-[solid] border-[1px] border-[gray] h-[44px] w-[400px]"id = {id} {...inputProps}  onChange={onChange} onBlur={handleFocus} focused={focused.toString()} />
      <span className="text-[12px] text-left mb-[20px] text-[red] w-[370px] " > {message} </span>

    </div>
  )
}