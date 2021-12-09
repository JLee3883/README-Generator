// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![License](https://img.shields.io/static/v1?label=license&message=${license}&color=success)`;
  } else {
    return "";
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `https://choosealicense.com/licenses/${data.license}`;
  } else {
    return "#";
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // let licenseList = $(data.license)
  // let licenseName = "";
  //   if (licenseName === 'Apache_2.0');
  //   licenseName = ("Apache 2.0")
    if (license) {
      return `The following is the license used for this project <br> ${renderLicenseLink(
          license
      )}`;
  } else {
      return "";
  }
     

}//return different texts. if and else statements

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.licenseType)}
<!--[![License: MIT](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/MIT)-->

## Description 
${data.description}

## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
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
${renderLicenseSection(data.license)} 

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
