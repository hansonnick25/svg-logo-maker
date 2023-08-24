class Shape {
  constructor(color) {
    this.color = color
  }
}

class Circle extends Shape {
  constructor(color) {
    super(color)
  }

  drawCircle() {
    return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`
  }
}

class Triangle extends Shape {
  constructor(color) {
    super(color)
  }

  drawTriangle() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"></polygon>`
  }
}

class Square extends Shape {
  constructor(color) {
    super(color)
  }

  drawSquare() {
    return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`
  }
}

module.exports = { Circle, Triangle, Square }
