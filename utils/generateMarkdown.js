
function generateMarkdown(data) {
  return `
# ${data.title}
[![License: MIT](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/MIT)

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

This application is covered under the ${data.license} license.


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
