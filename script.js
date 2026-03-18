/* ============================================================
   SYNTH.MATRIX V2.0 — Vanilla JS Engine
   ============================================================ */

'use strict';

// ============================================================
// DATA — 10 modules × 16-20 options
// ============================================================
const MODULES_DATA = [
  {
    id: 'env', title: 'Ambiente & Contesto', desc: 'Dove si trova il soggetto?',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
    options: [
      { label: 'Zero Gravity Library', text: 'floating weightless in a zero-gravity grand Victorian library, books orbiting slowly' },
      { label: 'Cyberpunk Tokyo', text: 'dense blurry cyberpunk Neo-Tokyo alley, heavy rain, bokeh neon lights reflections' },
      { label: 'Abyssal Diner', text: 'dimly lit dusty retro 1950s diner table submerged deep underwater, glowing neon jellyfish' },
      { label: 'Martian Sandstorm', text: 'raging dusty orange sandstorm on the surface of Mars, sparks flying, red dust clouds' },
      { label: 'Minimalist Gallery', text: 'pristine blindingly white minimalist contemporary art gallery, polished concrete floor' },
      { label: 'Infinite Void', text: 'infinite pitch-black void, floating in absolute nothingness' },
      { label: 'Abandoned Cathedral', text: 'overgrown ruined gothic cathedral, moss and ivy clinging to the pillars, shafts of light' },
      { label: 'Quantum Realm', text: 'fractal geometric quantum realm, glowing energy streams, warped dimensions, impossible geometry' },
      { label: 'Underwater Research Base', text: 'pressurized underwater research base, steel corridors, thick glass windows showing deep ocean abyss' },
      { label: 'Neon Jungle', text: 'dense prehistoric jungle illuminated by glowing neon flora and bioluminescent vines' },
      { label: 'Brutalist Megastructure', text: 'towering concrete brutalist megastructure, oppressive scale, harsh geometric shadows' },
      { label: 'Low Earth Orbit', text: 'floating in low Earth orbit, spectacular view of the curvature of the planet and stars' },
      { label: 'Deep Space Nebula', text: 'drifting in deep interstellar space, surrounded by a dense nebula cloud of magenta and gold' },
      { label: 'Abandoned Soviet Factory', text: 'derelict Soviet-era industrial factory, peeling paint, rusted machinery, broken skylights' },
      { label: 'Japanese Hot Spring', text: 'steaming onsen hot spring at night, ancient moss-covered rocks, falling cherry blossoms' },
      { label: 'Crystal Cave', text: 'enormous cave of giant selenite crystal formations, glowing from within, otherworldly blue light' },
      { label: 'White Salt Flat', text: 'blinding white salt flat desert horizon, perfect mirror reflection of the sky, Salar de Uyuni' },
      { label: 'Brutalist Archive', text: 'infinite brutalist archive library, endless stacked filing cabinets, flickering fluorescent tubes' },
      { label: 'Burning Desert Ruins', text: 'ancient desert ruins at dusk, crumbling sandstone columns, embers drifting in the hot air' },
      { label: 'Luxury Capsule Hotel', text: 'Tokyo luxury micro capsule hotel interior, warm white padding, glowing LED strips, minimal' },
    ]
  },
  {
    id: 'mat', title: 'Decostruzione Materica', desc: 'Sostituisci la biologia con materiali assurdi.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.82l-3.5-1.59"/><path d="m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.82l-3.5-1.59"/></svg>`,
    options: [
      { label: 'Carrara Marble', text: 'subtle gloss with heavy weathering, cracks, pitted erosion, exposing rough stone core, Michelangelo quality' },
      { label: 'Origami Vellum', text: 'entirely constructed from intricate overlapping layers of folded translucent vellum and gold leaf paper' },
      { label: 'Chrome Cybernetic', text: 'diagrammatic medical cross-section exposing hyper-detailed chrome cybernetic skull and fiber-optic wiring' },
      { label: 'Ice Supercomputer', text: 'cross-section of a 1980s supercomputer covered in frozen jagged blue ice, exposed circuit boards' },
      { label: 'Bioluminescent Moss', text: 'suit entirely grown from flourishing wet microscopic fungi, moss, and glowing mushrooms' },
      { label: 'Obsidian Sci-Fi Armor', text: 'highly detailed futuristic sci-fi armor suit made of gloss black obsidian and glowing gold veins' },
      { label: 'Liquid Mercury', text: 'composed entirely of morphing reflective liquid metal mercury, rippling chrome surface, T-1000' },
      { label: 'Kintsugi Porcelain', text: 'delicate cracked white porcelain skin with gold Kintsugi repairs holding the pieces together' },
      { label: 'Holographic Glitch', text: 'semi-transparent glowing holographic form, heavy digital glitch displacement and pixelation' },
      { label: 'Vantablack Void', text: 'suit made of pure vantablack material, absorbing all light, indistinguishable matte darkness' },
      { label: 'Neon Gas Tubes', text: 'internal anatomy replaced by complicated curving glowing neon argon glass tubes, electrified plasma' },
      { label: 'Living Wood (Ent)', text: 'ancient gnarled bark, twisting roots, and blooming saplings forming the facial structure' },
      { label: 'Oxidized Copper', text: 'skin formed entirely of corroded oxidized copper, turquoise patina, green-blue verdigris texture' },
      { label: 'Blown Murano Glass', text: 'entire figure sculpted from translucent hand-blown Murano glass, internal light refractions' },
      { label: 'Carbon Fiber Weave', text: 'exposed carbon fiber weave structure, F1 racing technology, raw composite fiber texture' },
      { label: 'Stained Glass Gothic', text: 'figure composed of fitted gothic cathedral stained glass panels, leaded joints, transmitted light' },
      { label: 'Rusted Iron & Overgrown', text: 'heavily rusted iron shell with vines and wildflowers growing through the cracks' },
      { label: 'Watercolor Wash', text: 'figure dissolving into loose watercolor paint washes, bleeding pigment edges, wet-on-wet technique' },
    ]
  },
  {
    id: 'ui', title: 'Graphic Design & UI Layer', desc: 'Sovrapposizioni tipografiche e layout editoriali.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>`,
    options: [
      { label: 'Bauhaus System', text: 'flat geometric overlays in Canary Yellow, Royal Blue, Crimson Red, layered vector circuit diagrams' },
      { label: 'Magazine Cover', text: 'framed as a futuristic magazine cover, bold typography "NEON DECAY", holographic tech-specs overlay' },
      { label: 'Blueprint Breach', text: 'architectural brutalist blueprint poster, extruded orthographic lines, technical measurements (45°, 90°)' },
      { label: 'Da Vinci Spaccato', text: 'floating translucent Da Vinci-style anatomical sketches drafted in glowing cyan neon, "PROJECT: ADAM"' },
      { label: 'Absolute Zero HUD', text: 'bold International Typographic Style layout in pure cyan and neon pink, digital "-273.15°C" read-out' },
      { label: 'Anime VHS Overlay', text: '1990s anime VHS tracking lines, Japanese kanji subtitles in yellow, timecode overlay' },
      { label: 'Magical Runes Grimoire', text: 'glowing esoteric magical circles, floating runic script, distressed parchment background texture' },
      { label: 'Y2K Web Browser', text: 'framed within a retro Windows 98 web browser interface, pixelated cursors, pop-up error dialogs' },
      { label: 'Military Drone FEED', text: 'green night vision thermal overlay, crosshairs, military drone targeting telemetry data' },
      { label: 'David Carson Grunge', text: '90s grunge typography layout, distressed overlapping text, chaotic David Carson graphic design' },
      { label: 'Soviet Propaganda Poster', text: 'bold Soviet constructivist propaganda poster, stark red and black, bold Cyrillic lettering' },
      { label: 'Swiss Grid System', text: 'rigorous Swiss International Style grid, Helvetica Neue, precise baseline grid, clinical white space' },
      { label: 'Risograph Print', text: 'two-color Risograph printed poster, deliberate ink misregistration, grainy texture' },
      { label: 'Retro NASA Mission Patch', text: 'designed as an embroidered NASA Apollo mission patch, stars, orbit trajectory, bold serif lettering' },
      { label: 'ASCII Terminal Art', text: 'image rendered as ASCII terminal art, monochrome green phosphor glow, 80x24 character grid' },
      { label: 'Linocut Block Print', text: 'bold woodblock linocut print style, rough cut lines, high contrast black and white, folk art' },
    ]
  },
  {
    id: 'epoch', title: 'Epoca & Movimento', desc: 'In che era storica o alternativa ci troviamo?',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    options: [
      { label: 'Cyberpunk 2077', text: 'dystopian Cyberpunk 2077 aesthetic, high-tech low-life, corpo megabuildings' },
      { label: 'Vaporwave 80s', text: '1980s Retro-wave, Vaporwave aesthetic, neon grids, VHS glitch' },
      { label: 'Victorian Steampunk', text: 'Victorian era Steampunk, brass gears, steam-powered mechanisms' },
      { label: 'Classical Renaissance', text: 'Classical Renaissance period, Da Vinci era, oil painting techniques' },
      { label: 'Cassette Futurism', text: '1970s Cassette Futurism, analog tech, CRT monitors, beige plastic' },
      { label: 'Y2K Cyber', text: 'early 2000s Y2K cyber aesthetic, metallic clothing, translucent tech' },
      { label: 'Mad Max Dieselpunk', text: 'post-apocalyptic wasteland dieselpunk, rusty metal, scavenged gear' },
      { label: 'Solarpunk Utopia', text: 'Solarpunk utopian aesthetic, lush green architecture, renewable energy' },
      { label: 'Art Deco 1920s', text: '1920s Art Deco style, sleek geometric gold patterns, Great Gatsby elegance' },
      { label: 'Bronze Age Mythical', text: 'ancient mythical Bronze age aesthetic, Hellenistic heroics, bronze armor' },
      { label: 'Afrofuturism', text: 'Afrofuturist aesthetic, Wakanda technology, tribal patterns fused with advanced tech' },
      { label: 'Soviet Space Age', text: 'Soviet Space Age Cosmism, Sputnik era, propaganda optimism' },
      { label: 'Ancient Alien', text: 'Ancient Alien civilization aesthetic, impossible monolithic architecture' },
      { label: 'Atompunk 1950s', text: '1950s Atompunk, Fallout aesthetic, uranium glass, atomic age optimism' },
      { label: 'Dark Ages Gothic', text: 'Medieval Dark Ages, gothic horror, illuminated manuscript style' },
      { label: 'Biopunk Organic', text: 'Biopunk aesthetic, living architecture, organic circuitry, flesh-and-machine fusion' },
      { label: 'Feudal Japan', text: 'Feudal Japanese Edo period, ukiyo-e style, samurai armor, wabi-sabi' },
      { label: 'Age of Sail', text: 'Golden Age of Sail, 17th century maritime, tall ship rigging, worn sea charts' },
    ]
  },
  {
    id: 'artist', title: 'Regia / Ispirazione Artista', desc: 'Quale mente geniale sta scattando o dipingendo?',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>`,
    options: [
      { label: 'H.R. Giger', text: 'in the biomechanical surrealist style of H.R. Giger, Alien universe' },
      { label: 'Syd Mead', text: 'concept art in the retro-futuristic style of Syd Mead, Blade Runner' },
      { label: 'Denis Villeneuve', text: 'cinematic direction by Denis Villeneuve, Dune brutalist, massive scale, moody' },
      { label: 'Wes Anderson', text: 'directed by Wes Anderson, perfectly symmetrical, pastel color palette, quirky' },
      { label: 'Zdzisław Beksiński', text: 'dystopian surrealism in the dark style of Zdzisław Beksiński' },
      { label: 'Studio Ghibli / Miyazaki', text: 'hand-drawn anime style of Hayao Miyazaki, Studio Ghibli, lush nature' },
      { label: 'Hajime Sorayama', text: 'in the hyper-realistic chrome style of Hajime Sorayama, sexy robot' },
      { label: 'Gustav Klimt', text: 'in the distinctive style of Gustav Klimt, oil painting with gold leaf accents' },
      { label: 'Rembrandt', text: 'in the style of Rembrandt van Rijn, 17th century Dutch Golden Age, impasto' },
      { label: 'Ridley Scott', text: 'cinematography inspired by Ridley Scott Blade Runner, neo-noir lighting' },
      { label: 'Moebius (Giraud)', text: 'in the intricate sci-fi comic style of Jean Giraud Moebius' },
      { label: 'Yoji Shinkawa', text: 'concept art in the sketchy ink style of Yoji Shinkawa, Metal Gear Solid' },
      { label: 'Roger Deakins', text: 'cinematography by Roger Deakins, 1917, Sicario, naturalistic light' },
      { label: 'Claude Monet', text: 'in the loose Impressionist style of Claude Monet, Water Lilies palette' },
      { label: 'Neri Oxman', text: 'in the style of Neri Oxman, biomorphic design, nature-inspired generative architecture' },
      { label: 'Francis Bacon', text: 'in the visceral distorted figurative style of Francis Bacon, screaming popes' },
      { label: 'Caravaggio', text: 'in the style of Caravaggio, dramatic tenebrism, powerful chiaroscuro' },
      { label: 'James Jean', text: 'in the dreamy surrealist illustration style of James Jean, flowing organic forms' },
    ]
  },
  {
    id: 'light', title: 'Illuminazione', desc: 'Come batte la luce sulla scena?',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
    options: [
      { label: 'Cinematic Chiaroscuro', text: 'dramatic high-contrast chiaroscuro lighting, deep shadows, Rembrandt triangle' },
      { label: 'Harsh Strobe', text: 'harsh sterile white studio strobe lighting, razor sharp contrast, fashion editorial' },
      { label: 'Volumetric God Rays', text: 'god rays, volumetric lighting streaming through dust particles, sacred atmosphere' },
      { label: 'Bioluminescence', text: 'underwater glowing bioluminescence mixed with neon rim lighting, deep sea glow' },
      { label: 'Neon Cyberpunk', text: 'cyan and magenta neon lighting, reflective caustics, rain-slicked surfaces' },
      { label: 'Golden Hour', text: 'warm golden hour sunlight, long soft shadows, backlight rim light, magic hour' },
      { label: 'Overcast Soft', text: 'diffused soft overcast pale lighting, low contrast, melancholic mood' },
      { label: 'Candlelight Only', text: 'flickering warm candlelight only, extremely dark gloomy environment' },
      { label: 'Red Laser Grid', text: 'illuminated solely by a scanning red laser grid matrix, security vault' },
      { label: 'Practical Light Only', text: 'lit only by practical lights: TV glow, phone screen, desk lamp, raw realism' },
      { label: 'Rim Light Only', text: 'dramatic rim light outlining the silhouette, dark foreground, high contrast edge' },
      { label: 'Split Lighting', text: 'hard split lighting, exactly half face illuminated, half in deep shadow' },
      { label: 'Silhouette', text: 'pure backlit silhouette against blazing sunset sky, no facial detail, iconic form' },
      { label: 'Blue Hour', text: 'the blue hour just after sunset, desaturated cool blue ambient, tungsten warm interiors' },
      { label: 'Nuclear Flash', text: 'blinding overexposed nuclear flash bloom, extreme high-key white out, apocalyptic' },
      { label: 'Underwater Caustics', text: 'rippling underwater caustic light patterns dancing across the surface from above' },
      { label: 'Starlight Only', text: 'lit exclusively by starlight, milky way ambient, deep blue and purple tones' },
      { label: 'Neon Sign Practical', text: 'lit only by a flickering buzzing neon sign, color cast changing, street atmosphere' },
    ]
  },
  {
    id: 'color', title: 'Color Grading & Palette', desc: "Qual è la chimica cromatica della scena?",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>`,
    options: [
      { label: 'Teal & Orange (Hollywood)', text: 'cinematic teal and orange color grading, blockbuster Hollywood film look' },
      { label: 'Muted Pastel', text: 'muted pastel color palette, soft washed-out colors, dreamy vibe' },
      { label: 'Matrix Bleach Bypass', text: 'heavy bleach bypass color grading, sickly green and black Matrix tint' },
      { label: 'Film Noir B&W', text: 'high-contrast black and white photography, deep inky blacks, classic film noir' },
      { label: 'Sin City Red Accent', text: 'monochromatic black and white with striking isolated pure crimson red accents' },
      { label: 'Hyper-Saturated Neon', text: 'hyper-saturated vibrant colors, glowing neon color palette, eye-straining intensity' },
      { label: 'Sepia Vintage', text: 'warm sepia toned vintage color grading, nostalgic and aged, daguerreotype' },
      { label: 'Kodak Aerochrome IR', text: 'Kodak Aerochrome infrared film, foliage turned bubblegum pink, dark blue skies' },
      { label: 'Kodachrome 64', text: 'Kodachrome 64 film emulation, warm reds, deep shadows, 1970s National Geographic' },
      { label: 'Fuji Velvia', text: 'Fuji Velvia slide film, extreme saturation, punchy greens and blues' },
      { label: 'Cross-Processed E6', text: 'cross-processed E6 film, shifted color cast, greens become cyan, experimental' },
      { label: 'Desaturated Green Military', text: 'desaturated olive green military grade color palette, Sicario, jarring realism' },
      { label: 'Duotone Navy/Vermillion', text: 'high-contrast duotone print, two dominant colors: deep navy and bright vermillion' },
      { label: 'Washed Overexposed', text: 'heavily overexposed washed-out film, bleached highlights, faded summer polaroid' },
      { label: 'Amber & Teal (Dune)', text: 'Greig Fraser Dune palette, burning amber desert against stark cool teal shadow' },
      { label: 'Neon Acid Chrome', text: 'acid chrome effect, mirrored surfaces, prismatic rainbow reflections, Y2K excess' },
      { label: 'Twilight Zone B&W', text: 'classic 1960s television black and white, high contrast, Rod Serling Twilight Zone' },
    ]
  },
  {
    id: 'lens', title: 'Lenti & Camera', desc: 'Scegli la prospettiva fotografica.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>`,
    options: [
      { label: 'Arri Alexa 65', text: 'shot on Arri Alexa 65, cinematic masterpiece, film grain, organic latitude' },
      { label: 'Panavision Anamorphic', text: 'shot on Panavision 70mm, horizontal anamorphic lens flares, 2.39:1 widescreen' },
      { label: 'Extreme Macro', text: 'extreme macro photography, super shallow depth of field, microscopic textures' },
      { label: 'Hasselblad Medium Format', text: 'high fashion editorial photography, shot on Hasselblad medium format' },
      { label: 'Fisheye GoPro', text: 'distorted extreme wide angle fisheye lens perspective, extreme action sports POV' },
      { label: 'Aerial Drone Top-Down', text: 'aerial top-down drone shot, god view, abstract patterns from above' },
      { label: 'Low Angle Hero', text: 'low angle hero shot looking up, dominating presence, cape and sky' },
      { label: '85mm Portrait', text: 'shot on 85mm portrait lens, beautiful creamy bokeh blur background' },
      { label: '14mm Ultra-Wide', text: 'shot on 14mm ultra-wide lens, dramatic sweeping perspective distortion' },
      { label: 'CCTV Security Camera', text: 'grainy black and white CCTV security camera footage, timestamp overlay' },
      { label: 'Tilt-Shift Miniature', text: 'tilt-shift lens effect, selective focus, scene appears like a tiny miniature diorama' },
      { label: 'Telephoto Compression', text: '800mm super telephoto lens, extreme background compression, stacked planes' },
      { label: 'Vintage Helios 44-2', text: 'shot on vintage Soviet Helios 44-2 58mm, swirly bokeh, soft halation' },
      { label: "Worm's Eye View", text: "extreme worm's eye view from ground level, towering subject, ant's perspective" },
      { label: 'Dutch Angle', text: 'classic Dutch angle tilted camera, 30 degrees of roll, psychological unease' },
      { label: 'Drone FPV', text: 'FPV racing drone ultra-wide perspective, extreme motion blur, GoPro immersive' },
      { label: 'Periscope POV', text: 'submarine periscope POV, circular vignette frame, grainy military glass optics' },
    ]
  },
  {
    id: 'render', title: 'Motore di Rendering', desc: "La pasta finale dell'immagine.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>`,
    options: [
      { label: '8K Photorealistic', text: '8k resolution, photorealistic, insane micro-details, masterpiece quality' },
      { label: 'Unreal Engine 5', text: 'Unreal Engine 5 render, Lumen ray tracing, Nanite geometry, global illumination' },
      { label: 'Octane Render', text: 'Octane render, spectral lighting, SSS skin shader, glossy physical materials' },
      { label: '35mm Film Grain', text: 'analog 35mm film photography, heavy silver halide grain, vintage color bleed' },
      { label: 'Polaroid Instant', text: 'vintage polaroid photography, faded colors, harsh flash glare, white border frame' },
      { label: 'Digital Collage', text: 'hyper-detailed mixed media digital collage, layered textures, composite photography' },
      { label: 'Flat Vector Art', text: 'crisp clean flat 2D vector graphic art, precise bezier line work, Adobe Illustrator' },
      { label: 'Oil on Canvas', text: 'thick impasto oil painting on canvas, visible brush strokes, traditional medium' },
      { label: 'Vintage Comic Book', text: 'vintage 1980s comic book print style, halftone dots, heavy Jack Kirby inking' },
      { label: 'Isometric Illustration', text: 'clean isometric 3D illustration, flat color fills, axonometric projection' },
      { label: 'Risograph Print', text: 'Risograph printed illustration, ink grain, deliberate registration errors, lo-fi' },
      { label: 'Woodblock Print (Ukiyo-e)', text: 'Japanese woodblock print Ukiyo-e style, flat color, bold outlines, Hokusai' },
      { label: 'Cel Shading (Anime)', text: 'anime cel shading style, flat color fills, clean bold outlines, speed lines' },
      { label: 'Daguerreotype', text: 'antique daguerreotype photograph, silver-mercury tones, oval vignette, 1850s' },
      { label: 'Pencil & Ink Sketch', text: 'detailed pencil and India ink sketch, cross-hatching shadows, artist sketchbook' },
      { label: 'Generative Noise Art', text: 'algorithmic generative noise art, Perlin noise fields, flowing vector lines' },
    ]
  },
  {
    id: 'mood', title: 'Mood & Emozione', desc: "L'anima emotiva della scena.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
    options: [
      { label: 'Eerie & Uncanny', text: 'deeply unsettling eerie uncanny valley atmosphere, something is subtly wrong' },
      { label: 'Melancholic & Longing', text: 'deeply melancholic and nostalgic atmosphere, overwhelming sense of yearning and loss' },
      { label: 'Triumphant & Epic', text: 'overwhelmingly triumphant and epic, heroic emotion, swelling emotional crescendo' },
      { label: 'Serene & Meditative', text: 'deeply calm and meditative serenity, Zen stillness, contemplative peace' },
      { label: 'Ominous & Threatening', text: 'ominous foreboding atmosphere, dark threat looming, quiet before the storm, dread' },
      { label: 'Euphoric & Ecstatic', text: 'ecstatic euphoric energy, overwhelming joy and bliss, ecstasy and liberation' },
      { label: 'Desolate & Abandoned', text: 'desolate post-human loneliness, abandoned by all life, silence, entropy' },
      { label: 'Aggressive & Volatile', text: 'aggressive volatile raw energy, barely contained rage, explosive tension' },
      { label: 'Romantic & Intimate', text: 'tender romantic intimacy, soft vulnerability, two souls connecting, gentle warmth' },
      { label: 'Psychedelic & Fractured', text: 'mind-fracturing psychedelic reality, consciousness dissolving, infinite recursion' },
      { label: 'Cold & Clinical', text: 'sterile clinical coldness, detached and inhuman, laboratory precision, emotional void' },
      { label: 'Nostalgic & Bittersweet', text: 'bittersweet nostalgia for a time that may never have existed, liminal memory spaces' },
      { label: 'Terrifying & Sublime', text: "Burke's Sublime terror, overwhelming awe at nature's indifference, beautiful and lethal" },
      { label: 'Playful & Absurdist', text: 'gleefully absurdist and playful, logical rules suspended, joyful nonsense energy' },
      { label: 'Sacred & Transcendent', text: 'sacred transcendent spiritual atmosphere, divine presence, light from beyond' },
      { label: 'Paranoid & Fragmented', text: 'paranoid fragmented reality, surveillance state anxiety, nothing is as it seems' },
      { label: 'Decadent & Excessive', text: 'baroque excess and decadence, too much of everything, opulence drowning the subject' },
      { label: 'Hopeful & Dawn', text: 'quiet hopeful dawn energy, first light after darkness, possibility and new beginning' },
    ]
  }
];

