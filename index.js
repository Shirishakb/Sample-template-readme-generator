// Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown';
// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of the project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information.'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide contribution guidelines.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license.',
        choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'None']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address.'
    },
    {
        type: 'input',
        name: 'video',
        message: 'Please provide a link to a video demonstrating the project.'
    }
];

//  Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Readme.md has been created Successfully!')
    );
}

//  Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            writeToFile('README.md', generateMarkdown(answers));
        });
 }

// Function call to initialize app
init();
