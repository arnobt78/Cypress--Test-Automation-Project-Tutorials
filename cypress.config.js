const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");
const sqlServer = require('cypress-sql-server');
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');
const ExcelJs =require('exceljs');



async function setupNodeEvents(on, config) {
  config.db = {
    userName: "rsa",
    password: "Azure!10",
    server: "rsadbdemo2.database.windows.net",
    options: {
        database: "rahulshettyacademy",
        encrypt: true,
        rowCollectionOnRequestCompletion : true
    }
}
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  require('cypress-mochawesome-reporter/plugin')(on);

  //
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );

  
  tasks = sqlServer.loadDBPlugin(config.db);
  on('task', tasks);  

  on('task',{

        excelToJsonConverter(filePath)
        {
          const result = excelToJson({
          source: fs.readFileSync(filePath) // fs.readFileSync return a Buffer
        });
        return result;
        }
  })

  on('task', {

   async writeExcelTest({searchText,replaceText,change,filePath})
    {
        
      const workbook = new ExcelJs.Workbook();
      await workbook.xlsx.readFile(filePath);
      const worksheet = workbook.getWorksheet('Sheet1');
      const output= await readExcel(worksheet,searchText);
    
      const cell = worksheet.getCell(output.row,output.column+change.colChange);
      cell.value = replaceText;
      //pending resolved rejected
      return workbook.xlsx.writeFile(filePath).then(()=>
      {
        return true;
      })
      .catch((error)=>
        {
          return false;
        })

    
    }

  })


  //




  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
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



module.exports = defineConfig({

  defaultCommandTimeout: 6000,
  env: {
    url: "https://rahulshettyacademy.com",
  },
  reporter: 'cypress-mochawesome-reporter',

  retries: {
    runMode: 1,

  },
  projectId: "nodpcq",

  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/integration/examples/*.js'

  },
});
