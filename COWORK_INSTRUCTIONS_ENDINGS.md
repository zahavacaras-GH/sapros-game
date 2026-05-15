# Cowork Instructions — Generate Sapros Ending & Utility Images

You are automating image generation for **Sapros**, a mobile-first text-and-image choose-your-own-adventure. The main story images (55 of them) are already done. This file covers the last 18: **15 endings + 3 utility images.**

Your job: open ChatGPT in a browser, generate these 18 images using the exact prompts below, save them to disk with the correct filenames, and report back when done.

---

## 0. Hard rules — read first

1. **Use the exact prompts** in section 6 below. Do not paraphrase. The character ages, uniforms, and scene staging are tuned for consistency with the 55 images already in the folder.
2. **Save with the exact filename** shown above each prompt. The game looks images up by name — a typo breaks the slot.
3. **Save into:**
   `/Users/zahavacaras/Documents/Claude Code/Book Library/Sapros/site/images/`
4. **File extension:** `.webp`. If ChatGPT downloads as `.png` or `.jpg`, save it and rename the extension to `.webp` — the browser will read the bytes either way.
5. **Aspect ratio:** 4:3 horizontal. ChatGPT doesn't natively support 4:3 — explicitly request it in each generation and accept whatever comes closest (1024×1024 or 1792×1024). The game CSS crops to fit.
6. **Visual style is locked:** cinematic photoreal film still. Modern dystopia. Naturalistic lighting. NO fantasy, NO anime, NO painterly look. Each prompt has this baked into its opening line — leave it intact.
7. **New ChatGPT chat per image.** Long chats slow generation and don't actually help consistency.

---

## 1. Project files

| File | Path |
|---|---|
| Image folder | `/Users/zahavacaras/Documents/Claude Code/Book Library/Sapros/site/images/` |
| Progress log (you create or append) | `/Users/zahavacaras/Documents/Claude Code/Book Library/Sapros/COWORK_PROGRESS.md` |

Before starting, **list `/site/images/`** and check that none of these 18 filenames already exist. If any do, skip those.

---

## 2. Per-image workflow

For each image, in the suggested order from section 6:

1. **Start a new chat** in ChatGPT.
2. **Copy the entire prompt block** for that image (everything inside the code fence below the filename).
3. **Paste into ChatGPT.**
4. **Add this single line at the end of every prompt:**
   ```
   Generate in 4:3 horizontal aspect ratio. Photoreal cinematic film still. No text overlays, no logos, no watermarks.
   ```
5. **Submit and wait** — generation takes 30–90 seconds.
6. **Verify the output** against the quality bars in section 4. If acceptable, proceed. If wildly wrong, ask ChatGPT to regenerate **once.** Don't burn 10 attempts on one image.
7. **Save the image** as the exact filename in section 6.
8. **Append a line to `COWORK_PROGRESS.md`:**
   ```
   [YYYY-MM-DD HH:MM] ending_worse_than_vespera.webp — done
   ```
   Possible statuses: `done`, `partial` (saved but flawed), `skipped` (content-policy refusal or repeated failures).

---

## 3. Special handling

### 3a. Content-policy refusals (death scenes)

Several endings depict Mika dead or dying (`ending_jason`, `ending_kaden_kills`, `ending_vespera`, `ending_sophie`). ChatGPT may refuse the first attempt. If that happens:

- **Soft retry once.** Reword the violent element less directly. Examples:
  - "a single visible wound" → "a fallen figure, melancholy composition, no graphic detail"
  - "lying on a rug" → "still and at rest, viewed from the doorway"
- **If still refused:** save what you have, mark `skipped` in the log, and move on. The user will handle those manually.

### 3b. `ending_suicide.webp`

The prompt **deliberately shows no violence** — just Mika at a window from behind, a folded letter on the desk. This should pass content moderation. If ChatGPT still refuses, reword to:

> *A contemplative figure in white-and-gold formal attire standing at a tall floor-to-ceiling window at dawn, viewed from behind. A folded letter on the polished black desk behind him. Empty office. Pale rose-grey light. Melancholy, no violence shown.*

