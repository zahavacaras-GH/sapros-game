# Cowork Instructions — Generate Per-Paragraph Images for Sapros

The game now supports a separate image per paragraph. When the user scrolls, the image cross-fades to match whichever paragraph is currently in view. Your job is to generate those paragraph-images so each scene has a visual track that moves with the prose.

---

## 0. Hard rules

1. **Use the exact prompts** in this file. The character descriptions and style block are tuned for visual consistency across hundreds of images. Don't paraphrase.
2. **Save with the exact filename** shown above each prompt. The engine looks images up by name — a typo breaks the slot.
3. **Save into** `/Users/zahavacaras/Documents/Claude Code/Book Library/Sapros/site/images/`
4. **File extension:** `.webp`. PNG/JPG downloads can be renamed — the browser reads the bytes either way.
5. **Aspect ratio:** 4:3 horizontal. ChatGPT can approximate; the engine's CSS crops to fit.
6. **Style is locked:** cinematic photoreal film still, modern surveillance dystopia, naturalistic lighting. No fantasy, no anime, no painterly look.
7. **Filename convention:** `<nodeId>_p<NN>_<short-label>.webp` — examples below. Pad the paragraph number with a leading zero (`p01`, `p02`, … `p10`).
8. **New chat per image** in ChatGPT. Long chats slow generation and don't actually help consistency.

---

## 1. The workflow per image

1. Pick the next image filename you haven't generated yet (work in node order: t1.1 paragraph 1 → paragraph 2 → … → t1.2 paragraph 1 → etc.).
2. Open a **new ChatGPT chat**.
3. Paste:
   - The **Master Style Block** (Section 3 below) — once per chat
   - The relevant **Character Reference Sheet(s)** for whoever appears in the paragraph (Section 4) — once per chat
   - The **per-paragraph prompt** for the specific image (sections from 5 onward)
4. Add this line at the end of every generation: *"Generate in 4:3 horizontal aspect ratio. Photoreal cinematic film still. No text overlays, no logos, no watermarks."*
5. Wait for generation.
6. Right-click the image → **Save image as…** → save to `site/images/` with the exact filename.
7. Append a line to `COWORK_PROGRESS.md` with the filename and `done` / `partial` / `skipped`.

---

## 2. Variety rules — keep paragraph images from feeling like duplicates

