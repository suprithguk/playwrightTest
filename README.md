# playwrightTest
This project is solely created as part of an assessment. This project doesn't use any proprietary softwares.

### Author
Suprith Gangawar <suprithguk@gmail.com>

### Pre Requisites
npm\
playwright\
typescript

### Installation and Usage
- npm i
- npm init playwright@latest
- npx playwright test
- npx playwright test --headed - To run tests in headed mode
- npx playwright show-report - To view the latest html reports

### Important Files and Folders
- package.json - Human readable metadata about the project
- playwright.config.ts - Configuration file for the project responsible for all executions and environment variables
- Jenkinsfile - Groovy File to implement CI/CD for the project and run jobs in Jenkins
- tests/ - Main directory where all the test cases and locator files are located
- tests/bankManager/ - Directory where all manager associated test cases are located
- tests/customer/ - Directory where all customer associated test cases are located
- tests/locators - Directory where all the commonly used locators files are placed
- tests/locators/locators.ts - File which has all the reusable locators
- tests/pages/ - Directory where all the page object model for manager and customer are created for ease of use
- tests/pages/customerPage.ts - File for all customer journey related page object models
- tests/pages/managerPage.ts - File for all manager journey related page object models

### CI/CD with Jenkins

To run the code in CI/CD, copy the content of the Jenkinsfile in the repo and create a Pipeline job in a Jenkins instance and paste the copied content to the script section. This job will clone the repo, install pre requisites, run the tests and generate reports. 

### Best Practices
- Follwed the Page Object Model for easy modification and maintenance
- Placed all the commonly used locators in a separate file
- Isolated 3 test cases in 3 files and segregated as per manager and customer roles
- Implemented CI/CD using Jenkins and Groovy for nightly runs
- Used Visual Studio Code for an IDE and Github for the version control system
