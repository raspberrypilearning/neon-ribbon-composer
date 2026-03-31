## Set the stage

### Step 1
In `setup()`, create a canvas for your ribbon sketch.

--- code ---
---
language: javascript
filename: sketch.js
line_numbers: true
line_number_start: 9
line_highlights: 10
---
function setup() {
  createCanvas(700, 450)
}
--- /code ---

### Step 2
In `draw()`, paint a dark background with a little transparency so old ribbon marks slowly fade away.

--- code ---
---
language: javascript
filename: sketch.js
line_numbers: true
line_number_start: 12
line_highlights: 13
---
function draw() {
  background(5, 8, 22, 45)
  drawBackdrop()
  updateRibbons()
  drawRibbons()
  drawHud()
}
--- /code ---

### Step 3
Add a simple glowing grid in `drawBackdrop()` to give your composition a futuristic stage.

--- code ---
---
language: javascript
filename: sketch.js
line_numbers: true
line_number_start: 20
line_highlights: 21-30
---
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
--- /code ---

### Debugging
{: .c-project-callout .c-project-callout--debug}
- If you cannot see the grid, check that `drawBackdrop()` is being called from inside `draw()`.
- Make sure your `for` loops use semicolons `;` between each part.
