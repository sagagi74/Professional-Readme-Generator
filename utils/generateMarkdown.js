// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  //License = timyun
  //https://img.shields.io/badge/License-$%7Byonglicense%7D-yellow.svg

  return `![License: ${license}](https://img.shields.io/badge/License-${license}-red.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (!license) {
    return '';
  }
  return `[License](#license)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `## License Information

This Application is licensed under Named: ${license}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

## Description of your project

${data.description}

## Table of Contents

- ${renderLicenseLink(data.license)}
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)



## Installation Guide 

${data.installation}

## Usage Information

${data.usage}

${renderLicenseSection(data.license)}

## How to contribute to this project

${data.contributing}

## Test This Project

${data.tests}

## Questions to Creator

If you have any questions about this application, please email me at ${data.email}. Checkout my other works at [${data.github}](https://github.com/${data.github}).

`;


}

module.exports = generateMarkdown;
