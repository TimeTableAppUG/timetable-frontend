import "./Header.css";
export function Header() {
  return (
    <div className="bg-[linear-gradient(to_right,_#667eea,_#764ba2)] h-[29%] p-[30px] text-center font-[Inter] text-[#ffffff]">
      <h1>
        <span className="emoji"> &#128218; </span>Timetable Clash Checker
      </h1>

      <p>Manage courses and prevent scheduling conflicts</p>
    </div>
  );
}