// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs");
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
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log("There was an error creating a readme", err);
        } else {
            console.log("Readme file has been created");
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const markdownContent = generateMarkdown(answers);
        writeToFile("Readme.md", markdownContent);
    })
}

// Function call to initialize app
init();