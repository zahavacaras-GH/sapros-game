# SAPROS — Product Specification v1

> *Sapros (Greek): rotten, decayed, putrid.*
> A mobile-first, text-and-image choose-your-own-adventure about a teenage prodigy who climbs a corrupt regime to dismantle it — and becomes worse than what he set out to destroy.

---

## 0. AT A GLANCE

| | |
|---|---|
| **Title** | Sapros |
| **Genre** | Political dystopian CYOA, grounded with dark humor |
| **Tone references** | *Ender's Game*, *The Hunger Games* (if Katniss became Snow), *Disco Elysium* |
| **Protagonist** | Mika, prodigy, ages 15→19 |
| **Play length** | 20–45 minutes per playthrough |
| **Replay value** | 20–30 distinct endings (15 templates × flag variations) |
| **Total nodes** | ~60–80 |
| **Total images** | ~70 (cinematic photoreal) |
| **Platform** | Mobile-first responsive website |
| **Hosting** | Netlify (free subdomain: TBD) |
| **Stack** | Plain HTML / CSS / JS, single JSON story file |
| **Save state** | Yes (localStorage) |
| **Audio** | Single ambient loop with mute toggle |

---

## 1. CORE PITCH

**Logline:** Mika, a 15-year-old prodigy, is forced to join the Knights — the only branch of society immune to mass surveillance — when he stumbles onto a friend's flagged file. He climbs the ranks intending to dismantle the Council from within. By 19, he's discovered that the price of climbing was becoming the thing he set out to destroy.

**Theme:** *Power doesn't corrupt people who seek it; it reveals what they already wanted.*

**Player experience:**
The player feels themselves slowly, plausibly, choice by choice, becoming a tyrant. Every choice is justified. Every betrayal makes sense in context. Looking back is what hurts.

---

## 2. WORLD BIBLE

### 2.1 Setting

A modern dystopian city-state. No magic. Realistic technology pushed slightly forward: ubiquitous surveillance cameras, AI pattern-detection on civilian data (search history, conversation transcripts, biometric tracking), predictive policing, and automated tribunals. The world *looks* recognizable — concrete, traffic, schools, apartments, neon advertising — but everyone is watched, all the time.

### 2.2 Capitol City & The Council

- **Capitol City** is the seat of power. Walled off from the surrounding Quadrants. Architecturally pristine, brutalist towers, manicured plazas. The wealthy live here.
- **The Council** is the ruling body — a small group of aristocrats who debate policy and pass judgment on flagged citizens. They sit at the apex of the **Hetairoi** rank.
- **Lady Vespera** is the dominant Council voice. Sixty years old, charming, sadistic. She enjoys the work.
- The Council has ruled for at least three generations. No one alive remembers the world before.

### 2.3 The Quadrants

Outside Capitol City, the population lives in four Quadrants. The exact specialization of the other three matters less than the structure: *the Knights Quadrant is the only one whose members are exempt from mass surveillance.* This is the lure that pulls Mika in.

- **Knights Quadrant** — Military / enforcement. Surveillance-exempt.
- **Three other Quadrants** (labor, scholarship, trade — flavor only; not fully developed in this game).

### 2.4 Mass Surveillance — The Injustice

Every citizen outside the Knights Quadrant has a **file**. The file contains:
- All digital activity (searches, messages, transactions).
- Movement history (cameras, biometric checkpoints).
- AI-generated "risk assessments" — predictive scores for the likelihood the citizen will dissent, steal, harm, etc.
- Recommendations: monitor, warn, detain, execute.

The Council reviews high-risk files and decides outcomes. The Knights execute.

**Quinn's file** — the inciting object of the game — is a hacker file: he tried to break into the file system itself. The Council can't fully prove it's him. They might just kill him to be safe.

### 2.5 The Knights' Privilege

Knights have no file. Their data isn't collected. This is rationalized as "protecting operational security" but functions as a class privilege. Knights can speak, search, meet, plot — freely. This is why Mika joining is *both* his salvation and the seed of his corruption: he benefits from the very privilege he wants to abolish.

---

## 3. CHARACTER BIBLE

Each character has a **reference sheet** — a locked physical description used in every image prompt featuring them. This is critical for cinematic-photoreal consistency across ~70 images.

### 3.1 MIKA — protagonist

