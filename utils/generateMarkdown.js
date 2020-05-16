const fs = require('fs');
// function to generate markdown for README

function generateMarkdown(data) {
  return `
  # ${data.title}
  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg)

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#-installation)
  * [Usage](#-usage)
  * [License](#-license)
  * [Contributing](#-contributing)
  * [Tests](#-tests)
  * [Questions](#-questions)

  ## 🚀 Installation
  To install necessary dependencies, run the following command:
  \`\`\`
  ${data.installation}
  \`\`\`
  ## 📖 Usage
  ${data.usage}
  ## 📝 License
  This project is licensed under the ${data.license} license.
  ## 🤝 Contributing
  ${data.contributing}
  ## ✅ Tests
  To run tests, run the following command:
  \`\`\`
    ${data.tests}
  \`\`\`
  ## ❓ Questions
  If you have any questions about the repo, open an issue or contact me directly at [${data.email}](mailto:${data.email}).  
  You can find more of my work at my [Github](https://github.com/${data.github}) page.
`;
}

module.exports = generateMarkdown;