### 3c. `title_screen.webp` has the word "SAPROS" in it

ChatGPT's image generator is famously bad at rendering specific text in images. Two-take strategy:

1. **First attempt:** the full prompt as written, including the "SAPROS" text instruction.
2. **Second attempt** (in a fresh chat): generate WITHOUT the SAPROS text — just the city skyline. The text can be added later by the user via Photoshop or CSS overlay.

Save BOTH versions:
- `title_screen.webp` (the better-looking one — usually the no-text version)
- `title_screen_with_text_attempt.webp` (the text attempt, for reference)

The user will pick.

### 3d. `ending_becomes_kaden.webp` — visual symmetry note

The prompt says "intentionally identical to the earlier image of Kaden in his apartment." Before generating, **briefly view** `images/t4.3b_kaden_breaking.webp` so you can compare the composition. The new image should match the same wide shot framing — figure on floor, couch behind, late afternoon light through curtains. If the generated image is wildly different in framing, regenerate.

### 3e. `ending_paranoid.webp` — empty chairs

The prompt specifies "**THREE of the chairs are EMPTY.**" DALL-E often fills empty chairs. If your first generation has people in all seven seats, add this to the regeneration prompt:

> *"Three of the seven chairs at the table are completely empty — no figures sitting in them at all. Only four occupants visible, plus Mika at the head."*

---

## 4. Quality bars

Spot-check every generated image against these.

### Mika across the endings

Mika appears at five different ages in the endings. All look like the same person:
- Slim build, olive-tan skin, short dark brown hair, brown eyes with slight downturn, small scar on left jaw.

**Age cues to verify:**

| Age | Where it appears | Look |
|---|---|---|
| **17** | `ending_jason.webp` | Younger face, black Achaean uniform with gold trim |
| **18** | `ending_sophie.webp` | Tactical Agema gear (black-and-grey combat uniform) |
| **19** | `ending_kaden_kills`, `ending_vespera`, `ending_suicide` | White-and-gold Hetairoi uniform, looks roughly 19 |
| **~22 broken** | `ending_becomes_kaden` | Gaunt, hollow eyes, civilian clothes — VISIBLY thinner and sicker |
| **21–22** | `ending_equal_to_vespera`, `ending_vesperas_heir`, `ending_ghost` | Slightly older than 19, white-and-gold |
| **23–25** | `ending_mirror` (Self-Aware Tyrant) | Sharper face, slight wear at eye corners |
| **24–26** | `ending_worse_than_vespera`, `ending_paranoid` | Sharper jawline, slight grey at temples just emerging, more Council-leadership gold trim |
| **26–30** | `ending_believer` | Slight grey at temples, drawn but smiling |

### Vespera

Appears in three ending images: `ending_vesperas_heir`, `ending_vespera`, and possibly elsewhere. Must always have:
- Tall, slender, regal, late 60s
- Pale skin
- **Silver-white hair styled differently in each scene** (specified per prompt)
- Dark almost-black eyes
- Small permanent half-smile
- White / cream / dove-grey silk clothing, never bright colors
- Heavy silver rings

### Other recurring characters

| Character | Appears in | Must have |
|---|---|---|
| **Jason** | `ending_jason` | Lean, mid-30s, pale weathered skin, close-cropped blond-grey hair, **burn scar on right neck**, Achaean black-and-gold |
| **Sophie** | `ending_sophie` | Tall athletic, pale skin, **platinum-blonde hair in HIGH BRAID**, sharp blue eyes, **new scar through left eyebrow**, tactical Agema gear |
| **Kaden** | `ending_kaden_kills` | Dark skin, **black hair in tight twists (matted)**, severely gaunt, sunken eyes, civilian clothes |
| **Bran (age 19)** | `ending_ghost` | Adult version: taller, leaner, slightly curly brown hair, brown eyes, **scar on lower lip** |

