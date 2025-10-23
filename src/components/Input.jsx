import "./Input.css"

export default function Input(props){
  const {label, id, onChange,...inputProps} = props
  return (
    <div className="grid items-center justify-center text-center">
      <label htmlFor={id} className="text-[15px] text-left  pb-[5px] font-[500]"> {label} </label>
      <input  className="pl-[10px] pr-[30%] mb-[20px] rounded-[8px] border-[solid] border-[1px] border-[gray] h-[44px] w-[400px]"id = {id} {...inputProps}  onChange={onChange} />

    </div>
  )
}