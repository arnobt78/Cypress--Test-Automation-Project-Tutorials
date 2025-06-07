# Cypress Test Automation Project Tutorials

<img width="1265" alt="Screenshot 2025-02-11 at 02 48 38" src="https://github.com/user-attachments/assets/22e7e0fc-fa11-4c49-bdab-b645b442404b" />

## Project Overview

This repository provides a comprehensive set of Cypress-based test automation tutorials, demonstrating best practices for automating UI testing of web applications. The project includes various scripts, configurations, and reporting tools that allow you to run, manage, and analyze end-to-end and component tests using Cypress.

> **Note:** The underlying practice website may change its UI or features over time. If you encounter assertion failures, revalidate selectors or assertions against the live site.

---

## Table of Contents

- [Project Features](#project-features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [How to Run Tests](#how-to-run-tests)
- [Reporting](#reporting)
- [Configuration Highlights](#configuration-highlights)
- [Troubleshooting](#troubleshooting)
- [Keywords](#keywords)
- [Contributing](#contributing)
- [License](#license)

---

## Project Features

- **End-to-End UI Automation**: Test user journeys and workflows in a real browser.
- **Reusable Test Data**: Uses fixtures for consistent and reusable test data.
- **Modular Test Organization**: Example tests and domain-specific suites (e.g., GreenKart).
- **Custom Commands & Plugins**: Extend Cypress with custom logic and Node.js plugins.
- **Multi-Browser Support**: Run tests in Chrome and Electron.
- **Headless & Headed Modes**: Flexible execution with headless or interactive browsers.
- **CI/CD Ready**: Scripts for dashboard recording and CI integration.
- **Rich Reporting**: Mocha and Cucumber HTML reports for test visibility.

---

## Technology Stack

- **Cypress**: Main framework for automation testing.
- **Node.js**: v18.x.x or later (tested with Node 18).
- **npm**: For package management and scripts.
- **nvm**: Node Version Manager for managing Node versions.
- **Cucumber**: Gherkin-based BDD testing (via cypress-cucumber-preprocessor).
- **Mochawesome**: For enhanced Mocha test reporting.
- **Multiple-Cucumber-HTML-Reporter**: For generating beautiful Cucumber reports.
- **Other Utilities**: `cypress-iframe`, `convert-excel-to-json`, `exceljs`, etc.

---

## Project Structure

```
CypressAutomation
├── cypress
│   ├── fixtures         # Test data (JSON, CSV, etc.)
│   ├── integration
│   │   ├── examples     # General Cypress examples
│   │   └── GreenKart    # Domain/application-specific tests
│   ├── plugins          # Cypress plugins for Node.js tasks
│   └── support          # Custom commands, support utilities
├── cypress.config.js    # Cypress configuration
├── package.json         # Project dependencies, scripts
└── README.md            # Project documentation
```

---

## Getting Started

### Prerequisites

- Node.js (18.x.x or later)
- npm (6.x.x or later)
- nvm (Node Version Manager)

### Setup Instructions

1. **Clone the Repository**
    ```sh
    git clone <repository-url>
    cd Cypress--Test-Automation-Project-Tutorials
    ```

2. **Install Node.js**
    ```sh
    nvm install 18
    nvm use 18
    ```

3. **Install Dependencies**
    ```sh
    npm install
    ```

---

## How to Run Tests

### Open Cypress Test Runner (GUI)
```sh
npx cypress open
```

### Run All Tests (Headless)
```sh
npm run test
```

### Run Tests in Headed Mode
```sh
npm run headTest
```

### Run Tests in Chrome Browser
```sh
npm run chromeTest
```

### Run with Dashboard Recording
```sh
npm run recordDashBoardTest
```

### Run Specific Tests (e.g., Smoke Test)
```sh
npm run SmokeTest
```

### Run All GreenKart Tests
```sh
npm run GreenKartTest
```

---

## Reporting

- **Mocha Reporter**: Uses `cypress-mochawesome-reporter` to generate detailed Mocha reports in the `reports` directory.
- **Cucumber HTML Reporter**: Generates Gherkin-based HTML reports with `multiple-cucumber-html-reporter` in `cypress/cucumberReports`.

---

## Configuration Highlights

### Cypress Configuration (`cypress.config.js`)
Customize as needed for base URL, environment variables, or plugins.

### `package.json`

**Scripts:**
```json
"scripts": {
  "test": "npx cypress run",
  "headTest": "npm run test --headed",
  "chromeTest": "npm run test --browser chrome",
  "recordDashBoardTest": "npx cypress run --record --key 79694452-a67b-4573-9699-339617205423",
  "GreenKartTest": "npx cypress run --spec \"cypress/integration/GreenKart/*\"",
  "SmokeTest": "npx cypress run --spec \"cypress/integration/GreenKart/Test1.js\""
}
```

**Dependencies:**
```json
"dependencies": {
  "@badeball/cypress-cucumber-preprocessor": "^21.0.2",
  "@cypress/browserify-preprocessor": "latest",
  "convert-excel-to-json": "^1.7.0",
  "cypress-iframe": "^1.0.1",
  "exceljs": "^4.4.0"
}
```

**DevDependencies:**
```json
"devDependencies": {
  "cypress": "^13.15.1",
  "cypress-sql-server": "^1.0.0",
  "mocha": "^10.1.0",
  "cypress-mochawesome-reporter": "^3.8.2",
  "multiple-cucumber-html-reporter": "^3.0.1",
  "neat-csv": "5.1.0"
}
```

**Cucumber Preprocessor Configuration:**
```json
"cypress-cucumber-preprocessor": {
  "json": {
    "enabled": true,
    "output": "cypress/cucumberReports/results.json"
  }
}
```

---

## Troubleshooting

### Common Issues & Solutions

1. **Missing Dependencies**
    - Run: `npm install`

2. **Incorrect Node.js Version**
    - Run: `nvm use 18`

3. **Syntax Errors**
    - Check your test scripts and config files for typos.

4. **File Not Found Errors**
    - Double-check file paths in your configuration and imports.

5. **"fs" JavaScript File Error on Mac**
    - Only use Node's `fs` module inside Cypress plugins or support files, not in browser test files.
    - Use `cy.task()` in your tests to interact with files via Node context.

**Example: Use `fs` in plugins**
```js
const fs = require('fs');
module.exports = (on, config) => {
  on('task', {
    readFile(filePath) {
      return fs.readFileSync(filePath, 'utf8');
    },
  });
};
```

**Example: Use `cy.task()` in tests**
```js
it('Reads a file using cy.task()', () => {
  cy.task('readFile', 'cypress/fixtures/sample.json').then((content) => {
    cy.log(content);
  });
});
```

---

## Keywords

- Cypress, Automation, E2E Testing, UI Testing, JavaScript, Mocha, Cucumber, Gherkin, Node.js, Continuous Integration, Test Reporting, Plugins, Custom Commands, GreenKart, Fixtures, Test Data, Dashboard, Headless Browser

---

## Contributing

Contributions are welcome! Please fork the repo, make your changes, and submit a pull request.

---

## License

This project is licensed under the MIT License.

---

<!--
All screenshot images from the original README are retained.
-->
