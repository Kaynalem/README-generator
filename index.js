const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown= require('./utils/generateMarkdown.js');

// array of questions for user
const promptUser = () => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
                } else {
                console.log('Please enter your username!');
                return false;
                }
            }
        },
        {
        type: 'input',
        name: 'email',
        message: 'What is your email address (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
                } else {
                console.log('Please enter your email address!');
                return false;
                }
            }
        },
        {
        type: 'input',
        name: 'title',
        message: 'What is your project\'s name (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
                } else {
                console.log('Please enter your project name!');
                return false;
                }
            }
        },
        {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
                } else {
                console.log('Please enter your project description!');
                return false;
                }
            }
        },
        {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'ISC', 'Apache', 'GNU', 'BSD', 'Mozilla', 'Unlicense']
        },
        {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        validate: nameInput => {
            if (nameInput) {
                return true;
                } else {
                console.log('Please enter command needed to install necessary dependencies!');
                return false;
                }
            }
        },
        {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
        validate: nameInput => {
            if (nameInput) {
                return true;
                } else {
                console.log('Please enter command needed to run tests!');
                return false;
                }
            }
        },
        {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
        validate: nameInput => {
            if (nameInput) {
                return true;
                } else {
                console.log('Please provide brief directions for usage!');
                return false;
                }
            }
        },
        {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
        validate: nameInput => {
            if (nameInput) {
                return true;
                } else {
                console.log('Please enter how you would like to handle contributors!');
                return false;
                }
            }
        }
    ]);
};

// function to write README file
//function writeToFile(fileName, data) {
//}

// function to initialize program
const init = () => {
    console.log(`
=================
Create your professional README
=================
`);
promptUser()
    .then(data => {
        fs.writeFile('./dist/README.md', generateMarkdown(data), err => {
            if (err) throw err;
            console.log('README created! Check out README.md in dist directory to see it!')
        });
    })
}

// function call to initialize program
init();