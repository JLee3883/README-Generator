// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// Questions for user input
const questions = [
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
        message: 'Enter the description: ',
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
        type: 'input',
        message: 'Enter the Installation Instructions: ',
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
        message: 'Enter the Usage Information: ',
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
        message: 'Enter the Contribution Guidelines: ',
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
        message: 'Enter the Test Instructions: ',
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
        type: 'list',
        message: 'Choose your License:',
        name: 'license',
        choices: ['Apache_2.0', 'BSD_2--Clause', 'CC0_1.0', 'MIT', 'MPL_2.0' ],
    },
    {
        type: 'input',
        message: 'Enter the instructions for additional questions: ',
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
    {
        type: 'input',
        message: 'Enter your GitHub username: ',
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
        message: 'Enter your email address: ',
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
];


// Function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((responses) => {  
    const finishedReadMe = generateMarkdown(responses); 
    console.log("Making ReadMe");
    console.log(finishedReadMe);
    fs.writeFileSync("README.md", finishedReadMe);
  })
  .catch((err) => {
    console.log(err);
  })
  
}
  
  
// Function call to initialize app
init();