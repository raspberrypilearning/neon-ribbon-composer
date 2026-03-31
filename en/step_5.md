## Make it glow

### Step 1
To create a neon effect, draw two wider and more transparent lines underneath the bright centre line.

--- code ---
---
language: javascript
filename: sketch.js
line_numbers: true
line_number_start: 86
line_highlights: 92-99
---
function drawRibbonSegment(previousPoint, currentPoint, ribbon, index) {
  let ribbonColours = palettes[paletteIndex]
  let ribbonColour = color(ribbonColours[(ribbon.colorIndex + index) % ribbonColours.length])
  let brightness = map(index, 1, ribbon.points.length - 1, 140, 255)
  let thickness = lerp(previousPoint.size, currentPoint.size, 0.5)

  ribbonColour.setAlpha(50)
  stroke(ribbonColour)
  strokeWeight(thickness + 12)
  line(previousPoint.x, previousPoint.y, currentPoint.x, currentPoint.y)

  ribbonColour.setAlpha(100)
  stroke(ribbonColour)
  strokeWeight(thickness + 6)
  line(previousPoint.x, previousPoint.y, currentPoint.x, currentPoint.y)
}
--- /code ---

### Step 2
Keep the bright centre line after the glow layers.

--- code ---
---
language: javascript
filename: sketch.js
line_numbers: true
line_number_start: 100
line_highlights: 100-103
---
  ribbonColour.setAlpha(brightness)
  stroke(ribbonColour)
  strokeWeight(thickness)
  line(previousPoint.x, previousPoint.y, currentPoint.x, currentPoint.y)
}
--- /code ---

### Tip
{: .c-project-callout .c-project-callout--tip}
- Increase `thickness + 12` to make a softer glow.
- Try different hex colours in the `palettes` array at the top of your program.
