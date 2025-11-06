export default function Table() {
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const duration = [
    "7:30 AM - 8:20 AM",
    "8:30 AM- 9:20 AM",
    "9:30 AM- 10:20 AM",
    "10:30 AM - 11:20 AM",
    "11:30 AM - 12:20 PM",
    "12:30 PM - 01:20 PM",
    "01:30 PM - 02:20 PM",
    "02:30 PM - 03:20 PM",
    "03:30 PM - 04:20 PM",
    "04:30 PM - 05:20 PM",
    "05:30 PM - 06:20 PM",
    "06:30 PM - 07:20 PM",
  ];

  return (
    <div>
      <table>
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
