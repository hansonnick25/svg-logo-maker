const { Circle, Triangle, Square } = require('./shapes')

describe('Circle Tests', () => {
  it('draw a circle with color keyword', () => {
    const circle = new Circle('red')
    expect(circle.drawCircle()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="red" />'
    )
  })

  it('draw a circle with hexadecimal color', () => {
    const circle = new Circle('#228B22')
    expect(circle.drawCircle()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="#228B22" />'
    )
  })
})

describe('Triangle Tests', () => {
  it('draw a Triangle with color keyword', () => {
    const triangle = new Triangle('purple')
    expect(triangle.drawTriangle()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="purple"></polygon>'
    )
  })

  it('draw a Triangle with hexadecimal color', () => {
    const triangle = new Triangle('#8B0000')
    expect(triangle.drawTriangle()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="#8B0000"></polygon>'
    )
  })
})

describe('Square Tests', () => {
  it('draw a Square with color keyword', () => {
    const square = new Square('green')
    expect(square.drawSquare()).toEqual(
      '<rect x="50" y="50" width="200" height="200" fill="green" />'
    )
  })

  it('draw a Square with hexadecimal color', () => {
    const square = new Square('#4169E1')
    expect(square.drawSquare()).toEqual(
      '<rect x="50" y="50" width="200" height="200" fill="#4169E1" />'
    )
  })
})
