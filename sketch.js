let arms = []
let ball
let dan

function preload() {
	dan = loadImage('shiff.png')
}

function setup() {
	createCanvas(windowWidth, windowHeight)
	dan.resize(100, 0)
	let res = 100
	for (let r = res - res / 2; r < height; r += res) {
		for (let c = res - res / 2; c < width; c += res) {
			arms.push(new Sequence(c, r, 6))
		}
	}
	ball = new Ball()
}

function draw() {
	background(0)
	ball.update()
	for (const arm of arms) {
		arm.update()
		arm.show()
	}
	ball.show()
}
