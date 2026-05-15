# SAPROS — Act I Prose (Thebes, age 15)

> **Voice notes for this act:** First-person past tense. Mika is 15, scared, trying to seem unbothered. Sentences shorter than they'll be later. Wry observations creep in but he doesn't trust them yet. He's still a kid who got caught.
> Mobile-readable: short paragraphs. ~200–350 words per node. Flashbacks shorter (~150).

---

## NODE `t1.1` — Arrival

**Image:** `t1.1_arrival.webp`

---

The Knight didn't talk on the drive.

He wasn't unkind about it. He just had a face that didn't seem to need talking. We took the elevated road into the Capitol, past the checkpoint, past the wall that I had only ever seen from the outside, and the city changed under the wheels. The streets I knew were narrow and warm and smelled like frying oil. The streets we drove now were wide and clean and had no smell at all.

I kept thinking he would say something. *"You'll get used to it."* Or *"Don't worry."* Or *"Your friend is fine."* He didn't. He didn't even glance at me. I suppose if you do this for a living you stop looking at the cargo.

Thebes barracks were on the eastern slope of the Capitol, low concrete buildings that had been a school once. You could still see the painted line for a basketball court in the courtyard, faded almost to nothing. A few other recruits were standing around with their bags. None of them looked like volunteers.

The Knight handed me off to a clerk who handed me a uniform that was a size too big and a bunk number. He said, "Lights at twenty-two-hundred. Up at five." Then he looked past me to the next one.

I sat on my bunk and held the uniform in my lap and tried not to think about Quinn.

There was a window. Outside the window, very far away, the lights of my old neighborhood were just visible past the wall.

I told myself I was here to fix it. I told myself I had a plan.

I was fifteen. I didn't have a plan.

**[Continue]** → `t1.2`

---

## NODE `t1.2` — The First Day Hub

**Image:** `t1.2_thebes_barracks.webp`

---

Morning. I had an hour before training. The barracks were quiet — most of the recruits were already on assignments, doing the kind of work nobody admits Knights do. Carrying boxes. Cleaning loading docks. The same labor any kid in any Quadrant did, but with a uniform on, which apparently made it different.

An hour. I could feel the hour like a weight in my hand.

I knew what I should do. The thing I'd promised myself in the car, watching the city change. The reason I'd told myself I was here. *Find Quinn. Help him. Get information.*

I also knew Bran was about a forty-minute walk away, sitting at our kitchen table doing schoolwork, alone, because nobody had told him anything.

And the senior recruits had been very specific in the briefing about how the smartest thing a new Thebes could do was *put his head down and work*.

Three things. One hour. I had to choose.

**Choices (any in any order, then "Continue"):**
- **Sneak home to see Bran.** → `t1.3a`
- **Try to find out what happened to Quinn.** → `t1.3b`
- **Throw yourself into training.** → `t1.3c`
- **(after at least 1) Continue.** → `t1.4`

---

## NODE `t1.3a` — Visit Bran

**Image:** `t1.3a_visit_bran.webp`

---

I changed out of the uniform in a public toilet two blocks from the barracks. Civilian clothes. Old jacket. Hood up. I felt absurd. I'd been a Knight for fourteen hours.

The walk home was the strangest thing I'd done in my life. Same streets. Same cracked tile in front of the bakery. Same dog at the corner. None of it knew I'd left.

Bran was at the kitchen table doing his fractions. He looked up. His face did the small bright thing it does, and then it did a smaller, more careful thing, because he is twelve and he's already learned that bright is dangerous.

He said, "I thought you were at your special program."

I sat down across from him. He pushed half his rice over to my side of the plate without looking at it.

I tried to figure out what I could say.

**Choices:**
- **"Tell him the truth — he can keep a secret."** → `t1.3a_truth`
- **"Lie — say everything's fine."** → `t1.3a_lie`
- **"Stay quiet, just sit with him."** → `t1.3a_silent`

---

### Sub-node `t1.3a_truth`

I told him.

Not all of it. Not Quinn's file. Not the Knight's voice in the hallway. But the shape of it — that I was at the Knights barracks, that I hadn't chosen to be there, that he could not say a word, not to anyone, not even Mom, especially not Mom, until I told him otherwise.

He listened the way he listens when he's deciding whether something is real.

Then he said, "Okay."

That was all. *Okay.*

I almost broke open right there. Twelve years old. *Okay.*

I was back at the barracks before training. Bran had eaten the rest of the rice himself.

