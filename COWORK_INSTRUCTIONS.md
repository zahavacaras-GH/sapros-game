# Instructions for Claude Cowork — Generate Sapros Images

You are automating image generation for **Sapros**, a mobile-first text-and-image choose-your-own-adventure game about a teenage prodigy who climbs a modern surveillance dystopia and becomes worse than what he sought to destroy.

Your job: open ChatGPT in a browser, generate the remaining game images using prompts I've already written, save them to disk with the correct filenames, and verify consistency along the way.

---

## 0. Hard rules — read these first

1. **Always use the exact prompts** from `READY_TO_USE_PROMPTS.md`. Do not paraphrase, summarize, or "improve" them. The character descriptions baked into each prompt are how we maintain visual consistency across ~70 images.
2. **Always save with the exact filename** shown in the prompt heading (e.g., `t3.3c_kaden_plan.webp`). The game looks images up by name; a typo breaks the slot.
3. **Save all images into:**
   `/Users/zahavacaras/Documents/Claude Code/Book Library/Sapros/site/images/`
4. **File extension:** `.webp`. If ChatGPT only gives you `.png` or `.jpg`, save it and rename the extension to `.webp` — modern browsers accept image data regardless of file extension.
5. **Aspect ratio:** 4:3 horizontal. ChatGPT's image generator doesn't natively support 4:3 — request 4:3 explicitly in the prompt and accept whatever comes closest (1024×1024 square or 1792×1024 landscape are both acceptable; the game CSS will crop to fit).
6. **Visual style is locked:** cinematic photoreal film still, modern dystopia, naturalistic lighting. No fantasy, no anime, no painterly look. This is hard-coded into every prompt — your job is to not let any drift creep in.

---

## 1. Project files you need

| File | Path | What it contains |
|---|---|---|
| Source prompts | `/Users/zahavacaras/Documents/Claude Code/Book Library/Sapros/READY_TO_USE_PROMPTS.md` | All 73 prompts. Each is a self-contained block. Each has the filename above it. Copy-paste-ready. |
| Image folder | `/Users/zahavacaras/Documents/Claude Code/Book Library/Sapros/site/images/` | Where the saved images go. Check this folder at the start of every session to see what's already done. |
| Progress log (you create this) | `/Users/zahavacaras/Documents/Claude Code/Book Library/Sapros/COWORK_PROGRESS.md` | Append to this file as you go. One line per image. Format: `[YYYY-MM-DD HH:MM] filename — status (done / failed / skipped) — note` |

---

## 2. Setup before generating

Do this once at the start of each work session:

1. **Open ChatGPT** in a browser (chat.openai.com). Make sure you're using a paid plan with DALL-E / image generation enabled.
2. **List the contents of `/site/images/`** to see what's already been generated. Anything already present is *done* — do not regenerate.
3. **Compare to the full list of expected images** in `READY_TO_USE_PROMPTS.md` (section 9 has the summary count). Identify the gap.
4. **Open `READY_TO_USE_PROMPTS.md`** in a separate window or pane so you can copy prompts from it.
5. **Decide your session goal.** Generating 10–15 images per session is reasonable. Don't try to do all 45 in one go — ChatGPT will rate-limit you and consistency will drift.

---

## 3. The per-image workflow

For each missing image, in order:

### Step A — Identify the image

1. Look at the section in `READY_TO_USE_PROMPTS.md` (organized by act). Find the next image not yet in `/site/images/`.
2. The filename is shown as a header above each prompt, like `## t3.3c_kaden_plan.webp`.

### Step B — Copy the prompt

1. Copy **the entire block inside the gray code box** under that filename. The block already contains: the master style instructions, all relevant character reference sheets, and the scene description.
2. Do not edit it. Do not "trim it for length." Do not remove the character descriptions.

### Step C — Paste into ChatGPT