- **Age range:** 15–19 (game spans four years)
- **Reference sheet:** Slim build, 5'9" by age 19. Olive-tan skin. Dark brown hair, kept short and increasingly neat as he climbs. Sharp brown eyes, slight downturn — gives him a permanent half-tired, half-watchful look. Small scar on his left jaw (childhood). Age 15: scrappy, civilian clothes, slightly too-big jacket. Age 16: Skiritai uniform — black field gear, silver shoulder insignia. Age 17: Achaean — same black, gold trim, side-arm. Age 18: Agema — formal grey coat, multiple medals. Age 19: Hetairoi — tailored white-and-gold, no visible weapons.
- **Personality:** Charming, resilient, manipulative. Quiet rage hidden well. Speaks softly, smiles often, almost never raises his voice.
- **Voice/prose tone:** First-person past tense for narrative beats; close-third for action. He rationalizes constantly. The player should feel him *lying to himself* in the prose.
- **Internal arc:** Idealism → calculation → ambition → power-hunger → (revelation, depending on ending).

### 3.2 BRAN (Brandon) — younger brother

- **Age:** 12 when Mika is 15, so 16 by the end.
- **Reference sheet:** Smaller, softer features than Mika. Same olive-tan skin, lighter brown hair (slightly curly). Wide brown eyes. Slightly chubby cheeks at 12, thinning by 16. Always wearing slightly oversized hand-me-downs early; later, civilian school uniform.
- **Personality:** Shy. Quietly funny once he warms up. Idolizes Mika at 12. Suspicious of him by 16.
- **Role:** The moral mirror. Mika sees Bran rarely — every encounter is a measuring stick.
- **Possible fates:** Alive and estranged / alive and proud / alive and afraid / dead by Mika's order / dead by accident / dead from Council action.

### 3.3 QUINN — best friend (the hacker)

- **Age:** 15 (same as Mika)
- **Reference sheet:** Lanky, pale, freckled. Reddish-brown hair, perpetually messy. Round wire-frame glasses. Sharp green eyes. Clothes always slightly off — band t-shirt under an unbuttoned uniform shirt. By 19 (if alive): shaved head, gaunt, prison-pale.
- **Personality:** Smart aleck. Quick-tongued. Hides fear with jokes.
- **Role:** The catalyst. His file is the reason Mika is in the Knights at all. The first secret Mika carries.
- **Possible fates:** Alive in hiding / alive imprisoned / alive on the run / executed quietly / executed by Mika's signed order / used as leverage and broken.

### 3.4 NIKO (Nikolai) — best friend (the hothead)

- **Age:** 16 when Mika is 15, so 20 by the end.
- **Reference sheet:** Tall, broad-shouldered, athletic build. Light brown skin, black hair worn longer (down to ears). Strong jaw. Brown eyes. Confident posture. Casual clothes early; by 19 (if alive), possibly Quadrant labor uniform.
- **Personality:** Funny, hot-tempered, loyal. The kind of friend who throws the first punch.
- **Role:** The friend who keeps trying to reach Mika. Possibly becomes a low-level dissident. Possibly becomes a target Mika has to handle.
- **Possible fates:** Alive and hostile / alive and oblivious / dead in a riot / dead by Mika's order / dead by Council action.

### 3.5 JASON — Achaean, mentor, true believer

- **Age:** ~32
- **Reference sheet:** Mid-thirties, lean, hard. Pale skin, weathered. Close-cropped blond-grey hair. Steel-grey eyes. Old burn scar across the right side of his neck. Black Achaean uniform with gold trim. Carries himself like someone who has never doubted.
- **Personality:** Calm, intelligent, kind in private. Believes the Council's brutality is a regrettable necessity for civilization. Would die for the system. Treats Mika like a son.
- **Role:** The primary corrupter. Teaches Mika to *rationalize*. Mika kills him at the climax of the Achaean act, believing it will free the city. It doesn't.
- **Fate (canonical):** Killed by Mika at age 17 — the act that opens the door to Agema. Variations: clean kill / messy kill / kill but Jason knew it was coming / kill that haunts Mika and triggers a madness path.

### 3.6 SOPHIE — aristocrat peer/rival

