let ribbons = []
let paletteIndex = 0
let styleIndex = 0
let palettes = [
  ["#00f5ff", "#ff4fd8", "#fff36b", "#7bff5b"],
  ["#ff7a00", "#ffd400", "#ff2fb3", "#8e7dff"],
  ["#4dffb8", "#00bbff", "#f95dff", "#ffffff"]
]

function setup() {
  createCanvas(700, 450)
}

function draw() {
  background(5, 8, 22, 45)
  drawBackdrop()
  updateRibbons()
  drawRibbons()
  drawHud()
}

function drawBackdrop() {
  stroke(20, 28, 60, 120)
  strokeWeight(1)

  for (let x = 0; x < width; x += 40) {
    line(x, 0, x, height)
  }

  for (let y = 0; y < height; y += 40) {
    line(0, y, width, y)
  }
}

function createRibbon(startX, startY) {
  ribbons.push({
    colorIndex: floor(random(palettes[paletteIndex].length)),
    swayOffset: random(TWO_PI),
    points: [
      {
        x: startX,
        y: startY,
        size: random(10, 18)
      }
    ],
    age: 0
  })
}

function addRibbonPoint(x, y) {
  if (ribbons.length === 0) {
    createRibbon(x, y)
  }

  let activeRibbon = ribbons[ribbons.length - 1]
  let previousPoint = activeRibbon.points[activeRibbon.points.length - 1]

  if (dist(x, y, previousPoint.x, previousPoint.y) > 10) {
    activeRibbon.points.push({
      x: x,
      y: y,
      size: random(10, 18)
    })
  }
}

function updateRibbons() {
  for (let ribbon of ribbons) {
    ribbon.age += 1
  }

  if (ribbons.length > 12) {
    ribbons.shift()
  }
}

function drawRibbons() {
  for (let ribbon of ribbons) {
    if (ribbon.points.length < 2) {
      continue
    }

    for (let index = 1; index < ribbon.points.length; index++) {
      let previousPoint = ribbon.points[index - 1]
      let currentPoint = ribbon.points[index]
      drawRibbonSegment(previousPoint, currentPoint, ribbon, index)
    }
  }
}

function drawRibbonSegment(previousPoint, currentPoint, ribbon, index) {
  let ribbonColours = palettes[paletteIndex]
  let ribbonColour = color(ribbonColours[(ribbon.colorIndex + index) % ribbonColours.length])
  let brightness = map(index, 1, ribbon.points.length - 1, 140, 255)
  let wave = sin(frameCount * 0.08 + ribbon.swayOffset + index * 0.35)
  let thickness = lerp(previousPoint.size, currentPoint.size, 0.5)
  let offsetX = 0
  let offsetY = 0

  if (styleIndex === 1) {
    offsetX = wave * 6
    offsetY = cos(frameCount * 0.08 + index * 0.3) * 4
  } else if (styleIndex === 2) {
    offsetX = wave * 10
    offsetY = wave * 3
  }

  ribbonColour.setAlpha(50)
  stroke(ribbonColour)
  strokeWeight(thickness + 12)
  line(previousPoint.x + offsetX, previousPoint.y + offsetY, currentPoint.x + offsetX, currentPoint.y + offsetY)

  ribbonColour.setAlpha(100)
  stroke(ribbonColour)
  strokeWeight(thickness + 6)
  line(previousPoint.x + offsetX * 0.6, previousPoint.y + offsetY * 0.6, currentPoint.x + offsetX * 0.6, currentPoint.y + offsetY * 0.6)

  ribbonColour.setAlpha(brightness)
  stroke(ribbonColour)
  strokeWeight(thickness)
  line(previousPoint.x, previousPoint.y, currentPoint.x, currentPoint.y)
}

function drawHud() {
  noStroke()
  fill(255)
  textSize(14)
  text("Drag to paint ribbons", 18, 28)
  text("Click for a new ribbon", 18, 48)
  text("P changes palette  S changes style  C clears", 18, 68)
}

function mousePressed() {
  createRibbon(mouseX, mouseY)
}

function mouseDragged() {
  addRibbonPoint(mouseX, mouseY)
}

function keyPressed() {
  if (key === "p" || key === "P") {
    paletteIndex = (paletteIndex + 1) % palettes.length
  }

  if (key === "s" || key === "S") {
    styleIndex = (styleIndex + 1) % 3
  }

  if (key === "c" || key === "C") {
    ribbons = []
  }
}
