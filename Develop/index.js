// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdowngenerateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'what is the title of your readme?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'give a description of your readme'
    },
    {
        type: 'input',
        name: 'installation instructions',
        message: 'write installation instructions'
    },
    {
        type: 'input',
        name: 'usage information',
        message: 'write usage information'
    },
    {
        type: 'input',
        name: 'contribution guidelines',
        message: 'add contribution guidelines'
    },
    {
        type: 'input',
        name: 'test instructions',
        message: 'give test instructions'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();