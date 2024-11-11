// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "ISC":
      return "![ISC License](https://img.shields.io/badge/license-ISC-blue)";
    default:
      return "";
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "ISC":
      return "[ISC License](https://opensource.org/licenses/ISC)";
    default:
      return "";
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
    const renderBadge = renderLicenseBadge
    const renderLink = renderLicenseLink
    return `
    ## License
    ${renderBadge}
    This project is licenced under the ${link} license.`;
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}

##Installation
To install the packages, run the command: ${data.installation}

##Usage
${data.usage}

##Contributing
${data.contributing}

##Tests
Run the test command ${data.tests}


${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;