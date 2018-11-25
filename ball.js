class Ball {

  constructor() {
    this.pos = createVector(0, 0)
    this.vel = createVector(3.3, 1.8)
    this.g = createVector(0, 0.1)
  }

  update() {
    this.vel.add(this.g)
    this.pos.add(this.vel)
    if (this.pos.x > width || this.pos.x < 0) this.vel.x *= -1
    if (this.pos.y > height) this.vel.y *= -1
  }

  show() {
    image(dan, this.pos.x - dan.width / 2, this.pos.y - dan.height / 2)
    // noStroke()
    // fill(255)
    // ellipse(this.pos.x, this.pos.y, 20)
  }

}
