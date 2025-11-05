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
    <div>
      <table>
        <thead>
          <tr>
            <th> Time</th>
              {daysOfWeek.map((day) => (
                <th key={day}> {day} </th>
              ))}
            
          </tr>
        </thead>

        <tbody>
          {duration.map((times) => (
            <tr key={times}>
              <td className> {times} </td>
              
                {daysOfWeek.map((day) => (
                  <td key={day}> <textarea/> </td>
                ))}
              
            </tr>
          ))}
        </tbody>
        
      </table>
    </div>
  );
}
