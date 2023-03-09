// TODO: Include packages needed for this application
const inquirer = require("inquirer");
inquirer
  .prompt([
    //title question
    {
      type: "input",
      name: "title",
      message: "How do you want to title this document?",
      default: "Title Name",
    },
    //Licences list
    {
      type: "list",
      name: "license",
      message: "Please Select a License",
      choices: ["License #1", "License #2", "License #3", "License #4"],
      default: "License#1",
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
