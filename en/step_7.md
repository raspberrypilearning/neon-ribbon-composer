## Compose with controls

### Step 1
Limit the number of ribbons stored in memory so the sketch stays responsive.

--- code ---
---
language: javascript
filename: sketch.js
line_numbers: true
line_number_start: 65
line_highlights: 66-72
---
function updateRibbons() {
  for (let ribbon of ribbons) {
    ribbon.age += 1
  }

  if (ribbons.length > 12) {
    ribbons.shift()
  }
}
--- /code ---

### Step 2
Add some instructions on screen in `drawHud()`.

--- code ---
---
language: javascript
filename: sketch.js
line_numbers: true
line_number_start: 113
line_highlights: 114-119
---
function drawHud() {
  noStroke()
  fill(255)
  textSize(14)
  text("Drag to paint ribbons", 18, 28)
  text("Click for a new ribbon", 18, 48)
  text("P changes palette  S changes style  C clears", 18, 68)
}
--- /code ---

### Step 3
Let the keyboard change the palette, switch the motion style, and clear the screen.

--- code ---
---
language: javascript
filename: sketch.js
line_numbers: true
line_number_start: 128
line_highlights: 129-139
---
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
--- /code ---

### Tip
{: .c-project-callout .c-project-callout--tip}
- Add more palettes to the `palettes` array to create your own visual mood.
- Change `% 3` if you create more ribbon styles.