const PRESET_TEMPLATES = [
  {
    name: 'Cyberpunk Portrait', emoji: '🤖', desc: 'Neo-Tokyo noir · corpo cromato',
    values: {
      subject: 'A hyper-realistic cinematic portrait of a female mercenary with glowing cybernetic eye implants',
      env: 'dense blurry cyberpunk Neo-Tokyo alley, heavy rain, bokeh neon lights reflections',
      mat: 'diagrammatic medical cross-section exposing hyper-detailed chrome cybernetic skull and fiber-optic wiring',
      light: 'cyan and magenta neon lighting, reflective caustics, rain-slicked surfaces',
      color: 'cinematic teal and orange color grading, blockbuster Hollywood film look',
      artist: 'cinematography inspired by Ridley Scott Blade Runner, neo-noir lighting',
      epoch: 'dystopian Cyberpunk 2077 aesthetic, high-tech low-life, corpo megabuildings',
      mood: 'ominous foreboding atmosphere, dark threat looming, quiet before the storm, dread',
      render: 'shot on Arri Alexa 65, cinematic masterpiece, film grain, organic latitude',
    }
  },
  {
    name: 'Renaissance Master', emoji: '🎨', desc: 'Da Vinci incontra il futuro',
    values: {
      subject: 'A Renaissance-era scholar surrounded by floating geometric diagrams and celestial maps',
      mat: 'subtle gloss with heavy weathering, cracks, pitted erosion, Michelangelo quality',
      light: 'dramatic high-contrast chiaroscuro lighting, deep shadows, Rembrandt triangle',
      color: 'warm sepia toned vintage color grading, nostalgic and aged, daguerreotype',
      artist: 'in the style of Rembrandt van Rijn, 17th century Dutch Golden Age, impasto',
      epoch: 'Classical Renaissance period, Da Vinci era, oil painting techniques',
      mood: 'sacred transcendent spiritual atmosphere, divine presence, light from beyond',
      render: 'thick impasto oil painting on canvas, visible brush strokes, traditional medium',
    }
  },
  {
    name: 'Solarpunk Vision', emoji: '🌱', desc: 'Utopia verde e bioluminescente',
    values: {
      subject: 'A young architect standing in a vast living city where buildings grow like organisms',
      env: 'dense prehistoric jungle illuminated by glowing neon flora and bioluminescent vines',
      mat: 'suit entirely grown from flourishing wet microscopic fungi, moss, and glowing mushrooms',
      light: 'warm golden hour sunlight, long soft shadows, backlight rim light, magic hour',
      color: 'Fuji Velvia slide film, extreme saturation, punchy greens and blues',
      artist: 'in the style of Neri Oxman, biomorphic design, nature-inspired generative architecture',
      epoch: 'Solarpunk utopian aesthetic, lush green architecture, renewable energy',
      mood: 'quiet hopeful dawn energy, first light after darkness, possibility and new beginning',
      render: '8k resolution, photorealistic, insane micro-details, masterpiece quality',
    }
  },
  {
    name: 'Void Horror', emoji: '🕳️', desc: "Beksiński meets the abyss",
    values: {
      subject: 'A lone figure standing at the threshold of an impossible geometric doorway into nothingness',
      env: 'infinite pitch-black void, floating in absolute nothingness',
      mat: 'suit made of pure vantablack material, absorbing all light, indistinguishable matte darkness',
      light: 'dramatic rim light outlining the silhouette, dark foreground, high contrast edge',
      color: 'monochromatic black and white with striking isolated pure crimson red accents',
      artist: 'dystopian surrealism in the dark style of Zdzisław Beksiński',
      mood: 'deeply unsettling eerie uncanny valley atmosphere, something is subtly wrong',
      render: 'thick impasto oil painting on canvas, visible brush strokes, traditional medium',
    }
  }
];

