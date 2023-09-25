// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateReadMe = ({ title, description, Context, Installation, Usage, License, Contributing, Tests, Questions1, Questions2 }) =>
`Welcome to the ${title} ReadMe!
Heres a little of what this project is about, ${description}.
Table of Context, ${Context}.
You would install this by ${Installation}
The way we intend for this to be used is ${Usage}.
Our licenses ${License}.
Those who contributed on this are ${Contributing}.
The test that we used were ${Tests}.
You can reach me at my email address ${Questions1}, or you can check out my github profile at https://github.com/${Questions2}.`
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
        name: 'Context',
        message: 'Enter your table of context!',
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
        type: 'input',
        name: 'License',
        message: 'Enter your licenses',
      }, {
        type: 'input',
        name: 'Contributing',
        message: 'Enter who contributed to this project!',
      }, {
        type: 'input',
        name: 'Test',
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

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
