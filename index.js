const inquirer = require('inquirer')
const fs = require('fs')

const generateLogo = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'logoText',
        message: 'What is the text of your logo? (enter up to 3 chars)'
      },
      {
        type: 'input',
        name: 'logoTextColor',
        message: `What is the color of your logo's text? (enter a color keyword or hexadecimal value)`
      },
      {
        type: 'list',
        name: 'logoShape',
        message:
          'Which logo shape would you like? (choose circle, triangle, or square)',
        choices: ['Triangle', 'Square', 'Circle']
      },
      {
        type: 'input',
        name: 'logoColor',
        message: `What is the color of your logo's shape? (enter a color keyword or hexadecimal value)`
      }
    ])
    .then(response => {
      console.log(response)
    })
    .error(err => {
      console.error(err)
    })
}

generateLogo()
