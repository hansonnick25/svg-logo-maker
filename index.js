const inquirer = require('inquirer')
const fs = require('fs')
// const Shape = require('./lib/shapes.js')
const { Circle, Triangle, Square } = require('./lib/shapes.js')

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
        choices: ['Circle', 'Triangle', 'Square']
      },
      {
        type: 'input',
        name: 'logoColor',
        message: `What is the color of your logo's shape? (enter a color keyword or hexadecimal value)`
      }
    ])
    .then(response => {
      if (response.logoText.length > 3 || response.logoText.length < 1) {
        console.error('Error: Text must be between 1 and 3 characters.')
      } else {
        console.log(response)
        createFile('./logos/logo.svg', response)
      }
    })
    .catch(err => console.error(err))
}

const createFile = (fileName, response) => {
  let svgString =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><g>'
  svgString += `${response.logoShape}`

  let shapeChoice
  if (response.logoShape === 'Triangle') {
    shapeChoice = new Triangle(response.logoColor)
    svgString += shapeChoice.drawTriangle()
  } else if (response.logoShape === 'Square') {
    shapeChoice = new Square(response.logoColor)
    svgString += shapeChoice.drawSquare()
  } else if (response.logoShape === 'Circle') {
    shapeChoice = new Circle(response.logoColor)
    svgString += shapeChoice.drawCircle()
  } else {
    console.error('Error: Invalid shape choice')
  }

  svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${response.logoTextColor}">${response.logoText}</text>`
  svgString += '</g></svg>'

  fs.writeFile(fileName, svgString, err => {
    err ? console.error : console.log('Generated logo.svg')
  })
}

generateLogo()
