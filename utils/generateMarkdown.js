// function to generate markdown for README
function generateMarkdown(answers) {
  let licenseShield = "";
  function licenseShieldSelector() {
    switch (`${answers.license}`) {
      case "MIT":
        licenseShield =
          "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        break;
      case "GNU GPL v3":
        licenseShield =
          "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        break;
      case "Apache 2.0":
        licenseShield =
          "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        break;
      case "The Artistic License 2.0":
        licenseShield =
          "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
        break;

      default:
        break;
    }
  }
  licenseShieldSelector();
  return `
  ${licenseShield}
  ## Title
  ${answers.title}

  ## Description 
  ${answers.description}
  
  ## Table of Contents
  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [License](#License)
  4. [Contributing](#Contributing)
  5. [Tests](#Tests)
  6. [Questions](#Questions)
  
  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## License
  ${answers.license}

  ## Contributing
  ${answers.contributing}

  ## Tests
  ${answers.tests}

  ## Questions
  ${answers.github}
  ${answers.email}
`;
}

module.exports = { generateMarkdown };