const QUICK_TOGGLES = [
  { label: '✨ High Detail', value: 'hyper-detailed 8K masterpiece', cls: '' },
  { label: '📸 Portrait', value: 'close-up cinematic portrait', cls: '' },
  { label: '⚡ Action', value: 'dynamic action shot', cls: '' },
  { label: '🔗 Cref', value: '--cref [URL] --cw 100', cls: 'cref' },
];

// ============================================================
// STATE
// ============================================================
let state = {
  subject: '', angle: 'eye-level shot, straight on front view',
  env: '', mat: '', ui: '', epoch: '', artist: '', light: '',
  color: '', lens: '', render: '', mood: '',
  ar: '--ar 4:5', style: '--style raw', stylize: '--s 100'
};

const MODULE_KEYS = MODULES_DATA.map(m => m.id);
const TOTAL_PARAMS = MODULE_KEYS.length + 1; // +1 subject

// ============================================================
// DOM REFS (populated after DOMContentLoaded)
// ============================================================
let DOM = {};

// ============================================================
// ENGINE
// ============================================================
function compilePrompt() {
  const parts = [];
  if (state.subject)  parts.push(state.subject);
  if (state.angle)    parts.push('Camera Angle: ' + state.angle);
  if (state.mat)      parts.push('Material: ' + state.mat);
  if (state.env)      parts.push('Background: ' + state.env);
  if (state.mood)     parts.push('Mood: ' + state.mood);
  if (state.ui)       parts.push('Layout: ' + state.ui);
  if (state.epoch)    parts.push('Era: ' + state.epoch);
  if (state.light)    parts.push('Lighting: ' + state.light);
  if (state.color)    parts.push('Color Grading: ' + state.color);
  if (state.lens)     parts.push('Camera: ' + state.lens);
  if (state.artist)   parts.push(state.artist);
  if (state.render)   parts.push('Render Style: ' + state.render);

  const tech = [state.ar, state.style, state.stylize].filter(Boolean).join(' ');
  return parts.length === 0 ? '' : parts.join('. ') + (tech ? ', ' + tech : '');
}