Within a single scene (say, t1.1's 10 paragraphs), the camera moves. Don't just generate 10 versions of the same composition. The prompt for each paragraph will specify:

- **Shot type** (wide / medium / close-up / over-the-shoulder / detail shot)
- **Camera angle** (low / eye-level / high / behind)
- **Subject focus** (Mika / Eques driver / environment / object detail)
- **What's prominent in frame**

If a paragraph is a *physical detail* (the bunk, the window, the basketball line on the concrete), the image should be a tight detail shot. If a paragraph is *interior monologue* with Mika looking at something, frame him looking. If a paragraph is *movement through space*, use a wide shot.

This variety is what makes scroll-driven swapping feel cinematic instead of redundant.

---

## 3. Master Style Block — paste at the top of every chat

```
Cinematic photoreal film still. Grounded modern dystopian urban setting — no fantasy, no anime, no painterly look. Naturalistic lighting with strong directional sources (sodium-vapor streetlamps, fluorescent overheads, warm window light, cold daylight). Color palette: cool greys and steel-blues for institutional spaces; warm desaturated browns and ochres for civilian spaces; cream, white, gold, polished black for elite Capitol spaces. Reference: Children of Men, Blade Runner 2049, Severance. Shallow depth of field where appropriate. 4:3 aspect ratio. Highly detailed, realistic skin and fabric texture. No text, no captions, no logos, no watermarks.
```

---

## 4. Character Reference Sheets — paste any that appear in the paragraph

### MIKA (protagonist, age 15 in Act I)

```
MIKA (age 15): slim build, olive-tan skin, dark brown hair worn short, sharp brown eyes with a slight downturn giving him a permanent half-tired, half-watchful look, small scar on his left jaw, wearing scrappy civilian clothes with a slightly too-big jacket. Looks scared but trying to seem unbothered.
```

### THE RECRUITING EQUES (the silent driver — appears in t1.1)

```
RECRUITING EQUES: man in his thirties, pale skin, close-cropped dark hair, neutral hard face that "doesn't seem to need talking." Wearing a black field uniform with silver shoulder insignia and a small black earpiece. Carries a procedural, watchful presence — not cruel, not kind.
```

### THE CLERK (appears briefly in t1.1)

```
CLERK: a tired Eques administrative worker, late 40s, wearing a less-formal version of the Eques black uniform. Holds a tablet. Has the bored efficiency of a DMV worker.
```

---

## 5. The generation order (work top-down)

Each scene is one batch. Don't skip around — visual consistency benefits from doing a scene's paragraphs back-to-back.

**Session 1 — t1.1 (10 images, complete prompts in Section 6 below)**
Then: t1.2, t1.3a, t1.3a_truth, t1.3a_lie, t1.3a_silent, t1.3b, t1.3b_close, t1.3b_safe, t1.3c, t1.3c_thank, t1.3c_brush, t1.4, t1.4_trust, t1.4_guarded, t1.4_mock, t1.5, t1.5_refuse, t1.5_report, t1.6, t1.7.

For Acts II–V, the user will request the prompts in batches as we go.

---

## 6. PROMPTS — Scene `t1.1` (the silent drive into the Capitol)

### `t1.1_p01_silent_drive.webp`

**Paragraph:** *"The Eques didn't talk on the drive."*

```
SHOT: Cinematic medium two-shot from the back seat of a moving vehicle, looking between the front seats. Cool blue night-driving light.

CHARACTERS:
- MIKA (age 15, see ref sheet) — sitting in the front passenger seat, hood down, looking down at his hands in his lap. Slightly slumped.
- RECRUITING EQUES — driving, eyes on the road, profile to camera. Hard face. Black uniform with silver shoulder insignia.

SETTING: Interior of an electric SUV at night. Dashboard glow. Through the windshield: dark highway, distant Capitol lights. Silence is palpable.

MOOD: Two strangers who are not going to speak to each other.

Generate in 4:3 horizontal aspect ratio. Photoreal cinematic film still. No text overlays, no logos, no watermarks.
```

---

### `t1.1_p02_wall_checkpoint.webp`

**Paragraph:** *"He wasn't unkind about it. He just had a face that didn't seem to need talking. The transport was an electric SUV, almost silent on the road, and you could hear the camera at the wall checkpoint clicking through its routine — flash, beep, plate logged, two faces cross-referenced, gate up — without anyone in the car saying a word. We took the elevated highway into the Capitol, past the second checkpoint, past the wall I'd only ever seen from the outside. The city changed under the wheels."*

```
SHOT: Cinematic wide exterior shot, low angle. The SUV approaches a massive concrete wall checkpoint at night.

CHARACTERS: None visible in detail — the SUV is in the middle distance.

SETTING: A modern dystopian wall checkpoint. Concrete pylons. Two large overhead camera arrays, each with a flashing white strobe doing a plate-reading routine. Biometric facial-recognition sensors pointed at the windshield. A steel boom gate is raised. Beyond the gate: the elevated highway sweeps into the brightly-lit Capitol skyline. Behind/around: the dark outer Quadrants.

MOOD: A border that should not exist, casually crossed.

Generate in 4:3 horizontal aspect ratio. Photoreal cinematic film still. No text overlays, no logos, no watermarks.
```

---

### `t1.1_p03_surveillance_poles.webp`

**Paragraph:** *"The streets I knew were narrow and warm and smelled like frying oil. The streets we drove now were wide and clean and had no smell at all. Every intersection had a surveillance pole. Every pole had a camera, and a microphone, and the small white pyramid I'd read once on a forum — before the forum was taken down — was the AI module that listened for the wrong words."*

```
SHOT: Cinematic wide POV-style shot from inside the SUV, looking out through the windshield at an empty wide Capitol boulevard at night.

CHARACTERS: None visible.

SETTING: A wide pristine boulevard inside the Capitol. Tall slim surveillance poles line both sides of the street at every intersection. Each pole bristles with: a small dome camera, a directional microphone, and at the top — a small white triangular/pyramidal AI module with a faint blue indicator light. Wet pavement reflects the cold sodium-vapor + white LED street lighting. No pedestrians, no other cars. The architecture in the background is glass-and-steel, brutalist mixed with corporate.

MOOD: A street designed to listen.

Generate in 4:3 horizontal aspect ratio. Photoreal cinematic film still. No text overlays, no logos, no watermarks.
```

---

### `t1.1_p04_silent_eques_driver.webp`

**Paragraph:** *"I kept thinking he would say something. \"You'll get used to it.\" Or \"Don't worry.\" Or \"Your friend is fine.\" He didn't. He didn't even glance at me. I suppose if you do this for a living you stop looking at the cargo."*

```
SHOT: Cinematic tight medium close-up of the RECRUITING EQUES driving. Camera angle: from the passenger side, his profile to camera. Subject's eyes are fixed straight ahead.

CHARACTERS:
- RECRUITING EQUES (see ref sheet) — driving, profile to camera, expression neutral and unreadable. He is not looking at MIKA.
- MIKA (age 15, see ref sheet) — out of focus in the foreground, barely-visible blur of his shoulder and the side of his face. The viewer feels his absence more than his presence.

SETTING: Interior of the SUV, dashboard glow on the Eques's face. Through the side window in the background: a Capitol building going past.

MOOD: The driver is not going to acknowledge the passenger. The passenger is cargo.

Generate in 4:3 horizontal aspect ratio. Photoreal cinematic film still. No text overlays, no logos, no watermarks.
```

---

### `t1.1_p05_thebes_facility.webp`

**Paragraph:** *"The Thebes facility was on the eastern slope of the Capitol — three low concrete buildings that had been a public high school once, before the Council had needed the campus more than the kids had needed an education. You could still see the painted line for a basketball court in the courtyard, faded almost to nothing under the new security striping. Four other recruits were standing around with duffel bags. None of them looked like volunteers."*

```
SHOT: Cinematic wide exterior shot, low angle, dusk turning to night.

CHARACTERS: Four teenage recruits (ages 14-16, varied ethnicities, in scrappy civilian clothes, each with a duffel bag) standing apart from each other in the courtyard. They are not interacting. Their body language reads as resigned.

SETTING: A converted high school campus on a hillside. Three low brutalist concrete buildings around a paved central courtyard. The courtyard has FADED painted lines from a former basketball court still faintly visible underneath much fresher security-perimeter striping (yellow/black hazard lines, no-trespass markings). One overhead surveillance pole. An SUV is parked at the edge. Distant Capitol skyline behind the buildings.

MOOD: A school transformed into a processing facility. Place where institutions stack on top of each other.

Generate in 4:3 horizontal aspect ratio. Photoreal cinematic film still. No text overlays, no logos, no watermarks.
```

---

### `t1.1_p06_badge_scan.webp`

**Paragraph:** *"The Eques handed me to a clerk who scanned my thumb into a tablet, printed a temporary badge on a lanyard, and handed me a uniform that was a size too big. He said, \"Lights at twenty-two-hundred. Up at five. Don't try to leave the perimeter.\" Then he looked past me to the next one."*

```
SHOT: Cinematic tight medium shot, slightly over MIKA's shoulder. We can see MIKA's hand being held to a tablet for biometric scan.

CHARACTERS:
- MIKA (age 15) — partial view, his thumb pressed against a glass tablet plate. We see his profile.
- CLERK (see ref sheet) — middle-aged Eques administrative worker, sitting at a small intake desk, looking at the tablet screen, NOT at Mika. A folded grey-fabric uniform and a freshly-printed plastic badge on a lanyard sit beside him on the desk.

SETTING: A small fluorescent-lit intake room inside the Thebes facility. Concrete walls. A line of more recruits visible blurry in the background, waiting. A wall-mounted camera in the corner.

MOOD: Bureaucratic processing. Personal identity being captured by a database.

Generate in 4:3 horizontal aspect ratio. Photoreal cinematic film still. No text overlays, no logos, no watermarks.
```

---

### `t1.1_p07_bunk_window.webp`

**Paragraph:** *"I sat on my bunk. I held the uniform in my lap. I watched the small red light above the bunk-room door — a camera, the same model as in the cars I'd never been able to afford — and I tried not to think about Quinn."*

```
SHOT: Cinematic medium-wide shot of MIKA sitting on a bunk, framed within a sparse bunkroom. Camera angle: roughly eye-level, slightly tilted up toward the corner where the camera is.

CHARACTERS:
- MIKA (age 15, see ref sheet) — sitting on the edge of a metal-frame bunk, holding the folded grey uniform in his lap, looking up at the corner of the room. His face is exhausted and watchful.

SETTING: A spartan bunkroom in the Thebes facility. Concrete walls. Three other empty bunks visible. A single metal door at the far wall. Above the door: a small dome-style surveillance camera with a single red indicator LED — prominent in the upper part of the frame.

MOOD: Being watched while trying not to think.

Generate in 4:3 horizontal aspect ratio. Photoreal cinematic film still. No text overlays, no logos, no watermarks.
```

---

### `t1.1_p08_distant_quadrant_lights.webp`

**Paragraph:** *"There was a window. Outside the window, very far away, the lights of my old neighborhood were just visible past the wall."*

```
SHOT: Cinematic close-up from inside the bunkroom, looking out a small rectangular window at night. Slight rack focus — window pane is sharp, the distant lights are softly bokeh'd.

CHARACTERS:
- MIKA (age 15) — only the silhouette of his head and shoulder visible in the foreground left, out of focus, looking out the window. He's a shape, not a face.

SETTING: A small bunkroom window. Through it: the great concrete wall of the Capitol cuts horizontally across the middle of the frame at distance. Beyond the wall, far away in the dark: the scattered warm orange/yellow lights of a working-class Quadrant — the texture of where MIKA grew up. Above: a black sky with no stars.

MOOD: Home, visible but unreachable.

Generate in 4:3 horizontal aspect ratio. Photoreal cinematic film still. No text overlays, no logos, no watermarks.
```

---

### `t1.1_p09_uniform_in_lap.webp`

**Paragraph:** *"I told myself I was here to fix it. I told myself I had a plan."*

```
SHOT: Cinematic tight overhead detail shot. Looking straight down at MIKA's lap.

CHARACTERS: Only MIKA's hands and lap are visible.

SETTING: His hands rest on a folded, plain grey Thebes training uniform that is clearly too big for him. Beside the uniform on the bunk mattress: a temporary plastic badge on a green lanyard with the word "TRAINEE" stamped on it (no readable name). Faint shadow of a window grid across the fabric.

MOOD: A weight he hasn't put on yet but knows he will.

Generate in 4:3 horizontal aspect ratio. Photoreal cinematic film still. No text overlays, no logos, no watermarks.
```

---

### `t1.1_p10_no_plan.webp`

**Paragraph:** *"I was fifteen. I didn't have a plan."*

```
SHOT: Cinematic tight close-up of MIKA's face. Eye-level. Direct.

CHARACTERS:
- MIKA (age 15, see ref sheet) — looking slightly off-camera, expression caught between trying-to-be-calm and the slow private terror of a fifteen-year-old who has no idea what to do. His sharp brown eyes are very visible. He is not crying. He is calculating, and he is failing to calculate.

SETTING: Sparse, dim bunkroom. Out-of-focus background suggesting institutional concrete. A single warm-tinted light source behind him gives a slight rim-light to his hair.

MOOD: The smallest moment of the scene. He is a child, alone, in a system he does not understand.

Generate in 4:3 horizontal aspect ratio. Photoreal cinematic film still. No text overlays, no logos, no watermarks.
```

---

## 7. End-of-session checklist

When you finish a batch:

1. List `/site/images/` and confirm all 10 (or however many) new files are present with the right names.
2. Append a session summary to `/Users/zahavacaras/Documents/Claude Code/Book Library/Sapros/COWORK_PROGRESS.md`:
   ```
   --- Paragraph-images session, t1.1, YYYY-MM-DD HH:MM ---
   Generated: 10 of 10 images (t1.1_p01 through t1.1_p10)
   Failed / partial: (list any)
   Next batch: t1.2 paragraphs
   ```
3. Report back to the user: how many done, any failures, what scene's next.

---

## 8. Stopping rules

Stop and notify the user if:

- ChatGPT rate-limits you and won't generate.
- A paragraph's content triggers content-policy refusals on the third try.
- Character drift is so bad you can't tell which character is which across two adjacent paragraphs.
- You finish a full scene — pause for the user to check that the visual flow works on the live site before doing the next scene.

---

## 9. After t1.1

When you finish t1.1, request the next scene's prompts from the user (or from Claude). The user will provide them in batches of one scene at a time so visual judgment can be applied per scene.

---

*End of instructions. Begin with `t1.1_p01_silent_drive.webp`.*
