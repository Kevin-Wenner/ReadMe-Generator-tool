// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT": return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      break;
    case "GNU": return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
      break;
    case "Apache": return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      break;
    default: return ""
      break;
  }

  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license){
  case "MIT": return "[MIT](https://choosealicense.com/licenses/mit/)"
      break;
    case "GNU": return "[GNU](https://www.gnu.org/licenses/gpl-3.0.en.html)"
      break;
    case "Apache": return "[Apache](https://www.apache.org/licenses/LICENSE-2.0)"
      break;
    default: return ""
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This project is licensed under the ${renderLicenseLink(license)} license`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, installation, contribution, usage, license, questions, tests, username, email, githubRepo} = data) {
  return `
  ${renderLicenseBadge(license)}

  # ${title}
  
  ## Table of Content
  - [Project Description](#Description)
  - [Instillation](#Instillation)
  - [Usage](#Usage)
  - [Contribution](#Contribution)
  - [License](#License)

  ## Description
  ${description}

  ## Instillation
  ${installation}

  ## Usage
  ${usage}

  ## Contributing
  ${contribution}

  ## Questions
  - [${username}](github.com/${username})
  - ${email}
  - [${githubRepo}](github.com/${username}/${githubRepo})
  
    ${questions}

  ## Tests
  ${tests}

  ## License
  ${renderLicenseSection(license)}
  `;
}

module.exports = generateMarkdown;
