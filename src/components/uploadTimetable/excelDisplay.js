import React, { useState } from "react";
import FileInput from "./fileInput";
import readExcelSheet from "./readExcelSheet";

export default ExcelDisplay = () => {
  const [excelData, setExcelData] = useState([]);

  const handleFileSelect = async (file) => {
    try {
      const data = await readExcelSheet(file);
      setExcelData(data);
    } catch {
      console.log("Error reading excel file ", error);
    }
  };
  return (
    <div>
      <h1>Excel Data Display</h1>
      <FileInput onFileSelect={handleFileSelect} />
      <table>
        <tbody>
          {excelData.map((row, rowIndex) => {
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => {
                <td key={cellIndex}>{cell}</td>;
              })}
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};
