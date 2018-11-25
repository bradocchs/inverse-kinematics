class Segment {

  constructor(i) {
    this.a = createVector(0, 0)
    this.b = createVector(0, 0)
    this.i = i
    this.angle = 0
    this.length = 50
  }

  follow(x, y) {
    let target = createVector(x, y)
    let dir = p5.Vector.sub(target, this.a)
    this.angle = dir.heading()
    dir.setMag(this.length)
    dir.mult(-1)
    this.a = p5.Vector.add(target, dir)
  }

  setA(x, y) {
    this.a.set(x, y)
    this.setB()
  }

  setB() {
    let dx = this.length * cos(this.angle)
    let dy = this.length * sin(this.angle)
    this.b.set(this.a.x + dx, this.a.y + dy)
  }

  show() {
    noFill()
    switch (this.i) {
      case 0:
        stroke('red')
        break
      case 1:
        stroke('orange')
        break
      case 2:
        stroke('yellow')
        break
      case 3:
        stroke('green')
        break
      case 4:
        stroke('blue')
        break
      case 5:
        stroke('violet')
        break
    }
    strokeWeight(20)
    // stroke('rgba(0, 0, 255, 0.1)')
    // strokeWeight((this.i + 1) * 2)
    line(this.a.x, this.a.y, this.b.x, this.b.y)
  }

}
