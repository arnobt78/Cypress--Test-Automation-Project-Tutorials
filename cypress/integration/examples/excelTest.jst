const ExcelJs =require('exceljs');

async function writeExcelTest(searchText,replaceText,change,filePath)
{
    
  const workbook = new ExcelJs.Workbook();
  await workbook.xlsx.readFile(filePath);
  const worksheet = workbook.getWorksheet('Sheet1');
  const output= await readExcel(worksheet,searchText);

  const cell = worksheet.getCell(output.row,output.column+change.colChange);
  cell.value = replaceText;
  await workbook.xlsx.writeFile(filePath);

}


async function readExcel(worksheet,searchText)
{
    let output = {row:-1,column:-1};
    worksheet.eachRow((row,rowNumber) =>
    {
          row.eachCell((cell,colNumber) =>
          {
              if(cell.value === searchText)
              {
                  output.row=rowNumber;
                  output.column=colNumber;
              }
  
  
          }  )
    
    })
    return output;
}
//update Mango Price to 350. 
writeExcelTest("Mango",350,{rowChange:0,colChange:2},"/Users/rahulshetty/downloads/excelTest.xlsx");








