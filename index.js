// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [

   
        {
          type: 'input',
          name: 'title',
          message: 'What is your project name?',
        },
        {
          type: 'input',
          name: 'description',
          message: ' description of your project:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide the installation instructions?',
          },
          {
            type: 'input',
            name: 'usage',
            message: 'Provide the usage information?',
          },
          {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your project:',
            choices: ['MIT', 'AGPL', 'None'],
          },
          {
            type: 'input',
            name: 'contributing',
            message: 'What ia the contribution guidelines?',
          },
          {
            type: 'input',
            name: 'tests',
            message: 'Provide the test instructions?',
          },
          {
            type: 'input',
            name: 'github',
            message: 'My GitHub username?',
          },
          {
            type: 'input',
            name: 'email',
            message: 'My email address?',
          },
    




];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log('README.md generated!');
      });
}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions).then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile('README.md', markdown);
      });
}

// Function call to initialize app
init();
