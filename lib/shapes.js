class Shape {
  constructor() {
    this.color = ''
  }
  setColor(color) {
    this.color = color
  }
}
class Circle extends Shape {
  drawCircle() {
    return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`
  }
}

class Triangle extends Shape {
  drawTriangle() {
    return `<polygon points="0 25,50 50,100 25,100 50,0 50" fill="${this.color}"></polygon>`
  }
}

class Square extends Shape {
  drawSquare() {
    return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`
  }
}

module.exports = { Circle, Triangle, Square }
