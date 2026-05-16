# SAPROS — Roadmap to a Complete Game

> A working checklist of everything still needed to ship a polished, "complete" version of Sapros.
> Priorities:
> 🔴 **Critical** — game feels incomplete without it
> 🟡 **Polish** — significantly improves the experience
> 🟢 **Bonus** — nice to have, can ship without

---

## 1. Audio

### 🔴 Critical
- [ ] **Background music per scene** *(your #1)* — different ambient track per node, swapping smoothly via the engine's already-built `node.audio` field. Approach: identify ~6 mood tracks (suspense, ominous, drama, tender, scared, memory) and tag each node with the appropriate track. Cowork or AI music generators (Suno, AIVA) can produce them.
- [ ] **Memory-flashback music treatment** — distinct sepia-feeling track for the 5 memory nodes (t1.6, t2.6, t3.5, t4.5, t5.5), separate from regular scene music
- [ ] **Music on mobile** — iOS Safari and Android Chrome both block audio autoplay until the user makes a gesture. Right now the engine has a click-to-unlock fallback, but it's worth verifying it actually works on:
  - iPhone Safari (the strictest — sometimes the mute-button tap doesn't count as a "user gesture" if the audio element is paused for a different reason)
  - iPhone Chrome (uses WebKit, similar restrictions)
  - Android Chrome
  - Samsung Internet
  Also handle: the iOS silent-switch mode (audio plays through normal channel but muted by silent switch — confusing UX; consider showing a small "audio is muted by your device" hint if `audio.paused` after user interaction). Probably needs Web Audio API instead of bare `<audio>` for full reliability.

### 🟡 Polish
- [ ] **Audio narration of the story** *(your #2)* — voice actor or AI TTS (ElevenLabs, OpenAI Voice) reading the prose, synced to paragraphs. The engine's existing IntersectionObserver could trigger paragraph-specific audio clips.
- [ ] **SFX layer** — surveillance clicks, biometric beeps, distant drone hums, heartbeat at high corruption, low chime at corruption thresholds (25/50/75)
- [ ] **Different ending music** — each of the 15 endings gets its own short audio cue (madness endings dissonant, death endings somber, power endings hollow-victorious)
- [ ] **Volume controls** — currently it's just mute/unmute. Add a slider for music and (eventually) one for narration.

### 🟢 Bonus
- [ ] **Spatial audio** for headphones (subtle pan, reverb based on scene location)

---

## 2. Video

### 🟡 Polish
- [ ] **Intro video / opening cinematic** *(your #3)* — explaining the world, the Council, the Eques privilege, Mika at 15, his goal. Approach options:
  - (a) Skip-able 60–90 second motion-graphic montage built from the existing images + voiceover + ambient music
  - (b) A "Read Setup" text version that shows before New Game (cheaper, faster to ship)
  - (c) Hand-drawn animation (much higher cost; probably skip)
- [ ] **Outro reveal** at each ending — short animated stinger before the ending image (e.g., the corruption bar locking at its final value before the scene fades in)

### 🟢 Bonus
- [ ] **Per-act intro stings** — brief title cards announcing each rank ("ACT II: SKIRITAI, AGE 16") with a stylized number, audio sting, 2 seconds before the act starts

---

## 3. Visual / Images

### 🔴 Critical
- [ ] **Finish the Cowork image pipeline end-to-end** — *(your request)* the umbrella task that closes out all generated-image work. Has four parts:
  1. **9 remaining ending images** (worse_than_vespera, vesperas_heir, pyrrhic, mirror, jason, executed, sophie, kaden_kills, vespera) — Cowork is mid-batch on these.
  2. **Per-paragraph prompts for Acts I (remaining) through V** — currently only t1.1 and t1.2 prompts have been written and generated. I'll write the rest in scene-sized batches as you ask.
  3. **Cowork generates the paragraph images** for the remaining ~120 nodes. Each scene ≈ 4–10 images. Total ≈ 350–400 images. Done batch by batch.
  4. **Wire each batch into `story.json`** — every time a scene's images land, I add the `paragraphImages` array to that node, redeploy, and the scroll-cross-fade goes live for that scene.

  **Definition of done:** every node in `story.json` has either a `paragraphImages` array with one entry per paragraph, or (for very short nodes) a single matching main image. No node renders a placeholder. No image in `/site/images/` is unused or unreferenced.

- [ ] **Image-naming audit** — after Cowork finishes, do a single pass to:
  - Verify every filename in `story.json` actually exists in `/site/images/`
  - Verify there are no orphan files (generated but not used)
  - Verify there are no naming mismatches (e.g., `t2.3a_p1_...` vs `t2.3a_p01_...`)

### 🟡 Polish
- [ ] **Image performance** — currently each image is 1.5–2 MB. For mobile, optimize to ~400–600 KB without visible quality loss. A simple script using `cwebp -q 75` could batch-compress.
- [ ] **Smooth scene transitions** — currently a 200ms fade. Could add subtle Ken Burns motion (slow zoom or pan) during paragraph cross-fades for a more cinematic feel.
- [ ] **Title screen logo / typography polish** — right now "SAPROS" is set serif. Could commission or design a custom logo wordmark.

### 🟢 Bonus
- [ ] **Hand-rendered art for the 15 endings** — replace AI-generated endings with painted/illustrated versions for a more crafted final-moment feel

---

## 4. Gameplay

### 🔴 Critical
- [ ] **Decide what "winning" means** *(your #4 — important design call)*. **Current design tension:** the spec you signed off on said *"there is no escape and no betrayer route — every path leads through corruption."* All 15 endings involve loss or compromise. A genuine "win" contradicts this. Three options:

  - **(a)** Reframe `Pyrrhic Reformer` (ending #4) as the "good ending." Real reform happens; the cost was real, but he ended the surveillance for at least some Quadrants. It already exists; just present it as the "best outcome" in the endings gallery.
  - **(b)** Add a **hidden 16th ending** ("The Quiet Door") — unlockable only by a very specific flag combination (e.g., low corruption AND survived Quinn AND survived Bran AND high self-awareness AND chose Win-Without-Retaliating in Act IV AND refused Vespera in Act V). Rare path, single playthrough probability ~1%. Mika walks away from the Council and disappears, taking Bran. The first time a player reaches this ending, the system congratulates them on finding the "true ending."
  - **(c)** Reframe winning as **meta-achievement** — "winning" = reaching all 15 endings across multiple playthroughs. Use achievements/badges (see Endings Gallery below).

  **My recommendation: (b) + (c).** Single playthrough goal: find the hidden true ending. Long-term goal: collect all endings. Discuss.

### 🟡 Polish
- [ ] **Corruption gauge info button** — the bar at the top of the screen is unexplained right now. A new player has no idea what the white-to-gold-to-red number represents. Add a small "i" icon next to the gauge. Tapping it opens a popup explaining: *"This is Mika's Corruption — a measure of how much of the system he's let into himself. It rises as he compromises, and the color shifts as it climbs. At 75+ the world feels different to him. It's the receipt for every choice you've made."* Optional: also explain the threshold flash effect so players know what happened when the screen pulsed.
- [ ] **Endings gallery** — after seeing any ending, a small icon for it lights up in a 15-slot grid accessible from the chapter select screen. Replay incentive without spoilers.
- [ ] **Achievement system** — small visual badges for milestones (saved Quinn, killed Jason cleanly vs messily, refused Vespera, reached all 15 endings)
- [ ] **Stats screen at end of playthrough** — shows final Corruption, Madness, who lived, who died, key decisions taken. Visible only AFTER the ending screen so it doesn't break immersion.
- [ ] **Save slots** — currently one auto-save. Add 3 manual slots for players who want to branch off a specific decision.

### 🟢 Bonus
- [ ] **Choice-history breadcrumb** so players can see the decision tree they walked

---

## 5. Mobile / Responsive

### 🔴 Critical
- [ ] **Mobile portrait works well** *(your #5)* — currently does, but needs a real-device QA pass on iPhone (Safari + Chrome) and Android (Chrome). Specifically test: sticky image during scroll, glossary popups, mute button reachability, choice buttons big enough for thumbs.
- [ ] **Mobile landscape works well** *(your #5)* — currently triggers the desktop two-column layout at 1024px landscape, but a phone in landscape is ~800px wide and gets stuck in tablet mode. Decide intended behavior:
  - (a) Phone landscape → keep mobile single-column with smaller image
  - (b) Phone landscape → two-column desktop-style with smaller image and text
- [ ] **iOS safe-area-inset** — handle the notch on iPhone X+ so content isn't hidden behind it (small CSS additions: `padding-top: env(safe-area-inset-top)` etc.)
- [ ] **Tap targets** — verify all buttons are at least 48×48 px for thumb access

### 🟡 Polish
- [ ] **iPad / large tablet layout** — sits between phone and desktop; might need its own breakpoint
- [ ] **Performance on low-end Android** — images are large; could swap in lower-res variants based on screen size
- [ ] **Reduced motion support** — CSS `@media (prefers-reduced-motion: reduce)` to disable cross-fades for users who need them off

---

## 6. Hosting / Deployment

### 🔴 Critical
- [ ] **Move from Netlify to Vercel** *(your #6)* — currently live at `sapros.netlify.app`. Vercel deploy steps:
  1. Sign up at vercel.com with GitHub
  2. Import the `zahavacaras-GH/sapros-game` repo
  3. Set the build directory to `site/`
  4. Deploy — Vercel auto-detects static site
  5. Migrate the `sapros` subdomain (or pick a new one — `sapros.vercel.app`)
- [ ] **GitHub → Vercel CI/CD** *(your #7)* — automatic once you link the repo to Vercel. Every `git push` to `main` triggers a redeploy. No more manual `netlify deploy --prod`.

### 🟡 Polish
- [ ] **Custom domain** (e.g., `sapros.game` or `playsapros.com`) — buy at Namecheap/Cloudflare for ~$10–15/yr, point at Vercel
- [ ] **Preview deploys for branches** — Vercel automatically previews any non-main branch, useful for testing big changes before merging
- [ ] **Production / staging split** — keep `main` as production, use `dev` branch for in-progress changes
- [ ] **Vercel Analytics** — privacy-respecting visit stats included in free tier

---

## 7. Social / Sharing

### 🔴 Critical
- [ ] **WhatsApp share button at end of game** *(your #8)* — after the ending fires:
  - Generates a no-spoiler teaser card (image + tagline like *"I climbed a corrupt regime. This is what I became."* — no mention of *which* ending)
  - Tap → opens WhatsApp with the card preview + a link to the game
  - Implementation: use the Web Share API (works native on mobile) with a generated OG-image URL
- [ ] **Open Graph meta tags** — so any link shared anywhere (WhatsApp, iMessage, Twitter, Discord) shows a rich preview card with the game's title image and tagline

### 🟡 Polish
- [ ] **Per-ending OG cards** — a unique visual teaser per ending category (still no spoilers — different aesthetic per power/death/madness path)
- [ ] **Native share sheet (iOS/Android)** — exposes share to *any* app, not just WhatsApp
- [ ] **Copy-link fallback** — when Web Share API isn't available (desktop browsers), show a "Copy link" button

### 🟢 Bonus
- [ ] **"Share your Corruption number"** — players brag about their final Corruption value as a humblebrag stat ("I got to 92")
- [ ] **Embed-friendly mode** — `?embed=1` query param strips the chrome so the game can embed in iframes (Tumblr, blogs, etc.)

---

## 8. Quality / UX

### 🔴 Critical
- [ ] **End-to-end playtest** — walk every act, hit every climactic choice, verify no broken nodes. The QA log makes this easy.
- [ ] **Cross-browser test** — Chrome / Safari / Firefox / Edge on desktop; Safari iOS + Chrome Android on mobile
- [ ] **Proofread all prose** — currently ~24,000 words. Read for typos, voice consistency, modern-dystopia tone

### 🟡 Polish
- [ ] **Accessibility audit** — screen reader compatibility (label everything), keyboard navigation (Tab through choices, Enter to select), high-contrast mode toggle, reduce-motion toggle
- [ ] **Loading screen with progress bar** — currently shows a blank screen while story.json + endings.json + glossary.json download. Could show a branded loading bar.
- [ ] **Settings panel** — combines mute, music volume, narration on/off, text size, reduced motion, etc.
- [ ] **"Skip to choices" affordance** for re-readers — small button that scrolls past the text to the buttons (useful for replays)

### 🟢 Bonus
- [ ] **Pause / resume** mid-scene without using the menu
- [ ] **Hotkey for "back to title"** from any screen
- [ ] **Easter eggs** — e.g., the Konami code at the title screen does something playful

---

## 9. Marketing / Launch

### 🟡 Polish
- [ ] **About page** — single page explaining the project, the team (you), the inspiration (Ender's Game / Hunger Games + Disco Elysium tone), why dystopian CYOA
- [ ] **Credits page** — for now, just acknowledge AI tools used (story written collaboratively with Claude, images generated by ChatGPT/DALL-E, music from [source])
- [ ] **Press kit** — for any future reviewer: 6 high-res screenshots, 200-word description, 50-word logline, dev contact
- [ ] **Launch posts** — when ready, post to r/narrativegames, r/CYOA, r/gamedev, Hacker News Show HN, IndieDB. Itch.io listing.

### 🟢 Bonus
- [ ] **Demo / gameplay trailer** — 60-second video showing the scroll-cross-fade, a choice, an ending hint (no actual ending content)
- [ ] **Twitter/X or Bluesky account** for dev updates

---

## 10. Legal / Compliance

### 🔴 Critical
- [ ] **Privacy policy** — required even for static sites using localStorage. Generic template: explain you store save state in the user's browser (not on a server), don't share data, no third-party analytics (or list any you add)
- [ ] **Content warnings on title screen** — Sapros depicts: state violence, mass surveillance, child soldiers (Mika at 15 is conscripted), graphic decisions about executing civilians, suicide as an ending option. A 1–2 sentence content warning before New Game is responsible and standard for serious narrative games.

### 🟡 Polish
- [ ] **Cookie / localStorage banner** for EU visitors — even though localStorage isn't technically a cookie, GDPR is interpreted broadly. A small banner explaining "we save your progress to your browser, nothing leaves your device" satisfies most interpretations.
- [ ] **Terms of service** — a basic ToS (no commercial reuse, no scraping, etc.)

---

## 11. Technical debt / Performance

### 🟡 Polish
- [ ] **Image optimization pass** — batch re-encode all images at quality 75 WebP; should cut total folder size from ~210 MB to ~60 MB without visible quality loss
- [ ] **Lazy-load images** — only fetch the image for the current paragraph and the next 2–3; saves bandwidth on mobile
- [ ] **Lighthouse audit** — run Google Lighthouse for performance, accessibility, SEO, best practices. Fix anything below 90/100.
- [ ] **Bundle size** — currently engine.js is 57 KB. Could minify to ~30 KB. Probably not worth optimizing yet but worth a single pre-launch pass.
- [ ] **Service worker for offline mode** — cache the game so it works without an internet connection after first visit

### 🟢 Bonus
- [ ] **Static site generator** — currently hand-edits to story.json. Could build a small editor UI to make adding scenes/paragraph images easier in the future.

---

## 12. Story-level cleanup

### 🔴 Critical
- [ ] **End-of-act memory flashback prompts** — currently 5 memory flashbacks exist (t1.6, t2.6, t3.5, t4.5, t5.5). Their images are done but might need separate paragraph-image prompts since the visual style is meant to be sepia/old-photo

### 🟡 Polish
- [ ] **Continuity check** — does the prose match the flag state in every conditional? E.g., if Quinn is dead, does every later mention of him reflect that? If Sophie is killed in Act IV, does Act V text correctly not reference her as alive?
- [ ] **Voice consistency pass** — re-read prose with the voice progression in mind (age 15 scared → age 19 finished). Patch any tonal slips.

---

## Suggested order of operations

If you want to ship in a reasonable timeframe, here's the order I'd tackle this:

### Phase 1 — Finish content (Cowork + me)
1. Wait for Cowork to finish 9 ending images
2. Generate paragraph images Acts I → V (batched scene by scene)
3. End-of-act memory flashback images
4. Image-naming audit + final wire-up of every `paragraphImages` array

### Phase 2 — Mobile + hosting
5. Mobile portrait/landscape audit and fixes (your #5)
6. Verify and fix music on mobile (iOS Safari especially)
7. Move to Vercel (your #6 + #7)
8. Custom domain if you want one

### Phase 3 — Audio + small UX
9. Pick 6 mood tracks (suspense / ominous / drama / tender / scared / memory)
10. Tag every node in `story.json` with the right mood (`node.audio`)
11. Add the Corruption gauge info button + popup
12. Optional: audio narration (your #2)

### Phase 4 — Winning + sharing
10. Decide the "winning" question (your #4) — and if going with hidden ending, write it
11. Endings gallery + meta-achievement
12. WhatsApp share button + OG cards (your #8)

### Phase 5 — Polish + launch
13. Intro video (your #3) — or text intro as a cheaper alternative
14. Content warnings + privacy policy
15. Cross-browser QA pass
16. Image optimization
17. Launch

---

*This file is in the project root next to SPEC.md, CHARACTERS.md, etc.
When you complete an item, just delete the `- [ ]` line or mark it `- [x]`.*