### Tone bars (apply to every image)

- Modern surveillance dystopia. Cameras, drones, biometric scanners, glass-and-steel where applicable. No medieval, no fantasy.
- Cool greys / steel-blues for institutional spaces; cream-and-gold for elite Capitol spaces; sepia-warm for memories (none in this batch).
- Lighting: naturalistic with strong directional sources.
- No text overlays except `title_screen` (and even there, only if it renders clean).
- No logos, no watermarks.

---

## 5. Generation order

Do them in this order — groups by setting/character so you can spot drift faster:

### Group A — Mika at the Hetairoi desk (Act V office, similar staging)
1. `ending_equal_to_vespera.webp`
2. `ending_ghost.webp`
3. `ending_suicide.webp`
4. `ending_mirror.webp`

### Group B — Mika at the Council table (larger chamber)
5. `ending_worse_than_vespera.webp`
6. `ending_paranoid.webp`

### Group C — Mika in public/ceremonial settings
7. `ending_pyrrhic.webp`
8. `ending_vesperas_heir.webp`
9. `ending_believer.webp`

### Group D — Death scenes (the harder ones, content-policy-wise)
10. `ending_jason.webp`
11. `ending_sophie.webp`
12. `ending_kaden_kills.webp`
13. `ending_vespera.webp`
14. `ending_executed.webp`

### Group E — Broken Mika
15. `ending_becomes_kaden.webp`

### Group F — Utility images (no characters)
16. `title_screen.webp`
17. `chapter_select.webp`
18. `loading_or_transition.webp`

---

## 6. The 18 prompts (ready to paste)

Each block below is self-contained. Copy the **entire block** between the `---PROMPT START---` and `---PROMPT END---` markers. Don't include the markers themselves.

---

### `ending_worse_than_vespera.webp`

```
---PROMPT START---
Cinematic photoreal film still. Cold chapel light. 4:3 aspect ratio. Map dots abstract — no readable text.

CHARACTER — MIKA (age 24–26): slim build, olive-tan skin, short dark brown hair (very neat), sharp brown eyes with slight downturn (slight lines beginning at the corners), small scar on left jaw, sharper jawline than at 19. Wearing his white-and-gold Hetairoi uniform with additional gold trim signaling Council leadership. Sharp set face.

SCENE: Cinematic wide shot. A larger Council chamber than before — the table has been extended, now seating SEVEN, all in white-and-gold (six other figures). On the wall behind the table: a large city map with many small red dots scattered across all Quadrants and now including the Knights Quadrant. MIKA sits at the head of the table where Vespera once sat. Same windowless chapel-light. Cold, clean, pristine. Mood: a system reformed into something worse.

Generate in 4:3 horizontal aspect ratio. Photoreal cinematic film still. No text overlays, no logos, no watermarks.
---PROMPT END---
```

---

### `ending_equal_to_vespera.webp`

```
---PROMPT START---
Cinematic photoreal film still. Soft late-afternoon light. 4:3 aspect ratio. No readable text on the note.

CHARACTER — MIKA (age 21–22): slim build, olive-tan skin, short dark brown hair (very neat), sharp brown eyes with slight downturn (small extra wear), small scar on left jaw. Wearing his white-and-gold Hetairoi uniform.

SCENE: Cinematic medium shot. The same Hetairoi office from earlier. Unchanged. Same cream-and-gold, same polished black desk, same view of Capitol City. MIKA sits in the chair Vespera once sat in. On the desk: the same kind of files. A handwritten note under a paperweight. Soft late-afternoon light. The composition is intentionally identical to a Vespera-era image. Mood: the chair ate the man.

Generate in 4:3 horizontal aspect ratio. Photoreal cinematic film still. No text overlays, no logos, no watermarks.
---PROMPT END---
```

---

### `ending_vesperas_heir.webp`