function countActive() {
  let n = state.subject ? 1 : 0;
  MODULE_KEYS.forEach(k => { if (state[k]) n++; });
  return n;
}

function updateUI() {
  const prompt = compilePrompt();
  const active = countActive();
  const pct = Math.round((active / TOTAL_PARAMS) * 100);
  const tokens = prompt ? Math.ceil(prompt.length / 4) : 0;

  // Console output
  if (prompt) {
    DOM.output.textContent = prompt;
    DOM.output.classList.remove('console-empty');
    DOM.copyBtn.disabled = false;
  } else {
    DOM.output.textContent = 'Il prompt compilato apparirà qui...';
    DOM.output.classList.add('console-empty');
    DOM.copyBtn.disabled = true;
  }

  // Progress
  DOM.progressFill.style.width = pct + '%';
  DOM.progressCount.textContent = active + ' / ' + TOTAL_PARAMS;

  // Token count
  DOM.tokenCount.textContent = tokens > 0 ? '~' + tokens + ' tok' : '—';
  DOM.tokenCount.className = 'token-count';
  if (tokens === 0) DOM.tokenCount.classList.add('safe');
  else if (tokens > 1000) DOM.tokenCount.classList.add('over');
  else if (tokens > 700) DOM.tokenCount.classList.add('warn');
  else DOM.tokenCount.classList.add('safe');
}

