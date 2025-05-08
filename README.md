# playwrightTest
This project is solely created as part of an assessment. This project doesn't use any proprietary softwares.

### Author
Suprith Gangawar <suprithguk@gmail.com>

### Pre Requisites
npm\
playwright\
typescript\

### Installation and Usage
npm i\
npm init playwright@latest\
npx playwright test\
npx playwright test --headed - To run tests in headed mode\
npx playwright show-report - To view the latest html reports

### Important Files and Folders
package.json - Human readable metadata about the project
playwright.config.ts - Configuration file for the project responsible for all executions and environment variables
Jenkinsfile - Groovy File to implement CI/CD for the project and run jobs in Jenkins
tests/ - Main directory where all the test cases and locator files are located
tests/bankManager/ - Directory where all manager associated test cases are located
tests/customer/ - Directory where all customer associated test cases are located
tests/locators - Directory where all the commonly used locators files are placed
tests/locators/locators.ts - File which has all the reusable locators
tests/pages/ - Directory where all the page object model for manager and customer are created for ease of use
tests/pages/customerPage.ts - File for all customer journey related page object models
tests/pages/managerPage.ts - File for all manager journey related page object models