// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  [![License: MIT](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Description 
  ${data.description}

  ## Table of Contents
   - [Description](#description)
   - [Installation Instructions](#installation-instructions)
   - [Usage Information](#usage-information)
   - [License](#license)
   - [Contribution Guideline](#contribution-guideline)
   - [Test Instructions](#test-instructions)
   - [Questions](#questions)

  ## Installation Instructions
  ${data.installation}

  ## Usage Information
  ${data.usage}
  
  ## License
  This application is covered by the ${data.license} license. 

  ## Contribution Guideline
  ${data.contribution}

  ## Test Instructions
  ${data.test}


  ## Questions
  [My GitHub Page](https://github.com/${data.username})
  
  Email: ${data.email}
  
  ${data.additional}

`;
}

module.exports = generateMarkdown;
