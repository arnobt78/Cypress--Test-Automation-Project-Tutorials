# Cypress Test Automation Project Tutorials

<img width="1265" alt="Screenshot 2025-02-11 at 02 48 38" src="https://github.com/user-attachments/assets/22e7e0fc-fa11-4c49-bdab-b645b442404b" />

---

## Project Summary

This repository is a comprehensive learning resource for mastering Cypress—a leading framework for end-to-end (E2E) test automation of modern web applications. It is designed for both beginners and professionals to understand all aspects of UI test automation, including real-world best practices, reusable patterns, modular test design, custom plugins, and integration with popular CI/CD pipelines. The project is organized as a set of hands-on tutorials and working code examples, making it ideal for self-study, team upskilling, or as a reference for building robust Cypress frameworks in real projects.

- **Note:** The underlying practice website may change its UI or features over time. If you encounter assertion failures, revalidate selectors or assertions against the live site.

---

## Table of Contents

- [Project Features](#project-features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Key Components](#key-components)
- [API, Routes, and Data Handling](#api-routes-and-data-handling)
- [Functionality Walkthrough](#functionality-walkthrough)
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
- **Database & Excel Integration**: Read/write SQL Server and Excel files from tests for advanced data-driven scenarios.

---

## Technology Stack

- **Cypress**: Main framework for automation testing.
- **Node.js**: v18.x.x or later (tested with Node 18).
- **npm**: For package management and scripts.
- **nvm**: Node Version Manager for managing Node versions.
- **Cucumber**: Gherkin-based BDD testing (via cypress-cucumber-preprocessor).
- **Mochawesome**: For enhanced Mocha test reporting.
- **Multiple-Cucumber-HTML-Reporter**: For generating beautiful Cucumber reports.
- **Other Utilities**: 
  - `cypress-iframe` (iframe support)
  - `convert-excel-to-json`, `exceljs` (Excel handling)
  - `neat-csv` (CSV support)
  - `cypress-sql-server` (database tasks)
  - Custom scripts for report generation

---

## Project Structure

```
Cypress--Test-Automation-Project-Tutorials/
├── cypress/
│   ├── fixtures/         # Test data (JSON, CSV, etc.)
│   ├── integration/
│   │   ├── examples/     # General Cypress examples
│   │   └── GreenKart/    # Domain/application-specific tests
│   ├── plugins/          # Cypress plugins for Node.js tasks
│   ├── support/          # Custom commands, support utilities
│   ├── downloads/        # Test file downloads (auto-generated)
│   ├── reports/          # Test reports (auto-generated)
│   ├── screenshots/      # Screenshots from test runs (auto-generated)
│   └── videos/           # Test run videos (auto-generated)
├── Cypress Concepts Sheet.xlsx     # Reference sheet for Cypress concepts
├── Library+API.docx                # API documentation
├── cypress.config.js               # Cypress configuration
├── cucumber-html-report.js         # Custom report script
├── cucumber-json-formatter         # Cucumber report formatter
├── cucumber-messages.ndjson        # Cucumber messages for reports
├── package.json                    # Project dependencies and scripts
├── package-lock.json
├── README.md                       # Project documentation
└── .gitignore
```

> For the full and latest file/folder list, browse the repo: [GitHub Contents](https://github.com/arnobt78/Cypress--Test-Automation-Project-Tutorials/tree/main)

---

## Key Components

### 1. **Fixtures**
Reusable test data in JSON, CSV, or Excel formats. Placed under `cypress/fixtures/`.

### 2. **Integration Tests**
- **`cypress/integration/examples/`**: General Cypress sample scripts.
- **`cypress/integration/GreenKart/`**: Domain-specific E2E tests for the GreenKart application.

### 3. **Plugins**
Custom Node.js tasks (e.g., for database, Excel, or file operations) are registered here. See `cypress/plugins/`.

### 4. **Support**
Custom commands, global hooks, and shared utilities for DRY test code. See `cypress/support/`.

### 5. **Reports, Screenshots, Videos**
Auto-generated after test runs, useful for debugging and CI/CD reporting.

### 6. **Configuration Files**
- `cypress.config.js`: Main Cypress config, including DB and Excel tasks.
- `package.json`: Scripts, dependencies, and cucumber preprocessor settings.

---

## API, Routes, and Data Handling

- **Base URL:** `https://rahulshettyacademy.com` (configurable in `cypress.config.js`)
- **Database Integration:** Connects to Azure SQL for advanced test scenarios.
- **Excel/CSV Integration:** Read/write Excel data for data-driven tests (`convert-excel-to-json`, `exceljs`).
- **Custom Tasks:** Use `cy.task()` to invoke Node context for file/database operations.

**Example: Reading an Excel File**
```js
cy.task('excelToJsonConverter', 'cypress/fixtures/data.xlsx').then((data) => {
  // Use Excel data in your tests
})
```

---

## Functionality Walkthrough

1. **Test Data Driven**
   - Use JSON/Excel/CSV files from `cypress/fixtures/`.
   - Data accessed via `cy.fixture()` or custom tasks.

2. **E2E Scenarios**
   - Tests simulate real user journeys: login, search, add-to-cart, checkout, etc.
   - Modular approach: each test is focused, reusable, and easy to maintain.

3. **Custom Commands**
   - Shared actions (e.g., login, form fill) are abstracted into custom commands in `cypress/support/commands.js` (if present).

4. **Database/Excel Tasks**
   - Interact with DB or Excel files using `cy.task()` (see `cypress.config.js` for examples).

5. **Reporting**
   - After test runs, Mochawesome and Cucumber reports are generated for visual feedback and debugging.

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
- **Base URL, env, retries, plugins, and custom tasks** are defined here.
- **Database config** for Azure SQL.
- **Excel/CSV tasks** for data-driven tests.
- Plugins for Cucumber, Mochawesome reporter, etc.

### `package.json`

**Scripts:**
```json
"scripts": {
  "test": "npx cypress run",
  "headTest": "npm run test --headed",
  "chromeTest": "npm run test --browser chrome",
  "recordDashBoardTest": "npx cypress run --record --key <your-cypress-dashboard-key>",
  "GreenKartTest": "npx cypress run --spec \"cypress/integration/GreenKart/*\"",
  "SmokeTest": "npx cypress run --spec \"cypress/integration/GreenKart/Test1.js\""
}
```

**Dependencies/DevDependencies (Key Packages):**
- `cypress`
- `@badeball/cypress-cucumber-preprocessor`
- `cypress-mochawesome-reporter`
- `multiple-cucumber-html-reporter`
- `cypress-sql-server`
- `convert-excel-to-json`, `exceljs`
- `cypress-iframe`
- `neat-csv`

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

**Example: Using `fs` in plugins**
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

**Example: Using `cy.task()` in tests**
```js
it('Reads a file using cy.task()', () => {
  cy.task('readFile', 'cypress/fixtures/sample.json').then((content) => {
    cy.log(content);
  });
});
```

---

## Keywords

Cypress, Automation, E2E Testing, UI Testing, JavaScript, Mocha, Cucumber, Gherkin, Node.js, Continuous Integration, Test Reporting, Plugins, Custom Commands, GreenKart, Fixtures, Test Data, Data-Driven Testing, SQL Server, Excel Automation, CI/CD, Cypress Dashboard, Headless Testing.

---

## Contributing

Contributions are welcome! Please fork the repo, make your changes, and submit a pull request.

---

## License

This project is licensed under the MIT License.

---
