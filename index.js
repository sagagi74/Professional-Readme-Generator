// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [


   
        {
          type: 'input',
          name: 'title',
          message: 'What is  your project?',
        },
        {
          type: 'input',
          name: 'description',
          message: ' description of your project:',
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
