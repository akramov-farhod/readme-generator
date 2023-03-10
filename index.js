// TODO: Include packages needed for this application
const inquirer = require("inquirer");
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "Enter your title",
      default: "Application Title",
    },
    {
      type: "input",
      name: "description",
      message: "Application Description",
      default: "NA",
    },
    {
      type: "input",
      name: "installation",
      message: "Installation instructions",
      default: "NA",
    },
    {
      type: "input",
      name: "usage",
      message: "Usage instructions",
      default: "NA",
    },
    {
      type: "list",
      message: "Select a license",
      name: "license",
      choices: ["Apple", "UJS-345", "OOISK", "None"],
      default: "None",
    },
    {
      type: "input",
      name: "contributing",
      message: "How could users contribute to this project?",
      default: "NA",
    },
    {
      type: "input",
      name: "tests",
      message: "Test Instructions",
      default: "NA",
    },
    {
      type: "input",
      name: "github",
      message: "Enter your github username",
      default: "NA",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your e-mail address",
      default: "NA",
    },
  ])
  .then((answers) => {
    //function to generate README using MARKup and Dynamic variables
    console.log(answers);
  });

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