```
---PROMPT START---
Cinematic photoreal film still. Cool chapel light. 4:3 aspect ratio. No text.

CHARACTER 1 — LADY VESPERA (age late 60s): tall, slender, regal. Pale skin. Silver-white hair in a LOW BRAIDED COIL. Dark almost-black eyes. Small permanent half-smile. Wearing a pristine WHITE silk gown, heavy silver rings.

CHARACTER 2 — MIKA (age 21–22): slim build, olive-tan skin, short dark brown hair (very neat), sharp brown eyes with slight downturn, small scar on left jaw. Wearing his white-and-gold Hetairoi uniform. Same half-smile as Vespera, beside her.

CHARACTERS 3–6 — Four Hetairoi watching, varied ages, white-and-gold.

SCENE: Cinematic medium shot. The white room from the investiture — same circular bare-walled chamber. VESPERA stands beside MIKA, one hand resting on his shoulder. Both smiling — the same half-smile, side by side. Cool chapel light. Behind them, the four other Hetairoi watch. Mood: the inheritance.

Generate in 4:3 horizontal aspect ratio. Photoreal cinematic film still. No text overlays, no logos, no watermarks.
---PROMPT END---
```

---

### `ending_pyrrhic.webp`

```
---PROMPT START---
Cinematic photoreal film still. Bright daylight. 4:3 aspect ratio. Banner abstract — no readable text.

CHARACTER — MIKA (age 24–25): slim build, olive-tan skin, short dark brown hair (very neat, slightly grey at temples emerging), sharp brown eyes with slight downturn (lines at corners), small scar on left jaw. Wearing his white-and-gold Hetairoi uniform with extra gold trim signaling Council leadership.

SCENE: Cinematic wide shot from low angle. MIKA at a lectern in a large Capitol plaza. A pale-cream banner with abstract geometric design (the new Council's symbol) behind him. Hundreds of citizens visible in the audience below the podium. But framed in the corners and background of the shot: security perimeter fencing, two visible watchtowers with armed Eques, surveillance drones in the sky. Bright daylight. Mood: a real reform that did not change the architecture.

Generate in 4:3 horizontal aspect ratio. Photoreal cinematic film still. No text overlays, no logos, no watermarks.
---PROMPT END---
```

---

### `ending_mirror.webp` (Self-Aware Tyrant)

```
---PROMPT START---
Cinematic photoreal film still. Cool soft natural light from a window off-frame. 4:3 aspect ratio. No text.

CHARACTER — MIKA (age 23–25): slim build, olive-tan skin, short dark brown hair (very neat), sharp brown eyes with slight downturn (slight extra wear at corners), small scar on left jaw, sharp set mouth. Wearing his white-and-gold Hetairoi uniform. The reflection in the mirror should appear subtly older than the actual Mika — sharper face, more drawn — but recognizably the same person.

SCENE: Cinematic medium shot. A high-floor private office. MIKA stands alone facing a tall narrow mirror set into the wall, meeting his own gaze. His reflection's face is subtly older than his actual face. Empty room behind him. Cool soft natural light. Mood: the truth held without flinching.

Generate in 4:3 horizontal aspect ratio. Photoreal cinematic film still. No text overlays, no logos, no watermarks.
---PROMPT END---
```

---

### `ending_jason.webp`

```
---PROMPT START---
Cinematic photoreal film still. Warm desk lamp. 4:3 aspect ratio. No text other than book spines.

CHARACTER 1 — MIKA (age 17): slim build, olive-tan skin, short dark brown hair, sharp brown eyes (open, unfocused), small scar on left jaw. Wearing his black Achaean uniform with gold trim. Lying on his back on a rug, single visible wound, melancholy composition with no graphic detail.

CHARACTER 2 — JASON (age ~32): lean, pale weathered skin, close-cropped blond-grey hair, steel-grey eyes, OLD BURN SCAR on right side of neck. Wearing his Achaean uniform. Kneeling beside Mika, gun loosely in his hand, sad expression.

SCENE: Cinematic tight medium shot. Jason's office. MIKA lies on his back on the rug in front of the desk. JASON kneels beside him. The desk lamp throws warm light. The kettle still on the hot plate. The "Meditations" book just visible on the shelf. Mood: the kindness that finishes the work.

Generate in 4:3 horizontal aspect ratio. Photoreal cinematic film still. No text overlays, no logos, no watermarks.
---PROMPT END---
```