- **Age:** Same as Mika (15–19)
- **Reference sheet:** Tall, athletic, striking rather than pretty. Pale skin, long platinum-blonde hair (worn in a high braid in uniform, loose otherwise). Sharp blue eyes. Aristocratic features. Always perfectly groomed. Knights uniforms tailored to fit. By 19, if alive: harder face, scar through left eyebrow.
- **Personality:** Bold, loud, oblivious to her own privilege. Genuinely warm to Mika. Genuinely capable of betraying him.
- **Role:** The friend who becomes the rival. Their relationship peaks in the Achaean/Agema transition: the **"Only One Victor" quest** — a senior-knight competition where only one of the cohort is promoted to Agema. Sophie betrays Mika first. Mika has the choice to betray her back, work around her, or die honorably.
- **Possible fates:** Alive on the Council with him / alive and exiled / dead by Mika's hand / dead by Vespera / saved Mika at her own cost.

### 3.7 KADEN — peer, the cynic who breaks

- **Age:** Same as Mika
- **Reference sheet:** Average build, dark skin, black hair worn in tight twists. Hazel eyes that look perpetually tired. Smooth-faced, almost boyish — which makes the hollowness behind his eyes more disturbing as he breaks. By 18: visibly thinner, eyes sunken, occasional tremor in hands. By 19: gone — either institutionalized, on the streets, or dead by suicide.
- **Personality:** Saw through the system before Mika did. Decided "if you can't beat them, master them." Pushes Mika toward the dirty choices ("they're going to do it to someone, might as well be us deciding who"). Increasingly hollow.
- **Role:** The peer-corrupter. Inverts the "moral conscience friend" trope. The corruption breaks *him* before it breaks Mika. By the climax, he's a cautionary tale Mika refuses to learn from.
- **Possible fates:** Insane on the streets / institutionalized / suicide / killed by Mika as a "mercy" / survives in some hollow form.

### 3.8 LADY VESPERA — Hetairoi, primary antagonist

- **Age:** 60s
- **Reference sheet:** Tall, slender, regal. Pale skin. Silver-white hair worn elaborately (different style each scene — never the same twice). Dark brown eyes, almost black. Expensive minimalist clothing — always white, cream, or dove-grey, never bright colors. Heavy silver rings on multiple fingers. A small, permanent half-smile.
- **Personality:** Charming. Curious about people the way an entomologist is curious about insects. Enjoys the cruelty of her work. Will compliment a man as she signs his execution.
- **Role:** The face of the system. The mirror Mika refuses to look into. Eventually either killed by Mika (Coup endings), succeeded by Mika (Heir endings), or kills Mika herself (some death endings).

---

## 4. RANK LADDER & ACTS

The game is structured as **five acts**, one per rank. Each act has the same skeleton:

1. **Opening node** — promotion ceremony or arrival; tonal establishment; brief.
2. **Hub node** — 3 side activities; player picks how many AND which (1, 2, or all 3). Each combination sets distinct flags.
3. **Mid-act node(s)** — 1–2 forced story beats per act.
4. **Climactic decision node** — the moral pivot of the act; defines whether Mika is promoted, demoted, killed, or branched.
5. **Memory flashback** — woven in at peak emotional beats (varies per act).

### 4.1 ACT I — THEBES (age 15)

- **Role of Thebes:** Manual labor for the Knights. Recruits do menial work around the city — moving supplies, cleaning facilities, light enforcement. They observe more than they act.
- **Opening:** Mika arrives at the Thebes barracks fresh from the ultimatum. Quinn's file is open. He doesn't know if Quinn is alive.
- **Hub activities (pick 1, 2, or 3):**
  - **A. Visit home** — see Bran. Risky; Knights are encouraged not to maintain old ties. Sets `mika_visited_bran_15` flag.
  - **B. Try to find Quinn** — sneak into the records area. Risky; could blow his cover. Sets `mika_searched_quinn_15` flag.
  - **C. Train hard** — throw himself into Knights' work. Lowers `mika_outsider` flag, raises Corruption gauge slightly.
- **Forced beat:** Mika meets Kaden during training. Kaden is already a year ahead in cynicism.
- **Climactic decision:** Mika is offered his first compromise — sign off on a small surveillance report flagging a fellow recruit for "low morale." Choices: sign / refuse / report the order itself / forge a softer version.
- **Memory flashback:** Mid-act, Mika momentarily flashes back to seeing Quinn's file. The image of Quinn's face on the screen.
- **Outcomes:** Promotion to Skiritai (most paths). Or: demotion + early "Forgotten" ending (if Mika refuses too much). Or: death (if Mika reports the order).

### 4.2 ACT II — SKIRITAI (age 16)

