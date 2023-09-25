// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateReadMe = ({ title, description, Installation, Usage, License, Contributing, Tests, Questions1, Questions2 }) => `# ${title}.

${renderLicenseBadge (License)}

## Description
${description}

## Table Of Contents
[Description](#description)
[Installation](#Installation)
[Usage](#Usage)
${renderLicenseLink(License)}
[Contributing](#Contributing)
[Tests](#Tests)
[Questions](#Questions)

## Installation
${Installation}

## Usage
${Usage}

## License
${License}

## Contributing
${Contributing}

## Tests
${Tests}

## Questions
If you have any question, you can reach me at:
[My Github](https://github.com/${Questions2})
[My Email](mailto:${Questions1})


`
// `Welcome to the ${title} ReadMe!
// Heres a little of what this project is about, ${description}.
// Table of Context, ${Context}.
// You would install this by ${Installation}
// The way we intend for this to be used is ${Usage}.
// Our licenses ${License}.
// Those who contributed on this are ${Contributing}.
// The test that we used were ${Tests}.
// You can reach me at my email address ${Questions1}, or you can check out my github profile at https://github.com/${Questions2}.`
// TODO: Create an array of questions for user input
inquirer
.prompt ([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe your project!',
      },
      {
        type: 'input',
        name: 'Installation',
        message: 'What are the directions to install your project?',
      },
      {
        type: 'input',
        name: 'Usage',
        message: 'Explain how this should be used!',
      },     
      {
        type: 'list',
        name: 'License',
        message: 'Pick your license badge.',
        choices: ['Apache', 'Boost', 'BSD', 'None']
      }, {
        type: 'input',
        name: 'Contributing',
        message: 'Enter who contributed to this project!',
      }, {
        type: 'input',
        name: 'Tests',
        message: 'Enter your test',
      }, {
        type: 'input',
        name: 'Questions1',
        message: 'Enter your email',
      }, {
        type: 'input',
        name: 'Questions2',
        message: 'Enter your github username',
      },
    ]).then((answers) => {
        const ReadMeContent = generateReadMe(answers);
    
        fs.writeFile('README.md', ReadMeContent, (err) =>
          err ? console.log(err) : console.log('Successfully created README.md!')
        );
      });
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'Apache') {
        return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    } else if (license === "Boost") {
        return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
    }
    else if (license === 'BSD') {
        return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    } 
    else { 
        return ''
    };
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'None') {
        return ''
    } 
    else { 
        return "[License](#License)"

    }
}

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
