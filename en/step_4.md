## Draw the ribbon

### Step 1
Loop through every ribbon and every pair of points inside `drawRibbons()`. Each pair will become one line segment.

--- code ---
---
language: javascript
filename: sketch.js
line_numbers: true
line_number_start: 73
line_highlights: 74-84
---
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
--- /code ---

### Step 2
In `drawRibbonSegment()`, choose a colour from the current palette and work out how thick the line should be.

--- code ---
---
language: javascript
filename: sketch.js
line_numbers: true
line_number_start: 86
line_highlights: 87-91
---
function drawRibbonSegment(previousPoint, currentPoint, ribbon, index) {
  let ribbonColours = palettes[paletteIndex]
  let ribbonColour = color(ribbonColours[(ribbon.colorIndex + index) % ribbonColours.length])
  let brightness = map(index, 1, ribbon.points.length - 1, 140, 255)
  let thickness = lerp(previousPoint.size, currentPoint.size, 0.5)
}
--- /code ---

### Step 3
Draw the bright centre line of the ribbon.

--- code ---
---
language: javascript
filename: sketch.js
line_numbers: true
line_number_start: 86
line_highlights: 92-95
---
function drawRibbonSegment(previousPoint, currentPoint, ribbon, index) {
  let ribbonColours = palettes[paletteIndex]
  let ribbonColour = color(ribbonColours[(ribbon.colorIndex + index) % ribbonColours.length])
  let brightness = map(index, 1, ribbon.points.length - 1, 140, 255)
  let thickness = lerp(previousPoint.size, currentPoint.size, 0.5)

  ribbonColour.setAlpha(brightness)
  stroke(ribbonColour)
  strokeWeight(thickness)
  line(previousPoint.x, previousPoint.y, currentPoint.x, currentPoint.y)
}
--- /code ---

### Debugging
{: .c-project-callout .c-project-callout--debug}
- If nothing appears, make sure `stroke()` is used before `line()`.
- Check that `drawRibbonSegment()` is called inside the inner loop of `drawRibbons()`.