- **Role of Skiritai:** Street police / field operatives. They patrol, detain, intimidate. First exposure to violence.
- **Opening:** Promotion ceremony. Mika gets his first Skiritai uniform. Sees Sophie for the first time — she's also being promoted.
- **Hub activities:**
  - **A. Build relationship with Sophie** — train together, share rations, talk. Sets `mika_sophie_close` flag.
  - **B. Investigate Quinn (deeper)** — now with Skiritai access; can pull partial records.
  - **C. Visit Niko in the old neighborhood** — Niko is angry; people are disappearing. Mika has to lie about what he does.
- **Forced beat:** Mika is assigned to a street patrol. They detain a man. The man resists. Mika has to physically restrain him. First time using force.
- **Climactic decision:** A patrol turns violent. Mika is ordered to fire on a fleeing dissenter. Choices: fire / fire to wound / refuse / shoot his commanding officer.
- **Memory flashback:** Mika at age 12, walking home with Bran. A simple, warm moment that hits him mid-shift on patrol.
- **Outcomes:** Promotion to Achaean (most paths). Or: death by execution if he shoots the CO. Or: death in the street if he refuses (CO finishes him). Or: madness path begins if he fires and the dissenter is later revealed to have been someone he knew.

### 4.3 ACT III — ACHAEAN (age 17) — JASON ARC

- **Role of Achaean:** Squad leader. Now Mika *gives* orders. Oversees Skiritai. Performs assassinations when needed.
- **Opening:** Mika is assigned to Jason's squad. They meet. Jason is kind, sharp, fatherly. Mika likes him immediately. (Player should feel the warmth — and the danger.)
- **Hub activities:**
  - **A. Long conversations with Jason** — about justice, the Council, the city. Jason explains his beliefs. (Sets `mika_understands_jason` — critical for some endings.)
  - **B. First assassination assignment** — a low-level dissident. Mika decides how to do it: clean kill / messy kill / fake the death / refuse and flee.
  - **C. Coordinate with Kaden** — Kaden is now Mika's peer Achaean. He pitches a plan: they should start positioning themselves to take out a Hetairoi together. Sets `kaden_conspiracy` flag.
