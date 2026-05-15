# SAPROS — Endings (15 templates with variation slots)

> **Voice notes:** Mika is nineteen (or older, in epilogues). The voice is finished. Some endings are reflective; some are flat. The variation slots — flagged in `[BRACKETS]` — are filled by the engine per the player's flag state. Each variation slot has 2–6 possible fills.
>
> **Note:** Early-act endings (#6, #7, #11 light variants) already have specific text inside the Act files for the Skiritai/Achaean death routes. The text below is the *Act V terminal* version of each ending, which is what fires after the ending switch (`t5.6`). Where the same ending number can fire from multiple acts, the text below is the full version, and the Act-text is a smaller slice.

---

## ENDING 1 — WORSE THAN VESPERA

**Node ID:** `e1`
**Image:** `ending_worse_than_vespera.webp`
**Triggered when:** `final_choice == "coup"` AND `corruption ≥ 80` AND `killed_jason == true` AND (`survived_sophie == false` OR `betrayed_sophie_first == true`); OR `final_choice == "reform"` AND `corruption ≥ 75`.

---

I moved on her in the spring.

The coup was clean. I had been planning it for two months, with people she had not been watching, and the people had been chosen specifically because they had grievances with her that I had identified and offered to *resolve.* When the move came it took ninety minutes. She did not even reach the chamber. She was dead in her own parlor, near the dove-grey winter flowers, with a half-cup of tea.

I sat in her chair the next morning.

I held the first session of the new Council, and I had — already, on the way in — drafted four resolutions. The first reorganized the Hetairoi from five seats to seven, which would, over time, dilute the old families. The second expanded the file system from civilians to Knights *and* to internal Council deliberations. *Total transparency,* I said in the chamber, and the new Hetairoi clapped because the new Hetairoi were the people I had elevated and the people I had elevated owed me. The third reform created a new investigative body, accountable directly to the head of the Council. To me. The fourth made the head of the Council a permanent rather than rotating role.

I had reformed the Council.

The reformed Council had, by year three, more files open than the old one had had in twenty years. The new investigative body, accountable to me, had begun handling cases that — by Vespera's old standards — would have been *escalations.* I had streamlined the escalations. I was, in many ways, more efficient than she had been. The work was clean. The numbers improved. I could point to specific outcomes — fewer riots, fewer disappearances of the wrong kind of person, a falling crime rate in the third Quadrant — and the points were real.

[KADEN_FATE]

[QUINN_FATE]

[NIKO_FATE]

[BRAN_FATE]

[SOPHIE_FATE]

[AWARENESS]

[Start Again] → chapter select

---

### Variation slot fills — Ending 1

**[KADEN_FATE]**
- *if `survived_kaden == false` and `kaden_path == "mercy_killed"`:* Kaden had been gone four years. I had killed him with his hand in mine. I have not, in any of the years since, found another room like that one. I have not, in any of the years since, looked for one.
- *if `survived_kaden == false` and `kaden_path == "abandoned"`:* Kaden was buried in a small Knights' plot in the third Quadrant. The official record said suicide. I had not visited the grave. I would not visit the grave.
- *if `survived_kaden == false`:* Kaden had been dead for years. The grave was somewhere I did not visit.
- *if `survived_kaden == true` and `kaden_path == "saved"`:* Kaden was alive. He worked, in a low-pressure Knights' administrative post, in a Quadrant I had assigned him to. I had not seen him in a long time.
- *if `survived_kaden == true`:* Kaden was alive somewhere. I had stopped checking.

**[QUINN_FATE]**
- *if `closed_quinn_file == true`:* Quinn was alive in a small Quadrant town, under a different name, doing repair work. He did not know it had been me. I never told him.
- *if `signed_quinn_file == true`:* I had signed his file. I do not, even now, remember signing it. I had signed many things by then.
- *if `survived_quinn == false`:* Quinn had been dead for years. He had died before I had the rank to save him. I had told myself, at the time, that I had been working on it.
- *if `survived_quinn == true`:* Quinn was alive somewhere. I never tried to find him.

**[NIKO_FATE]**
- *if `survived_niko == false`:* Niko had died in a labor protest two years before. I had read the report. The report had been signed by an Agema I had myself promoted.
- *if `niko_knows_truth == true` and `survived_niko == true`:* Niko was alive in the second Quadrant. He hated me. He was right to.
- *if `survived_niko == true`:* Niko was alive. He was a stranger now. I assume he is a stranger still.

**[BRAN_FATE]**
- *if `bran_knows_truth == true`:* Bran had told me, the last time we spoke, that he loved me and would not see me again. He had kept his word.
- *if `bran_in_hiding == true`:* Bran was in hiding somewhere. He had taken my advice. He had not written.
- *if `bran_cut_off == true`:* Bran was alive. I had not spoken to him in years. I had told myself this was for his safety. The lie was old by now.
- *if `bran_offered_protection == true`:* Bran wrote sometimes. The letters were polite. They did not ask anything of me. They did not give anything either.
- *if `survived_bran == false`:* Bran was on a list I had — at some point in the long blur of paperwork — approved.
- *default:* I had not spoken to Bran in years.

**[SOPHIE_FATE]**
- *if `survived_sophie == false` and `betrayed_sophie_back == true`:* Sophie was buried in a Knights' plot in the Capitol. I had attended the funeral. I had told her father I was sorry. I had not been sorry. I had been efficient.
- *if `survived_sophie == false`:* Sophie was dead. There was a plot.
- *if `survived_sophie == true` and `exposed_sophie_publicly == true`:* Sophie did not speak to me again. She lived a small life in a small office in a small Quadrant. She was alive. We had not exchanged a word in years.
- *if `survived_sophie == true`:* Sophie was alive. We had not spoken.

**[AWARENESS]**
- *if `mika_self_aware ≥ 5`:* I knew what I had become. I noticed, in the chair, that I did not mind. The boy in the hallway had been a different person. I had become the man who kept the door.
- *if `mika_self_aware ≥ 3`:* Sometimes, late, I noticed that the city was, by every measure I had once cared about, worse. I noticed it. The noticing did not change my hand on the pen.
- *default:* The numbers were good. The city was running. I had, by every metric I now used, succeeded.

---

## ENDING 2 — EQUAL TO VESPERA

**Node ID:** `e2`
**Image:** `ending_equal_to_vespera.webp`
**Triggered when:** `final_choice == "coup"` AND `corruption ≥ 60` AND `killed_jason == true` AND not the higher thresholds for #1.

---

I moved on her. The coup was successful.

I expected the chair to feel different.

It did not.

I had, in the years I had spent climbing toward this room, imagined the chair as a kind of summit — that to sit in it would be to *change* in some final way, to become whatever it was Vespera had been when I'd first walked into her chambers and she had poured me tea.

I sat in it. I waited.

I felt the same way I had felt the day before. The same way I had felt the year before. I made the small calibration of the chair height — Vespera had been taller — and I picked up the morning's docket and I read the first item.

The first item was a sentencing review. The sentence the Council recommended was the same sentence Vespera would have recommended. I voted for it.

The second item was a budget reallocation. I voted for it.

The third was a flag review. I read the file. I checked the box. I signed.

The day went on. The week went on. The month went on. The Council I had taken over by violence was, in every one of its operational details, the same Council that had been there the year before. The names had changed. The chair had been recalibrated. The architecture had not changed. The work was the work. The work would always be the work.

I had inherited the seat. I had not inherited a different *kind* of seat.

[KADEN_FATE]

[QUINN_FATE]

[BRAN_FATE]

[NIKO_FATE]

[SOPHIE_FATE]

I sit, now, in Vespera's old chair. I run a Council that runs the way her Council ran. I am, on the level of the body, exhausted in ways that do not yet show. I will, in a few years, learn how to hide the exhaustion. I have a teacher, in this respect. I had her killed. I keep, in my desk drawer, a small handwritten note she sent me once. *Welcome home,* it says. I read it sometimes. I am not sure why.

[AWARENESS]

[Start Again] → chapter select

---

### Variation slot fills — Ending 2

*Same fate slots as Ending 1 (KADEN, QUINN, NIKO, BRAN, SOPHIE).*

**[AWARENESS]**
- *if `mika_self_aware ≥ 5`:* I know I am her. I have known for some time. The knowing has not, in the end, changed what I do at this desk. It has only made the desk *clearer.*
- *if `mika_self_aware ≥ 3`:* On some mornings I notice the symmetry. I do not, on those mornings, do anything different. The symmetry passes. The work continues.
- *default:* The work continues. I have not, in some time, asked what the work is for.

---

## ENDING 3 — VESPERA'S HEIR

**Node ID:** `e3`
**Image:** `ending_vesperas_heir.webp`
**Triggered when:** `final_choice == "heir"` AND `mika_self_aware < 5`.

---

The transition took three years.

She kept her word. The handover was slow. The quiet meetings continued. The walks on the high balcony — the same balcony where Jason had once walked with me — became, in my last year as an Agema-track Hetairoi, a weekly fixture. Vespera and I, side by side, looking down at the city. She would point at things. She would tell me, in the way only she told things, what they were *for.* I would listen.

She was, in many of those conversations, kind to me.

I would think, later, that *kindness* and *grooming* were words for the same activity, applied at different distances. Up close they were indistinguishable. From far enough away they came apart. I did not, in those three years, take the far-away view.

She retired in the autumn. The ceremony was small. I sat in her chair the morning after. I did not feel different. I had, by then, not expected to.

[VESPERA_REVERENCE]

[KADEN_FATE]

[QUINN_FATE]

[BRAN_FATE]

[NIKO_FATE]

[SOPHIE_FATE]

She visits sometimes. She is, even retired, a presence in the chambers. The other Hetairoi know who I learned from. I have not, in the years since, made any decision she would have made differently.

I am not sure whether that is loyalty.

I think it is mostly habit.

[Start Again] → chapter select

---

### Variation slot fills — Ending 3

**[VESPERA_REVERENCE]**
- *I revere her. I always have. I always will. I am, in the chair, her work, and the work is good.*
- *I respect her. I am not sure I have ever, in any clean way, loved her. The respect is enough. The respect is more than I have given anyone else.*
- *I love her like a mother. My own mother is alive somewhere. I have not seen her in years. The substitution was not deliberate. It was efficient.*

*Other slots same as Endings 1 and 2.*

---

## ENDING 4 — PYRRHIC REFORMER

**Node ID:** `e4`
**Image:** `ending_pyrrhic.webp`
**Triggered when:** `final_choice == "reform"` AND `corruption < 75` (with sub-cases at 50–60 and below 50).

---

I proposed the reform six weeks after the surveillance vote.

The reform was real. It dismantled, in stages, the worst of Vespera's architecture. It abolished the *associative dissent* category outright. It returned three Quadrants to a baseline of unmonitored privacy. It opened the file system, partially, to public review. It freed several thousand people who, like Quinn at fifteen, had been quietly held for years on technicalities.

The Council fought me. I won. The winning took eighteen months.

The reform passed.

I gave a speech from a podium in the Capitol plaza. I had written it myself. It was, by speech standards, restrained. I did not mention Vespera. I did not mention the boy in the hallway. I did not, in any way, *celebrate.* I said the work was beginning. I said it would take a long time. I said we would, all of us, have to carry it.

I came down from the podium.

[REFORM_SCOPE]

[NEW_ENEMIES]

The reform also created — because all reforms create — a new category of *enemy.* The word the Council used for them was *destabilizers.* The destabilizers were, mostly, the people who had been *stabilizers* under the old regime. Some of the destabilizers I knew personally. Some of them I had, at one point, called colleagues. The new investigative body — staffed by my people, accountable to me — began processing the destabilizers with a quiet efficiency that, by the end of my second year as Council head, looked very similar to what the old regime had looked like, with different names on the lists.

I had reformed the system.

The system had reformed me back.

[KADEN_FATE]

[QUINN_FATE]

[BRAN_FATE]

[NIKO_FATE]

[SOPHIE_FATE]

[MIKAS_AWARENESS]

[Start Again] → chapter select

---

### Variation slot fills — Ending 4

**[REFORM_SCOPE]**
- *if `voted_against_surveillance == true`:* The exemption for the Knights was preserved. Surveillance ended for two Quadrants. The third stayed.
- *if `won_without_retaliating == true`:* The reform extended further than I had hoped. Surveillance ended for all Quadrants. The Knights remained exempt.
- *default:* The reform was partial. The surveillance ended in some Quadrants. It was preserved in others. The compromise was the price of passage.

**[NEW_ENEMIES]**
- *if `survived_niko == true and relationship_niko ≤ 4`:* Niko's name was on the new lists. He had organized too publicly. He had not stopped. He was processed by my new body, by my new procedures, in my reformed system. The reform, for Niko, was indistinguishable from the system that had come before.
- *default:* The new enemies were people I had, at fifteen, been told the system existed to protect. The lists were shorter than they had been. The lists existed.

**[MIKAS_AWARENESS]**
- *if `mika_self_aware ≥ 5`:* I know what the reform was. I know what it was not. I sit, in the new chair, and I run the new Council, and the new Council is — by every metric I had at fifteen — a substantial improvement. I know, also, that the substantial improvement does not redeem the cost of getting here. I do not pretend it does. I do the work anyway.
- *default:* The numbers are better. The numbers are not all the way to where I would have wanted. I tell myself this is the nature of reform. I am, possibly, right.

*Other slots same as Endings 1, 2, 3.*

---

## ENDING 5 — SELF-AWARE TYRANT

**Node ID:** `e5`
**Image:** `ending_mirror.webp`
**Trigger lock:** `mika_self_aware ≥ 5`. Routes through whichever ending base (1, 2, 3, or 4) the player would otherwise have hit.

---

I ended up in the chair.

The route here was [BASE_ENDING_TYPE] — [BASE_ENDING_DESCRIPTION] — and the route, in the end, was less important than the place it brought me to.

The place was an office. A high office. A polished black desk, an expensive chair, a long window onto the Capitol. There was a mirror on the back wall. I had had it installed. I had instructed the artisan, when he installed it, that the mirror should be tall and narrow and set into the wall in a way that, from most angles, would make it look like a door. He had not asked me why. I had paid him well.

I look at the mirror, sometimes.

The face in the mirror is the face of a man who has finished. The face is twenty-three, now, or twenty-six, or thirty — the years compress, in this office, the way Vespera once told me they would. The face is always deciding. The face is always the face I had at the white room investiture, only older, and more itself.

I know what I am.

I knew on the way up. I knew at every turn. I knew when I killed Jason. I knew when I betrayed Sophie. I knew when I let Kaden break. I knew when I signed the things I have signed. I knew when I sat in the chair.

I know, sitting in it now.

It has not changed anything. The knowing has been, all along, the small private religion that allowed me to keep going. *He knew.* I told myself this, on the worst days. *He saw it clearly.* As if the seeing made me different from Vespera. As if the seeing was a kind of resistance.

It was not. Vespera saw too. She saw better than I did. She had told me so, four years before, in her parlor, with the dove-grey flowers.

The seeing is not the resistance.

The hand on the pen is the only resistance.

I have, every day for years, picked up the pen.

[KADEN_FATE]

[QUINN_FATE]

[BRAN_FATE]

[NIKO_FATE]

[SOPHIE_FATE]

[FINAL_LINE]

[Start Again] → chapter select

---

### Variation slot fills — Ending 5

**[BASE_ENDING_TYPE / BASE_ENDING_DESCRIPTION]** *(filled by which underlying ending — 1, 2, 3, or 4)*
- *coup, harsh:* a coup. I killed her. The Council I built is worse than hers.
- *coup, default:* a coup. I killed her. The Council I run is the same as hers.
- *heir:* succession. She handed me the chair. I sit in it the way she sat in it.
- *reform:* reform. The system I built is not the one I broke. It is, in many ways, the same shape, with different paint.

**[FINAL_LINE]**
- *I straighten my collar. I sit down. The next file is on the desk.*
- *I look at the mirror once. I go back to the work.*
- *I laugh once. The laugh is short. The laugh is not happy. It is enough.*

*Other slots same as Endings 1–4.*

---

## ENDING 6 — KILLED BY JASON

**Node ID:** `e6`
**Image:** `ending_jason.webp`
**Triggered when:** `t3.7d` (lower the gun) is taken.

---

I lowered the gun.

I tried to. The hand started the motion. The arm was almost halfway down, and I was already, in some part of myself, beginning to feel the relief of *not having done it,* when Jason's other hand came up from under the desk with the small black sidearm he had been carrying for nine years.

He was not surprised. He was sad.

He fired once. I went down on the rug in front of his desk.

He came around the desk. He knelt. The kettle was still on the hot plate. The window was the color of old paper.

[JASON_FAREWELL]

I tried to say something. I had several things I wanted to say. Bran's name was one of them. Quinn's was another. There was a third I do not remember.

I didn't get to any of them.

[BRAN_AFTERMATH]

[QUINN_AFTERMATH]

I was seventeen. The boy I had been at fifteen, in the hallway, would have understood — better than I would, in this last moment — what was about to happen. He had been clearer. He had not yet been trained out of clarity. I tried to find him, in the small bright shrinking room of myself, in those last seconds.

I do not know if I found him. The body shut off before I could be sure.

[Start Again] → chapter select

---

### Variation slot fills — Ending 6

**[JASON_FAREWELL]**
- *if `relationship_jason ≥ 7` and `mika_understands_jason == true`:* He said, "We both knew this was where it was going. I'm proud of you, for the part where you tried." He held my hand at the end. He said, "I'm sorry." It was the second time, in two minutes, that he had said it.
- *if `mika_understands_jason == true`:* He said, "I'm sorry. You were so close." He sounded, in the saying, like a man who had hoped he would not have to.
- *default:* He said, "I'm going to tell them you came at me. I owe you that much." He did not look at me as he said it. He was already drafting the report in his head.

**[BRAN_AFTERMATH]**
- *if `bran_knows_secret == true`:* Bran would, eventually, find out. He would not be told at first. He would piece it together. He had been piecing things together for years.
- *default:* Bran was told I had died honorably in the line of duty. He believed it. He was twelve. He cried for a week. He never asked for details.

**[QUINN_AFTERMATH]**
- *if `survived_quinn == true`:* Quinn was, at the moment of my death, alive in a third-Quadrant facility. He stayed alive. The file stayed open. Years passed. The file eventually closed itself.
- *if `survived_quinn == false`:* Quinn was already dead. I had not, in the end, made it in time.

---

## ENDING 7 — EXECUTED BY THE COUNCIL

**Node ID:** `e7`
**Image:** `ending_executed.webp`
**Triggered when:** `final_choice == "resist"`; or earlier act variants (`t1.5_report`, `t2.5_refuse`, `t2.5_shoot_co`, `t4.7e`, `t5.6` resist).

---

[CRIME_SETUP]

The room was small. Grey. There was a single chair in the center. There were two Knights. There was a quiet man with a clipboard.

I had time, in the chair, to think.

I thought about the boy in the doorway. I thought about Bran. I thought about Quinn. I thought about Jason, briefly, who had been dead for [JASON_TIME]. I thought about how strange it was, after all of it, to be sitting here in a chair in a basement, after planning so much, while a man with a clipboard read the procedural language of my removal in a tone that had been used for many other men in this same chair.

The man finished reading.

He nodded at one of the Knights. The Knight stepped forward.

[FINAL_THOUGHT]

[LEGACY]

[BRAN_HEARS]

[FRIEND_AFTERMATH]

[Start Again] → chapter select

---

### Variation slot fills — Ending 7

**[CRIME_SETUP]**
- *if `final_choice == "resist"` (Act V):* I stood on the floor of the chamber. I refused the vote. They removed me. The removal was, by any measure, public.
- *if `t4.7e` (sabotage trial):* I had broken the trial. The Council had needed three days to decide what to do with me. They had decided.
- *if `t2.5_shoot_co`:* I had shot my CO and let a runner escape. They had hunted me for a day and a half.
- *if `t2.5_refuse`:* I had refused to fire. The CO had decided in the field.
- *if `t1.5_report`:* I had reported an order. Vell had taken me to his superior. The night had been long.

**[JASON_TIME]**
- *if `survived_jason == false`:* two years
- *if `survived_jason == true`:* I had not killed Jason. He was alive somewhere, signing reports. He would, possibly, sign mine.

**[FINAL_THOUGHT]**
- *I thought about the rice. The afternoon Bran and I had eaten the rice and corrected fractions. It was a Tuesday. The kind of small clean Tuesday a person should have more of.*
- *I thought about Quinn, at the upper east stairs, waiting for me. He had waited the full twenty minutes. He had eventually given up. He had walked home alone.*
- *I thought about the boy in the doorway. I told him I was sorry. I think he understood.*

**[LEGACY]**
- *if `legend == true` (set by `t2.5_shoot_co`) or sabotage path:* The story of what I had tried to do traveled by mouth in two Quadrants for a year before it was forgotten. I never knew. Some of the people whose names I had failed to save lived because of the failure. They never knew either.
- *default:* I did not become a legend. I did not become a story. The Council's records noted the removal in a single sentence. The sentence was accurate.

**[BRAN_HEARS]**
- *if `bran_knows_truth == true`:* Bran knew what I had done. He had known for some time. The official cause of death he was told did not change what he already knew. He did not, when he heard, cry. He had finished crying.
- *default:* Bran was told I had died honorably. The officer who told him was practiced at this. Bran believed enough of it to function.

**[FRIEND_AFTERMATH]**
- A short paragraph filled per `survived_quinn`, `survived_niko`, `survived_kaden`, `survived_sophie`, `survived_jason` — listing, briefly, who else was alive on the day of the execution and who was not. The list is meant to land like a final accounting.

---

## ENDING 8 — KILLED BY SOPHIE

**Node ID:** `e8`
**Image:** `ending_sophie.webp`
**Triggered when:** `t4.7a` is taken AND `relationship_sophie ≤ 2`.

---

I had given Ilse Sophie's coordinates.

I had been clever. I had been, by my own measure, *very* clever. I had thought it through. I had not thought it through enough.

Sophie had been clever first.

She had not, I would learn later, been blindsided by my retaliation. She had been *expecting* it. She had set up Ilse's entire approach as a feint — a trap she had wanted me to walk Ilse into. When I had sent Ilse the encrypted line, Sophie had been waiting, and Sophie had been waiting at the precise window where my own forward squad was exposed.

Sophie killed me at 04:23. The same minute the operations committed.

She did it personally. She broke from her squad. She came up the corridor where I had positioned my command post. She had an unsuppressed sidearm. She did not, in the corridor, say anything before firing.

She did not need to.

I had, four years before, not understood what kind of girl Sophie really was. I had, at fifteen, looked at her loud unselfconscious laugh and concluded she was a particular kind of person. I had been wrong about the kind. The kind I had concluded was a kind that, for Sophie, had been a *performance.* Underneath the performance was a different person. The different person was the one who came up the corridor that night.

[BETRAYAL_PRECISION]

[SOPHIES_REGRET]

[KADEN_FATE]

[QUINN_FATE]

[BRAN_FATE]

[NIKO_FATE]

[Start Again] → chapter select

---

### Variation slot fills — Ending 8

**[BETRAYAL_PRECISION]**
- *She had been planning it for months. She had read me the way a person reads a book they have already read once.*
- *She had improvised. The operation had given her an opening she had not been looking for, and she had taken it. The improvisation had been, in its way, the cleanest moral move available to her, and she had recognized it in real time.*

**[SOPHIES_REGRET]**
- *She did not look back.*
- *She paused, for half a second, after the last shot. Then she walked away.*
- *She returned, that night, to the body. She was alone. She sat with it for an hour. No one ever knew.*

---

## ENDING 9 — KILLED BY KADEN

**Node ID:** `e9`
**Image:** `ending_kaden_kills.webp`
**Triggered when:** Late Act IV/V if `relationship_kaden ≤ 0` AND `survived_kaden == true` AND `madness ≥ 60`.

---

He was waiting in the corridor outside my office.

He had not, by all accounts, slept in five days. He had, in the previous weeks, behaved erratically enough that several Knights had logged complaints. The complaints had been routed to me. I had not done anything about them. I had been busy. *Busy* was the word I had been using for the kind of attention I had been refusing to give Kaden for some time.

He had a knife.

He did not have a gun. He could have had a gun. He had chosen the knife. The knife meant — by the small private grammar of Knights' work — that this was personal. The knife was the tool you used when you wanted a man to look at you.

He looked at me.

The cracked eyes did, for one full second, something I had not seen in a year. They became *clear.* The clarity was the boy at the mess hall, three years before, telling a stranger to eat his rice. The boy had been, all along, somewhere underneath. He surfaced for the moment of his last act.

He said, "I told you to eat lunch first, Just Mika."

I had time, in the corridor, to be glad it was him. I had been ready, for a long time, for it to be someone else. Some stranger. Some Council operative. Some ambitious Agema. It would have been worse if it had been one of those. The clarity in his eyes, at the end, was a kind of mercy I had not earned, and would not have asked for, and could not refuse.

[KADEN_STATE]

[POST_EVENT]

[KADEN_FAREWELL]

[Start Again] → chapter select

---

### Variation slot fills — Ending 9

**[KADEN_STATE]**
- *He was lucid for the moment. The clarity was complete. He had, somehow, gathered himself for this one act.*
- *He was not lucid. He was acting on a private logic the cracked mind had assembled. The logic was not, however, wrong. The logic had identified the correct target.*

**[POST_EVENT]**
- *Kaden did not survive the corridor. The Knights' guards came within two minutes. He did not resist. They shot him. He died beside me. We had, in the end, made it to the same room.*
- *Kaden killed me and walked out. They did not catch him for three weeks. When they did, they did not bring him in alive.*
- *Kaden killed me and disappeared. He was never officially found. Years later there were rumors of a thin man, in one of the smaller Quadrants, who was not quite well, who had once been a Knight. The rumors may have been him. They may have been someone else.*

**[KADEN_FAREWELL]**
- *He held my hand. He did not let go. The same way I had not let go of his, the night I had killed him in the apartment, in a different version of this story.*
- *He did not touch me after the knife. He sat against the wall and watched. He wanted to be sure. He was thorough about it.*

---

## ENDING 10 — KILLED BY VESPERA

**Node ID:** `e10`
**Image:** `ending_vespera.webp`
**Triggered when:** `final_choice == "coup"` AND `vespera_targets_mika == true`; OR coup attempt fails generally.

---

The coup did not work.

She had been watching me for years. She had been, specifically, watching the people I had been quietly building alliances with. Three of them were her people. I had been recruiting her people into my coup. She had let me. She had, in some way, *encouraged* me, by leaving small careful openings she had known I would walk into.

When I moved, she moved first.

It was over in eleven minutes. I was taken at the chamber door. I was not taken to a basement. I was taken to her chambers. She had the dove-grey flowers. She had the tea. She poured.

She did not look angry. She looked, mostly, *disappointed* — the same disappointment from the day I had refused her offer, only deeper, and final.

She said, "I thought you would be smarter, Mika."

I drank the tea.

[METHOD]

[VESPERA_LINE]

[KADEN_FATE]

[BRAN_FATE]

[Start Again] → chapter select

---

### Variation slot fills — Ending 10

**[METHOD]**
- *The tea was poisoned. I had drunk it before I had registered the possibility. It was a quiet poison. I had eight or ten minutes.*
- *She had her guards waiting outside. After we had finished the conversation, she nodded to them. They came in. The work was efficient.*
- *She did it herself. She had a small silver instrument. She did it as gently as such things can be done. She made the appropriate cuts. She held my hand, briefly, while it was happening. I had not been expecting that.*

**[VESPERA_LINE]**
- *"I was you, Mika. I told you, the first time we sat here, that I knew how it ended. You did not believe me."*
- *She did not say anything. She drank her tea. She watched the window.*
- *"I'm sorry. I am, actually. There have not been many of you. There won't be many more."*

---

## ENDING 11 — SUICIDE

**Node ID:** `e11`
**Image:** `ending_suicide.webp`
**Triggered when:** `final_choice == "break"` AND certain madness/corruption thresholds; or rare path mid-Act V.

---

Dawn.

I had been at the desk all night. The folders were still there. Vespera's note. The Quinn file, *(if survived_quinn)*. Bran's letter, *(if survived_bran)*. The drafted reform proposal in the drawer. The intelligence on Vespera in another drawer.

I looked at all of it, one more time.

I did not, on the looking, find what I had been looking for. I had been hoping that one of the four routes would, in the morning light, reveal itself as the one I could *live with.* None of them did. They were all routes to versions of myself I had already, in essence, become.

There was a fifth option.

I had known it was there for a long time. I had not let myself look at it.

I looked at it now.

The fifth option had a kind of clarity that the other four did not. It was not, in any sense, *redemption.* It was simply *cessation.* The boy in the hallway, four years before, had not, in the end, survived to nineteen. The man at the desk was a different man. That man had, perhaps, no further reason to continue. The continuance had become an inertia.

I wrote a letter.

[NOTE_LEFT]

I did not leave it where it would be found by the Council. I left it where it would be found by exactly one person, whose name was on the envelope.

I went to the window. The Capitol was quiet. The light was coming up in the long slow way it does in the spring, the way that, when I had been twelve, I had loved.

[FINAL_THOUGHT]

[Start Again] → chapter select

---

### Variation slot fills — Ending 11

**[NOTE_LEFT]**
- *if `survived_bran == true`:* The letter was for Bran. It was three pages. It was the longest thing I had written in years. It said most of what I should have said in the cafe, and a few things I had not had the courage to say there. I told him I was sorry. I told him I had loved him all the way through. I told him that *all the way through* was, perhaps, not as much as he had needed, and that I knew this, and that I was sorry for it also. I sealed the envelope.
- *if `survived_kaden == true and kaden_path == "saved"`:* The letter was for Kaden. It was short. It said: *You were right. I should have eaten my lunch first.*
- *default:* The letter was a single line. *I'm sorry. — M.*

**[FINAL_THOUGHT]**
- *I thought about the rice. The Tuesday. The cracked tile. The dog at the second corner.*
- *I thought about Quinn, at fifteen, laughing at a joke about a teacher we had both disliked. He had been laughing in the cafeteria. The cafeteria had been bright. The light had been the best thing in the day.*
- *I thought about the boy in the hallway. I let him go. I had been holding him, in some private place, for four years. I let him go.*
- *I did not, in the end, think about anything in particular. The body went very quiet. The quiet was kind. The quiet was the kindest thing the body had done for me in a long time.*

---

## ENDING 12 — BECOMES KADEN

**Node ID:** `e12`
**Image:** `ending_becomes_kaden.webp`
**Triggered when:** `final_choice == "break"` AND `madness ≥ 70` AND `survived_kaden == true`; or `madness ≥ 80` at end of Act IV with demoted variant.

---

I did not commit to any of the four options.

I sat at the desk. The morning came. Then the afternoon. The Council met without me. I did not go. I did not, in any procedural sense, *resign* — I simply stopped showing up.

The Council, after several days, sent a delegation. The delegation was polite. They were prepared to give me time. They suggested *recovery leave.* I accepted.

I was placed in a small Knights' apartment in a quiet Quadrant, on a Council pension, with a quiet doctor visiting weekly. The apartment had a couch. The couch was empty. I sat on the floor.

I am twenty-two now. Or twenty-three. I lose track.

The people from the files do not visit me, the way they visited Kaden. I had been afraid they would. They have not. The room is quiet. I am, by some measure, well. By another measure I am not.

[KADEN_PRESENT]

[CARE]

[KADEN_FATE_REVERSE]

I sit on the floor. The couch is across the room. I look at it sometimes. I am not sure what I am looking for.

I think, sometimes, about the boy in the hallway.

I think, more often, about Kaden in the mess hall at fourteen, telling me to eat my rice. I had not, in the end, taken his advice. He had been right. He had been right about most things.

He had warned me in time, and I had not listened, and now I am doing the version of the breakdown he had done at twenty, and the symmetry is, in its way, almost peaceful.

Almost.

[Start Again] → chapter select

---

### Variation slot fills — Ending 12

**[KADEN_PRESENT]**
- *if `survived_kaden == true and kaden_path == "saved"`:* Kaden visits sometimes. He brings me food. He sits with me. We do not talk much. We do not need to. He is, in his quiet way, fine. Better than I am, probably.
- *if `survived_kaden == true and kaden_path == "abandoned"`:* Kaden is alive in a different Quadrant. We have not spoken in years. He does not know where I am. I assume he does not care.
- *if `survived_kaden == true`:* Kaden is alive somewhere. I have not seen him.
- *if `survived_kaden == false`:* Kaden has been dead for years. I am alone in the apartment.

**[CARE]**
- *if `survived_bran == true and bran_offered_protection == true`:* Bran writes. The letters are kind. He has not visited. I do not blame him.
- *if `survived_bran == true and warned_bran == true`:* Bran is alive somewhere. I do not know where. He writes, occasionally, through old courier routes. He does not say where he is.
- *if `survived_niko == true and relationship_niko ≥ 6`:* Niko visits, once a year. He does not stay long. He brings groceries.
- *default:* No one visits.

**[KADEN_FATE_REVERSE]**
- A short paragraph noting which version of the original Kaden ending I have, in fact, become. The reflection is the point.

---

## ENDING 13 — THE PARANOID KING

**Node ID:** `e13`
**Image:** `ending_paranoid.webp`
**Triggered when:** `final_choice == "coup"` AND `madness ≥ 70`.

---

The coup worked.

The Council I built was *thorough.* I had made sure, in the first six months, that no one in the original Council remained. I had also made sure that no one in *my* coup remained — the people who had helped me had, by the second year, been quietly redistributed to less central positions, and by the third year, several of them had been redistributed further, and by the fifth year a majority of the people who had known how the coup had been organized were no longer alive.

I sit, now, at the head of a Council of seven. I do not know all of them well. I do not want to.

I sleep with a sidearm under the pillow. I do not eat food I have not seen prepared. I do not drink anything I have not poured myself. The chambers are cleaner than they have ever been. The flowers are gone. I had the dove-grey flowers removed. I did not like the way they made me think.

Last week I had Sophie executed.

[VICTIMS]

The trigger for the next purge is always something small. A look. A delay in answering a question. A document that should have been on my desk by ten and was on my desk by ten-fifteen. The triggers compound. The list is never finished. The list is, perhaps, the *point* of being in this chair — the list is the work, and the work is what fills the days, and the days have to be filled.

[FINAL_LINE]

[Start Again] → chapter select

---

### Variation slot fills — Ending 13

**[VICTIMS]**
- A list filled per surviving cast at end of game. Examples: *Sophie was executed for "smiling wrong" at a session. Bran was executed because his name had been on a list I had not read carefully enough. Niko was executed in the third Quadrant after he turned up in a routine sweep — I had ordered the sweep, and I had not, by then, recognized the names.*
- The list is short or long, depending on who survived. The shorter the list, the more chilling — meaning either many had already died earlier, or Mika's purges have been unusually focused.

**[FINAL_LINE]**
- *A guard knocks. He has news. The news is always news.*
- *I have not slept in three days. The sleeplessness, by now, is a discipline. The discipline keeps me alive.*
- *I laugh, once, at something one of the Hetairoi has said. The laugh is hollow. I had not realized, until the laugh, that I had stopped laughing for real years ago.*

---

## ENDING 14 — THE GHOST

**Node ID:** `e14`
**Image:** `ending_ghost.webp`
**Triggered when:** `final_choice == "heir"` AND `madness ≥ 70` AND `relationship_bran ≥ 3`; or `final_choice == "break"` AND `madness ≥ 50`.

---

I sit at the desk.

I sign things. I read things. I attend meetings.

I do all of these activities to a high standard. The Council has, in the four years since I became its head, run smoothly. The other Hetairoi consult me. They respect my judgments. My judgments are precise and consistent and reasonable.

I do not feel anything.

I do not, in the precise sense of the word, *feel.* I have not, since the day I sat in this chair, experienced the small physical events that I had previously categorized as emotion. I do not get hungry, until the body reminds me. I do not get tired, until the body collapses. I do not, in any detectable way, get angry. The thing inside me that had been doing those things is no longer doing them. It is not, as far as I can tell, *gone.* It is simply no longer here.

I am, in the chair, a person-shaped administrative tool.

The administrative tool runs the city efficiently. The numbers, by every metric that the Council tracks, are good.

Last month, [VISITOR] came to the Hetairoi tower.

[RECOGNITION]

I had a guard escort them out.

[FINAL_LINE]

[KADEN_FATE]

[QUINN_FATE]

[Start Again] → chapter select

---

### Variation slot fills — Ending 14

**[VISITOR]**
- *if `survived_bran == true and `bran_offered_protection == false`:* Bran came. He was nineteen now, the same age I had been the day I sat in this chair. He had grown. He looked, in the corridor, like a stranger.
- *if `survived_niko == true`:* Niko came. He had aged. He looked tired. He had not been violent. He had, in fact, asked, very politely, to see me.
- *if both alive:* Bran came with Niko. They had traveled together. They had something to say.
- *default:* No one came. I had imagined someone coming. I had imagined it for some time.

**[RECOGNITION]**
- *I did not recognize them. I looked at them politely the way you look at a stranger in your foyer. After several seconds, the recognition flickered — half a second, no more — and then went out.*
- *I recognized them. I sat across from them. I did not say anything. They said several things. I did not respond. They eventually stopped speaking.*

**[FINAL_LINE]**
- *I went back to the desk. The next file was open.*
- *I looked at the empty chair across from mine. The chair stayed empty. The chair is, on most days, empty.*

---

## ENDING 15 — THE BELIEVER

**Node ID:** `e15`
**Image:** `ending_believer.webp`
**Triggered when:** `final_choice == "heir"` AND `madness ≥ 70` AND `relationship_bran < 3`; or `final_choice == "break"` AND severe flag combinations.

---

The dinner is at seven.

I have been preparing all afternoon. The cook has set the long table. The places are laid out. The wineglasses are filled. The candles are lit. The food is real. I had it brought up an hour ago. I oversaw the placement of the salt cellars myself.

The guests arrive at the appointed time.

[GUESTS_HE_IMAGINES]

I take my seat at the head of the table. I welcome them. I make the small joke I had prepared. They laugh. I pour the wine. I lift my glass.

[MIKAS_TOAST]

I drink. They drink. The dinner begins.

We talk for hours. We talk about old times. We talk about Bran's school. We talk about Niko's work. We talk about Quinn's hacker friends, who, I am pleased to report, have all done well for themselves. We talk about Sophie's daughter — Sophie has a daughter now, in this version of things, named Mika — and we agree that the name is sweet. We talk about Jason's retirement. We talk about Kaden's recovery. We talk about Lady Vespera, who has, against all expectations, *come around* in her old age and who sends me thoughtful letters about the work.

The dinner is the best evening I have had in a long time.

[REALITY_GLIMPSE]

The candles burn down. The guests rise to go. They thank me. I thank them. I make the small joke about how they should not be strangers. They laugh. They promise. They leave.

I clear the table myself.

I go to bed.

I will, in the morning, plan the next dinner. There is always another dinner. The dinners are the work, now, and the work is good, and the work is what fills the days.

[Start Again] → chapter select

---

### Variation slot fills — Ending 15

**[GUESTS_HE_IMAGINES]**
- A list of who Mika has imagined at the table. *Always* includes Quinn. Includes Bran (regardless of survival). Often includes Niko, Jason, Sophie, Kaden, Vespera. The text is identical regardless of who actually survived — Mika has imagined them all alive, well, fond of him, and present.

**[MIKAS_TOAST]**
- *"To the city we built."*
- *"To my friends."*
- *"To the long road home."*
- *I do not say a toast. I just lift the glass. They lift theirs. We drink.*

**[REALITY_GLIMPSE]**
- *A servant glances in. The servant sees a man eating alone at a long table set for nine. The servant looks away. The servant has been instructed not to mention it. The servant has been instructed not to mention many things.*
- *In another office, three floors down, a junior Hetairoi writes a memo about the decline of the Council's head. The memo is filed. It is not acted upon. It will, eventually, be one of the pieces of evidence used by my successor to justify what comes next.*
- *Nothing breaks the illusion. The dinner is, for me, complete. The illusion is the most accurate thing I now experience. I have stopped distinguishing.*

---

*End of Endings prose.*
