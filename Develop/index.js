// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('You must enter the title of your project.');
              return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Enter the description',
        name: 'description',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('You must enter the description of your project.');
              return false;
            }
        }
    },
    {
        type: 'list',
        message: 'Choose your Table of Contents:',
        name: 'table',
        choices: ['Installation', 'Usage', 'Contributing', 'Tests', 'Questions', 'License' ],
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('You must enter the title of your project.');
              return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Enter the Installation Instructions',
        name: 'installation',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('You must enter the installation instructions.');
              return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Enter the Usage Information',
        name: 'usage',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('You must enter the usage information.');
              return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Enter the Contribution Guidelines',
        name: 'contribution',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('You must enter the contribution guidelines.');
              return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Enter the Test Instructions',
        name: 'test',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('You must enter the testing instructions.');
              return false;
            }
        }
    },
    {
        type: 'checkbox',
        message: 'Choose your License:',
        name: 'license',
        choices: ['Apache', 'BSD 2-CLAUSE-Simplified', 'Creative Commons Zero', 'MIT', 'Mozilla' ],
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('You must choose a license.');
              return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Enter your GitHub username',
        name: 'username',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('You must enter your GitHub username.');
              return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Enter your email address',
        name: 'email',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('You must enter your email address.');
              return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Enter the instructions for additional questions',
        name: 'additional',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('You must enter the instructions for additional questions.');
              return false;
            }
        }
    },
  ])
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName. data, error => {
        err ? console.log(err) : console.log('Success!')
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
