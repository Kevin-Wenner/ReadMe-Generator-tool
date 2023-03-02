// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT": return ""
      break;
    case "GNU": return ""
      break;
    case "Apache": return ""
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
  return `${renderLicenseBadge(license)}gh${renderLicenseLink(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, installation, contribution, usage, license} = data) {
  return `
  
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

  ## Contribution
  ${contribution}

  ## License
  ${renderLicenseSection(license)}
  `;
}

module.exports = generateMarkdown;
