// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  }
  if (license === 'GNU GPLv3') {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  }
  if (license === 'Apache 2.0') {
    return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  }
  if (license === 'ISC') {
    return `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `[License: MIT](https://opensource.org/licenses/MIT)`;
  }
  if (license === 'GNU GPLv3') {
    return `[License: GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  if (license === 'Apache 2.0') {
    return `[License: Apache 2.0](https://opensource.org/licenses/Apache-2.0)`;
  }
  if (license === 'ISC') {
    return `[License: ISC](https://opensource.org/licenses/ISC)`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  return `## License
  ${renderLicenseBadge(license)}
  ${renderLicenseLink(license)}
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# Title: ${data.title}
  ${renderLicenseBadge(data.license)}

          ## Description
          ${data.description}

          ## Table of Contents
          * [Installation](#installation)
          * [Usage](#usage)
          * [Contributing](#contributing)
          * [Tests](#tests)
          * [License](#license)
          * [Questions](#questions)
          * [Video](#video)
          
          ## Installation
          ${data.installation}

          ## Usage
          ${data.usage}

          ## Contributing
          ${data.contributing}

          ## Tests
          ${data.tests}

          ## License
          ${renderLicenseSection(data.license)}

          ## Questions
          * GitHub: [${data.github}](https://github.com/${data.github})
          * Email: [${data.email}](mailto:${data.email})
          
          ## Video
          [Click here to view the video]${data.video}
          `;
}

export default generateMarkdown;