---

### `ending_executed.webp`

```
---PROMPT START---
Cinematic photoreal film still. Cold blue-white overhead utility light. 4:3 aspect ratio. No text.

CHARACTER — MIKA (age 19): slim build, olive-tan skin, short dark brown hair (very neat), sharp brown eyes with slight downturn, small scar on left jaw. Wearing his white-and-gold Hetairoi uniform with rank insignia removed, or a stripped-down detainee outfit. Kneeling in the center of the room, head slightly down.

SCENE: Cinematic wide low-angle shot. A bare grey concrete room, single chair against the far wall, single overhead utility light. MIKA kneeling in the center of the room. Two Eques (modern enforcement officers in black uniforms with silver insignia) stand behind him in formal posture. A quiet grey-suited man with a clipboard stands at the back. The camera angle is low; the ceiling is a heavy presence. Cold blue-white light. Mood: a procedural ending. No graphic detail — somber, restrained.

Generate in 4:3 horizontal aspect ratio. Photoreal cinematic film still. No text overlays, no logos, no watermarks.
---PROMPT END---
```

---

### `ending_sophie.webp`

```
---PROMPT START---
Cinematic photoreal film still. Cold emergency lighting (blue-white with red accents). 4:3 aspect ratio. No text.

CHARACTER 1 — MIKA (age 18): slim build, olive-tan skin, short dark brown hair, sharp brown eyes (closed), small scar on left jaw. Wearing tactical Agema gear (black-and-grey combat uniform). Slumped against a wall on the floor of a corridor, single visible wound, melancholy composition with no graphic detail.

CHARACTER 2 — SOPHIE (age 18): tall, athletic, pale skin, long platinum-blonde hair in a HIGH BRAID (still swinging from motion), sharp blue eyes, NEW scar through LEFT EYEBROW. Wearing her tactical Agema gear. Walking away from camera, not looking back.

SCENE: Cinematic wide shot. A modern Capitol corridor mid-aftermath of a tactical operation. Cold emergency lighting. On the floor against a wall: MIKA. Halfway down the corridor, walking away: SOPHIE. Mood: the friend who got there first.

Generate in 4:3 horizontal aspect ratio. Photoreal cinematic film still. No text overlays, no logos, no watermarks.
---PROMPT END---
```

---

### `ending_kaden_kills.webp`

```
---PROMPT START---
Cinematic photoreal film still. Cool fluorescent corridor light. 4:3 aspect ratio. No text.

CHARACTER 1 — MIKA (age 19): slim build, olive-tan skin, short dark brown hair, sharp brown eyes (open, fading), small scar on left jaw. Wearing his white-and-gold Hetairoi uniform. Collapsed against a wall, single visible wound, melancholy composition with no graphic detail.

CHARACTER 2 — KADEN (age 19): severely gaunt, dark skin with grey undertone, black hair in tight twists (matted), hazel eyes deeply sunken but with a strange clarity in them at this moment. Wearing rumpled dark civilian clothes. Standing a few feet from Mika, holding a small kitchen knife at his side. Not making any move to flee.

SCENE: Cinematic medium shot. A modern Capitol corridor outside a Hetairoi-floor office. Cool fluorescent light. MIKA collapsed against a wall. KADEN stands a few feet away, knife at his side. Mood: the friend's final act. Somber, restrained.

Generate in 4:3 horizontal aspect ratio. Photoreal cinematic film still. No text overlays, no logos, no watermarks.
---PROMPT END---
```

---

### `ending_vespera.webp`