**[Continue]** → `t1.2`

*Effects: `mika_visited_bran_15 = true`, `relationship_bran +2`, `bran_knows_secret = true`, `corruption -1`*

---

### Sub-node `t1.3a_lie`

I told him I was fine. I told him the program was hard but the food was good, which was a lie, and that I'd be home for visits, which I didn't know if was a lie. I told him to keep doing his fractions.

I watched myself doing it. The way you watch a stranger order something at a restaurant.

Bran nodded along. He didn't believe me. He knew the rule about bright things.

But he wanted to. And so he let me.

I left the apartment lighter than I came in. Which was the worst part — that lying to him made it easier to walk back to the barracks.

**[Continue]** → `t1.2`

*Effects: `mika_visited_bran_15 = true`, `relationship_bran +1`, `corruption +1`*

---

### Sub-node `t1.3a_silent`

I didn't try to explain. I just sat with him.

He seemed to understand that explanations weren't on offer. He kept doing fractions. I corrected one of them, the way I always had. He laughed at me a little for being a know-it-all, the way he always had.

For about ten minutes, in the middle of the worst week of my life, I was a regular older brother in a regular kitchen with a regular Tuesday afternoon.

Then I left.

He didn't ask when I'd be back. I didn't tell him.

**[Continue]** → `t1.2`

*Effects: `mika_visited_bran_15 = true`, `relationship_bran +1`*

---

## NODE `t1.3b` — Search for Quinn

**Image:** `t1.3b_records_room.webp`

---

The Skiritai records corridor was on the second floor. Thebes weren't allowed up there. The reasonable thing to do, on my first morning, was not to test that.

I was not feeling reasonable.

I walked up the stairs like I belonged. Nobody stopped me. Nobody was looking. I'd noticed already that most of the Knights moved like they were watching everything, but they weren't actually *watching* — they were performing a posture. There's a difference.

The records room had a door. The door had a window. Through the window, two Skiritai stood at a terminal, talking about a case. I caught the word *file*. I caught the word *kid*. I caught the word *Quadrant*.

I caught — I am almost sure — the word *Quinn*.

I had to choose how close to get.

**Choices:**
- **Risk being seen — get closer to hear more.** → `t1.3b_close`
- **Stay back, just listen.** → `t1.3b_safe`

---

### Sub-node `t1.3b_close`

I pressed against the doorframe. I could hear better. I could hear *almost* enough.

— *can't prove it was him —*
— *option B then —*
— *clean, just clean it —*

One of them turned toward the door.

I moved like I'd been walking past, head down, clipboard in my hand that I had grabbed off a passing cart for exactly this reason. He looked at me through the window. He had grey eyes and a small scar on his lip and he was filing my face away for later.

I kept walking. I made it to the stairs. My hands didn't shake until I was back in the bunkroom.

I'd learned almost nothing. I'd been seen.

I told myself it was worth it. *Almost* enough was something.

**[Continue]** → `t1.2`

*Effects: `mika_searched_quinn_15 = true`, `t1_almost_caught = true`, `corruption +2`*

---

### Sub-node `t1.3b_safe`

I stayed back. I caught fragments. *Can't prove. Option B. Clean it.*

I learned almost nothing.

I told myself that almost nothing was better than something I would have paid for. It was the kind of sentence I would say to myself a lot, in the next four years.

**[Continue]** → `t1.2`

*Effects: `mika_searched_quinn_15 = true`*

---

## NODE `t1.3c` — Train Hard

**Image:** `t1.3c_training.webp`

---

The gym was in the basement. Concrete walls, fluorescent lights, the smell of every gym that has ever been. Two senior recruits were on the bench when I came in. They watched.

I did the warmups. I did them well. I had been a runner, before — the kind of skinny kid who could outpace bigger boys on a long enough course — and the body was still there, somewhere under the panic.

The senior at the door watched me through the whole thing. I didn't look at him. He had hard pale eyes and a burn scar that started under his jaw and went down into his collar. I didn't know his name yet. I would, eventually.

He came over after I'd finished. He said, "You're new."

I said, "Yes, sir."

He said, "You're good. Don't be louder about it than you have to be."

He waited a beat. He wanted me to say something.

**Choices:**
- **Thank him sincerely.** → `t1.3c_thank`
- **Brush it off.** → `t1.3c_brush`

---

### Sub-node `t1.3c_thank`

I said *thank you, sir*, the way I'd been raised to say it. I meant it.

