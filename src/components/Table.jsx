export default function Table() {
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const duration = [
    "7:30 - 9:30",
    "9:30 - 11:30",
    "11:30 - 13:30",
    "13:30 - 15:30",
    "15:30 - 17:30",
    "17:30 - 19:30",
  ];

  return (
    <div className="flex items-center justify-center m-[1%]">
      <table calssNa>
        <thead>
          <tr>
            <th className="text-[white] bg-[#4f7eff] p-[10px] border-[1px] border-[solid] border-[#fff]"> Time</th>
              {daysOfWeek.map((day) => (
                <th key={day} className="text-[white] bg-[#4f7eff] p-[10px] border-[1px] border-[solid] border-[#fff]"> {day} </th>
              ))}
            
          </tr>
        </thead>

        <tbody>
          {duration.map((times) => (
            <tr key={times}>
              <td className=" pr-[40px] pl-[40px] border-[1px] border-[solid] border-[g]"> {times} </td>
              
                {daysOfWeek.map((day) => (
                  <td key={day} className="border-[1px] border-[solid] border-[g]"> <textarea className="resize-none"/> </td>
                ))}
              
            </tr>
          ))}
        </tbody>
        
      </table>
    </div>
  );
}
