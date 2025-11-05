import Table from "../../Table";
import Select from "../../Select";

export function Dashboard() {
    return (
        <> 
        <div className="grid items-center justify-center m-[1%]">
            <h1 className="font-bold text-[23px]"> Lecturer Timetable </h1>
            <p className="text-[14px] mb-[5%]">Select Year, Level, Semester:</p>
            {/* <Select id="Year:" placeholder={"Select Year"} optionValues={["2024/2025","2025/2026"]}/>
            <Select id="Level:" placeholder={"Select Year"} optionValues={["100","200","300","400"]}/>
            <Select id="Semester:" placeholder={"Select Semester"} optionValues={["Semester 1", "Semester 2"]}/> */}
            <Table />
            </div>
        </>)
}