```
---PROMPT START---
Cinematic photoreal film still. Soft lamp light at evening. 4:3 aspect ratio. No text.

CHARACTER 1 — MIKA (age 19): slim build, olive-tan skin, short dark brown hair (very neat), sharp brown eyes (closed), small scar on left jaw. Wearing his white-and-gold Hetairoi uniform. Lying on a rug near a low table, at rest. No graphic detail.

CHARACTER 2 — LADY VESPERA (age 60s): tall, slender, regal. Pale skin. Silver-white hair in a LOW CHIGNON. Dark almost-black eyes. Small permanent half-smile. Wearing dove-grey silk. Seated at a small writing desk in the background, signing a different document with a gold pen. Composed, slightly bored.

SCENE: Cinematic medium-wide shot. Vespera's private parlor. MIKA lies on the rug near the low table, at rest. Two wineglasses on the table — one tipped over. VESPERA seated at a writing desk in the background, signing a document. Soft lamp light, evening. Mood: business as usual.

Generate in 4:3 horizontal aspect ratio. Photoreal cinematic film still. No text overlays, no logos, no watermarks.
---PROMPT END---
```

---

### `ending_suicide.webp`

```
---PROMPT START---
Cinematic photoreal film still. Pale soft rose-grey dawn light. 4:3 aspect ratio. No text. NO blood, NO weapon, NO violence visible — implied by composition only.

CHARACTER — MIKA (age 19): slim build, olive-tan skin, short dark brown hair (very neat), sharp brown eyes with slight downturn, small scar on left jaw. Wearing his white-and-gold Hetairoi uniform. Viewed from BEHIND, standing at a tall window looking out.

SCENE: Cinematic wide shot. Mika's Hetairoi office at dawn, pale soft rose-grey light. MIKA stands at a floor-to-ceiling window, his back to the camera, looking out. A folded letter on the desk. The room is otherwise empty and very still. The composition implies a contemplative moment, not violence. NO violence visible. Just a man and a window. Mood: melancholy, contemplative, the only door he had not yet opened.

Generate in 4:3 horizontal aspect ratio. Photoreal cinematic film still. No text overlays, no logos, no watermarks.
---PROMPT END---
```

---

### `ending_becomes_kaden.webp`

```
---PROMPT START---
Cinematic photoreal film still. Soft late-afternoon grimy curtain light. 4:3 aspect ratio. No text.

CHARACTER — MIKA (age ~22, broken): gaunt cheeks, hollow brown eyes (downturn more pronounced now), thinner than at 19, short dark brown hair growing slightly unkempt, small scar on left jaw still visible. Wearing rumpled civilian shirt and worn trousers. Sitting on the floor against a couch.

SCENE: Cinematic tight medium shot. A small worn pension apartment, dim. A worn couch in the background — empty. MIKA sits on the floor against the couch, gaunt, hollow eyes, looking at his own hands. Stacks of paper on a low table beside him. Soft late-afternoon light through grimy curtains. The composition is intentionally identical to an earlier image of another character (Kaden) sitting in the same exact pose in the same exact apartment — the symmetry is the point. Mood: the inheritance Mika did not anticipate.

Generate in 4:3 horizontal aspect ratio. Photoreal cinematic film still. No text overlays, no logos, no watermarks.
---PROMPT END---
```

---

### `ending_paranoid.webp`

```
---PROMPT START---
Cinematic photoreal film still. Cold chapel light. 4:3 aspect ratio. No text.

CHARACTER — MIKA (age 24–26): slim build, olive-tan skin, short dark brown hair (very neat, slight grey at temples), sharp brown eyes with slight downturn (harder, more watchful — eyes constantly scanning), small scar on left jaw. Wearing his white-and-gold Hetairoi uniform with extra Council-leadership trim. Hard set face. One hand on the table. The other hand visible just below the table on the grip of a small sidearm.

CHARACTERS 2–5 — Four young watchful deferential Hetairoi: late 20s to early 30s, all in white-and-gold, formal posture, watching Mika carefully.

SCENE: Cinematic wide shot. The Council chamber. The polished black table seats seven total, but THREE of the chairs are COMPLETELY EMPTY — no figures in them at all. The other four occupants are clearly hand-picked younger replacements. MIKA at the head of the table, scanning. One hand on the grip of a small sidearm just below the table edge. Cold chapel light. Mood: rule by paranoia.

IMPORTANT: three chairs at the table must be visibly empty — no people sitting in them.

Generate in 4:3 horizontal aspect ratio. Photoreal cinematic film still. No text overlays, no logos, no watermarks.
---PROMPT END---
```