He nodded once and turned away.

I felt a thing I had not expected to feel. *Pride.* The hot, specific pride of being told you're good at the thing you didn't want to be good at.

I went back to the warmup mat and did another set, and I could not tell, by the time I was done, whether I was working that hard for myself or for the man with the scar.

I am not sure I knew the answer to that question, ever again.

**[Continue]** → `t1.2`

*Effects: `mika_trained_hard_15 = true`, `relationship_jason +1`, `corruption +3`*

---

### Sub-node `t1.3c_brush`

I shrugged. I said, *yeah, I guess.*

He looked at me a second too long. Then he walked back to the bench.

It was the right move, I think. I had decided, on the drive in, that I was not going to be one of *those* recruits — the ones who wanted to be liked. The ones who got promoted because they smiled.

I did one more set of warmups. The man with the scar didn't watch me anymore.

I felt nothing. That was good. *Nothing* was the goal.

**[Continue]** → `t1.2`

*Effects: `mika_trained_hard_15 = true`, `corruption +1`*

---

## NODE `t1.4` — Meeting Kaden

**Image:** `t1.4_meeting_kaden.webp`

---

Lunch was rice and a grey thing that was probably meat. The mess hall was loud. I was already learning that the loudness was a courtesy — the louder it was, the harder the surveillance had to work.

A boy sat down across from me. He hadn't asked.

"Hi," he said. "You're the kid from yesterday."

I looked at him. Average height. Dark skin. Tight twists. Tired hazel eyes that weren't sleepy — they were *worn*, the way old furniture is worn. He was maybe my age. Maybe a year older. He was eating slowly and watching the room without seeming to.

"I'm Kaden," he said. "Don't worry, I'm not friendly."

"Okay."

"I just wanted to see you up close. Word is you're smart. Word is they know you're smart."

I said, "Word is whatever, I guess."

He smiled, a little. The smile didn't reach the rest of his face. The rest of his face didn't move.

"Listen," he said. "I'm not going to give you the speech. I'm going to give you one sentence. If you ask the wrong questions, they'll know. If they know, you're done. Whatever you came here to fix — eat lunch first. You can fix it slower. It's allowed."

He went back to eating.

I sat there with my fork in my hand.

**Choices:**
- **Trust him a little — say more.** → `t1.4_trust`
- **Stay guarded.** → `t1.4_guarded`
- **Mock his cynicism.** → `t1.4_mock`

---

### Sub-node `t1.4_trust`

I said, "Why are you telling me this?"

He looked up. The tired eyes did a thing. Almost amused.

"Because you remind me of me. Six months ago. And I'd have done a lot for someone to sit down and tell me to eat lunch first."

He didn't say anything else. He finished his rice. He took his tray and left.

I ate my lunch. Slowly. He had been right about that part.

**[Continue]** → `t1.5`

*Effects: `relationship_kaden +2`*

---

### Sub-node `t1.4_guarded`

I said, "Thanks for the advice."

He nodded like that was the answer he expected.

He finished his rice. He took his tray. He left.

I ate my lunch. Slowly. Because he had been right, and because acknowledging it would have cost me something I wasn't sure I had to spend.

**[Continue]** → `t1.5`

*Effects: `relationship_kaden +1`, `corruption +1`*

---

### Sub-node `t1.4_mock`

I said, "Eat your rice, then. Some of us have plans."

He laughed. It was not a happy laugh. It was the laugh of somebody watching a slow car crash and being relieved that it wasn't his.

"Sure, hero," he said. "Plans."

He took his tray. He left.

I finished my lunch. Quickly. I told myself the speed was a discipline. It wasn't. It was that the room felt different now that he was gone, and not in a way I wanted to sit with.

**[Continue]** → `t1.5`

*Effects: `relationship_kaden -1`, `corruption +2`*

---

## NODE `t1.5` — The Morale Report

**Image:** `t1.5_morale_report.webp`

---

The supervising Skiritai's name was Officer Vell. He was the kind of man whose hands looked clean even when they weren't.

(*Conditional opening — if `t1_almost_caught = true`:*)
*He had grey eyes and a small scar on his lip. He'd seen me once already, that morning, walking past the records room with someone else's clipboard. He hadn't said anything about it. He didn't have to.*

He put a single sheet of paper in front of me. The form was pre-printed: a name, a Quadrant ID, a checkbox that said LOW COHESION.

The name was *Talus Hadrik.*

