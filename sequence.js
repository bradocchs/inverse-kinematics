class Sequence {

  constructor(x, y, length) {
    this.base = createVector(x, y)
    this.segments = []
    for (let i = 0; i < length; i++) {
      this.segments.push(new Segment(i))
    }
  }

  update() {
    for (let i = this.segments.length - 1; i >= 0; i--) {
      if (i === this.segments.length - 1) {
        this.segments[i].follow(ball.pos.x, ball.pos.y)
      } else {
        this.segments[i].follow(this.segments[i + 1].a.x, this.segments[i + 1].a.y)
      }
    }
    this.segments[0].setA(this.base.x, this.base.y)
    for (let i = 1; i < this.segments.length; i++) {
      this.segments[i].setA(this.segments[i - 1].b.x, this.segments[i - 1].b.y)
    }
  }

  show() {
    for (let segment of this.segments) {
      segment.show()
    }
  }

}
