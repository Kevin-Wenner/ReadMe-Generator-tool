// TODO: Include packages needed for this application
const generateMD = require('./utils/generateMarkdown');
const inquire = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github user name?',
        // validate: () => {},
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        // validate: () => {},
    },
    {
        type: 'input',
        name: 'githubRepo',
        message: 'What is you Github user repository?',
        // validate: () => {},
    },
    {
        type: 'input',
        name: 'title',
        message: "What is the project name?",
        // validate: () => {},

    },
    {
        type: 'input',
        name: 'installation',
        message: "Enter installation instructions",
    },
    {
        type: 'input',
        name: 'description',
        message:"Describe the project",
    },
    {
        type:'input',
        name: 'usage',
        message:"Explain how to use the project",
    },
    {
        type: 'input',
        name: 'contribution',
        message:"list contributors",
    },
    {
        type: "input",
        name: 'questions',
        message: 'List some frequently asked questions'
    },
    {
        type: "input",
        name: 'tests',
        message: 'provide used tests and explain the testing process'
    },
    {
        type: 'list',
        name: 'license',
        message:"What makes your project stand out?",
        choices: ["MIT", "GNU", "Apache"],
        filter(temp){
            return temp
        }
    }
   
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, data , (err) => err ? console.log(err) : console.log('ReadMe created'));
}

// TODO: Create a function to initialize app
async function init() {
    return inquire
        .prompt(questions)
        .then((response) => {
            const MD = generateMD(response);
            writeToFile("README", MD);
        })
        .catch((err) => {
            console.log(err);
        })
}

// Function call to initialize app
init();
