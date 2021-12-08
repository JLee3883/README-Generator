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
    },
    {
        type: 'input',
        message: 'Enter the description',
        name: 'description',
    },
    {
        type: 'list',
        message: 'Choose your Table of Contents:',
        name: 'table',
        choices: ['Installation', 'Usage', 'Contributing', 'Tests', 'Questions', 'License' ],
    },
    {
        type: 'input',
        message: 'Enter the Installation Instructions',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter the Usage Information',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter the Contribution Guidelines',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Enter the Test Instructions',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Choose your License:',
        name: 'license',
        choices: ['Apache', 'BSD 2-CLAUSE-Simplified', 'Creative Commons Zero', 'MIT', 'Mozilla' ],
    },
    {
        type: 'input',
        message: 'Enter your GitHub username',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Enter your email address',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Enter the instructions for additional questions',
        name: 'additional',
    },
  ])
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
