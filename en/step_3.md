## Start a ribbon

### Step 1
Each ribbon will be stored as an object inside the `ribbons` array. Create a `createRibbon()` function that adds a new ribbon with a starting point.

--- code ---
---
language: javascript
filename: sketch.js
line_numbers: true
line_number_start: 32
line_highlights: 33-45
---
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
--- /code ---

### Step 2
Use `mousePressed()` to begin a new ribbon wherever the pointer is.

--- code ---
---
language: javascript
filename: sketch.js
line_numbers: true
line_number_start: 118
line_highlights: 119-121
---
function mousePressed() {
  createRibbon(mouseX, mouseY)
}
--- /code ---

### Step 3
Now add an `addRibbonPoint()` function. This will add more points to the newest ribbon as long as the mouse has moved far enough.

--- code ---
---
language: javascript
filename: sketch.js
line_numbers: true
line_number_start: 47
line_highlights: 48-63
---
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
--- /code ---

### Step 4
Call `addRibbonPoint()` from `mouseDragged()` so your ribbon follows the pointer.

--- code ---
---
language: javascript
filename: sketch.js
line_numbers: true
line_number_start: 123
line_highlights: 124-126
---
function mouseDragged() {
  addRibbonPoint(mouseX, mouseY)
}
--- /code ---

### Tip
{: .c-project-callout .c-project-callout--tip}
- Change the `10` inside the `dist()` check to collect points more often or less often.
- Try changing the `random(10, 18)` size values to make chunkier or thinner ribbons.
