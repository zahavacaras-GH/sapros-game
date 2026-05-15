# SAPROS — Choice Tree v1

> Structural map of every node, every branch, every flag effect.
> Actual prose lives in `NODE_TEXT.md` (Phase 3). Image prompts live in `IMAGE_PROMPTS.md` (Phase 4).

---

## 0. NAVIGATION

- [1. Flag Schema](#1-flag-schema)
- [2. Act I — Thebes](#2-act-i--thebes-age-15)
- [3. Act II — Skiritai](#3-act-ii--skiritai-age-16)
- [4. Act III — Achaean](#4-act-iii--achaean-age-17--jason-arc)
- [5. Act IV — Agema](#5-act-iv--agema-age-18--sophie-arc)
- [6. Act V — Hetairoi](#6-act-v--hetairoi-age-19--vespera-arc)
- [7. Endings](#7-endings)
- [8. Canonical Default Flags (Chapter Select)](#8-canonical-default-flags-chapter-select)
- [9. Node ID Reference Index](#9-node-id-reference-index)

---

## 1. FLAG SCHEMA

All flags initialize on a fresh game. `localStorage` saves the full state object after every choice.

### 1.1 Visible Meter

| Flag | Type | Range | Default | Purpose |
|---|---|---|---|---|
| `corruption` | int | 0–100 | 0 | The visible bar at the top |

### 1.2 Hidden Meters

| Flag | Type | Range | Default | Purpose |
|---|---|---|---|---|
| `madness` | int | 0–100 | 0 | If ≥70 in Acts IV/V, opens madness ending paths |
| `vespera_interest` | int | 0–10 | 0 | Whether Vespera has noticed Mika; gates Heir endings |

### 1.3 Relationship Meters (0–10)

| Flag | Default | Notes |
|---|---|---|
| `relationship_bran` | 5 | Erodes if Mika ignores him; raises if visited honestly |
| `relationship_quinn` | 7 | Hostile if Quinn learns Mika ignored him |
| `relationship_niko` | 6 | Drops fast — Niko sees through Mika early |
| `relationship_jason` | 0 | Raises through Act III — the corrupting bond |
| `relationship_sophie` | 0 | Raises in Act II–III — primes the betrayal cost |
| `relationship_kaden` | 0 | Raises in Act III — gates "Becomes Kaden" ending |

### 1.4 Survival Booleans

All default `true`. Set `false` when the character dies.

| Flag | Default |
|---|---|
| `survived_bran` | true |
| `survived_quinn` | true |
| `survived_niko` | true |
| `survived_jason` | true |
| `survived_sophie` | true |
| `survived_kaden` | true |
| `survived_vespera` | true |

### 1.5 Key-Choice Booleans

| Flag | Default | Set By |
|---|---|---|
| `mika_visited_bran_15` | false | Act I hub A |
| `mika_searched_quinn_15` | false | Act I hub B |
| `mika_trained_hard_15` | false | Act I hub C |
| `mika_signed_morale_report` | false | Act I climax |
| `mika_close_to_sophie` | false | Act II hub A complete |
| `mika_investigated_quinn_16` | false | Act II hub B |
| `mika_visited_niko_16` | false | Act II hub C |
| `mika_fired_on_dissenter` | false | Act II climax |
| `mika_understands_jason` | false | Act III hub A complete |
| `mika_first_assassination_clean` | false | Act III hub B clean kill |
| `mika_first_assassination_messy` | false | Act III hub B messy kill |
| `mika_first_assassination_faked` | false | Act III hub B faked death |
| `kaden_conspiracy` | false | Act III hub C |
| `killed_jason_clean` | false | Act III climax |
| `killed_jason_messy` | false | Act III climax |
| `let_sophie_kill_jason` | false | Act III climax |
| `mika_courted_vespera` | false | Act IV hub A |
| `mika_saved_kaden` | false | Act IV hub B (kindness path) |
| `mika_used_kaden` | false | Act IV hub B (cynical path) |
| `mika_final_visit_neighborhood` | false | Act IV hub C |
| `betrayed_sophie_first` | false | Act IV climax |
| `exposed_sophie_publicly` | false | Act IV climax |
| `won_without_retaliating` | false | Act IV climax (rare path) |
| `closed_quinn_file` | false | Act V hub A |
| `signed_quinn_file` | false | Act V hub A |
| `confronted_vespera` | false | Act V hub B |
| `warned_bran` | false | Act V hub C |
| `voted_expand_surveillance` | false | Act V forced beat |
| `voted_against_surveillance` | false | Act V forced beat |
| `proposed_own_reform` | false | Act V climax |
| `mika_self_aware` | false | Set by various Act V paths — gates the Self-Aware variants |

### 1.6 Multi-State Flags

| Flag | Possible Values | Set By |
|---|---|---|
| `act_1_focus` | "single", "double", "triple" | Act I hub close-out |
| `act_2_focus` | "single", "double", "triple" | Act II hub close-out |
| `act_3_focus` | "single", "double", "triple" | Act III hub close-out |
| `act_4_focus` | "single", "double", "triple" | Act IV hub close-out |
| `act_5_focus` | "single", "double", "triple" | Act V hub close-out |
| `final_choice` | "coup" / "heir" / "reform" / "resist" / "break" | Act V climax |

---

## 2. ACT I — THEBES (age 15)

> **Mood:** Disorientation, fresh fear. Mika has just been forced into the Knights. Quinn's fate is unknown. The whole act is *learning the rules of his new life.*
> **Length:** ~9 nodes
> **Promotion threshold:** Survive the climactic decision; corruption typically 5–15 by end.

---

### Node `t1.1` — Arrival

- **Image:** `t1.1_arrival.webp` — Mika arriving at the Thebes barracks at dusk; the recruiting Knight beside him; behind, the city lights.
- **Setting:** Mika's first night. The Knight from the ultimatum delivers him. Other Thebes recruits stare. He's given a bunk, a uniform, and a vague briefing about "service."
- **Choices:** None. Continue.
- **Effects:** None.
- **Next:** `t1.2`

---

### Node `t1.2` — The First Day Hub

- **Image:** `t1.2_thebes_barracks.webp` — Wide shot of the Thebes barracks interior, morning light, recruits doing menial work in the background. Mika in the foreground with a clipboard.
- **Setting:** Mika has a free hour before training. He has three things he could do.
- **Choices (hub — pick 1, 2, or all 3 in any order):**
  - **A. Sneak home to see Bran** → `t1.3a`
  - **B. Try to find out what happened to Quinn** → `t1.3b`
  - **C. Throw yourself into training** → `t1.3c`
  - **D. (visible only after at least 1 hub activity is complete) "Continue"** → `t1.4`
- **Effects on entering this hub:** none.
- **Effects on hitting "Continue":**
  - If 1 activity done: `act_1_focus = "single"`, `corruption +0`
  - If 2 activities done: `act_1_focus = "double"`, `corruption +1`
  - If 3 activities done: `act_1_focus = "triple"`, `corruption +3` (compartmentalizing)

---

### Node `t1.3a` — Visit Bran

- **Image:** `t1.3a_visit_bran.webp` — A 12-year-old boy on a worn couch looking up; the doorway of the apartment; soft golden light. Mika in civilian clothes.
- **Setting:** Mika sneaks out in civilian clothes. Bran is alone, doing schoolwork. He doesn't ask why Mika is gone — he's been told Mika got into a "special program." Their conversation is awkward, then warm.
- **Choices:**
  - "Tell him the truth — he can keep a secret." → `t1.3a_truth`
  - "Lie — say everything's fine." → `t1.3a_lie`
  - "Stay quiet, just sit with him." → `t1.3a_silent`
- **All three return to:** `t1.2` (hub)

#### Sub-node `t1.3a_truth`
- **Effects:** `mika_visited_bran_15 = true`, `relationship_bran +2`, `corruption -1`. Risky — sets `bran_knows_secret = true`.
- **Note:** This flag matters in Act V — Bran knowing changes the warning conversation.

#### Sub-node `t1.3a_lie`
- **Effects:** `mika_visited_bran_15 = true`, `relationship_bran +1`, `corruption +1` (first lie to family).

#### Sub-node `t1.3a_silent`
- **Effects:** `mika_visited_bran_15 = true`, `relationship_bran +1`, `corruption 0`.

---

### Node `t1.3b` — Search for Quinn

- **Image:** `t1.3b_records_room.webp` — A dim records corridor, Mika peering at a flickering screen; surveillance camera in the corner.
- **Setting:** Mika tries to access Thebes-level information about Quinn. As a Thebes he has almost no clearance, but he can listen at the door of the Skiritai room. He overhears two Knights discussing Quinn's case.
- **Choices:**
  - "Risk being seen — get closer to hear more." → `t1.3b_close`
  - "Stay back, just listen." → `t1.3b_safe`
- **Both return to:** `t1.2`

#### Sub-node `t1.3b_close`
- **Effects:** `mika_searched_quinn_15 = true`, `corruption +2` (you're already learning to risk for information). One Knight glimpses him; sets `t1_almost_caught = true`.
- **Conditional:** If `t1_almost_caught`, the climactic node `t1.5` opens with extra menace — that Knight remembers Mika.

#### Sub-node `t1.3b_safe`
- **Effects:** `mika_searched_quinn_15 = true`, no corruption change.

---

### Node `t1.3c` — Train Hard

- **Image:** `t1.3c_training.webp` — Mika lifting equipment in a sparse gym, pre-dawn. Two senior recruits watching from a doorway.
- **Setting:** Mika goes hard. Doesn't sleep. Exhausts himself. Gets noticed by a senior Thebes who pulls him aside and tells him he's promising. (Player should feel the seductive pull of approval.)
- **Choices:**
  - "Thank him sincerely." → `t1.3c_thank`
  - "Brush it off." → `t1.3c_brush`
- **Both return to:** `t1.2`

#### Sub-node `t1.3c_thank`
- **Effects:** `mika_trained_hard_15 = true`, `corruption +3` (the first taste of being *good* at this), `relationship_jason +1` (the senior was Jason, observing).
- **Note:** This is Mika's first encounter with Jason, even though he doesn't yet know who he is.

#### Sub-node `t1.3c_brush`
- **Effects:** `mika_trained_hard_15 = true`, `corruption +1`, `relationship_jason +0`.

---

### Node `t1.4` — Meeting Kaden (Forced Beat)

- **Image:** `t1.4_meeting_kaden.webp` — Two boys in mess hall, Kaden leaning across the table, half-smiling, half-tired. Background: other recruits eating in silence.
- **Setting:** Lunch. Kaden sits down across from Mika, uninvited, and starts talking. He's been here six months. He clocks Mika immediately as "smarter than they should let in." First conversation — Kaden hints that the Knights aren't what they seem and that Mika should be careful what questions he asks.
- **Choices:**
  - "Trust him a little — say more." → `t1.4_trust`
  - "Stay guarded." → `t1.4_guarded`
  - "Mock his cynicism." → `t1.4_mock`
- **All return to:** `t1.5`

#### `t1.4_trust`
- **Effects:** `relationship_kaden +2`, `corruption +0`.

#### `t1.4_guarded`
- **Effects:** `relationship_kaden +1`, `corruption +1` (you're already learning to keep distance).

#### `t1.4_mock`
- **Effects:** `relationship_kaden -1`, `corruption +2`. **Note:** If `relationship_kaden < 2` by Act IV, Kaden's "talk down" hub option becomes harder.

---

### Node `t1.5` — Climactic Decision: The Morale Report

- **Image:** `t1.5_morale_report.webp` — Mika at a desk, pen hovering over a paper form; supervising Skiritai standing behind him.
- **Setting:** Mika is given his first piece of paperwork: a "morale report" flagging a fellow recruit named Talus for "low cohesion." Talus is fine — Mika has spoken to him. Signing this report means Talus gets watched. Maybe disappeared. The supervising Skiritai is watching Mika sign.
- **Conditional opening text:** If `t1_almost_caught`, the supervising Skiritai is the one who almost caught Mika at `t1.3b_close`. Adds a layer of "he knows."
- **Choices:**
  - **"Sign it."** → `t1.6` (memory flashback) → `t1.7` (promotion)
  - **"Refuse."** → `t1.5_refuse`
  - **"Sign it but note your concerns in the margin."** → `t1.5_note`
  - **"Report the order to a senior Knight."** → `t1.5_report`
- **Effects per choice:**
  - **Sign:** `mika_signed_morale_report = true`, `corruption +8`. → Continue.
  - **Refuse:** `mika_signed_morale_report = false`, `corruption -3`, `flagged_for_observation = true`. → `t1.5_refuse`
  - **Note in margin:** `mika_signed_morale_report = true`, `corruption +5`, `mika_thinks_hes_clever = true`. → `t1.6` then `t1.7`. (The note changes nothing — Talus is still flagged.)
  - **Report the order:** → `t1.5_report` (death path)

#### Sub-node `t1.5_refuse`
- **Image:** `t1.5_refuse.webp` — Mika being escorted to a small grey room, the supervising Skiritai walking ahead.
- **Setting:** Mika is taken aside. He's interrogated. Eventually demoted to barracks-cleaning duty. The Knights watch him for the rest of the year.
- **Outcome:** Mika does not get promoted to Skiritai. Goes to ending **#15-light: The Forgotten** (a softer variant of the Forgotten path — alive, working menial labor, never a Knight again).
- **Note:** This is a *very early* ending. Player has played ~5 minutes. We accept this — refusing this early *should* end the game. The "Start Again" button gives them another chance.

#### Sub-node `t1.5_report`
- **Image:** `t1.5_report.webp` — Mika in the dark, two Knights closing in.
- **Setting:** Mika reports the supervising Skiritai for ordering an unjust report. The senior Knight he reports to *is* in on it. Mika doesn't survive the night.
- **Outcome:** **Ending #11-light: Suicide-by-Honesty** (functional death ending — alive Knight kills him; framed as ending #7 "Executed by Council" lite).

---

### Node `t1.6` — Memory Flashback: Quinn's File

- **Image:** `t1.6_quinns_file.webp` — Sepia-warm desaturation. Quinn's face on a screen, a Knight's silhouette. (Mirrors the inciting incident.)
- **Setting:** Mika, alone after signing, flashes back to two weeks ago — the moment he saw Quinn's file. He sees his own younger self standing there frozen. He realizes he's just signed someone else's "Quinn file."
- **Choices:** None. Continue.
- **Effects:** `corruption +2`, `mika_self_aware +1` (a small voice; doesn't yet matter).
- **Next:** `t1.7`

---

### Node `t1.7` — Promotion to Skiritai

- **Image:** `t1.7_promotion_skiritai.webp` — Mika receiving Skiritai shoulder insignia; a small ceremony, three other recruits beside him.
- **Setting:** End of Act I. Mika is promoted. He's now 16. The black uniform fits.
- **Choices:** None. Continue.
- **Effects:** Age increments to 16. Act 1 closes.
- **Next:** `t2.1`

---

## 3. ACT II — SKIRITAI (age 16)

> **Mood:** Mika is *good at this.* The role rewards him. He meets Sophie. He has to use force for the first time. The seduction begins.
> **Length:** ~9 nodes
> **Promotion threshold:** Survive the climactic decision (firing on a dissenter); corruption typically 25–40 by end.

---

### Node `t2.1` — Promotion Ceremony / Meet Sophie

- **Image:** `t2.1_promotion_meet_sophie.webp` — Mika in his new black Skiritai gear; Sophie in the same uniform a few feet away, mid-laugh with someone else; Capitol architecture behind them.
- **Setting:** Mika is sworn in as a Skiritai. So is Sophie — a tall blonde girl with a too-loud laugh, clearly aristocratic. They're paired for orientation. First conversation: she's instantly warm, tells him her father's a Hetairoi. Doesn't notice when Mika doesn't return the personal information.
- **Choices:**
  - "Match her warmth — make a friend." → `t2.1_warm`
  - "Be polite but distant." → `t2.1_distant`
- **Effects:**
  - **Warm:** `relationship_sophie +3`, `corruption +1`.
  - **Distant:** `relationship_sophie +1`, `corruption +0`.
- **Next:** `t2.2`

---

### Node `t2.2` — Skiritai Hub

- **Image:** `t2.2_skiritai_hub.webp` — Skiritai station interior, evening, Mika at his locker; Sophie laughing in the background; a screen showing surveillance feeds.
- **Setting:** Mika has more freedom now. Three things he could do off-duty.
- **Choices (hub — pick 1, 2, or 3):**
  - **A. Build the Sophie friendship — train together, share meals.** → `t2.3a`
  - **B. Use Skiritai-level access to investigate Quinn.** → `t2.3b`
  - **C. Risk visiting Niko in the old neighborhood.** → `t2.3c`
  - **D. Continue** → `t2.4`
- **Effects on Continue:**
  - 1 done: `act_2_focus = "single"`, `corruption +0`.
  - 2 done: `act_2_focus = "double"`, `corruption +2`.
  - 3 done: `act_2_focus = "triple"`, `corruption +5`.

---

### Node `t2.3a` — Build with Sophie

- **Image:** `t2.3a_sophie_training.webp` — Mika and Sophie sparring in the gym, both laughing.
- **Setting:** They train. They eat. She introduces him to her family. He charms them; they accept him. By the end of the activity she calls him her best friend.
- **Choices:**
  - "Let her in — share something real about your family." → `t2.3a_real`
  - "Stay performative — give her the version of you she wants." → `t2.3a_perform`
- **Effects:**
  - **Real:** `relationship_sophie +3`, `mika_close_to_sophie = true`, `corruption +0`.
  - **Perform:** `relationship_sophie +2`, `mika_close_to_sophie = true`, `corruption +3`.
- **Returns to:** `t2.2`

---

### Node `t2.3b` — Investigate Quinn (Deeper)

- **Image:** `t2.3b_records_skiritai.webp` — Mika at a Skiritai workstation, partial file open on screen, his own face reflected in the monitor.
- **Setting:** Mika pulls Quinn's file. Most of it is redacted at his clearance level, but he learns: Quinn is alive, in a holding facility, unsentenced. The Council is *waiting* — likely to decide if he's worth turning into an example or letting quietly disappear.
- **Choices:**
  - "Try to pass a message to him." → `t2.3b_message`
  - "Note the file's location — for later." → `t2.3b_note`
- **Effects:**
  - **Message:** `mika_investigated_quinn_16 = true`, `messaged_quinn = true`, `corruption +5` (using Knights' privilege for a personal end). Risk flag: `t2_quinn_message_traceable = true`. **Conditional consequence in Act III:** if `t2_quinn_message_traceable` and `corruption < 50`, the Council uses Quinn against Mika in Act III.
  - **Note:** `mika_investigated_quinn_16 = true`, `corruption +1`.
- **Returns to:** `t2.2`

---

### Node `t2.3c` — Visit Niko

- **Image:** `t2.3c_niko.webp` — A back alley at night; Niko leaning against a wall, arms crossed, suspicious; Mika in civilian clothes over Skiritai gear.
- **Setting:** Mika goes to the old neighborhood. Niko meets him. The conversation is hostile from the start — Niko has heard rumors, doesn't believe Mika's "special program" story, wants to know what happened to Quinn. Mika has to lie or tell the truth.
- **Choices:**
  - "Lie. Smoothly." → `t2.3c_lie`
  - "Tell him a partial truth — Quinn's alive, that's all you know." → `t2.3c_partial`
  - "Tell him the whole truth — beg him to keep quiet." → `t2.3c_truth`
- **Effects:**
  - **Lie:** `relationship_niko -2`, `corruption +5`. Niko knows you're lying. He'll be hostile in Act IV.
  - **Partial:** `relationship_niko +1`, `corruption +2`.
  - **Truth:** `relationship_niko +3`, `corruption +0`. **Risk:** sets `niko_knows_truth = true`. In Act IV, Niko will either help Mika (if `relationship_niko ≥ 7`) or expose him (if `relationship_niko ≤ 4`).
- **Returns to:** `t2.2`

---

### Node `t2.4` — Forced Beat: First Detention

- **Image:** `t2.4_detention.webp` — Mika and three other Skiritai dragging a struggling middle-aged man into a transport van; passersby watching from doorways.
- **Setting:** First street patrol. They detain a man flagged by the AI for "associative dissent" — meaning he was friends with someone flagged. He's begging. He has children. Mika has to physically restrain him.
- **Choices:** None. Continue. (This is a forced beat — Mika *has* to participate. The choice comes next.)
- **Effects:** `corruption +5`. Sets `act_2_first_detention_complete = true`.
- **Next:** `t2.5`

---

### Node `t2.5` — Climactic Decision: Fire on the Dissenter

- **Image:** `t2.5_climax.webp` — A dim alley, a young man running, Mika with rifle raised, the senior Skiritai (CO) shouting beside him.
- **Setting:** A week later. A dissenter — late teens, Mika's age — runs from a checkpoint. The CO orders Mika to fire. Conditional opening: if `survived_quinn` and `relationship_quinn ≥ 5`, Mika briefly thinks the runner *looks like* Quinn. (He's not Quinn. But the doubt is there.)
- **Choices:**
  - **"Fire to kill."** → `t2.5_kill`
  - **"Fire to wound."** → `t2.5_wound`
  - **"Refuse."** → `t2.5_refuse`
  - **"Shoot the CO."** → `t2.5_shoot_co`
- **Effects:**
  - **Kill:** `mika_fired_on_dissenter = true`, `corruption +15`, `madness +5`. → `t2.6` (memory flashback) → `t2.7` (promotion).
  - **Wound:** `mika_fired_on_dissenter = true`, `corruption +10`, `madness +3`, `mika_thinks_hes_better = true` (this flag becomes important — he tells himself he's not like the others). → `t2.6` → `t2.7`.
  - **Refuse:** `mika_fired_on_dissenter = false`, `corruption -3`, `flagged_disobedient = true`. → `t2.5_refuse`.
  - **Shoot CO:** → `t2.5_shoot_co` (death path).

#### Sub-node `t2.5_refuse`
- **Image:** `t2.5_refuse.webp` — Mika kneeling, the CO's pistol against his temple, dawn light.
- **Setting:** The CO does not tolerate refusal. Mika is shot in an alley. Body never recovered.
- **Outcome:** **Ending #7: Executed by the Council** (early variant — "executed in the field for cowardice"). Variation prose acknowledges he died young, before he could change anything. Bran will hear he died "honorably."

#### Sub-node `t2.5_shoot_co`
- **Image:** `t2.5_shoot_co.webp` — The CO falling, Mika's expression blank, the dissenter still running into the dark.
- **Setting:** Mika shoots his commanding officer. The dissenter escapes. Mika is hunted. Killed within 48 hours.
- **Outcome:** **Ending #7: Executed by the Council** (defiance variant — "you became a brief legend in the dissident underground; you never knew it"). Sets `legend = true` for the ending text.

---

### Node `t2.6` — Memory Flashback: Walking Home with Bran

- **Image:** `t2.6_memory_walking.webp` — Sepia. Mika at 12 walking home with 9-year-old Bran, both eating something, laughing at nothing. Soft warm afternoon light.
- **Setting:** Mid-shift, Mika flashes back to a simple afternoon walking home from school with Bran. Nothing dramatic — just a moment of being a kid. The contrast with what he just did is the whole point.
- **Choices:** None. Continue.
- **Effects:** `madness +2`, `relationship_bran` no change but the player should *feel* the gap.
- **Next:** `t2.7`

---

### Node `t2.7` — Promotion to Achaean

- **Image:** `t2.7_promotion_achaean.webp` — Mika in new Achaean black-and-gold; older Knights watching; a man with weathered features and a burn scar on his neck stepping forward to shake his hand. (Jason — first proper appearance.)
- **Setting:** Mika is promoted. Jason — the senior who watched him train in Act I — is assigned as his squad leader.
- **Choices:** None. Continue. Age increments to 17.
- **Effects:** `relationship_jason +1`. Sets `jason_assigned = true`.
- **Next:** `t3.1`

---

## 4. ACT III — ACHAEAN (age 17) — JASON ARC

> **Mood:** The act of *learning to give orders.* Mika now commands Skiritai. The mentor relationship with Jason is the heart of this act. Jason must die at the climax.
> **Length:** ~13 nodes (more branching at climax).
> **Promotion threshold:** Kill Jason. Corruption typically 50–70 by end.

---

### Node `t3.1` — Jason's Office

- **Image:** `t3.1_jasons_office.webp` — A small, warm office at night; two chairs, a pot of tea, a map of the city on the wall with pins. Jason pouring; Mika sitting across.
- **Setting:** Jason invites Mika to tea on his first night as Achaean. He's calm, kind, almost paternal. Asks about Mika's family. Doesn't pry. Gives him a book — *Marcus Aurelius*. Says: "Read this. The job is hard. This helps."
- **Choices:**
  - "Be honest about your family — tell him about Bran." → `t3.1_open`
  - "Deflect — politely." → `t3.1_deflect`
  - "Lie — invent a tragic backstory." → `t3.1_lie`
- **Effects:**
  - **Open:** `relationship_jason +3`, `corruption +0`. Jason files this away.
  - **Deflect:** `relationship_jason +1`, `corruption +1`.
  - **Lie:** `relationship_jason +2`, `corruption +5` (lying to the kindest man you've ever met).
- **Next:** `t3.2`

---

### Node `t3.2` — Achaean Hub

- **Image:** `t3.2_achaean_hub.webp` — Mika at his Achaean desk, three folders in front of him: one labeled with Jason's name, one a target file, one a coded note from Kaden.
- **Setting:** Three things to do this month.
- **Choices (hub — pick 1, 2, or 3):**
  - **A. Long conversations with Jason.** → `t3.3a`
  - **B. Your first assassination assignment.** → `t3.3b`
  - **C. Coordinate with Kaden — he has a plan.** → `t3.3c`
  - **D. Continue** → `t3.4`
- **Effects on Continue:**
  - 1: `act_3_focus = "single"`, `corruption +0`.
  - 2: `act_3_focus = "double"`, `corruption +3`.
  - 3: `act_3_focus = "triple"`, `corruption +7`.

---

### Node `t3.3a` — Conversations with Jason

- **Image:** `t3.3a_jason_walk.webp` — Mika and Jason walking along a high Capitol balcony at sunset; the city below; Jason gesturing.
- **Setting:** Across multiple meals and walks, Jason teaches Mika his philosophy. The Council is brutal but necessary. The alternative is chaos. People can't be trusted to govern themselves — they don't even *want* to. The kindness is in the order. Jason genuinely believes this.
- **Choices:**
  - "Argue with him — push back." → `t3.3a_argue`
  - "Listen and let yourself agree." → `t3.3a_agree`
  - "Listen, perform agreement, but stay quietly opposed." → `t3.3a_perform`
- **Effects:**
  - **Argue:** `relationship_jason +1`, `corruption -2`, `mika_understands_jason = true`. Jason respects this.
  - **Agree:** `relationship_jason +4`, `corruption +10`. Genuine ideological capture begins.
  - **Perform:** `relationship_jason +3`, `corruption +5`, `mika_understands_jason = true`, `mika_self_aware +2`.
- **Returns to:** `t3.2`

---

### Node `t3.3b` — First Assassination

- **Image:** `t3.3b_assassination.webp` — A residential apartment door at 3 AM; Mika in dark Achaean gear, lockpick kit out; a slip of paper in his other hand.
- **Setting:** Mika's first kill order. Target: a 40-year-old man flagged for "leadership of pre-emergent dissident network" (read: hosted three meetings about Council policy). He's a teacher. Wife and child sleeping in the next room.
- **Choices:**
  - **"Clean kill — do it right, get out."** → `t3.3b_clean`
  - **"Messy kill — make it look like a robbery."** → `t3.3b_messy`
  - **"Fake the death — let him escape, file the report."** → `t3.3b_fake`
  - **"Refuse — abort and report it as compromised."** → `t3.3b_abort`
- **Effects:**
  - **Clean:** `mika_first_assassination_clean = true`, `corruption +15`, `madness +3`.
  - **Messy:** `mika_first_assassination_messy = true`, `corruption +12` (less corrupt because less professional), `madness +8`.
  - **Fake:** `mika_first_assassination_faked = true`, `corruption +5`, `mika_thinks_hes_clever = true`. Risk: if discovered (rolled against `corruption < 30`), Mika is executed in Act III. **In practice, by Act III the player likely has corruption ≥ 30, so this is usually safe.**
  - **Abort:** `corruption -3`, `flagged_disobedient = true`. **Outcome:** Mika is reassigned. Loses Jason's trust. Goes directly to a death-or-demotion node within Act III. Possibly to ending #6 (Killed by Jason — Jason has to clean up his own subordinate's failure).
- **Returns to:** `t3.2`

---

### Node `t3.3c` — Kaden's Plan

- **Image:** `t3.3c_kaden_plan.webp` — Kaden across a small table at a Capitol bar; visibly thinner than at age 15; eyes hollow but alert; documents spread between them.
- **Setting:** Kaden has been promoted to Achaean too. He's deteriorating fast — drinking, sleepless, jumpy — but his mind is sharp. He has a plan: they should position themselves to take out a low-level Hetairoi within five years and replace them. The conversation is dark and seductive.
- **Choices:**
  - "Agree — let's plan it together." → `t3.3c_agree`
  - "Push back — talk him down from the conspiracy." → `t3.3c_resist`
  - "Pretend to agree, plan to use him." → `t3.3c_use`
- **Effects:**
  - **Agree:** `kaden_conspiracy = true`, `relationship_kaden +3`, `corruption +8`.
  - **Resist:** `kaden_conspiracy = false`, `relationship_kaden +2`, `corruption +0`. Kaden retreats into his madness alone.
  - **Use:** `kaden_conspiracy = true`, `relationship_kaden +1`, `corruption +12`, `mika_used_kaden = true`. **Note:** This dramatically accelerates Kaden's breakdown.
- **Returns to:** `t3.2`

---

### Node `t3.4` — Forced Beat: Quinn Resurfaces

- **Image:** `t3.4_quinn_news.webp` — Mika opening a sealed file in his office; a photograph of Quinn — gaunt, shaved head — clipped to the inside.
- **Setting:** Quinn's case has come to Mika's desk. The form of the resurfacing depends on prior flags:
- **Conditional branching:**
  - If `mika_investigated_quinn_16 = true` AND `messaged_quinn = true`:
    - The Council has traced the message to Mika's terminal. They don't accuse him outright. They send him the file with a note: *"Sign this and we know it stays in the family."* — i.e., a threat *and* a recruitment to the Council's inner trust. → `t3.4_leverage`
  - If `mika_investigated_quinn_16 = true` AND NOT `messaged_quinn = true`:
    - Mika sees Quinn alive in the file photo, gaunt, in a holding cell. The file is open for "review." → `t3.4_alive`
  - If `mika_searched_quinn_15 = true` AND NOT `mika_investigated_quinn_16 = true`:
    - The file arrives stamped CLOSED. Quinn was executed three months ago. Mika never knew. → `t3.4_dead`
  - If neither investigation happened:
    - Mika doesn't know it's the Quinn file until he opens it. Sees Quinn's photo. Same as `t3.4_dead` but with extra shock. → `t3.4_dead_shock`

#### `t3.4_leverage`
- **Effects:** `corruption +10`, `madness +5`. Sets `quinn_used_as_leverage = true`. Mika has to sign the file to keep his cover. Quinn dies, Mika's hands are now visibly dirty in his own ledger.
- **Next:** `t3.5`

#### `t3.4_alive`
- **Effects:** `madness +3`. Quinn is alive but Mika has no power yet to save him. The file goes back into the queue.
- **Next:** `t3.5`

#### `t3.4_dead` / `t3.4_dead_shock`
- **Effects:** `survived_quinn = false`, `madness +5`. Mika sits with this for a while.
- **Next:** `t3.5`

---

### Node `t3.5` — Memory Flashback: Quinn's File, Replayed

- **Image:** `t3.5_memory_quinn_file.webp` — Sepia. The 15-year-old Mika at the moment of seeing Quinn's file, but now from above — as if 17-year-old Mika is watching his younger self.
- **Setting:** Mika stares at the Quinn file and remembers the day he saw it. He realizes: he has now signed dozens of files like this one. The boy frozen in that hallway is gone.
- **Choices:** None. Continue.
- **Effects:** `mika_self_aware +3`. (Cumulatively, `mika_self_aware ≥ 5` is what gates Self-Aware Tyrant ending #5.)
- **Next:** `t3.6`

---

### Node `t3.6` — Climactic Decision: Kill Jason

- **Image:** `t3.6_kill_jason_setup.webp` — Jason's office at midnight. Tea on the table. Jason looking up from his book; Mika in the doorway, hand at his side.
- **Setting:** Mika has discovered (via Kaden's intelligence, or via his own reading of Council politics) that Jason is the *one* who routinely intercepts dissident reports before they reach Vespera — *not to suppress them*, but to make sure they're processed quietly. Jason is the smooth functioning of the surveillance state. To "fix" the system, Jason has to die.
- **Conditional opening text:** If `mika_understands_jason = true`, an extra paragraph notes that Mika has spent months arguing with Jason and *knows* there's no convincing him.
- **Choices:**
  - **"Kill him cleanly — make it quick."** → `t3.7a` (Clean kill)
  - **"Strike before he speaks — messy."** → `t3.7b` (Messy kill)
  - **"Try one more time to convert him."** → `t3.7c` (Conversion attempt — almost always fails)
  - **"Lower the gun. You can't do this."** → `t3.7d` (Death by Loyalty — Jason kills Mika)
  - **(Conditional) "Let Sophie do it — you tipped her off."** → `t3.7e` (Sophie kills Jason; she takes credit and the promotion. Only available if `relationship_sophie ≥ 6`.)

#### `t3.7a` — Clean Kill
- **Image:** `t3.7a_clean.webp` — Jason at his desk; eyes closed; a small wound at his temple; Mika's hand on his shoulder. Spare, almost tender.
- **Effects:** `killed_jason_clean = true`, `survived_jason = false`, `corruption +20`, `madness +3`.
- **Conditional flavor:** If `relationship_jason ≥ 7`, Jason's last words are *"I knew it would be you."* Sets `jason_knew = true`.
- **Next:** `t3.8`

#### `t3.7b` — Messy Kill
- **Image:** `t3.7b_messy.webp` — Jason on the floor, broken table, blood on the wall; Mika standing over, breathing hard.
- **Effects:** `killed_jason_messy = true`, `survived_jason = false`, `corruption +25`, `madness +10`.
- **Risk:** Sets `messy_evidence = true`. In Act IV, Sophie will use this against Mika if `relationship_sophie ≤ 5`.
- **Next:** `t3.8`

#### `t3.7c` — Conversion Attempt
- **Setting:** Mika tries to talk Jason into seeing the truth. Jason listens, considers, and quietly says: "If I leave this office tonight, the city will be worse by morning." He's not threatening Mika — he's stating a fact. He goes for the alarm.
- **Choices (forced):**
  - "Kill him." → `t3.7a` (clean kill, but with `mika_self_aware +2`)
  - "Don't." → `t3.7d` (Mika dies)

#### `t3.7d` — Lower the Gun
- **Image:** `t3.7d_death.webp` — Mika on the floor, Jason kneeling beside him with a sad expression, gun still smoking.
- **Setting:** Mika lowers the gun. Jason draws his own. He's not angry — he's regretful. He says, *"I'm sorry. You were so close."*
- **Outcome:** **Ending #6: Killed by Jason.** Variations: did Mika understand him at the end? (If `mika_understands_jason = true`, the ending is "you and he both knew what had to happen." If false, the ending is sharper — "you never even understood the man who killed you.")

#### `t3.7e` — Let Sophie Do It
- **Image:** `t3.7e_sophie_kills.webp` — Sophie emerging from Jason's office, calm, blood on her cuff; Mika at the end of the corridor.
- **Setting:** Mika tipped Sophie off and stepped aside. She goes in. She does it. She takes credit. She's promoted to Agema. Mika is *not.*
- **Effects:** `let_sophie_kill_jason = true`, `survived_jason = false`, `relationship_sophie +5` (she owes him), `corruption +15`, `mika_demoted_temporarily = true`. Mika does not get promoted to Agema this year — stays an Achaean while Sophie advances. Sets up a different Act IV.
- **Next:** `t3.8_demoted` (variant of t3.8 — Mika is reassigned and Act IV opens with him beneath Sophie).

---

### Node `t3.8` — Promotion to Agema

- **Image:** `t3.8_promotion_agema.webp` — Mika in formal grey Agema coat receiving medals; Vespera in the crowd, watching him specifically.
- **Setting:** Mika is promoted. Jason's death has been ruled "in the line of duty." Vespera notices him for the first time.
- **Effects:** Age increments to 18. `vespera_interest +1`.
- **Next:** `t4.1`

#### Variant: `t3.8_demoted`
- **Setting:** Mika stays Achaean. Sophie is now Agema. The Council sees Sophie as the rising star. The next year unfolds with Mika one rung beneath her — same hub, but a different texture.
- **Effects:** Age increments to 18, but Mika's rank is still Achaean. The Act IV nodes have alternate text reflecting this.
- **Next:** `t4.1_demoted` (an alternate Act IV opening; the rest of Act IV mostly converges).

---

## 5. ACT IV — AGEMA (age 18) — SOPHIE ARC

> **Mood:** Mika is now signing kill orders. He's near the top. Vespera is watching. The "Only One Victor" trial sets up the betrayal that defines this act.
> **Length:** ~14 nodes.
> **Promotion threshold:** Survive the trial AND retaliate. Corruption typically 70–90 by end.

---

### Node `t4.1` — Signing Kill Orders

- **Image:** `t4.1_signing_orders.webp` — Mika at a polished desk, stack of files, gold pen; first file open showing a stranger's photograph.
- **Setting:** First week as Agema. He signs his first independent kill order (a stranger). He signs his second. The third is a name he recognizes from school — a girl two years older who used to tutor him in math. He signs it without pausing. The pause comes after.
- **Choices:**
  - "Pause. Pull her file. Read it." → `t4.1_pause`
  - "Don't pause. Move to the next." → `t4.1_move`
- **Effects:**
  - **Pause:** `corruption +5`, `madness +3`, `mika_self_aware +1`.
  - **Move:** `corruption +12`, `madness +1`.
- **Next:** `t4.2`

---

### Node `t4.2` — Agema Hub

- **Image:** `t4.2_agema_hub.webp` — Mika's Agema office — large, sterile, a window onto Capitol City. Three doors, three folders.
- **Choices (hub — pick 1, 2, or 3):**
  - **A. Cultivate Lady Vespera — accept her invitation.** → `t4.3a`
  - **B. Try to talk Kaden down — he's breaking.** → `t4.3b`
  - **C. Final visit to the old neighborhood.** → `t4.3c`
  - **D. Continue** → `t4.4`
- **Effects on Continue:**
  - 1: `act_4_focus = "single"`, `corruption +0`.
  - 2: `act_4_focus = "double"`, `corruption +5`.
  - 3: `act_4_focus = "triple"`, `corruption +10` (you're stretched thin, dangerous to be near).

---

### Node `t4.3a` — Vespera's Audience

- **Image:** `t4.3a_vespera_audience.webp` — A small white room, two chairs, tea. Vespera in dove-grey, smiling. Mika in his Agema coat.
- **Setting:** Vespera invites him to tea. She compliments his handling of Jason. She tells him something true about the Council that he didn't know — a small confidence, deliberately offered to bind him to her. She asks what he wants. *Really* wants.
- **Choices:**
  - "Tell her you want her seat." → `t4.3a_ambition`
  - "Tell her you want to fix the city." → `t4.3a_idealism`
  - "Tell her you want her approval." → `t4.3a_approval`
  - "Lie. Say you want nothing." → `t4.3a_lie`
- **Effects:**
  - **Ambition:** `mika_courted_vespera = true`, `vespera_interest +5`, `corruption +5`. *She loves it. Sets `vespera_grooming = true`.*
  - **Idealism:** `mika_courted_vespera = true`, `vespera_interest +3`, `corruption +0`. *She finds it sweet. Sets `vespera_curious = true`.*
  - **Approval:** `mika_courted_vespera = true`, `vespera_interest +6`, `corruption +8`. *The most dangerous answer — she now knows what hooks him.*
  - **Lie:** `mika_courted_vespera = true`, `vespera_interest +2`, `corruption +5`. *She knows it's a lie and likes him slightly less.*
- **Returns to:** `t4.2`

---

### Node `t4.3b` — Kaden Breaking

- **Image:** `t4.3b_kaden_breaking.webp` — Kaden in a Knights' apartment, dim, messy; sitting on the floor; looking at his hands.
- **Setting:** Kaden hasn't slept in four days. He's hallucinating. He's seeing the people from the kill orders. He's still functional in public but private moments like this are getting longer.
- **Choices:**
  - "Stay with him. Get him help. Risk your reputation." → `t4.3b_save`
  - "Use his state to extract intelligence — he's still sharp when prompted." → `t4.3b_use`
  - "Cut him off. He's a liability." → `t4.3b_abandon`
  - "Offer him mercy — help him end it on his terms." → `t4.3b_mercy`
- **Effects:**
  - **Save:** `mika_saved_kaden = true`, `relationship_kaden +5`, `corruption -3`, `madness +2`. *Sets `kaden_path = "saved"`.*
  - **Use:** `mika_used_kaden = true`, `relationship_kaden -2`, `corruption +10`, `madness +5`. Accelerates his breakdown. *Sets `kaden_path = "used"`.*
  - **Abandon:** `relationship_kaden -5`, `corruption +5`, `madness +3`. *Sets `kaden_path = "abandoned"`. Kaden's death/madness becomes more likely.*
  - **Mercy:** `survived_kaden = false`, `corruption +8`, `madness +10`. *Sets `kaden_path = "mercy_killed"`.* Mika kills his closest friend. This is one of the most morally complex choices in the game.
- **Returns to:** `t4.2`

---

### Node `t4.3c` — Final Visit Home

- **Image:** `t4.3c_final_visit.webp` — The old apartment doorway. Bran (now 15) standing inside, looking at Mika with confused recognition. Niko in the background, arms crossed.
- **Setting:** Mika returns. Bran has grown up. Niko is there — he's organizing labor protests in the Quadrants. The conversation is hostile from Niko's side, fearful from Bran's.
- **Choices (multi-step — Mika decides what to say to each of them):**

##### About Bran:
  - "Apologize for being absent. Be present." → `corruption -2`, `relationship_bran +3`.
  - "Tell him to be careful — they're watching everyone." → `relationship_bran +1`, `warned_bran_early = true`.
  - "Don't say much. He's a kid." → `relationship_bran -1`.

##### About Niko:
  - "Engage — argue politics." → `relationship_niko +1` if `relationship_niko ≥ 5`, else `-2`.
  - "Warn him — he's going to get killed if he keeps organizing." → `relationship_niko +0`, sets `warned_niko = true`. *In Act V, this affects whether Niko's name appears on a kill list Mika can intervene on.*
  - "Threaten him — drop the mask. Tell him to stop or you'll have to act." → `relationship_niko -5`, `corruption +10`.

- **Effects (compound):** `mika_final_visit_neighborhood = true`. Multiple flags set per choices.
- **Returns to:** `t4.2`

---

### Node `t4.4` — Forced Beat: The Only One Victor Trial

- **Image:** `t4.4_trial_briefing.webp` — A briefing room. Six Agema candidates including Mika and Sophie. A Hetairoi at the front presenting holographic mission briefs.
- **Setting:** All Agema candidates eligible for the next Hetairoi seat are summoned. The trial is announced: a *coordinated mass operation* — the Council has identified a mid-level dissident cell (~30 people) and the candidates are to plan and execute the strike. The candidate who runs the operation most efficiently — *while ensuring no other candidate gains an advantage* — is promoted.
- The trial is implicitly a betrayal puzzle. Each candidate is incentivized to sabotage the others.
- Sophie sits next to Mika and squeezes his hand under the table — *we'll do this together, won't we?*
- **Choices:** None. Continue. (The trial choice comes at `t4.6`.)
- **Effects:** none beyond mood.
- **Next:** `t4.5`

---

### Node `t4.5` — Memory Flashback: Sophie Laughing

- **Image:** `t4.5_memory_sophie.webp` — Sepia. Sophie at 16, laughing, snow on her shoulders, mid-snowball-fight after their first joint patrol. Mika beside her, also laughing.
- **Setting:** The night before the trial begins, Mika lies awake. He flashes back to a winter afternoon their first year as Skiritai when Sophie threw a snowball at him during a patrol break and he laughed for the first time in months.
- **Choices:** None. Continue.
- **Effects:** `madness +2`. The memory is doing its work — making the next choice harder.
- **Next:** `t4.6`

---

### Node `t4.6` — Climactic Decision: Sophie's Betrayal

- **Image:** `t4.6_betrayal.webp` — Mid-trial. Mika in tactical gear discovering that Sophie has fed his squad's coordinates to a rival candidate; Sophie ahead of him in the corridor, not looking back.
- **Setting:** During the trial, Mika discovers Sophie has betrayed him. She sabotaged his entry — fed his coordinates to another candidate to create a setback. He has minutes to react.
- **Choices:**
  - **"Betray her back — feed her coordinates to a third candidate."** → `t4.7a` (mutual destruction — Mika positioned to win)
  - **"Expose her to the Hetairoi judges publicly during the debrief."** → `t4.7b` (both lose the seat)
  - **"Win the trial without retaliating — outperform her."** → `t4.7c` (only available if `relationship_sophie ≥ 8` AND `corruption ≤ 60`. Otherwise this option is hidden.)
  - **"Accept defeat. Take the loss with dignity."** → `t4.7d` (diminished life path; Mika does not become Hetairoi)
  - **"Sabotage the entire trial — destroy the operation."** → `t4.7e` (death; Mika is executed for treason)

#### `t4.7a` — Betray Her Back
- **Image:** `t4.7a_revenge.webp` — Sophie at the debrief, facing the panel; her file open, exposed; Mika in the back, expression unreadable.
- **Effects:** `betrayed_sophie_first = false`, `betrayed_sophie_back = true`, `survived_sophie = false` (the third candidate kills her in the field), `corruption +20`, `relationship_sophie -10`.
- **Outcome:** Mika wins the trial. Promoted to Hetairoi. → `t4.8`

#### `t4.7b` — Expose Her Publicly
- **Image:** `t4.7b_expose.webp` — Mika at the debrief lectern, evidence projected behind him; Sophie's face frozen in the front row.
- **Effects:** `exposed_sophie_publicly = true`, `survived_sophie = true` but exiled, `corruption +10`, `relationship_sophie -10`.
- **Outcome:** Both lose the seat. The seat goes to a third candidate. Mika is demoted slightly — kept as Agema for another year. → `t4.7b_aftermath` (Mika spends another year scheming his way back; eventually reaches Hetairoi the slow way. This is a longer but viable path.)

#### `t4.7c` — Win Without Retaliating
- **Setting:** Mika simply executes his portion of the operation flawlessly. Sophie's sabotage doesn't bring him low enough to lose. The judges note both her sabotage *and* his refusal to retaliate. He is promoted; she is reprimanded.
- **Effects:** `won_without_retaliating = true`, `survived_sophie = true`, `corruption -3`, `mika_self_aware +3`. Sets `mika_thinks_hes_better = true`.
- **Outcome:** Mika is promoted. Sophie remains Agema. **Note:** This path leads to the *softest* power endings (4 — Pyrrhic Reformer — most likely).
- **Next:** `t4.8`

#### `t4.7d` — Accept Defeat
- **Setting:** Mika doesn't fight back. He completes his portion adequately. Sophie wins.
- **Effects:** `accepted_defeat = true`, `survived_sophie = true`, `corruption -2`. `mika_demoted_to_achaean = true`.
- **Outcome:** Sophie is promoted to Hetairoi. Mika stays Agema for another year, then quietly is reassigned to a Quadrant administrative post. **This is one path to the Forgotten ending.** → Ending #15-light: **The Forgotten** (older variant — alive at age 22, running a Quadrant district office, never returning to Capitol City). Variations on whether Bran/Niko are still alive.

#### `t4.7e` — Sabotage the Operation
- **Setting:** Mika destroys the dissident cell *and* the trial — using his commanding position to ensure no one is captured alive (denying the Council intelligence) and that the operation reads as a chaotic failure. The judges trace it back to him.
- **Effects:** Goes to **Ending #7: Executed by the Council** (high-profile variant — "you became a name people whispered, briefly, before they forgot.") Variations on whether anyone in his old life learned what he tried to do.

---

### Node `t4.8` — Promotion to Hetairoi

- **Image:** `t4.8_investiture.webp` — Mika in tailored white-and-gold, mirror reflection visible, the silver Hetairoi pin being placed on his collar; Vespera placing it.
- **Setting:** Mika is invested. Age 19. The whole act has been moving toward this. He sees himself in a mirror.
- **Choices:** None. Continue. Age increments to 19.
- **Effects:** `vespera_interest +2`.
- **Next:** `t5.1`

---

## 6. ACT V — HETAIROI (age 19) — VESPERA ARC

> **Mood:** Apex. Mika is now Council. He has the power he sought. He has to choose what to do with it.
> **Length:** ~10 nodes leading to ending switch.
> **Outcome:** One of 15 endings.

---

### Node `t5.1` — The First Council Meeting

- **Image:** `t5.1_first_council.webp` — A polished black table; six Hetairoi seated; Vespera at the head; Mika in his white-and-gold; a dossier in front of each.
- **Setting:** Mika's first Council session. They review files. They decide outcomes. He votes for the first time. The vote is small — sentencing a low-level dissenter to relocation. No one else hesitates.
- **Choices:**
  - "Vote with the room." → `t5.1_with`
  - "Vote against, just to see what happens." → `t5.1_against`
- **Effects:**
  - **With:** `corruption +8`. Vespera's eyes flick to him approvingly.
  - **Against:** `corruption -2`, `vespera_interest +1` (she's *more* interested in resistance than compliance), `flagged_curious_to_council = true`.
- **Next:** `t5.2`

---

### Node `t5.2` — Hetairoi Hub

- **Image:** `t5.2_hetairoi_hub.webp` — Mika's Hetairoi office: minimalist, cream and gold, view of Capitol City from a high tower. Three folders.
- **Choices (hub — pick 1, 2, or 3):**
  - **A. The Quinn file (still on the system).** → `t5.3a` — only available if `survived_quinn = true`.
  - **B. Confront Vespera privately.** → `t5.3b`
  - **C. Reach out to Bran one last time.** → `t5.3c` — only available if `survived_bran = true`.
  - **D. Continue** → `t5.4`
- **Effects on Continue:**
  - 1: `act_5_focus = "single"`, `corruption +0`.
  - 2: `act_5_focus = "double"`, `corruption +5`.
  - 3: `act_5_focus = "triple"`, `corruption +10`.

---

### Node `t5.3a` — The Quinn File

- **Image:** `t5.3a_quinn_file.webp` — Mika's office; the Quinn file open on his terminal; an aged photo of Quinn (now 19, gaunt, prison-pale).
- **Setting:** Quinn is still alive, still in holding. With Hetairoi clearance Mika can do whatever he wants with the file.
- **Choices:**
  - "Close the file. Order his quiet release to a low-priority Quadrant." → `t5.3a_close`
  - "Sign the file. End it cleanly." → `t5.3a_sign`
  - "Leave it open. Let the system decide." → `t5.3a_leave`
- **Effects:**
  - **Close:** `closed_quinn_file = true`, `survived_quinn = true`, `corruption -8`, `mika_self_aware +2`. Mika uses Hetairoi privilege to do one good thing.
  - **Sign:** `signed_quinn_file = true`, `survived_quinn = false`, `corruption +20`, `madness +5`.
  - **Leave:** `corruption +5`. Quinn is executed within six months by automated process. `survived_quinn = false` after a delay (set in Act V epilogue).
- **Returns to:** `t5.2`

---

### Node `t5.3b` — Confront Vespera

- **Image:** `t5.3b_confront_vespera.webp` — Vespera's private chamber; cream and gold; she pours wine for two. Her smile.
- **Setting:** Vespera has been waiting for this conversation. Mika has come to confront her, or to court her, or both. She doesn't pretend. She tells him: *"I was you, once. I climbed exactly as you climbed. I know what you tell yourself. I know how it ends."* She offers him the truth: he can succeed her. She can step back gradually. He'll be the head of the Council within three years.
- **Choices:**
  - **"Accept her offer with gratitude."** → `t5.3b_accept_grateful`
  - **"Accept her offer, knowing exactly what it makes you."** → `t5.3b_accept_aware`
  - **"Refuse — tell her you'll dismantle the Council."** → `t5.3b_refuse`
  - **"Don't decide yet. Let her think you're undecided."** → `t5.3b_delay`
- **Effects:**
  - **Accept grateful:** `confronted_vespera = true`, `vespera_offered_succession = true`, `vespera_interest +5`, `corruption +15`.
  - **Accept aware:** `confronted_vespera = true`, `vespera_offered_succession = true`, `vespera_interest +5`, `corruption +15`, `mika_self_aware +5` (the most self-aware path).
  - **Refuse:** `confronted_vespera = true`, `vespera_offered_succession = true`, `vespera_interest -3`, `corruption -2`. Sets `vespera_targets_mika = true`. The endgame becomes adversarial.
  - **Delay:** `confronted_vespera = true`, `vespera_interest +2`, `corruption +5`. Vespera begins watching him more carefully.
- **Returns to:** `t5.2`

---

### Node `t5.3c` — Reach Out to Bran

- **Image:** `t5.3c_bran_16.webp` — Bran, now 16, in the doorway of the family apartment. Older, thinner, suspicious. Mika in civilian clothes — but not quite — gold cufflinks visible.
- **Setting:** Mika visits Bran. Bran is now old enough to understand exactly what Mika is. He has heard things. He has seen the news. He pieces it together as Mika stands there.
- **Conditional opening text:** If `bran_knows_secret = true` (from `t1.3a_truth`), Bran has known for years and has been waiting.
- **Choices:**
  - "Warn him — leave the city, change his name, hide." → `t5.3c_warn`
  - "Try to bring him into the Capitol — protected." → `t5.3c_protect`
  - "Cut him off — for his safety, never see him again." → `t5.3c_cut`
  - "Tell him the truth and beg his forgiveness." → `t5.3c_truth`
- **Effects:**
  - **Warn:** `warned_bran = true`, `bran_in_hiding = true`. Affects ending: Bran is alive but unreachable. `corruption -3`.
  - **Protect:** `bran_in_capitol = true`. Bran is alive and watched. Mika can keep an eye on him but he becomes a hostage. `corruption +5`.
  - **Cut:** `bran_cut_off = true`. Bran vulnerable but doesn't know why Mika abandoned him. `corruption +10`, `relationship_bran -5`.
  - **Truth:** `bran_knows_truth = true`. Bran spits at him. Walks away. Will probably try to harm Mika later or expose him. `relationship_bran -10`, `corruption -5`, `mika_self_aware +3`.
- **Returns to:** `t5.2`

---

### Node `t5.4` — Forced Beat: The Surveillance Vote

- **Image:** `t5.4_surveillance_vote.webp` — Council chamber, voting screens lit; the proposal text overhead — *RESOLUTION: EXTEND CIVILIAN MONITORING PROTOCOLS TO KNIGHTS QUADRANT PERSONNEL.*
- **Setting:** Vespera proposes ending the Knights' surveillance exemption. The Knights would, like everyone else, have files. (Vespera frames it as fairness; what it actually does is consolidate her own power by removing the only branch of society she can't fully see.) Mika has the swing vote.
- **Choices:**
  - **"Vote yes — the Knights should not be above the system."** → `t5.4_yes`
  - **"Vote no — the Knights' privilege is the only thing that gives reform any room to breathe."** → `t5.4_no`
  - **"Abstain — refuse to vote."** → `t5.4_abstain`
- **Effects:**
  - **Yes:** `voted_expand_surveillance = true`, `corruption +25`, `vespera_interest +5`. Vespera now considers him a true Council member.
  - **No:** `voted_against_surveillance = true`, `corruption -5`, `vespera_targets_mika = true`. He's now in opposition.
  - **Abstain:** `corruption +10`, `vespera_curious_about_him = true`. The vote passes anyway.
- **Next:** `t5.5`

---

### Node `t5.5` — Memory Flashback: The Ultimatum, Replayed

- **Image:** `t5.5_memory_ultimatum.webp` — Sepia. The hallway where 15-year-old Mika saw Quinn's file and the recruiting Knight caught him. But this time the Knight's face — turning into the light — is *Mika's own.*
- **Setting:** Mika sits in his Hetairoi office at 3 AM and replays the night he was caught. He sees the recruiting Knight clearly for the first time. He realizes the Knight was just him, four years older. The boy in the hallway will grow into the man in the doorway.
- **Choices:** None. Continue.
- **Effects:** `mika_self_aware +5`. (Cumulatively, this often pushes `mika_self_aware ≥ 5`, which gates ending #5.)
- **Next:** `t5.6`

---

### Node `t5.6` — The Ending Switch (Climactic Decision)

- **Image:** `t5.6_ending_switch.webp` — Mika alone in his Hetairoi office at dawn. Everything he's ever wanted, in a room. The mirror across from him.
- **Setting:** It's been a year as Hetairoi. Mika has made his choices. Now: what is he, and what does he do with it?
- **Choices:**
  - **A. "Move against Vespera. Take the Council yourself."** → ENDING ROUTING (coup paths)
  - **B. "Accept her succession. Become her heir."** → ENDING ROUTING (heir paths)
  - **C. "Propose your own reform. Build a new Council."** → ENDING ROUTING (reform paths)
  - **D. "Resist a vote publicly. Force their hand."** → ENDING ROUTING (death paths)
  - **E. "You can't continue. Step away from the desk."** → ENDING ROUTING (madness/suicide paths)

**The ending decision matrix is in Section 7.**

---

## 7. ENDINGS

### 7.1 Ending Decision Matrix (from `t5.6`)

```
SWITCH on final_choice:

  case A: "Move against Vespera" (coup):
    if madness >= 70:
      → ENDING 13 (Paranoid King)        // coup succeeds, Mika rules through paranoia
    elif corruption >= 80 and killed_jason and (not survived_sophie or betrayed_sophie_first):
      → ENDING 1 (Worse than Vespera)    // his new Council is more brutal
    elif corruption >= 60 and killed_jason:
      → ENDING 2 (Equal to Vespera)      // same system, new face
    elif corruption < 60 and won_without_retaliating and survived_quinn:
      → ENDING 4 (Pyrrhic Reformer)      // real reform, real cost
    elif vespera_targets_mika:
      → ENDING 10 (Killed by Vespera)    // she got him first
    else:
      → ENDING 2 (Equal to Vespera)      // default coup outcome

  case B: "Accept her offer" (heir):
    if mika_self_aware >= 5:
      → ENDING 5 (Self-Aware Tyrant)
    elif madness >= 70:
      → ENDING 14 (The Ghost) if relationship_bran >= 3 else ENDING 15 (The Believer)
    else:
      → ENDING 3 (Vespera's Heir)        // straight path, no awareness

  case C: "Propose your own reform":
    if corruption >= 75:
      → ENDING 1 (Worse than Vespera)    // his "reform" is more authoritarian
    elif corruption >= 50:
      → ENDING 4 (Pyrrhic Reformer)      // bittersweet reform, new enemies created
    elif corruption < 50 and won_without_retaliating:
      → ENDING 4 (Pyrrhic Reformer)      // softest variant, smallest betrayal
    else:
      → ENDING 7 (Executed by Council)   // his reform fails; Vespera removes him

  case D: "Resist publicly":
    if corruption < 40:
      → ENDING 7 (Executed by Council)   // martyr; brief legend
    else:
      → ENDING 7 (Executed by Council)   // ironic — even his last principled act doesn't save him

  case E: "Step away":
    if madness >= 70 and survived_kaden = false:
      → ENDING 11 (Suicide)               // the only way out
    elif madness >= 70 and survived_kaden:
      → ENDING 12 (Becomes Kaden)         // both broken; mirror endings
    elif corruption >= 75:
      → ENDING 11 (Suicide)               // the moment of awareness is too much
    elif madness >= 50:
      → ENDING 14 (The Ghost)
    else:
      → ENDING 12 (Becomes Kaden)
```

**Earlier ending triggers** (fire before reaching `t5.6`):
- **ENDING 6 (Killed by Jason):** `t3.7d` (lower the gun)
- **ENDING 7 variant (Executed early):** `t1.5_report`, `t2.5_refuse`, `t2.5_shoot_co`, `t4.7e` (sabotage), and any `corruption < 30` + flagged_disobedient combination
- **ENDING 8 (Killed by Sophie):** `t4.7a` if `relationship_sophie ≤ 2` (she sees the betrayal coming and gets him first — variant logic)
- **ENDING 9 (Killed by Kaden):** Triggers in late Act IV if `relationship_kaden ≤ 0` and `survived_kaden = true` and `madness ≥ 60`. Kaden snaps and attacks Mika.
- **ENDING 12 (Becomes Kaden) — early variant:** Triggers if at end of Act IV `madness ≥ 80` AND `mika_demoted_temporarily = true`.
- **ENDING 15-light (Forgotten):** `t1.5_refuse`, `t4.7d` (accept defeat).

### 7.2 The 15 Ending Templates — Variation Slots

Each ending has 4–6 variation slots that are filled per flag state. Here's the slot specification:

#### ENDING 1: WORSE THAN VESPERA
- **Image:** `ending_worse_than_vespera.webp` — Mika at the head of a Council table, but the table is bigger than Vespera's was. More members. More files. More red dots on a map of the city.
- **Variation slots:**
  - `[QUINN_FATE]`: alive somewhere / executed / executed by Mika's signed order / used as leverage and broken
  - `[BRAN_FATE]`: alive and estranged / dead on a list Mika approved / in hiding / unknown to Mika
  - `[NIKO_FATE]`: alive in resistance / dead in a riot / disappeared / executed
  - `[KADEN_FATE]`: dead by suicide / institutionalized / mercy-killed by Mika / "lost to me long before"
  - `[SOPHIE_FATE]`: dead by Mika / on the Council with him / exiled
  - `[VESPERA_FATE]`: dead at Mika's hand / dead "of natural causes" / vanished after stepping back
  - `[AWARENESS]`: oblivious / "sometimes I notice" / fully aware (locked behind `mika_self_aware ≥ 5`)

#### ENDING 2: EQUAL TO VESPERA
- **Image:** `ending_equal_to_vespera.webp` — Mika sitting in Vespera's old chair, the room unchanged. The same files. The same view.
- **Variation slots:** Same six as Ending 1, but tone is *resignation,* not pride.

#### ENDING 3: VESPERA'S HEIR
- **Image:** `ending_vesperas_heir.webp` — Mika and Vespera at a transition ceremony. Her hand on his shoulder. Both smiling.
- **Variation slots:** Five (excludes Vespera fate — she's alive and present); plus `[VESPERA_REVERENCE]`: he reveres her / he resents her quietly / he loves her like a mother.

#### ENDING 4: PYRRHIC REFORMER
- **Image:** `ending_pyrrhic.webp` — Mika at a podium, addressing the city; a new banner; but the camera angles show a security perimeter, watchtowers visible behind him.
- **Variation slots:**
  - `[REFORM_SCOPE]`: surveillance ended for Quadrants A,B / surveillance ended for Knights only / files made public
  - `[NEW_ENEMIES]`: the labor organizers / the aristocrats / the religious / Niko's group specifically
  - All five fate slots
  - `[MIKAS_AWARENESS]`: he believes he succeeded / he knows it's a trade

#### ENDING 5: SELF-AWARE TYRANT
- **Image:** `ending_mirror.webp` — Mika alone, facing a tall mirror. The room behind him is one of the previous endings' rooms (1, 2, or 3 — selected by which case triggered). The reflection looks slightly older.
- **Trigger lock:** `mika_self_aware ≥ 5`.
- **Variation slots:**
  - `[BASE_ENDING]`: which other ending's environment is shown (1, 2, or 3)
  - All five fate slots
  - `[FINAL_LINE]`: he stays in the chair / he straightens his collar / he laughs once / he sits down

#### ENDING 6: KILLED BY JASON
- **Image:** `ending_jason.webp` — Mika on the floor of Jason's office. Jason kneeling. Both faces visible.
- **Variation slots:**
  - `[JASON_FAREWELL]`: "I'm sorry. You were so close." / "I knew it would be you." / silent
  - `[BRAN_AFTERMATH]`: told Mika died honorably / Bran knows the truth / Bran never finds out
  - `[QUINN_AFTERMATH]`: Quinn alive (his fate continues without Mika) / Quinn already dead

#### ENDING 7: EXECUTED BY THE COUNCIL
- **Image:** `ending_executed.webp` — A small grey room, Mika kneeling, two Knights behind him. Camera angle: low, distant.
- **Variation slots:**
  - `[CRIME]`: refusing an order / shooting a CO / sabotaging the trial / publicly resisting a vote / reporting an order
  - `[LEGACY]`: brief legend in the underground / forgotten / "your name appears in one classified file"
  - `[BRAN_HEARS]`: told he died honorably / told nothing / tells himself
  - `[FRIEND_AFTERMATH]`: who else is alive

#### ENDING 8: KILLED BY SOPHIE
- **Image:** `ending_sophie.webp` — A trial-aftermath corridor; Mika on the ground; Sophie walking past, not looking back.
- **Variation slots:**
  - `[BETRAYAL_PRECISION]`: she planned it for months / she improvised
  - `[SOPHIES_REGRET]`: she does not look back / she pauses, briefly / she returns at night to his body
  - All other fate slots

#### ENDING 9: KILLED BY KADEN
- **Image:** `ending_kaden_kills.webp` — A Capitol corridor; Kaden with a knife, eyes wild; Mika collapsed against the wall.
- **Variation slots:**
  - `[KADEN_STATE]`: full madness / lucid moment of clarity ("he was right, briefly")
  - `[POST_EVENT]`: Kaden survives / Kaden killed by guards / Kaden vanishes
  - All fate slots

#### ENDING 10: KILLED BY VESPERA
- **Image:** `ending_vespera.webp` — Vespera's private chamber. Mika on the rug. Vespera at her desk, signing something else.
- **Variation slots:**
  - `[METHOD]`: poisoned wine / had him removed by guards / personally
  - `[VESPERA_LINE]`: "I was you. Now I'm not." / silent / "I told you I knew how it ends."
  - All fate slots

#### ENDING 11: SUICIDE
- **Image:** `ending_suicide.webp` — Mika alone in his Hetairoi office at dawn, by the window. Empty room. (No actual violence visible — the framing implies.)
- **Variation slots:**
  - `[FINAL_THOUGHT]`: about Bran / about Quinn / about the boy in the hallway he used to be / about Vespera laughing
  - `[NOTE_LEFT]`: a long letter to Bran / a single line / nothing
  - All fate slots

#### ENDING 12: BECOMES KADEN
- **Image:** `ending_becomes_kaden.webp` — A small Quadrant apartment; Mika at age 22 (after-time-jump epilogue), gaunt, eyes hollow, talking to himself. Kaden's old apartment from `t4.3b`, in mirror.
- **Variation slots:**
  - `[KADEN_PRESENT]`: Kaden alive in the same apartment / Kaden dead and Mika is alone / Kaden visits sometimes
  - `[CARE]`: someone takes care of him (Bran? Niko?) / no one
  - All fate slots

#### ENDING 13: PARANOID KING
- **Image:** `ending_paranoid.webp` — Mika at the head of his Council, but the chairs are mostly empty (or filled with people he replaced); his hand on a sidearm under the table.
- **Variation slots:**
  - `[VICTIMS]`: list of who he had executed for "smiling wrong" — names from the cast (Sophie? Bran? Niko? Kaden?)
  - `[TRIGGER_FOR_NEXT_PURGE]`: the latest paranoia
  - `[FINAL_LINE]`: a guard reports / he doesn't sleep / he laughs once

#### ENDING 14: THE GHOST
- **Image:** `ending_ghost.webp` — Mika at his Hetairoi desk, signing without reading; outside, Bran (16) being escorted out by a guard.
- **Variation slots:**
  - `[VISITOR]`: Bran / Niko / both / no one ever comes
  - `[RECOGNITION]`: he doesn't recognize them / he recognizes for half a second then doesn't / he recognizes but says nothing
  - All fate slots

#### ENDING 15: THE BELIEVER
- **Image:** `ending_believer.webp` — A long table set for a celebration. Wineglasses raised. Mika smiling. Every other chair empty.
- **Variation slots:**
  - `[GUESTS_HE_IMAGINES]`: Quinn (always) / Bran / Niko / Jason (yes, even Jason) / Sophie / Kaden / Vespera ("she came around")
  - `[REALITY_GLIMPSE]`: a servant glances in and looks away / nothing breaks the illusion / a Council member writes a memo
  - `[MIKAS_TOAST]`: "to the city we built" / "to my friends" / silent

---

## 8. CANONICAL DEFAULT FLAGS (Chapter Select)

When a player picks "Start Again from age N," the engine loads these flag states.

### 8.1 Start from Age 15 (Thebes)
All flags = default (zero/false). Fresh game.

### 8.2 Start from Age 16 (Skiritai)
- `corruption = 10`
- `madness = 0`
- `relationship_bran = 6`
- `relationship_quinn = 7`
- `relationship_niko = 6`
- `mika_visited_bran_15 = true`
- `mika_searched_quinn_15 = true`
- `mika_signed_morale_report = true`
- `act_1_focus = "double"`
- All survivals = true

### 8.3 Start from Age 17 (Achaean)
- Above, plus:
- `corruption = 30`
- `madness = 5`
- `relationship_sophie = 5`
- `mika_close_to_sophie = true`
- `mika_investigated_quinn_16 = true`
- `mika_visited_niko_16 = false`
- `mika_fired_on_dissenter = true` (wound, not kill)
- `act_2_focus = "double"`

### 8.4 Start from Age 18 (Agema)
- Above, plus:
- `corruption = 55`
- `madness = 15`
- `relationship_jason = 6`
- `relationship_kaden = 4`
- `mika_understands_jason = true`
- `mika_first_assassination_clean = true`
- `kaden_conspiracy = false`
- `killed_jason_clean = true`
- `survived_jason = false`
- `act_3_focus = "double"`

### 8.5 Start from Age 19 (Hetairoi)
- Above, plus:
- `corruption = 75`
- `madness = 25`
- `vespera_interest = 5`
- `mika_courted_vespera = true`
- `mika_saved_kaden = false`, `mika_used_kaden = false` (i.e., he abandoned Kaden — the canonical "default sad" path)
- `survived_kaden = true` (in slow decline)
- `mika_final_visit_neighborhood = true`
- `betrayed_sophie_first = false`, `betrayed_sophie_back = true`
- `survived_sophie = false`
- `act_4_focus = "double"`

---

## 9. NODE ID REFERENCE INDEX

### Act I (Thebes)
- `t1.1` Arrival
- `t1.2` Hub
- `t1.3a` Visit Bran (sub: `_truth`, `_lie`, `_silent`)
- `t1.3b` Search Quinn (sub: `_close`, `_safe`)
- `t1.3c` Train (sub: `_thank`, `_brush`)
- `t1.4` Meeting Kaden (sub: `_trust`, `_guarded`, `_mock`)
- `t1.5` Morale Report (sub: `_refuse`, `_report`)
- `t1.6` Memory: Quinn's File
- `t1.7` Promotion to Skiritai

### Act II (Skiritai)
- `t2.1` Promotion / Meet Sophie (sub: `_warm`, `_distant`)
- `t2.2` Hub
- `t2.3a` Build w/ Sophie (sub: `_real`, `_perform`)
- `t2.3b` Investigate Quinn (sub: `_message`, `_note`)
- `t2.3c` Visit Niko (sub: `_lie`, `_partial`, `_truth`)
- `t2.4` First Detention (forced)
- `t2.5` Climax: Fire (sub: `_kill`, `_wound`, `_refuse`, `_shoot_co`)
- `t2.6` Memory: Walking with Bran
- `t2.7` Promotion to Achaean

### Act III (Achaean)
- `t3.1` Jason's Office (sub: `_open`, `_deflect`, `_lie`)
- `t3.2` Hub
- `t3.3a` Conversations w/ Jason (sub: `_argue`, `_agree`, `_perform`)
- `t3.3b` First Assassination (sub: `_clean`, `_messy`, `_fake`, `_abort`)
- `t3.3c` Kaden's Plan (sub: `_agree`, `_resist`, `_use`)
- `t3.4` Quinn Resurfaces (sub: `_leverage`, `_alive`, `_dead`, `_dead_shock`)
- `t3.5` Memory: Quinn's File Replayed
- `t3.6` Climax: Kill Jason
- `t3.7a–e` Kill variants (Clean, Messy, Convert, Refuse-die, Sophie-does-it)
- `t3.8` Promotion to Agema (variant: `_demoted`)

### Act IV (Agema)
- `t4.1` Signing Kill Orders (sub: `_pause`, `_move`)
- `t4.2` Hub
- `t4.3a` Vespera's Audience (sub: `_ambition`, `_idealism`, `_approval`, `_lie`)
- `t4.3b` Kaden Breaking (sub: `_save`, `_use`, `_abandon`, `_mercy`)
- `t4.3c` Final Visit Home (compound choices for Bran + Niko)
- `t4.4` Trial Briefing (forced)
- `t4.5` Memory: Sophie Laughing
- `t4.6` Climax: Sophie's Betrayal
- `t4.7a–e` Trial outcomes (Betray-back, Expose, Win-clean, Accept, Sabotage)
- `t4.8` Promotion to Hetairoi

### Act V (Hetairoi)
- `t5.1` First Council Meeting (sub: `_with`, `_against`)
- `t5.2` Hub
- `t5.3a` Quinn File (sub: `_close`, `_sign`, `_leave`)
- `t5.3b` Confront Vespera (sub: `_accept_grateful`, `_accept_aware`, `_refuse`, `_delay`)
- `t5.3c` Reach Out to Bran (sub: `_warn`, `_protect`, `_cut`, `_truth`)
- `t5.4` Surveillance Vote (sub: `_yes`, `_no`, `_abstain`)
- `t5.5` Memory: The Ultimatum Replayed
- `t5.6` ENDING SWITCH (5 cases route to one of 15 endings)

### Endings
- `e1` Worse than Vespera
- `e2` Equal to Vespera
- `e3` Vespera's Heir
- `e4` Pyrrhic Reformer
- `e5` Self-Aware Tyrant
- `e6` Killed by Jason
- `e7` Executed by Council
- `e8` Killed by Sophie
- `e9` Killed by Kaden
- `e10` Killed by Vespera
- `e11` Suicide
- `e12` Becomes Kaden
- `e13` Paranoid King
- `e14` The Ghost
- `e15` The Believer

---

## 10. SIGN-OFF CHECKLIST

Before I move to Phase 3 (writing actual prose for all 70 nodes), confirm:

- [ ] Act-by-act structure feels right
- [ ] Each act's hub activities make sense
- [ ] Each act's climactic decision is the right pivot
- [ ] Memory flashbacks land at the right moments
- [ ] Ending decision matrix logic is sound
- [ ] Flag schema covers what we need
- [ ] Canonical defaults for chapter select feel reasonable

If yes — I move to writing all the prose. If anything's off — easier to fix now than after 60 pages of text exist.

---

*End of v1 Choice Tree — Sapros*