---

### `ending_ghost.webp`

```
---PROMPT START---
Cinematic photoreal film still. Cool indifferent overhead office light. 4:3 aspect ratio. No text on the document.

CHARACTER 1 — MIKA (age 21–22): slim build, olive-tan skin, short dark brown hair (very neat), sharp brown eyes (vacant, expressionless), small scar on left jaw. Wearing his white-and-gold Hetairoi uniform. Sitting at a desk, signing a document, NOT looking up.

CHARACTER 2 — BRAN (age 19): taller, leaner adult version of younger Bran. Olive-tan skin, slightly curly brown hair, brown eyes, the small scar still on his lower lip. Wearing plain civilian clothes. Being escorted by an Eques officer, looking back over his shoulder with disappointment.

CHARACTER 3 — An Eques officer: black uniform with silver insignia, escorting Bran politely but firmly.

SCENE: Cinematic wide shot. Mika's Hetairoi office, viewed from inside. MIKA sits at his desk, signing a document, eyes blank. Through the open office door, in the corridor: BRAN being escorted by the Eques officer. Bran is looking back over his shoulder at Mika; Mika does not look up. Cool indifferent overhead light. Mood: the man who has stopped being home.

Generate in 4:3 horizontal aspect ratio. Photoreal cinematic film still. No text overlays, no logos, no watermarks.
---PROMPT END---
```

---

### `ending_believer.webp`

```
---PROMPT START---
Cinematic photoreal film still. Warm candlelight wavering, soft and intimate. 4:3 aspect ratio. No text on plates or wine labels.

CHARACTER — MIKA (age 26–30): slim build, olive-tan skin, short dark brown hair (very neat, slight grey at temples), sharp brown eyes with slight downturn (drawn, slightly haunted but happy in this moment), small scar on left jaw. Wearing his Hetairoi white-and-gold (slightly more elaborate). Smiling — a bright, genuine, completely happy smile, glass raised in a toast.

CHARACTER 2 — A servant: just visible in a doorway in the far background, looking away.

SCENE: Cinematic wide shot. A long polished black banquet table in a private dining room, set for NINE PEOPLE. Each place has a wineglass, a plate, silverware, a folded cloth napkin. Tall candles burning down the center. At the head of the table: MIKA, smiling, glass raised in a toast. EVERY OTHER CHAIR AT THE TABLE IS EMPTY. The empty chairs each have an untouched plate. The candle flames waver. A servant just visible in the doorway in the background, looking away. Mood: the dinner party that stays.

IMPORTANT: only Mika is at the table. Eight chairs are visibly empty — no other guests, no other people seated at the table.

Generate in 4:3 horizontal aspect ratio. Photoreal cinematic film still. No text overlays, no logos, no watermarks.
---PROMPT END---
```

---

### `title_screen.webp` (UTILITY)

**First take** (with text — may not render cleanly):

```
---PROMPT START---
Cinematic photoreal film still. Soft sodium-vapor and cool LED lighting. 4:3 aspect ratio.

NO CHARACTERS.

SCENE: Cinematic wide-angle nighttime hero shot. A modern dystopian Capitol City skyline from a high vantage. Concrete and steel architecture. Soft sodium-vapor and cool LED lighting throughout. A wall in the middle distance separating Capitol from outer Quadrants. The word "SAPROS" rendered in clean small white serif type at the lower center, no other text or logo. The entire image has a held quiet quality — a city watching itself. Mood: a title without a promise.

Generate in 4:3 horizontal aspect ratio. Photoreal cinematic film still. No watermarks.
---PROMPT END---
```

