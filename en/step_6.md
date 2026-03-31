## Add movement

### Step 1
Use `sin()` to create a gentle wave that offsets each ribbon segment.

--- code ---
---
language: javascript
filename: sketch.js
line_numbers: true
line_number_start: 86
line_highlights: 90-97
---
function drawRibbonSegment(previousPoint, currentPoint, ribbon, index) {
  let ribbonColours = palettes[paletteIndex]
  let ribbonColour = color(ribbonColours[(ribbon.colorIndex + index) % ribbonColours.length])
  let brightness = map(index, 1, ribbon.points.length - 1, 140, 255)
  let wave = sin(frameCount * 0.08 + ribbon.swayOffset + index * 0.35)
  let thickness = lerp(previousPoint.size, currentPoint.size, 0.5)
  let offsetX = 0
  let offsetY = 0
}
--- /code ---

### Step 2
Add different motion styles. The `styleIndex` variable will decide how the wave moves the ribbon.

--- code ---
---
language: javascript
filename: sketch.js
line_numbers: true
line_number_start: 96
line_highlights: 96-102
---
  if (styleIndex === 1) {
    offsetX = wave * 6
    offsetY = cos(frameCount * 0.08 + index * 0.3) * 4
  } else if (styleIndex === 2) {
    offsetX = wave * 10
    offsetY = wave * 3
  }
--- /code ---

### Step 3
Use the offsets when drawing the glow layers.

--- code ---
---
language: javascript
filename: sketch.js
line_numbers: true
line_number_start: 103
line_highlights: 103-111
---
  ribbonColour.setAlpha(50)
  stroke(ribbonColour)
  strokeWeight(thickness + 12)
  line(previousPoint.x + offsetX, previousPoint.y + offsetY, currentPoint.x + offsetX, currentPoint.y + offsetY)

  ribbonColour.setAlpha(100)
  stroke(ribbonColour)
  strokeWeight(thickness + 6)
  line(previousPoint.x + offsetX * 0.6, previousPoint.y + offsetY * 0.6, currentPoint.x + offsetX * 0.6, currentPoint.y + offsetY * 0.6)
--- /code ---

### Debugging
{: .c-project-callout .c-project-callout--debug}
- If your ribbon jumps too much, reduce the `6`, `4`, and `10` values.
- Make sure the final bright line still uses the original point positions so the ribbon keeps a clear centre.
