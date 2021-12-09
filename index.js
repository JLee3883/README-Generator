// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
const { report } = require('process');

// TODO: Create an array of questions for user input
const questions = [
  // inquirer
  // .prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        // validate: nameInput => {
        //     if (nameInput) {
        //       return true;
        //     } else {
        //       console.log('You must enter the title of your project.');
        //       return false;
        //     }
        // }
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
    // { HARDCODE THE TABLE OF CONTENTS INTO THE README TEXT-----------
    //     type: 'checkbox',
    //     message: 'Choose your Table of Contents:',
    //     name: 'table',
    //     choices: ['Installation', 'Usage', 'Contributing', 'Tests', 'Questions', 'License' ],
    //     validate: nameInput => {
    //         if (nameInput) {
    //           return true;
    //         } else {
    //           console.log('You must enter the title of your project.');
    //           return false;
    //         }
    //     }
    // },
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
        type: 'list',
        message: 'Choose your License:',
        name: 'license',
        choices: ['Apache_2.0', 'BSD_2--Clause', 'CC0_1.0', 'MIT', 'MPL_2.0' ],
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
  // ])
];


// TODO: Create a function to initialize app
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
  
  
// // Function call to initialize app
init();

//put in another js file thats like a readmetext.js and this will be the template liter
//have to send it responses. make a function that plugs all the responses in there.
//in the second file, module.export a function that taks in the repsonsses, fills out the read me and returns the readme back to where i called it
