import React, { useState, useEffect } from "react";
import FileInput from "./fileInput";
import readExcelSheet from "./readExcelSheet";

export default function () {
  const [excelData, setExcelData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileSelect = async (file) => {
    try {
      const data = await readExcelSheet(file);
      setIsLoading(true);
      setExcelData(data);
    } catch (error) {
      console.log("Error reading excel file ", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    console.log("Successful", excelData);
  }, [excelData]);
  return (
    <div>
      {isLoading ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <div>
          <h1>Excel Data Display</h1>
          <FileInput onFileSelect={handleFileSelect} />
          <table>
            <tbody>
              {excelData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
