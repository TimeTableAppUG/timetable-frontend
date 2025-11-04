import * as XLSX from "xlsx";

export default function readExcel(file) {
  return new Promise((resolve, reject) => {
    const excelReader = new FileReader();

    excelReader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const excelData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
      console.log("EXCEL SHEET IN JSON FORMAT", excelData);
      resolve(excelData);
    };

    excelReader.onerror = (error) => {
      reject(error);
    };

    excelReader.readAsArrayBuffer(file);
  });
}