- **Forced beat:** Quinn resurfaces. Either: alive in hiding (if Mika investigated in Act II) / dead and Mika sees the file closed / used as leverage (Council offers Quinn's life if Mika does X). Highly variable based on prior flags.
- **Climactic decision:** Mika discovers Jason is the obstacle to reform — Jason is the one who *blocks* dissidents from reaching the Council, ensuring no one ever questions Vespera. To "fix" the system, Jason has to die.
  - Choices: kill Jason (clean) / kill Jason (messy, leaves evidence) / try to convert Jason (he refuses; you must kill or be killed) / refuse to kill (you die) / let Sophie kill him (she takes credit and the promotion).
- **Memory flashback:** Mika at 15, the moment he saw Quinn's file. He realizes how far he's traveled — he is now signing files exactly like that one.
- **Outcomes:** Promotion to Agema (most kill paths). Death (refusal path). Multiple flag variations seed different Acts IV and V.

### 4.4 ACT IV — AGEMA (age 18) — SOPHIE ARC

- **Role of Agema:** Commanders. Take orders directly from Hetairoi. Execute citizens with bad files — meaning they personally carry out, or supervise, the killings the Council orders.
- **Opening:** Mika is now signing kill orders. The first one he signs in this act is for someone he's never met. The second is for someone he knew at school.
- **Hub activities:**
  - **A. Cultivate Lady Vespera** — she's noticed him. Take a private audience. (Sets `vespera_interest` — critical for Heir endings.)
  - **B. Talk Kaden down** — Kaden is breaking. Try to keep him sane / use him / abandon him.
  - **C. Final visit to the old neighborhood** — Niko is now openly hostile. Bran (now 15) doesn't recognize him at first. This is Mika's last chance to see them as themselves.
- **Forced beat:** The **"Only One Victor" quest.** All Agema candidates for the next Hetairoi seat are pitted against each other. The trial is morally horrific (specifics: TBD — likely a mass-execution exercise, or a betrayal puzzle, or a literal hunt). Sophie betrays Mika first — she seizes the advantage by sabotaging his entry.
- **Climactic decision:** Mika has the chance to expose her, kill her, work around her, or accept defeat.
  - Choices: betray Sophie back (she dies) / expose her publicly (she's exiled, you both lose the seat) / win without retaliating (rare path; requires high earlier flags) / accept defeat and die nobly / accept defeat and live diminished.
- **Memory flashback:** Mika at 16, the night he and Sophie became real friends. The image of her laughing.
- **Outcomes:** Promotion to Hetairoi (most retaliation paths). Death. Diminished-life endings (variants of "Forgotten" or "Becomes Kaden").

### 4.5 ACT V — HETAIROI (age 19) — VESPERA ARC

- **Role of Hetairoi:** The Council. Read files. Decide who lives and who dies. Mika now sits at the apex.
- **Opening:** Mika's investiture. He puts on the white-and-gold for the first time. He sees himself in a mirror. Vespera congratulates him. The reader should feel exhilaration *and* nausea.
- **Hub activities:**
  - **A. The Quinn file** — it's still on the system. Mika can finally close it (save Quinn) / sign it (kill Quinn) / leave it open (ambiguous, lets the system decide).
  - **B. Confront Vespera** — privately. She's been waiting for this conversation. She tells him what she sees in him.
  - **C. Reach out to Bran** — last chance. Bran is 16 now, suspicious, possibly already in trouble himself. Mika can warn him / try to bring him to safety / cut him off.
- **Forced beat:** A Council vote. Mika has a swing vote on a major policy — *expand surveillance to the Knights Quadrant* (i.e., end the privilege he himself benefited from).
- **Climactic decision (THE ENDING SWITCH):** Mika's final move. The choices here, combined with all accumulated flags, determine which of the 15 ending templates fires.
  - Move against Vespera (Coup paths) / accept Vespera's offer (Heir paths) / propose his own reform (Pyrrhic Reformer / Worse than Vespera) / publicly resist a single key vote (Death paths) / break entirely (Madness paths).
- **Memory flashback:** Mika at 15, the moment of the original ultimatum. He plays it back differently this time — he sees the Knight who caught him as a younger version of himself.

---

## 5. GAME MECHANICS

### 5.1 Flag System

All player choices either set, increment, or check **flags**. Flags are stored in `localStorage` so save state persists.

**Flag categories:**
- `relationship_*` — character bonds (e.g., `relationship_sophie`, integer 0–10)
- `survived_*` — boolean: who's still alive (e.g., `survived_quinn`, `survived_jason`)
- `act_*_choice_*` — record specific choices for ending variation text
- `corruption` — the visible meter, integer 0–100
- `madness` — hidden meter, integer 0–100; if it crosses 70 in Act IV or V, opens madness ending paths
- `sophie_betrayed_first` — boolean, drives Act IV branching

A full flag schema will be defined in the choice tree document.

### 5.2 Corruption Gauge (visible)

- **Scale:** 0–100
- **Display:** Thin horizontal bar at the top of the screen, always visible
- **Color:** Shifts smoothly: white (0–20) → pale gold (20–50) → deep gold (50–75) → red (75–100)
- **Increments:**
  - Trivial choice with a moral edge: +1 to +3
  - Notable choice (a small lie, a minor cruelty): +5 to +10
  - Major choice (sign a kill order, betray a friend): +10 to +20
  - Killing Jason: +20
  - Betraying Sophie first: +15
  - Vote to expand surveillance: +25
- **Decrements:** Rare. Visiting Bran honestly (-2). Refusing a kill order (-5). Sparing Kaden (-3). The gauge is *meant to climb*.
- **Animation:** When it ticks up after a choice, brief pulse + thin number animation. No sound (sound only on major thresholds).
- **Thresholds:** At 25, 50, 75 — the bar's color shift is accompanied by a single low chime + a brief flash. Reinforces the slide.

### 5.3 Hub Structure (3 activities, pick how many)

At each act's hub node:
- Player sees three activity options.
- They can pick **1, 2, or all 3**, in any order.
- After each chosen activity, they return to the hub — but the unselected activities remain available *until* they choose to **"Continue"** to the next story beat.
- **The number selected is itself meaningful:**
  - Picking 1 → Mika is focused / singleminded. Sets `act_N_focus` flag.
  - Picking 2 → balanced.
  - Picking 3 → spread thin. Mild Corruption increase (+3 — "you're getting good at compartmentalizing"). Sets `act_N_spread` flag.
- The unique combination of *which* activities (and *whether* the player skipped some) sets compound flags that affect later text and endings.

### 5.4 Memory Flashbacks

- Triggered automatically at preset emotional beats (one per act).
- The screen visually shifts: image goes desaturated / sepia, text font shifts to italic.
- No choices during a flashback. Pure prose + image. Player taps "Continue" to return to the present.
- These exist purely for tonal weight — they don't change game state.

### 5.5 Death = Ending

- When a choice leads to Mika's death, the screen transitions to that death's ending node.
- Each death ending shows: a final image, an epilogue paragraph (with flag-driven variations), the Corruption gauge (frozen at its final value), and a "Start Again" button.

### 5.6 "Start Again from Any Age" — Chapter Select

- After any ending, the "Start Again" button opens a small menu:
  - Begin from age 15 (Thebes — fresh start)
  - Begin from age 16 (Skiritai)
  - Begin from age 17 (Achaean)
  - Begin from age 18 (Agema)
  - Begin from age 19 (Hetairoi)
- Each entry point loads a **canonical default flag state** — the "expected path" to that rank. Player can re-experience the act with different choices.
- Flag defaults will be defined explicitly in the choice tree document.

---

## 6. CHOICE TREE ARCHITECTURE

### 6.1 Total Node Count Estimate

| Section | Nodes |
|---|---|
| Act I (Thebes) | 8–10 |
| Act II (Skiritai) | 10–12 |
| Act III (Achaean) | 12–14 |
| Act IV (Agema) | 12–14 |
| Act V (Hetairoi) | 10–12 |
| Memory flashbacks | 5 (one per act) |
| Endings | 15 templates (× flag-variation prose, but one image each) |
| **Total** | **~70 nodes** |

### 6.2 Sample Node JSON Schema

```json
{
  "id": "act3_jason_decision",
  "act": 3,
  "rank": "Achaean",
  "image": "act3_jason_decision.jpg",
  "text": "Jason poured the tea himself...",
  "memoryFlashback": false,
  "choices": [
    {
      "label": "\"You don't have to do this, Jason.\"",
      "next": "act3_jason_kill_clean",
      "effects": { "corruption": 20, "killed_jason": true, "kill_messy": false }
    },
    {
      "label": "Strike before he speaks.",
      "next": "act3_jason_kill_messy",
      "effects": { "corruption": 25, "killed_jason": true, "kill_messy": true, "madness": 10 }
    },
    {
      "label": "Lower the gun.",
      "next": "act3_mika_dies_jason",
      "effects": { "ending": "death_by_loyalty" }
    }
  ],
  "conditionalText": [
    { "if": { "survived_quinn": true }, "append": "He kept asking about my friend. The hacker. Quinn." }
  ]
}
```

### 6.3 Branching Philosophy

- **Branches converge.** The game is wide in *experience*, narrow in *structure*. Most acts have 2–3 entry points and 2–3 exit points; the middle is the variation.
- **Flags accumulate.** The same node can read very differently for two players because the conditional text reacts to their flag state.
- **No backtrack.** Once a node is left, it's left. (Memory flashbacks are not backtracks — they're cosmetic.)

### 6.4 Ending Trigger Logic

The Act V climactic decision has ~5 player choices. Each choice, combined with accumulated flags, maps to one of the 15 ending templates. Pseudo-code:

```
if final_choice == "move_against_vespera":
  if killed_jason and killed_sophie and corruption > 75: ending = WORSE_THAN_VESPERA (1)
  elif killed_jason and not killed_sophie and corruption > 60: ending = EQUAL_TO_VESPERA (2)
  elif madness > 70: ending = THE_PARANOID_KING (13)
  elif corruption < 50 and survived_quinn: ending = PYRRHIC_REFORMER (4)
  else: ending = COUP_DEATH (10) // killed by Vespera personally
elif final_choice == "accept_vespera":
  ending = VESPERA_HEIR (3) [variations on awareness flag]
...etc.
```

A full ending decision matrix will be in the choice tree document.

---

## 7. ENDINGS — FULL CATALOG

15 templates. Each renders with **flag-driven prose variations** (which friends survived, did Mika realize, etc.) to produce 20–30 distinct end-game experiences.

### Power Endings (Mika reaches Hetairoi)

1. **Worse than Vespera** — His new "reformed" Council is more brutal. Variations: does he know?
2. **Equal to Vespera** — Functionally identical system. Variations: does he know?
3. **Vespera's Heir** — She groomed him, he accepted. Variations: with reverence / with resignation.
4. **Pyrrhic Reformer** — Real changes made; new caste of "enemies of the state" created. Variations: who became the new enemies (Niko? Quinn?).
5. **Self-Aware Tyrant** — One of #1–4, but Mika *knows*. Final image: mirror.

### Death Endings

6. **Killed by Jason** — He hesitated; mentor finished him.
7. **Executed by the Council** — Defied an order. Made an example of.
8. **Killed by Sophie** — The Only One Victor quest goes the other way.
9. **Killed by Kaden's madness** — Broken friend turns on him.
10. **Killed by Vespera personally** — She got bored / sensed the threat.
11. **Suicide** — Mid-climb, he sees what he's becoming and stops.

### Madness Endings (alive but broken)

12. **Becomes Kaden** — Broke before reaching the top. Lives, can't function.
13. **The Paranoid King** — Reaches power; rules through terror of imagined enemies.
14. **The Ghost** — Reaches power; emotionally dead. Doesn't recognize Bran.
15. **The Believer** — Reaches power; lives in a delusion that he succeeded.

### Gravitational Pull

Most "comply enough to survive" paths funnel to **#1, #2, or #5**.
Most "resist openly" paths funnel to **#7** (Executed) or other death endings.
**#3, #4, #6, #8–15** are reachable by specific flag combinations — narrower paths.

### Flag-Driven Ending Variations (examples)

For ending #2 (Equal to Vespera), the final paragraph might read:
- If `survived_quinn`: *"Quinn was still alive somewhere out there. I never looked for him. I told myself it was kindness."*
- If `killed_quinn`: *"I had signed Quinn's file myself, three months in. I don't remember doing it."*
- If `survived_bran`: *"Bran sent a letter once a year. I never opened them."*
- If `killed_bran`: *"They tell me Bran's name was on a list I approved. I don't remember the list."*

Each ending will have 4–6 variation slots, producing 20–30 distinct ending experiences from 15 base templates.

---

## 8. VISUAL STYLE

### 8.1 Style Lock

**Cinematic photoreal.** Aesthetic references:
- *Children of Men* — natural light, handheld feel, grounded urban dystopia
- *Blade Runner 2049* — pristine architecture, color-blocked palettes (cool grey + warm gold)
- *The Hunger Games* — Capitol vs. Quadrant visual contrast
- *Severance* — corporate sterility for Council/Hetairoi spaces

### 8.2 Palette

- **Old neighborhood / Quadrants:** Warm desaturated browns, ochres, faded reds. Soft natural light.
- **Knights' barracks / streets:** Cool steel grey, navy, harsh fluorescent / sodium-vapor lighting.
- **Capitol / Hetairoi spaces:** Cream, white, gold, polished black. Sterile cinematic light.
- **Memory flashbacks:** Sepia-warm desaturation, slight bloom.

### 8.3 Character Reference Sheets

Each character's reference sheet (Section 3) is appended to every image prompt featuring them. Example:
> "...wide shot of a 17-year-old boy and a 32-year-old man in a quiet office at night. **MIKA: slim build, 5'9, olive-tan skin, short dark brown hair, sharp brown eyes with slight downturn, small scar on left jaw, wearing black Achaean uniform with gold trim and side-arm. JASON: mid-thirties, lean and hard, pale weathered skin, close-cropped blond-grey hair, steel-grey eyes, old burn scar across right side of neck, black Achaean uniform with gold trim.**"

### 8.4 Image Spec

- **Aspect ratio:** 4:3 (works on mobile portrait without cropping; gives composition room).
- **Resolution:** Generate at 1600×1200; downsample to 800×600 for web.
- **Format:** WebP for web (smaller file size), JPG fallback.
- **Total count:** ~70 images. ~14 per act (covering: opening, hub activities, mid-beats, climax, flashback) + 15 ending images + ~5 utility images (title screen, chapter select, etc.).

---

## 9. AUDIO

- **Single ambient loop** — low, moody, ~2 minutes seamless. Mood: tense, electronic, restrained. Reference: Trent Reznor's *The Social Network* score, or *Severance* opening theme.
- **Volume:** Low by default (-12 dB).
- **Mute toggle:** Persistent button in the top-right corner. State stored in localStorage.
- **Single chime:** When the Corruption gauge crosses 25, 50, or 75 — one low bell tone, ~1 sec. Skipped if muted.

---

## 10. TECH IMPLEMENTATION

### 10.1 File Structure

```
sapros/
├── index.html
├── style.css
├── engine.js          // node renderer, flag tracker, save state
├── story.json         // all nodes, choices, conditional text
├── endings.json       // ending templates + variation rules
├── characters.json    // character reference sheets (for image prompts; not loaded by site)
├── images/
│   ├── act1_opening.webp
│   ├── act1_hub.webp
│   ├── ... (~70 images)
│   └── ending_worse_than_vespera.webp
├── audio/
│   ├── ambient.mp3
│   └── chime.mp3
└── netlify.toml       // optional headers / redirects
```

### 10.2 Engine Responsibilities

- **`engine.js`** is small (~300 lines):
  - Load `story.json` on init
  - Render current node: image + text + choices
  - On choice click: apply effects (set flags, adjust gauges), navigate to next node
  - Handle conditional text: filter `node.conditionalText` by flag state, append matching strings
  - Handle endings: render ending image + epilogue with variation slots filled per flags
  - Persist state to `localStorage` after every choice
  - Handle "Start Again from any age": load canonical default flags + jump to act opening node

### 10.3 Rendering

- **Mobile-first responsive.** Single column. Image at top (fixed aspect ratio), text below, choices as full-width buttons. Corruption bar pinned to top.
- **Touch-friendly buttons** (min 48px tall).
- **No animations beyond:** fade transition between nodes (~200ms), Corruption bar pulse, threshold flash.
- **Typography:** A serif body font for prose (e.g., EB Garamond or Source Serif), a sans-serif UI font for buttons/UI (Inter or system default).

### 10.4 Save State

- **localStorage key:** `sapros_save`
- **Saved on every choice.** Contains: current node ID, all flag values, Corruption value, madness value.
- **Loaded on page open.** If save exists, resume; else start fresh.
- **Reset on ending → "Start Again":** flags reset to either zero (start from 15) or canonical defaults (start from chapter select).

### 10.5 Deployment

- **Netlify drag-and-drop:** Build folder → Netlify dashboard → site live in ~30 seconds.
- **Free subdomain:** TBD — `sapros.netlify.app`, or a customized name. Will reserve when first deployed.
- **Performance:** Total bundle (HTML + CSS + JS + JSON) under 50 KB. Images lazy-loaded as nodes are visited. First-paint under 1 second on mobile.

---

## 11. PRODUCTION ROADMAP

| Phase | Output | Owner |
|---|---|---|
| 1. Spec approval | This document, signed off | You + me |
| 2. Choice tree map | Full node-by-node map, all branches, all flags, ending decision matrix | Me |
| 3. Node prose | Final text for all ~70 nodes + ending variation slots | Me |
| 4. Image prompts | All ~70 prompts with locked character reference sheets | Me |
| 5. Image generation | All ~70 images generated in ChatGPT | You |
| 6. Website code | HTML/CSS/JS engine + story.json wired up | Me |
| 7. Integration | Drop your images into `/images/`, wire in audio | Me |
| 8. Playtest | Walk multiple paths, verify all endings reachable, debug | You + me |
| 9. Deploy | Netlify deployment, share link | Me |

---

## 12. OPEN QUESTIONS / DEFERRED DECISIONS

These I'm noting for later — not blocking the spec.

1. **Final subdomain name** — `sapros`, `sapros-game`, or something else? Decided at deploy time.
2. **Specific Only One Victor trial mechanic** — what's the exact horrific competition? Pitching three options when we get to Act IV node design.
3. **Niko's specific arc** — does he become a low-level dissident? When does he confront Mika? Pinning down at Act III/IV node design.
4. **Bran's age-16 voice** — when Mika sees him at the end, what does Bran sound like? Defining at Act IV/V text writing.
5. **Music track** — find/commission/generate? Decided at deploy time.
6. **Title screen design** — minimal text + ambient image, or stylized logo? Decided at Phase 6.

---

## 13. SIGN-OFF CHECKLIST

Before I move to Phase 2 (choice tree mapping), please review and confirm:

- [ ] Game structure (5 acts, hub-and-spoke per act, memory flashbacks)
- [ ] Cast (Mika, Bran, Quinn, Niko, Jason, Sophie, Kaden, Vespera)
- [ ] All character reference sheets feel right
- [ ] Mechanics (hidden flags + visible Corruption gauge, hub activity choice)
- [ ] 15 ending templates + variation approach
- [ ] Visual style (cinematic photoreal)
- [ ] Tech approach (plain HTML/JS, JSON story, Netlify)
- [ ] Production roadmap order

If anything feels off, change it now — Phase 2 is much more expensive to redo.

---

*End of v1 Spec — Sapros*