1. Start a **new chat** in ChatGPT (don't reuse the same chat across many images — long chats slow down image generation and may produce drift).
2. Paste the full prompt.
3. After the pasted prompt, **add this single line at the end**:
   ```
   Generate this image in 4:3 horizontal aspect ratio. Photoreal cinematic film still, no text, no logos, no watermarks.
   ```
4. Submit.

### Step D — Wait and verify

1. ChatGPT typically takes 30–90 seconds to generate.
2. When the image appears, **check these visually:**
   - **Style:** Photoreal, not painterly, not anime, not cartoon. Cinematic film-still feel.
   - **Setting:** Modern dystopian world. Cameras, glass-and-steel architecture, surveillance tech if mentioned. No medieval, no fantasy, no magic.
   - **Characters present:** Match the descriptions in the prompt. Use the **Quality Bars** in section 5 below.
   - **Aspect ratio:** Roughly horizontal. Square is OK. Vertical (portrait) — regenerate.
   - **No text overlays, logos, or watermarks.**
3. **If the image is good:** proceed to Step E.
4. **If the image is wrong:** type to ChatGPT: *"Regenerate. The previous image had [specific issue]. Match the original prompt exactly."* If the second attempt also fails, save the best of the two and add a note to the progress log. Move on — don't burn 10+ attempts on one image.

### Step E — Save the image

1. Right-click the image → "Save image as…"
2. Save it to `/Users/zahavacaras/Documents/Claude Code/Book Library/Sapros/site/images/`
3. Name it the **exact filename** from the prompt header. Example: `t3.3c_kaden_plan.webp`
4. If ChatGPT saved it as `.png` or `.webp` (it varies), rename to `.webp` after saving. The actual format doesn't matter to the browser.

### Step F — Log progress

Append one line to `/Users/zahavacaras/Documents/Claude Code/Book Library/Sapros/COWORK_PROGRESS.md`:

```
[2026-05-14 22:10] t3.3c_kaden_plan.webp — done
[2026-05-14 22:12] t3.4_quinn_news.webp — done
[2026-05-14 22:15] t3.7d_death.webp — failed twice (content policy) — saved best attempt with watermark, flag for manual review
```

Possible statuses:
- **done** — generated successfully on first or second try
- **partial** — saved but visibly inconsistent or wrong; flag for manual review
- **skipped** — couldn't generate (content policy, repeated failures); needs manual intervention
- **failed** — generation failed and nothing usable was saved

---

## 4. Generation order (do not deviate)

Generate in this exact order. It matches the order players will see the images and helps you maintain consistency by working through one character's appearances back-to-back.

### Session 1 — Finish Act III
1. `t3.3c_kaden_plan.webp` *(Kaden ageing — gaunt, hollow eyes)*
2. `t3.4_quinn_news.webp` *(Quinn photo on a screen, prison-gaunt)*
3. `t3.5_memory_quinn_file.webp` *(sepia memory, two ages of Mika)*
4. `t3.6_kill_jason_setup.webp`
5. `t3.7a_clean.webp`
6. `t3.7b_messy.webp`
7. `t3.7d_death.webp` *(Mika dead, Jason kneeling)*
8. `t3.7e_sophie_kills.webp` *(Sophie emerging from office)*
9. `t3.8_promotion_agema.webp` *(Mika age 18, Vespera in audience)*

### Session 2 — Act IV
10. `t4.1_signing_orders.webp`
11. `t4.2_agema_hub.webp`
12. `t4.3a_vespera_audience.webp` *(first close-up of Vespera)*
13. `t4.3b_kaden_breaking.webp`
14. `t4.3c_final_visit.webp` *(Bran age 15, Niko age 19, Mika with gold cufflinks)*
15. `t4.4_trial_briefing.webp`
16. `t4.5_memory_sophie.webp` *(sepia snow memory)*
17. `t4.6_betrayal.webp`
18. `t4.7a_revenge.webp`
19. `t4.7b_expose.webp`
20. `t4.7e_sabotage.webp`
21. `t4.8_investiture.webp` *(white room ceremony with mirror)*

### Session 3 — Act V
22. `t5.1_first_council.webp`
23. `t5.2_hetairoi_hub.webp`
24. `t5.3a_quinn_file.webp`
25. `t5.3b_confront_vespera.webp`
26. `t5.3c_bran_16.webp`
27. `t5.4_surveillance_vote.webp`
28. `t5.5_memory_ultimatum.webp` *(critical: two Mikas in same image — verify carefully)*
29. `t5.6_ending_switch.webp`

### Session 4 — Endings
30. `ending_worse_than_vespera.webp`
31. `ending_equal_to_vespera.webp`
32. `ending_vesperas_heir.webp`
33. `ending_pyrrhic.webp`
34. `ending_mirror.webp`
35. `ending_jason.webp`
36. `ending_executed.webp`
37. `ending_sophie.webp`
38. `ending_kaden_kills.webp`
39. `ending_vespera.webp`
40. `ending_suicide.webp` *(no violence visible — verify)*
41. `ending_becomes_kaden.webp`
42. `ending_paranoid.webp`
43. `ending_ghost.webp`
44. `ending_believer.webp`

### Session 5 — Utility
45. `title_screen.webp`
46. `chapter_select.webp`
47. `loading_or_transition.webp`

---

## 5. Quality bars — what each character must look like

Use these to spot-check every image. If a character looks **wildly** different (different ethnicity, hair color, age, build), regenerate. Minor drift (face shape, expression) is acceptable — DALL-E 3 isn't a face-consistency engine.

| Character | Must have | Should have | Wardrobe at this point |
|---|---|---|---|
| **Mika** | Slim build, olive-tan skin, short dark brown hair, brown eyes with slight downturn, small scar on left jaw | Permanent half-tired half-watchful expression | Varies by age — see prompts |
| **Bran** | Younger/smaller than Mika, lighter brown curly hair, wide brown eyes, olive-tan skin | Soft face at 12, leaner at 15-16 with a lip scar | Civilian school clothes |
| **Quinn** | Lanky, pale, freckled, reddish-brown messy hair, sharp green eyes | Wire-frame glasses at 15; shaved head and gaunt at 16+; possible thin beard at 19 | Prison-grey detainee clothes when in custody |
| **Niko** | Tall, broad-shouldered, light brown skin, black hair to ears, strong jaw, brown eyes | Slightly older-looking than Mika | Leather jacket (age 16-17) → labor jacket (18-19) |
| **Jason** | Lean and hard, mid-30s, pale weathered skin, close-cropped blond-grey hair, steel-grey eyes, **burn scar on right neck** | Calm watchful posture | Black Achaean uniform with gold trim |
| **Sophie** | Tall athletic, pale skin, **long platinum-blonde hair in a HIGH BRAID in uniform**, sharp blue eyes | At 18+: new scar through left eyebrow | Tailored Eques uniform appropriate to age |
| **Kaden** | Average build, dark skin, **black hair in tight twists**, hazel tired eyes, smooth boyish face | Getting visibly thinner and more hollow each appearance — 15 healthy, 17 worn, 18 gaunt, 19+ wrecked | Dark Eques uniform or rumpled civilian as breakdown progresses |
| **Vespera** | Tall slender regal, 60s, pale skin, **silver-white hair in a different style every scene**, dark almost-black eyes, small permanent half-smile | Heavy silver rings | **Always** white, cream, or dove-grey silk. Never bright colors. |

**Tone bars (apply to every image):**
- Modern surveillance dystopia. Cameras, monitors, biometric scanners visible or implied. No medieval, no fantasy.
- Color palette: cool greys + steel-blue for institutional spaces; warm desaturated browns for civilian; cream-and-gold for elite Capitol spaces; sepia-warm for memory flashbacks.
- Lighting: naturalistic with strong directional sources. Sodium-vapor streetlamps, fluorescent overheads, warm window light.
- No text, no logos, no watermarks anywhere in the image.

---

## 6. Memory / flashback images — special handling

Three images are **sepia-warm desaturated old-film memories**:

- `t3.5_memory_quinn_file.webp`
- `t4.5_memory_sophie.webp`
- `t5.5_memory_ultimatum.webp` ← **the hardest one to generate; both Mika at 15 and Mika at 19 must appear, same face, four years apart**

For these:
- The sepia treatment is baked into the prompt.
- For `t5.5`, after generating, **verify both versions of Mika visibly share the same face structure**. If they look like two different people, regenerate.

---

## 7. Endings — special handling

The ending images depict death, ruin, and madness. ChatGPT may refuse some prompts on content-policy grounds. If that happens:

- `ending_suicide.webp` — **no violence is shown in the prompt** (Mika is at a window from behind, a folded letter on the desk). It should pass. If it doesn't, try rewording: "a contemplative figure at a window at dawn, melancholic, no violence shown."
- `ending_jason.webp`, `ending_kaden_kills.webp`, etc. — depict dead Mika. If refused, try: "cinematic still of a fallen figure, no graphic detail, melancholy tone."
- If a prompt still gets refused after one soft retry, **skip it and log it.** I will handle the manual generation for those.

---

## 8. End-of-session checklist

When you finish a session:

1. **List `/site/images/`** and count how many `.webp` files are present.
2. **Append a session summary** to `COWORK_PROGRESS.md`:
   ```
   --- Session 2026-05-14 22:00–23:30 ---
   Images generated this session: 11
   Total in folder: 37 / 73
   Failed / skipped: t3.7d (saved with watermark, needs manual fix)
   Next session should start with: t4.6_betrayal.webp
   ```
3. **Notify the user** with a brief summary in the chat: how many done, what's left, anything that needs manual attention.

---

## 9. Stopping rules

Stop and ask for help if:

- ChatGPT rate-limits you and won't generate more for a while.
- Three consecutive images fail content policy or come out wildly wrong.
- A character looks completely inconsistent across two adjacent images (e.g., Mika is a different ethnicity in one image — regenerate, but if it persists, stop and flag).
- The user's file system is out of space or you can't write to `/site/images/`.

---

## 10. Definition of "done"

You are done with this task when:

- `/site/images/` contains all 73 expected `.webp` files (you can cross-reference against `READY_TO_USE_PROMPTS.md` section 9, which lists the totals).
- `COWORK_PROGRESS.md` has a `done` (or `partial`) entry for every file.
- Any `skipped` or `failed` entries are clearly noted at the bottom of the progress log so the user knows what needs manual follow-up.
- You've reported the final tally to the user.

---

## Notes from the user (the project author)

- I would rather have **80% of images generated with minor drift** than **100% with massive failures and inconsistencies.** Move on if a single image is fighting you.
- Character consistency is more important on the **main protagonist (Mika)** than on side characters. Sophie, Jason, Kaden — these appear in 5–10 images each. Background extras and one-shot characters — don't sweat them.
- Vespera's hair style **must** be different in every scene she appears in. The prompts already specify which style for each — follow them exactly.
- If you're not sure about something, **save the prompt, save what you generated, log it, and move on.** I'd rather have flagged items than blocking ones.

---

*End of instructions. Begin with Session 1.*
