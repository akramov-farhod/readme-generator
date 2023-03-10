// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { generateMarkdown } = require("./utils/generateMarkdown");
const startApp = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "Enter your title:",
        default: "Application Title",
      },
      {
        type: "input",
        name: "description",
        message: "Application Description:",
        default: "NA",
      },
      {
        type: "input",
        name: "installation",
        message: "Installation instructions:",
        default: "NA",
      },
      {
        type: "input",
        name: "usage",
        message: "Usage instructions:",
        default: "NA",
      },
      {
        type: "list",
        message: "Select a license:",
        name: "license",
        choices: [
          "MIT",
          "GNU GPL v3",
          "Apache 2.0",
          "The Artistic License 2.0",
          "None",
        ],
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
        message: "Test Instructions:",
        default: "NA",
      },
      {
        type: "input",
        name: "github",
        message: "Enter your github username:",
        default: "NA",
      },
      {
        type: "input",
        name: "email",
        message: "Enter your e-mail address:",
        default: "NA",
      },
    ])
    .then((answers) => {
      fs.writeFile("README.md", generateMarkdown(answers), function (err) {
        if (err) throw err;
        console.log("***** README.md has been generated! *****");
      });
      //function to generate README using MARKUP and Dynamic variables
    });
};

startApp();