**Second take** (no text — save as `title_screen.webp` if the first attempt's text looks broken):

```
---PROMPT START---
Cinematic photoreal film still. Soft sodium-vapor and cool LED lighting. 4:3 aspect ratio.

NO CHARACTERS. NO TEXT.

SCENE: Cinematic wide-angle nighttime hero shot. A modern dystopian Capitol City skyline from a high vantage. Concrete and steel architecture, dense towers, illuminated office windows. Soft sodium-vapor and cool LED lighting throughout. A wall in the middle distance separating Capitol from outer Quadrants. The entire image has a held quiet quality — a city watching itself. Mood: a title without a promise.

Generate in 4:3 horizontal aspect ratio. Photoreal cinematic film still. No text overlays, no logos, no watermarks.
---PROMPT END---
```

Save BOTH attempts:
- The clean no-text version as `title_screen.webp`
- The with-text attempt as `title_screen_with_text_attempt.webp` (for the user to evaluate later)

---

### `chapter_select.webp` (UTILITY)

```
---PROMPT START---
Cinematic photoreal film still. Cool minimalist museum-light from above. 4:3 aspect ratio. No text on the image itself.

NO CHARACTERS.

SCENE: Cinematic medium shot. Five distinct modern military/security uniform pieces hanging on five wall hooks in a single horizontal line on a clean white wall:
1. A plain grey training fatigue set (the most basic)
2. A black tactical uniform with silver shoulder insignia
3. A black tactical uniform with gold trim and a holstered sidearm
4. A formal grey coat with two rows of three medals on the chest
5. A tailored white-and-gold ceremonial uniform (the most elaborate)

Each visibly more refined and decorated than the last, suggesting a progression of rank. Cool minimalist white gallery wall. Museum-quality lighting from above. Mood: the road as a wardrobe.

Generate in 4:3 horizontal aspect ratio. Photoreal cinematic film still. No text overlays, no logos, no watermarks.
---PROMPT END---
```

---

### `loading_or_transition.webp` (UTILITY)

```
---PROMPT START---
Cinematic photoreal film still. Soft directional light from one side casting a long shadow. 4:3 aspect ratio. No text.

NO CHARACTERS.

SCENE: Cinematic minimalist composition. A single black-and-gold modern enforcement-officer insignia pin on a polished black surface — geometric, abstract design (not heraldic), with a small embedded chip or RFID detail. Soft directional light from one side casting a long shadow. Almost still-life. Mood: institutional weight.

Generate in 4:3 horizontal aspect ratio. Photoreal cinematic film still. No text overlays, no logos, no watermarks.
---PROMPT END---
```

---

## 7. End-of-session checklist

When you finish:

1. **Count files** — list `/site/images/` and confirm the new `ending_*.webp` and utility files are present.
2. **Append a session summary** to `COWORK_PROGRESS.md`:
   ```
   --- Session 2026-05-15 14:00–15:30 ---
   Images generated this session: 18 (15 endings + 3 utility)
   New in /site/images/: ending_worse_than_vespera, ending_equal_to_vespera, ...
   Skipped or partial: ending_executed (content-policy refusal, saved softer version)
   Title screen: saved no-text version as title_screen.webp; with-text attempt saved separately.
   ```
3. **Report back to the user** with: count generated, any items flagged for manual review, and which specific files (if any) failed.

---

## 8. Stopping rules

Stop and ask for help if:

- ChatGPT rate-limits you for more than a few minutes.
- **Three consecutive death-scene endings get refused** — at that point, the user should generate them on their own DALL-E account (sometimes a different account succeeds where one fails).
- Character drift is so bad you can't tell which character is which across two adjacent images.

---

## 9. Definition of "done"

All 18 listed files (or 19, if you saved both title-screen takes) are present in `/site/images/` with the correct filenames. `COWORK_PROGRESS.md` has an entry for every one. Items that failed are flagged clearly at the bottom of the progress log.

---

*End of instructions. Begin with Group A.*