// ============================================================
// BUILD DOM — Preset Grid
// ============================================================
function buildPresets() {
  const grid = DOM.presetsGrid;
  PRESET_TEMPLATES.forEach(preset => {
    const btn = document.createElement('button');
    btn.className = 'preset-btn';
    btn.innerHTML = `
      <span class="preset-emoji">${preset.emoji}</span>
      <span class="preset-name">${preset.name}</span>
      <span class="preset-desc">${preset.desc}</span>
    `;
    btn.addEventListener('click', () => applyPreset(preset.values));
    grid.appendChild(btn);
  });
}

function applyPreset(values) {
  // Reset modules to default first
  MODULE_KEYS.forEach(k => { state[k] = ''; });
  state.subject = '';
  // Apply preset values
  Object.assign(state, values);
  // Sync DOM
  DOM.subjectInput.value = state.subject || '';
  MODULE_KEYS.forEach(k => {
    const sel = document.querySelector(`.module-select[data-group="${k}"]`);
    if (sel) {
      sel.value = state[k] || '';
      const wrap = sel.parentElement;
      wrap.classList.toggle('has-value', !!state[k]);
      sel.closest('.module-card').classList.toggle('active', !!state[k]);
    }
  });
  // Quick toggles
  document.querySelectorAll('.quick-btn').forEach(btn => {
    const v = btn.dataset.append;
    btn.classList.toggle('active', state.subject.includes(v));
  });
  updateUI();
}

