export default function Select({id, value1, value2,placeholder, onChange}){
  

  return (
    <div >
      <div className="grid items-center justify-center text-center">
        <label htmlFor={id} className="text-[15px] text-left  pb-[5px] font-[500]" > {id} </label>
        <select name={id} id={id} onChange={onChange} className="pl-[10px] pr-[30%] mb-[20px] rounded-[8px] border-[solid] border-[1px] border-[gray] h-[44px] w-[400px]"  >
        <option  disabled selected hidden> {placeholder} </option>
        <option  value={value1}> {value1} </option>
        <option  value={value2}> {value2} </option>
        </select>
        </div>
        

        

   
    </div>
  )
}






