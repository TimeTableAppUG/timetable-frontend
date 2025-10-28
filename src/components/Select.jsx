export default function Select({id, placeholder, optionValues, onChange}){
  // optionValues to be passed as an Array
  return (
    <div >
      <div className="grid items-center justify-center text-center">
        <label htmlFor={id} className="text-[15px] text-left  pb-[5px] font-[500]" > {id} </label>
        <select defaultValue={placeholder} name={id} id={id} onChange={onChange} className="pl-[10px] pr-[30%] mb-[20px] rounded-[8px] border-[solid] border-[1px] border-[gray] h-[44px] w-[400px]"  >
        <option  disabled hidden> {placeholder} </option>

      {optionValues.map((option)=> (
       <option key={option} value={option}> {option} </option>
        ))}
      

        </select>
        </div>
        

        

   
    </div>
  )
}