Talus had the bunk three down from mine. He'd told me that morning, while we were folding sheets, that his sister's wedding was next week and he was sad to miss it.

Officer Vell put a pen on top of the paper.

"Sign it," he said. "Standard intake. Every new Thebes signs one of these in the first week. You ID someone you think might struggle. Helps us help them."

I stared at the form.

I knew what *help* meant in this building.

Vell said, "It's a checkbox, Mika."

I had not told him my first name.

**Choices:**
- **Sign it.** → `t1.6` *(corruption +8, signed_morale_report = true)*
- **Refuse.** → `t1.5_refuse` *(early ending)*
- **Sign it but note your concerns in the margin.** → `t1.6` *(corruption +5, mika_thinks_hes_clever = true)*
- **Report the order to a senior Knight.** → `t1.5_report` *(early ending — death)*

---

### Sub-node `t1.5_refuse`

I said, "No."

I said it quietly. I said it like I'd been practicing.

Vell didn't react. He picked the form up. He folded it once. He looked at me for a long moment. Then he said, "Okay."

He left the room.

Two days later I was reassigned to the laundry. Three weeks later I was reassigned to barracks-cleaning duty across town. Within a month I was off the Knights roster entirely — discharged for "failure to integrate."

They didn't kill me. That would have been a waste. They put me in a uniformed labor pool in the Eastern Quadrant, where I cleaned offices for the rest of my life.

I was alive.

Quinn was not.

Bran grew up. He never asked what happened. He understood there were things you didn't ask.

Sometimes, late at night, I told myself that I had won. That the system hadn't gotten me. That refusing the form had kept me clean.

I knew that wasn't true.

---

**ENDING #15-light: THE FORGOTTEN (early variant)**

*Variation: Quinn never released. Bran lived. Niko lived. The city did not change.*

**[Start Again]** → chapter select

---

### Sub-node `t1.5_report`

I said, "I'd like to talk to your superior."

Vell smiled.

It was the only time I would ever see Vell smile, and the smile told me, before he said a word, that I had made a mistake of the kind you don't get to make twice.

The senior Knight he took me to was already expecting me. The supposed *report* I had wanted to file became, in his hands, a different kind of document.

I didn't make it through the night.

The story they told Bran was that I had died honorably in a training accident.

It was the most flattering lie they ever told about me.

---

**ENDING #7 (early variant): EXECUTED BY THE COUNCIL**

*Variation: Cause of death officially listed as "training incident." Bran told he died honorably. Quinn never released. Niko never knew.*

**[Start Again]** → chapter select

---

## NODE `t1.6` — Memory: Quinn's File

**Image:** `t1.6_quinns_file.webp` *(sepia)*

---

I signed the form. Vell took it. He didn't say anything else.

I sat at the desk after he left, alone, the pen still in my hand, and I was suddenly fifteen years old in a different hallway, two weeks before, holding a different pen — a marker, the kind I'd been using to mark up Quinn's calculus homework. I was walking past a half-open door. I was looking through it without meaning to. I was seeing Quinn's face on a screen. I was seeing the file open. I was seeing the Knight at the desk turn his head and see me.

The boy I'd been, in that hallway, had thought there was still a chance the world made sense.

I was looking at him now from across two weeks and one signature.

He looked very small.

**[Continue]** → `t1.7`

*Effects: `corruption +2`, `mika_self_aware +1`*

---

## NODE `t1.7` — Promotion to Skiritai

**Image:** `t1.7_promotion_skiritai.webp`

---

Six months passed. Then four more.

The work was not as bad as I'd feared. Some of it was real labor — moving crates, cleaning rooms, the kind of work my mother used to do. Some of it was paper. The paper was the hard part. Every few weeks, another form. Another checkbox. I got faster at it. I told myself this was strategy — that the faster I got, the less they noticed, and the higher I rose, the more I could fix.

I told myself a lot of things, that year.

The promotion came in the spring. Twenty of us in the courtyard, the basketball line still faded under our boots. They called my name. They handed me a black uniform with silver shoulder insignia. They handed me a sidearm I didn't know how to use yet.

I was sixteen.

My mother had not been told. Bran did not know. Quinn was still in a holding facility I had not yet found.

I stood up straight. I let them put the insignia on. I looked, for a moment, at the senior who had watched me train. The one with the scar. He was at the back of the courtyard. He nodded, once, like he'd been expecting this for months.

I didn't know his name yet.

His name was Jason.

**[Continue]** → `t2.1`

---

*End of Act I prose.*
