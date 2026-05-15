# Sapros — Site Build

A mobile-first text-and-image choose-your-own-adventure. Plain HTML/CSS/JS — no framework, no build step.

---

## Current build status

This build contains the playable game from **age 15 (`t1.1`) through age 17 (`t3.2`, the Achaean hub)**. After `t3.2`, the player hits a "End of Current Build" placeholder ending.

What's wired in:
- All 5 act-opening hubs and most sub-branches through Act III's first hub
- The Corruption gauge, with smooth color shift (white → gold → red)
- Save state via localStorage
- Title screen + Continue + Chapter Select
- Mute toggle (works once an audio file is dropped at `audio/ambient.mp3`)
- Memory flashback styling (sepia tint on flashback nodes)
- Two early endings reachable from Act I (`t1.5_refuse`, `t1.5_report`) and two from Act II (`t2.5_refuse`, `t2.5_shoot_co`)

What's not yet wired in (prose is written but not yet in JSON):
- Acts III–V's full content (Jason kill, Sophie betrayal, Vespera arc)
- The 15 final endings with variation slots

The full prose for everything-not-yet-wired lives in the project root: `ACT3_TEXT.md`, `ACT4_TEXT.md`, `ACT5_TEXT.md`, `ENDINGS_TEXT.md`.

---

## Running the site locally

The browser blocks `fetch()` for `file://` URLs, so you need a local web server. From this `site/` folder:

**Python 3 (any Mac/Linux):**
```bash
python3 -m http.server 8000
```

**Node:**
```bash
npx serve .
```

Then open `http://localhost:8000` in any browser.

---

## File layout

```
site/
├── index.html        — game shell + screens
├── style.css         — mobile-first responsive styling
├── engine.js         — game engine (state, rendering, save, endings)
├── story.json        — all nodes (text, choices, effects)
├── endings.json      — placeholder until Acts III–V are wired in
├── netlify.toml      — deployment config
├── README.md         — this file
├── images/           — drop your generated images here
│   └── (filenames listed in READY_TO_USE_PROMPTS.md)
└── audio/
    └── ambient.mp3   — optional ambient loop (drop one in to enable music)
```

---

## Adding images

The site auto-detects missing images. If an image hasn't been generated yet, the slot displays a placeholder showing the filename it expects. Just drop the generated `.webp` into `images/` with the matching filename and reload.

Filenames are listed in `READY_TO_USE_PROMPTS.md` and inside each node's prompt heading. Examples:
- `t1.1_arrival.webp`
- `t1.2_thebes_barracks.webp`
- `t1.3a_visit_bran.webp`

You don't need all the images at once. Generate them in any order; the site will pick them up as they appear.

---

## Adding ambient music

Drop a single MP3 at `audio/ambient.mp3`. The engine loops it automatically. The mute button (♪) in the top-right of the HUD toggles it, and the state persists.

If you don't add a file, music silently fails and the rest of the site keeps working. The mute button still toggles the persisted preference.

---

## Deploying to Netlify

1. Install the Netlify CLI: `npm install -g netlify-cli`
2. From the `site/` folder, run: `netlify deploy --prod`
3. First time, it'll ask you to log in and pick/create a site. Pick a name (it'll become your `*.netlify.app` subdomain).

Alternative: Netlify also accepts drag-and-drop. Zip the `site/` folder, go to https://app.netlify.com, and drag the zip onto the dashboard. Done.

---

## Save state & chapter select

- The game saves automatically to `localStorage` after every choice. Closing the tab and returning resumes you at the current node.
- "Start From Any Age" loads canonical default flag states for each rank (Thebes / Skiritai / Achaean / Agema / Hetairoi). Defined in `engine.js` under `CANONICAL_DEFAULTS`.
- "Restart from Title" (in the menu) clears the save.

---

## Known limitations of the current build

- **No audio file shipped.** Drop your own at `audio/ambient.mp3` to enable music.
- **The Corruption gauge "chime" isn't wired up yet** — the threshold flash works but no sound plays.
- **Acts III–V are not yet in `story.json`.** Reaching `t3.2` and clicking Continue lands the player on a placeholder "End of Current Build" ending.
- **The 15 final endings are not yet in `endings.json`.** Stub file exists so the engine loads cleanly.

---

## Extending the game

To add Acts III–V: open `story.json` and add the missing nodes. Each node has the schema:

```json
{
  "id": "node_id",
  "act": 3,
  "image": "filename.webp",
  "text": "Prose with *italics* and \\n\\n paragraph breaks.",
  "memory": false,
  "hub": false,
  "choices": [
    {
      "label": "Choice text",
      "next": "next_node_id",
      "effects": {
        "corruption": 5,
        "madness": 2,
        "relationships": { "jason": 1 },
        "survived": { "quinn": false },
        "flags": { "killed_jason_clean": true }
      }
    }
  ]
}
```

Special choice fields:
- `returnToHub: { node, activity }` — go back to a hub and mark the activity complete
- `ending: "e1"` — jump straight to an ending (defined in `endings.json`)
- `routeFromEndingSwitch: "coup" | "heir" | "reform" | "resist" | "break"` — runs the Act V ending decision matrix
- `condition: { ... }` — only show this choice if condition matches (same syntax as `conditionalText`)
- `isContinue: true` — visually styles as the primary "Continue" button

Conditional text on a node:
```json
"conditionalText": [
  {
    "condition": { "flag": "t1_almost_caught" },
    "append": "Extra paragraph that appears only if flag is set."
  }
]
```

The `condition` evaluator supports: `flag`, `relationship` (with `gte`/`lte`), `survived`, `corruption.gte`, `madness.gte`, `mikaSelfAware.gte`, `vesperaInterest.gte`, `hubVisited`, plus boolean composition via `all`, `any`, `not`.
