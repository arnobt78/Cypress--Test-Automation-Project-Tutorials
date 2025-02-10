## Cypress Test Automation Project Tutorials

This project is designed to automate testing for tutorials using Cypress. It includes various test scripts and configurations to run tests in different environments and browsers. The project also integrates with multiple reporting tools to generate detailed test reports.

* **Note:** Over time, the elements of the testing or practice website—such as buttons, text content, features, domain, or other attributes—may change. As a result, test assertions may fail during execution. If you encounter such issues, please verify and update the locators of the relevant attributes (e.g., buttons, text elements, domain URLs, files, icons, etc.) to reflect the current structure of the website. This will help ensure the stability and accuracy of your test automation.*

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (version 18.x.x or later)
- npm (version 6.x.x or later)
- nvm (Node Version Manager) for managing Node.js versions

## Project Setup

1. **Clone the Repository**

   Clone the project repository to your local machine:

```sh
   git clone <repository-url>
   cd CypressAutomation
```

2. **Install Node.js**

   Use nvm to install the required Node.js version:

```sh
   nvm install 18
   nvm use 18
```

3. **Install Dependencies**

   Install the project dependencies using npm:

```sh
   npm install
```

## Project Structure

The project structure is as follows:

```
CypressAutomation
├── cypress
│   ├── fixtures
│   ├── integration
│   │   ├── examples
│   │   └── GreenKart
│   ├── plugins
│   └── support
├── cypress.config.js
├── package.json
└── README.md
```

- fixtures: Contains test data files.
- integration: Contains test scripts.
  - `examples`: Contains example test scripts.
  - `GreenKart`: Contains test scripts specific to the GreenKart application.
- plugins: Contains Cypress plugins.
- support: Contains support files and custom commands.
- cypress.config.js: Cypress configuration file.
- package.json: Project configuration and dependencies.

## Running Tests

### Run All Tests on Cypress Browser

To see all tests on cypress browser, use the following command:

```sh
npx cypress open
```

### Run All Tests (Headless)

To run all tests, use the following command:

```sh
npm run test
```

### Run Tests in Headed Mode

To run tests in headed mode, use the following command:

```sh
npm run headTest
```

### Run Tests in Chrome Browser

To run tests in Chrome browser, use the following command:

```sh
npm run chromeTest
```

### Run Tests with Dashboard Recording

To run tests with dashboard recording, use the following command:

```sh
npm run recordDashBoardTest
```

### Run Specific Tests

To run specific tests, use the following command:

```sh
npm run SmokeTest
```

### Run All GreenKart Tests

To run all tests in the GreenKart folder, use the following command:

```sh
npm run GreenKartTest
```

## Reporting

The project integrates with multiple reporting tools to generate detailed test reports.

### Mocha Reporter

The project uses `cypress-mochawesome-reporter` to generate Mocha reports. The reports are generated in the reports directory.

### Cucumber HTML Reporter

The project uses `multiple-cucumber-html-reporter` to generate Cucumber HTML reports. The reports are generated in the `cypress/cucumberReports` directory.

## Configuration

### Cypress Configuration

The Cypress configuration is defined in the cypress.config.js file. You can customize the configuration as per your requirements.

### Package.json

The package.json file contains the project configuration and dependencies. Here are some important sections:

- **Scripts**: Defines various npm scripts to run tests and generate reports.

  ```json
  "scripts": {
    "test": "npx cypress run",
    "headTest": "npm run test --headed",
    "chromeTest": "npm run test --browser chrome",
    "recordDashBoardTest": "npx cypress run --record --key 79694452-a67b-4573-9699-339617205423",
    "GreenKartTest": "npx cypress run --spec \"cypress/integration/GreenKart/*\"",
    "SmokeTest" : "npx cypress run --spec \"cypress/integration/GreenKart/Test1.js\""
  }
  ```

- **Dependencies**: Lists the project dependencies.

  ```json
  "dependencies": {
    "@badeball/cypress-cucumber-preprocessor": "^21.0.2",
    "@cypress/browserify-preprocessor": "latest",
    "convert-excel-to-json": "^1.7.0",
    "cypress-iframe": "^1.0.1",
    "exceljs": "^4.4.0"
  }
  ```

- **DevDependencies**: Lists the development dependencies.

  ```json
  "devDependencies": {
    "cypress": "^13.15.1",
    "cypress-sql-server": "^1.0.0",
    "mocha": "^10.1.0",
    "cypress-mochawesome-reporter" :"^3.8.2",
    "multiple-cucumber-html-reporter": "^3.0.1",
    "neat-csv": "5.1.0"
  }
  ```

- **Cypress Cucumber Preprocessor Configuration**: Configuration for the Cypress Cucumber preprocessor.
  ```json
  "cypress-cucumber-preprocessor": {
    "json": {
      "enabled": true,
      "output": "cypress/cucumberReports/results.json"
    }
  }
  ```

## Troubleshooting

### Common Issues

1. **Missing Dependencies**

   If you encounter missing dependencies, run the following command to install them:

   ```sh
   npm install
   ```

2. **Incorrect Node.js Version**

   Ensure you are using the correct Node.js version. Use nvm to switch to the required version:

   ```sh
   nvm use 18
   ```

3. **Syntax Errors**

   Check for syntax errors in your test scripts and configuration files.

4. **File Not Found Errors**

   Ensure that all file paths in your configuration and import statements are correct.

5. **fs Javascript File Error on Mac**

If you're encountering an "fs" module error while running Cypress automation on a Mac, it's likely due to one of the following issues:

Possible Errors:

"Cannot find module 'fs'"

This happens if you try to import fs in a browser context (Cypress runs tests in the browser, and fs is a Node.js module).

"fs.readFileSync is not a function"

This can occur if fs is not correctly imported or used in the wrong scope.

"Error: ENOENT: no such file or directory, open..."

Indicates Cypress cannot find the file you are trying to read/write.

**Solutions:**

1. Use fs in Cypress plugins or support files (NOT in test files)

Cypress runs test files in a browser-like environment, so you can only use fs in Node.js files like cypress/support/index.js or cypress/plugins/index.js.

Example:

```js
const fs = require("fs");

module.exports = (on, config) => {
  on("task", {
    readFile(filePath) {
      return fs.readFileSync(filePath, "utf8");
    },
  });
};
```

2. Use cy.task() in test files

If you need to read/write a file inside a test, delegate it to a Node.js task.

```js
it("Reads a file using cy.task()", () => {
  cy.task("readFile", "cypress/fixtures/sample.json").then((content) => {
    cy.log(content);
  });
});
```

3. Ensure the file path is correct

If you're getting an ENOENT error, double-check the file path:

```js
const filePath = path.join(__dirname, "cypress/fixtures/sample.json");
console.log("File path:", filePath);
```