// ============================================================
// BUILD DOM — Module Cards
// ============================================================
function buildModules() {
  const grid = DOM.modulesGrid;
  MODULES_DATA.forEach(module => {
    const card = document.createElement('div');
    card.className = 'module-card';
    card.id = 'card-' + module.id;

    card.innerHTML = `
      <div class="module-header">
        <span class="module-icon">${module.icon}</span>
        <div>
          <span class="module-title">${module.title}</span>
          <span class="module-desc">${module.desc}</span>
        </div>
      </div>
      <div class="select-wrap" id="wrap-${module.id}">
        <select class="module-select" data-group="${module.id}">
          <option value="">— Scegli Opzione —</option>
          ${module.options.map(o => `<option value="${o.text.replace(/"/g, '&quot;')}">${o.label}</option>`).join('')}
        </select>
        <svg class="select-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
    `;

    const select = card.querySelector('select');
    const wrap = card.querySelector('.select-wrap');
    select.addEventListener('change', e => {
      state[module.id] = e.target.value;
      wrap.classList.toggle('has-value', !!e.target.value);
      card.classList.toggle('active', !!e.target.value);
      updateUI();
    });

    grid.appendChild(card);
  });
}

// ============================================================
// RANDOMIZE
// ============================================================
function randomizeAll() {
  MODULES_DATA.forEach(module => {
    const opt = module.options[Math.floor(Math.random() * module.options.length)];
    state[module.id] = opt.text;
    const sel = document.querySelector(`.module-select[data-group="${module.id}"]`);
    if (sel) {
      sel.value = opt.text;
      sel.parentElement.classList.add('has-value');
      sel.closest('.module-card').classList.add('active');
    }
  });
  if (headGroup) {
    headGroup.rotation.y = Math.random() * Math.PI * 2 - Math.PI;
    headGroup.rotation.x = Math.max(-Math.PI / 2.5, Math.min(Math.PI / 2.5, Math.random() * Math.PI - Math.PI / 2));
    determineAngle();
  }
  updateUI();
}

// ============================================================
// RESET
// ============================================================
function resetAll() {
  MODULE_KEYS.forEach(k => { state[k] = ''; });
  state.subject = '';
  state.ar = '--ar 4:5';
  state.style = '--style raw';
  state.stylize = '--s 100';
  state.angle = 'eye-level shot, straight on front view';

  DOM.subjectInput.value = '';
  DOM.arSelect.value = '--ar 4:5';
  DOM.styleSelect.value = '--style raw';
  DOM.stylizeRange.value = 100;
  DOM.stylizeVal.textContent = '100'; if(DOM.stylizeValLabel) DOM.stylizeValLabel.textContent = '100';

  document.querySelectorAll('.module-select').forEach(sel => {
    sel.value = '';
    sel.parentElement.classList.remove('has-value');
    sel.closest('.module-card').classList.remove('active');
  });
  document.querySelectorAll('.quick-btn').forEach(btn => btn.classList.remove('active'));

  if (headGroup) { headGroup.rotation.set(0, 0, 0); determineAngle(); }
  updateUI();
}

// ============================================================
// COPY
// ============================================================
async function copyPrompt() {
  const txt = compilePrompt();
  if (!txt) return;
  try {
    await navigator.clipboard.writeText(txt);
  } catch {
    const el = document.createElement('textarea');
    el.value = txt;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
  DOM.copyBtn.classList.add('copied');
  DOM.copyText.textContent = 'Copiato!';
  setTimeout(() => {
    DOM.copyBtn.classList.remove('copied');
    DOM.copyText.textContent = 'Copia Prompt';
  }, 2200);
}

// ============================================================
// THREE.JS — 3D HEAD
// ============================================================
let scene, camera, renderer, headGroup;
let isDragging = false, prevMouse = { x: 0, y: 0 };
let lastAngleTick = 0;

function init3D() {
  const canvas = document.getElementById('angleCanvas');
  if (!canvas || typeof THREE === 'undefined') return;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
  camera.position.z = 5;

  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

  // Build head
  headGroup = new THREE.Group();
  const solidMat = new THREE.MeshPhongMaterial({ color: 0x080c18, flatShading: true });
  const wireMat  = new THREE.MeshBasicMaterial({ color: 0xe8c547, wireframe: true, transparent: true, opacity: 0.5 });

  const sphereGeo = new THREE.IcosahedronGeometry(1.1, 1);
  headGroup.add(new THREE.Mesh(sphereGeo, solidMat));
  const cWire = new THREE.Mesh(sphereGeo, wireMat);
  cWire.scale.set(1.025, 1.025, 1.025);
  headGroup.add(cWire);

  const boxGeo = new THREE.BoxGeometry(1.2, 1.2, 1.4);
  const jSolid = new THREE.Mesh(boxGeo, solidMat);
  const jWire  = new THREE.Mesh(boxGeo, wireMat);
  jSolid.position.set(0, -0.7, 0.2);
  jWire.position.set(0, -0.7, 0.2);
  jWire.scale.set(1.025, 1.025, 1.025);
  headGroup.add(jSolid, jWire);

  const noseMat = new THREE.MeshBasicMaterial({ color: 0xe8c547, wireframe: true });
  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.45, 4), noseMat);
  nose.rotation.x = Math.PI / 2;
  nose.position.set(0, -0.08, 1.3);
  headGroup.add(nose);

  const eyeMat = new THREE.MeshBasicMaterial({ color: 0xe8c547, wireframe: true });
  const eyeGeo = new THREE.IcosahedronGeometry(0.2, 0);
  const lEye = new THREE.Mesh(eyeGeo, eyeMat);
  const rEye = new THREE.Mesh(eyeGeo, eyeMat);
  lEye.position.set(-0.38, 0.08, 0.95);
  rEye.position.set(0.38, 0.08, 0.95);
  headGroup.add(lEye, rEye);

  scene.add(headGroup);
  scene.add(new THREE.AmbientLight(0xffffff, 0.25));
  const key = new THREE.DirectionalLight(0xe8c547, 0.9);
  key.position.set(5, 8, 5); scene.add(key);
  const fill = new THREE.DirectionalLight(0x3366ff, 0.35);
  fill.position.set(-5, -3, -5); scene.add(fill);

  // Events
  canvas.addEventListener('mousedown', e => { isDragging = true; prevMouse = { x: e.offsetX, y: e.offsetY }; });
  window.addEventListener('mouseup', () => { isDragging = false; });
  window.addEventListener('mousemove', e => {
    if (!isDragging) return;
    rotateHead(e.offsetX - prevMouse.x, e.offsetY - prevMouse.y);
    prevMouse = { x: e.offsetX, y: e.offsetY };
  });
  canvas.addEventListener('touchstart', e => {
    e.preventDefault();
    isDragging = true;
    const r = canvas.getBoundingClientRect();
    prevMouse = { x: e.touches[0].clientX - r.left, y: e.touches[0].clientY - r.top };
  }, { passive: false });
  window.addEventListener('touchend', () => { isDragging = false; });
  window.addEventListener('touchmove', e => {
    if (!isDragging) return;
    e.preventDefault();
    const r = canvas.getBoundingClientRect();
    const x = e.touches[0].clientX - r.left;
    const y = e.touches[0].clientY - r.top;
    rotateHead(x - prevMouse.x, y - prevMouse.y);
    prevMouse = { x, y };
  }, { passive: false });

  new ResizeObserver(() => {
    if (!canvas.clientWidth) return;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  }).observe(canvas);

  (function loop() { requestAnimationFrame(loop); renderer.render(scene, camera); })();
}

function rotateHead(dx, dy) {
  headGroup.rotation.y += dx * 0.01;
  headGroup.rotation.x = Math.max(-Math.PI / 2.5, Math.min(Math.PI / 2.5, headGroup.rotation.x + dy * 0.01));
  determineAngle();
}

function determineAngle() {
  const now = performance.now();
  if (now - lastAngleTick < 50) return;
  lastAngleTick = now;

  let ry = headGroup.rotation.y % (Math.PI * 2);
  if (ry > Math.PI) ry -= Math.PI * 2;
  if (ry < -Math.PI) ry += Math.PI * 2;
  const rx = headGroup.rotation.x;

  let h;
  if (Math.abs(ry) < 0.3) h = 'straight on front view';
  else if (ry > 0.3 && ry < 1.0) h = '3/4 profile shot from right';
  else if (ry >= 1.0 && ry <= 2.2) h = 'side profile from right';
  else if (ry > 2.2) h = 'shot from behind';
  else if (ry < -0.3 && ry > -1.0) h = '3/4 profile shot from left';
  else if (ry <= -1.0 && ry >= -2.2) h = 'side profile from left';
  else h = 'shot from behind';

  let v;
  if (rx < -0.3) v = 'low angle hero shot looking up';
  else if (rx > 0.4) v = 'high angle shot looking down';
  else v = 'eye-level shot';

  const angle = v + ', ' + h;
  DOM.angleLabel.textContent = angle;
  state.angle = angle;
  updateUI();
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  DOM = {
    subjectInput:   document.getElementById('subjectInput'),
    output:         document.getElementById('promptOutput'),
    copyBtn:        document.getElementById('copyBtn'),
    copyText:       document.getElementById('copyText'),
    clearBtn:       document.getElementById('clearBtn'),
    randomBtn:      document.getElementById('randomBtn'),
    shareBtn:       document.getElementById('shareBtn'),
    arSelect:       document.getElementById('arSelect'),
    styleSelect:    document.getElementById('styleSelect'),
    stylizeRange:   document.getElementById('stylizeRange'),
    stylizeVal:     document.getElementById("stylizeValBadge"),
    stylizeValLabel: document.getElementById("stylizeVal"),
    angleLabel:     document.getElementById('angleLabel'),
    progressFill:   document.getElementById('progressFill'),
    progressCount:  document.getElementById('progressCount'),
    tokenCount:     document.getElementById('tokenCount'),
    presetsGrid:    document.getElementById('presetsGrid'),
    modulesGrid:    document.getElementById('dynamicModulesGrid'),
  };

  buildPresets();
  buildModules();
  init3D();

  // Subject
  DOM.subjectInput.addEventListener('input', e => {
    state.subject = e.target.value.trim();
    // Sync quick toggle active states
    document.querySelectorAll('.quick-btn').forEach(btn => {
      btn.classList.toggle('active', state.subject.includes(btn.dataset.append));
    });
    updateUI();
  });

  // Quick Toggles (built inline)
  document.querySelectorAll('.quick-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const v = btn.dataset.append;
      let cur = DOM.subjectInput.value;
      if (cur.includes(v)) {
        cur = cur.replace(v, '').replace(/\s{2,}/g, ' ').trim();
        btn.classList.remove('active');
      } else {
        cur = (cur + ' ' + v).trim();
        btn.classList.add('active');
      }
      DOM.subjectInput.value = cur;
      state.subject = cur;
      updateUI();
    });
  });

  // Tech params
  DOM.arSelect.addEventListener('change', e => { state.ar = e.target.value; updateUI(); });
  DOM.styleSelect.addEventListener('change', e => { state.style = e.target.value; updateUI(); });
  DOM.stylizeRange.addEventListener('input', e => {
    DOM.stylizeVal.textContent = e.target.value;
    if(DOM.stylizeValLabel) DOM.stylizeValLabel.textContent = e.target.value;
    state.stylize = '--s ' + e.target.value;
    updateUI();
  });

  // Buttons
  DOM.clearBtn.addEventListener('click', resetAll);
  DOM.randomBtn.addEventListener('click', randomizeAll);
  DOM.copyBtn.addEventListener('click', copyPrompt);

  // Share
  DOM.shareBtn && DOM.shareBtn.addEventListener('click', async () => {
    const data = { title: 'Synth.Matrix', text: 'Ho trovato questo Prompt Engine assurdo per AI!', url: location.href };
    try {
      if (navigator.share) await navigator.share(data);
      else { await navigator.clipboard.writeText(location.href); alert('Link copiato!'); }
    } catch {}
  });

  // Init icons
  if (typeof lucide !== 'undefined') lucide.createIcons();
  updateUI();
});
