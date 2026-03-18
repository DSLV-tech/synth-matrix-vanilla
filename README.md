# Synth.Matrix — Advanced AI Prompt Engine

<div align="center">

![Synth.Matrix](https://img.shields.io/badge/Synth.Matrix-V2.0-e8c547?style=for-the-badge&labelColor=0b0d16)
![Vanilla JS](https://img.shields.io/badge/Vanilla_JS-ES2022-f7df1e?style=for-the-badge&logo=javascript&logoColor=black&labelColor=0b0d16)
![Three.js](https://img.shields.io/badge/Three.js-r128-white?style=for-the-badge&logo=threedotjs&logoColor=white&labelColor=0b0d16)
![License](https://img.shields.io/badge/License-MIT-34d399?style=for-the-badge&labelColor=0b0d16)

**Build cinematic AI prompts. Visually.**

[**→ Live Demo**](https://dslv-tech.github.io/synth-matrix-vanilla/) · [React + TypeScript version](https://github.com/dslv-tech/synth-matrix) · [DSLV.tech](https://dslv.tech)

</div>

---

## What is this?

**Synth.Matrix** is a visual prompt builder for **Midjourney** and **Imagen 3**. Instead of writing prompts from scratch, you configure 10 creative parameters through curated dropdowns, drag a 3D wireframe head to set the exact camera angle, and get a fully compiled, production-ready prompt in one click.

No build step. No dependencies. Open `index.html` and go.

---

## Demo

> 🔗 **[dslv-tech.github.io/synth-matrix-vanilla](https://dslv-tech.github.io/synth-matrix-vanilla/)**

---

## Features

### 🎯 10 Creative Parameter Modules
Each module has **16–20 hand-curated options**:

| Module | Examples |
|---|---|
| **Environment** | Cyberpunk Tokyo · Crystal Cave · Low Earth Orbit |
| **Material Deconstruction** | Liquid Mercury · Kintsugi Porcelain · Living Wood |
| **Graphic Design Layer** | Bauhaus System · Soviet Propaganda · Swiss Grid |
| **Era & Movement** | Art Deco 1920s · Afrofuturism · Biopunk Organic |
| **Artist / Director** | H.R. Giger · Denis Villeneuve · Caravaggio |
| **Lighting** | Volumetric God Rays · Split Lighting · Nuclear Flash |
| **Color Grading** | Kodak Aerochrome IR · Amber & Teal (Dune) · Sin City |
| **Lens & Camera** | Panavision Anamorphic · Tilt-Shift · Snorricam |
| **Render Engine** | Unreal Engine 5 · Ukiyo-e Woodblock · Daguerreotype |
| **Mood & Emotion** | Terrifying & Sublime · Decadent & Excessive · Hopeful & Dawn |

### 🧊 3D Interactive Camera Selector
Drag the wireframe bust to define the exact photogrammetric angle of the subject. The system translates the rotation into precise cinematographic language: `low angle hero shot looking up, 3/4 profile from right`.

### ⚡ Preset Templates
One-click precompilation of all parameters:
- 🤖 **Cyberpunk Portrait** — Neo-Tokyo noir, chrome body, neon caustics
- 🎨 **Renaissance Master** — Chiaroscuro, impasto oil, sacred mood
- 🌱 **Solarpunk Vision** — Bioluminescent jungle, hopeful dawn
- 🕳️ **Void Horror** — Vantablack, Beksiński surrealism, crimson accent

### 📊 Real-time Feedback
- **Progress bar** — tracks how many of the 11 parameters are active
- **Token counter** — live `~N tok` estimate, color-coded for Midjourney limits
- **Active state styling** — gold highlight on every compiled module

---

## Usage

```bash
# Clone the repo
git clone https://github.com/dslv-tech/synth-matrix-vanilla.git
cd synth-matrix-vanilla

# Open directly in browser — no install needed
open index.html
```

Or just drag `index.html` into your browser.

---

## How to Build a Prompt

1. **Write your subject** in the main textarea — this is your visual anchor
2. **Drag the 3D head** to set the camera angle
3. **Select a preset** for instant results, or configure modules manually
4. **Fine-tune** with Aspect Ratio, Render Mode, and Stylization (--s)
5. **Copy** — paste directly into Midjourney `/imagine` or Imagen 3

**Example output:**
```
A hyper-realistic cinematic portrait of a female mercenary with glowing 
cybernetic eye implants. Camera Angle: eye-level shot, straight on front view. 
Material: chrome cybernetic skull and fiber-optic wiring. Background: 
cyberpunk Neo-Tokyo alley, heavy rain, bokeh neon reflections. Mood: ominous 
foreboding atmosphere, dark threat looming. Lighting: cyan and magenta neon, 
reflective caustics. Color Grading: cinematic teal and orange. Render Style: 
Arri Alexa 65, cinematic masterpiece, film grain. --ar 4:5 --style raw --s 100
```

---

## File Structure

```
synth-matrix-vanilla/
├── index.html    # Semantic HTML — 217 lines, zero inline styles
├── style.css     # Design system with CSS tokens — 825 lines
└── script.js     # Engine, 3D, data, state — 760 lines, strict mode
```

---

## Tech Stack

| Layer | Detail |
|---|---|
| **Language** | Vanilla JavaScript ES2022, `'use strict'` |
| **3D** | Three.js r128 via CDN |
| **Icons** | Inline SVG (zero external icon library) |
| **Fonts** | Syne · DM Sans · JetBrains Mono (Google Fonts) |
| **Styling** | CSS custom properties, no framework |
| **Build** | None — static files only |

**Page weight:** ~79 KB HTML+CSS+JS (uncompressed) + Three.js CDN (580 KB)

---

## Design System

```css
--gold:         #e8c547   /* Primary accent — selections, active states */
--bg-void:      #070810   /* Deepest background */
--bg-card:      #10131f   /* Section cards */
--ff-display:   'Syne'          /* Headers, labels */
--ff-body:      'DM Sans'       /* Body copy */
--ff-mono:      'JetBrains Mono' /* Console output, counters, badges */
```

---

## Roadmap

- [ ] Tooltip preview on option hover
- [ ] LocalStorage state persistence across sessions
- [ ] Export compiled prompt as `.txt`
- [ ] `--chaos`, `--weird`, `--tile` parameter controls
- [ ] Negative prompt (`--no`) module
- [ ] Dark/light theme toggle

---

## React + TypeScript Version

Looking for the full production build with TypeScript strict mode, `useReducer` state management, dynamic Three.js import, and optimized chunking?

→ **[github.com/dslv-tech/synth-matrix](https://github.com/dslv-tech/synth-matrix)**

---

## Commit Convention

```
feat:     new feature or module
fix:      bug fix
perf:     performance improvement
style:    CSS / design system change
content:  add or update prompt options
docs:     README or documentation
refactor: code restructure, no behavior change
```

---

## Author

Built by **[DSLV.tech](https://dslv.tech)** — Digital Solving  
Full-stack development · Brand identity · Web applications  
Turin / Vercelli, Italy

---

## License

MIT — free to use, modify, and distribute.
