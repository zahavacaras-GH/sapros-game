# SAPROS — Act V Prose (Hetairoi, age 19 — Vespera Arc)

> **Voice notes:** Mika is nineteen. The voice has stopped pretending. He knows what he is. The prose is quieter, slower, more confessional. He looks at things directly now — even the things he had spent four years avoiding. The dark humor is still there but it's gentler now, almost forgiving. He has, in some way, finished. What's left is the deciding what to do with the finished thing.

---

## NODE `t5.1` — The First Council Meeting

**Image:** `t5.1_first_council.webp`

---

The Council met in a chamber that had no windows.

This was, I would later learn, deliberate. Vespera had explained it to me once, in passing — *daylight makes people sentimental, Mika.* The chamber was lit by a soft white light from the ceiling that did not flicker and did not cast shadows. The table was a long polished black. There were six chairs. Five had been occupied for a long time. The sixth had, for two months, been mine.

The first session of the new term opened with a small docket.

Most of the docket was procedural. Trade approvals. A redistricting note for one of the smaller Quadrants. Two budget line items. The fourth item was a sentencing review.

The man's name was Petros Heller. He was thirty-four. He worked in a Quadrant maintenance office. He had, three weeks before, posted a printed sheet of paper on a public wall that said something the Council had decided was unacceptable. The sheet had said *they watch us so we will not see them.* He had been arrested within sixteen hours of posting it. The AI flagged him as *symbolic dissent — singular instance.*

The Hetairoi to my left, a man named Othman, suggested *relocation* as the appropriate sentence. *Relocation* was the Council's word for being moved to a labor pool in a Quadrant far from the offending one. It was the lightest of the sentences in our toolkit. Most relocations were survivable.

He looked around the table for objection.

It was, by ritual, my chance to speak.

The vote would carry whether I spoke or not. I knew that. The other four had already, with their faces, agreed. *Relocation* was not, in this Council, a controversial outcome.

I had to decide what I was going to do with my voice in this room.

**Choices:**
- **Vote with the room.** → `t5.1_with`
- **Vote against, just to see what happens.** → `t5.1_against`

---

### Sub-node `t5.1_with`

I said, "I support the recommendation."

It was the first sentence I had ever spoken in the chamber.

Othman nodded. The vote carried, five to nothing. The fifth Hetairoi entered the result. The session moved on.

Vespera — across the table, four chairs down — caught my eye for half a second. The half-smile shifted, briefly, into something that was almost approval.

I noticed the approval. I noticed I had, on the level of the body, *wanted* the approval before I had spoken.

I had wanted it the way Mika at fifteen had wanted Jason's nod in the back of the courtyard. The same hot specific pride.

The pride was not different.

I was. But the pride was not.

**[Continue]** → `t5.2`

*Effects: `corruption +8`*

---

### Sub-node `t5.1_against`

I said, "I oppose the recommendation."

Othman blinked.

He had not been expecting opposition. He had been expecting unanimity. The other Hetairoi did not move. They were watching, not for what I was about to say, but for *what they would think of me afterward* — they were calibrating, in real time, whether I was the kind of new colleague who occasionally objected for show, or the kind who was a problem.

I had to give them something to calibrate against.

I said, "The relocation is appropriate. I do not object to the outcome. I object to the *unanimity.* I think it is bad practice for this body to rule unanimously on matters of speech. It teaches the public to believe we are a single mind. We are not. I believe we should, periodically, behave like the five different minds we are."

It was the kind of speech a man gives when he has decided to be a slightly visible kind of problem.

Othman thought about it for a moment. Then he gave a small dry laugh.

"You may be right," he said. "But you've made the boy's record more complicated for no benefit to him."

The vote carried four to one. I had voted *yes,* with the dissent noted. Petros Heller was relocated. He survived the relocation. As far as I know he is still alive, in another Quadrant, doing maintenance work.

Vespera caught my eye for half a second.

The half-smile did a different thing. It became more *interested.*

She had, in that one small piece of theater, decided to spend more time on me.

That was useful. It was also dangerous in a way I would have to think about later.

**[Continue]** → `t5.2`

*Effects: `corruption -2`, `vespera_interest +1`, `flagged_curious_to_council = true`*

---

## NODE `t5.2` — Hetairoi Hub

**Image:** `t5.2_hetairoi_hub.webp`

---

My office was in the Hetairoi tower. The window faced east. From it I could see, on a clear day, the wall of the Capitol and beyond it the Quadrants and beyond them the green building on Levant Street where my mother no longer lived.

She had moved a year ago. She had not told me where.

There were three folders on my desk.

The first was Quinn's file. *(Only present if `survived_quinn = true`.)* It was still open. Hetairoi clearance now allowed me to do almost anything with it. I had been letting it sit, on my desk, for two weeks.

The second was a request from Vespera. A handwritten note, three lines. *Tea. My chambers. We have a conversation that is overdue.* It was not phrased as an invitation. It was phrased as a fact.

The third was a letter from Bran. *(Only present if `survived_bran = true`.)* It had arrived through an old courier route I had not known he knew about. The handwriting was careful. The letter said, in three sentences, that he wanted to see me. He would meet me at a Capitol cafe. Any evening. He would come alone. He had things to say.

Three folders. Three conversations I had been avoiding. I had, at most, a few weeks before the Council pushed forward on a piece of business that would close the window.

**Choices (any in any order, then "Continue"):**
- *(if `survived_quinn`:* **Decide what to do with the Quinn file.** → `t5.3a`
- **Confront Vespera privately.** → `t5.3b`
- *(if `survived_bran`:* **Reach out to Bran.** → `t5.3c`
- **(after at least 1) Continue.** → `t5.4`

---

## NODE `t5.3a` — The Quinn File

**Image:** `t5.3a_quinn_file.webp`

---

I opened the file.

Quinn was thirty pounds lighter than he had been at fifteen. The most recent photograph had been taken six weeks before. They had let his hair grow back. He had grown a small thin beard. He looked, in the photograph, almost peaceful — the peace of a man who had been alone with himself in a small room for a long time and had found, eventually, that the small room was not the worst possible companion.

He was still alive.

He was twenty. He had been in the third-Quadrant facility for five years. He had not been moved. He had not been interrogated since the second year. The case had been *open and pending* for so long that, at this point, it was no longer pending anything in particular. It was simply *open* in the same way a drawer is open: forgotten in the open position.

I had three options. I had, finally, the rank to use any of them.

**Choices:**
- **Close the file. Order his quiet release to a low-priority Quadrant.** → `t5.3a_close`
- **Sign the file. End it cleanly.** → `t5.3a_sign`
- **Leave it open. Let the system decide.** → `t5.3a_leave`

---

### Sub-node `t5.3a_close`

I closed it.

I authored the closure myself. I did not delegate. The closure routed Quinn out of the third-Quadrant facility on a low-priority Quadrant transfer, which meant he would be processed quietly, given a new identity card, and reassigned to a labor district somewhere far enough from the Capitol that no one in the Capitol would notice.

I did not give him my own name. I did not write him a letter. I did not, in any way, attach myself to the closure beyond the signature, which was an unremarkable Hetairoi signature at the bottom of an unremarkable document.

He would never know it had been me.

He would simply, one morning, be told he was being released. He would walk out of a building he had been in for five years. He would be given a small package of belongings and a transit voucher. He would, presumably, not understand. He would find out, eventually, that the file had simply *closed,* and he would understand that this, in the system we lived in, was the most that ever happened.

He would be alive. He would be free, in the small specific way the system allowed.

I had used Hetairoi privilege, once, for one good thing.

I had paid four years to be able to do it.

I sat at the desk. I noticed the math of the cost.

The math was not flattering. But the math, for the first time in a long time, came out positive on a single line item, and I held the line item carefully, the way I had once held the *clean* feeling of declining Kaden's plan.

I would need it.

**[Continue]** → `t5.2`

*Effects: `closed_quinn_file = true`, `survived_quinn = true`, `corruption -8`, `mika_self_aware +2`*

---

### Sub-node `t5.3a_sign`

I signed.

I did it quickly. I did it without rereading the file. I did it the way I had signed the Marya Fennik order at the Agema desk, eighteen months before — without slowing the pen.

The signature went out. The file moved through the system. The execution was scheduled for a week later. It would be, by procedure, quiet. He would not be told, in advance, what was happening. He would be moved to a different room. The room would be clean. The action would take less than a minute.

I went back to the next folder on the desk.

I did not think about it again until that evening, when I was at the bathroom mirror, brushing my teeth. The face in the mirror was the face I had seen at the investiture — the face that was always deciding. I noticed it had not, for the act of signing Quinn's file, done any deciding at all.

The face had simply continued.

I noticed, in noticing, that I did not feel guilt. I noticed that the absence of guilt was the most accurate report I had on myself, and that the report was the kind of report I would, four years before, have considered impossible to produce.

I rinsed. I went to bed. I slept normally.

The body had, over four years, finished its training.

**[Continue]** → `t5.2`

*Effects: `signed_quinn_file = true`, `survived_quinn = false`, `corruption +20`, `madness +5`*

---

### Sub-node `t5.3a_leave`

I closed the file without acting on it.

I did not sign. I did not order release. I did not, in any way, intervene.

I told myself this was a kind of mercy — the system, left alone, would *probably* not act, and Quinn, left alone, would *probably* survive in the facility for several more years, and several more years was, given the alternatives, not the worst outcome.

This was not true. The Council had recently begun *sweeping* old open cases. I knew this because I had sat in on the meeting, two weeks before, where the policy had been announced. Open files older than four years were being closed. Most closures were going one way.

I knew, when I left the file open, what the system would do.

I told myself I had not made a decision. The system would make the decision. The system would carry the weight.

I would notice, six months later, that the system had carried the weight, and that Quinn had been processed in the third batch of the sweep, and that I had not, at any point, picked up a pen.

I would notice, also, that not picking up the pen was, in the end, just another way of picking up the pen.

The face in the mirror, that night, did not care about the distinction.

**[Continue]** → `t5.2`

*Effects: `corruption +5`, scheduled `survived_quinn = false` (resolves in epilogue)*

---

## NODE `t5.3b` — Confront Vespera

**Image:** `t5.3b_confront_vespera.webp`

---

Her chambers had not changed.

Same parlor. Same dove-grey winter flowers on the low table. The flowers might have been the same flowers. I had not, in three years of intermittent visits, ever seen the flowers changed.

She rose. She poured the tea. She had been waiting.

"Sit, Mika."

I sat. We had the tea. The half-smile was on her face.

She said, "Let's not be coy, today. You've come to talk about my retirement."

I had not, in fact, said this on the way over. I had not been *planning* to say this. I had been planning a much longer, more careful conversation. She had collapsed the conversation into one sentence before I had taken my first sip.

She said, "I am sixty-three. I have been on the Council for twenty-two years. I am tired in ways that do not show, yet. They will, in the next few years. I do not intend to be a Council member who is *visibly* tired. I intend to leave on my own terms. I have been considering, for some time, who to leave to."

She paused.

"I think it should be you."

She drank.

"It will be a slow handover. Three years. You will continue to learn. I will continue to consult. By the end of three years, you will be the dominant voice in this room, and I will be, formally, retired. Informally I will continue to exist, in advisory capacities, until I die, which will not be for some time."

She set down the cup.

"I am offering you," she said, "what I was offered, and what I took. I am telling you now, going in, that I do not believe you will refuse. You are, in this respect, very like me. I am not flattering you. I am stating a similarity I have observed."

She waited.

I had to choose what to say.

**Choices:**
- **Accept her offer with gratitude.** → `t5.3b_accept_grateful`
- **Accept her offer, knowing exactly what it makes you.** → `t5.3b_accept_aware`
- **Refuse. Tell her you will dismantle the Council.** → `t5.3b_refuse`
- **Don't decide. Let her think you're undecided.** → `t5.3b_delay`

---

### Sub-node `t5.3b_accept_grateful`

"I would be honored," I said.

I said it well. I said it the way you say it when you mean it.

I did, in fact, mean it. The mean-ing was perhaps the saddest part of the conversation. I had walked in undecided. The half-smile and the dove-grey flowers and the small careful sentences had collapsed me, in twelve minutes, into the version of myself I had been — privately — trending toward for some time.

She rose. She came around the table. She placed a hand on my shoulder. The hand was very warm.

She said, "Welcome, Mika."

She said it the way she had said *welcome home* at the investiture. The two welcomes, side by side, made a kind of architecture I would, later, recognize as the architecture of a room I had walked into without noticing the door had closed behind me.

I drank the rest of the tea.

I went back to my office. I sat at my desk. I noticed, sitting, that the part of me that had four years before stood in a hallway and looked through a door was not, in this office, anywhere I could find. I had looked. I had not been hard on the looking. The boy was simply not in the room.

I did not, in any precise way, mourn him.

I had, a long time ago, decided not to.

**[Continue]** → `t5.2`

*Effects: `confronted_vespera = true`, `vespera_offered_succession = true`, `vespera_interest +5`, `corruption +15`*

---

### Sub-node `t5.3b_accept_aware`

"I accept."

I said it without flourish. I said it without warmth.

I said, "I want to be very clear with you, before I do, that I know exactly what I am accepting. I am accepting the seat. I am accepting it from you. I am accepting that, in three years, I will be sitting where you are now, and I will have, by then, become more like you than I am now. I am accepting that I have, in fact, *become* more like you in each of the last four years, and that this conversation is the last of those years' worth of decisions, made formal."

She looked at me.

The half-smile did not move.

She said, "Yes. That is exactly what you are accepting."

"I want you to know I know."

"I know you know," she said. "That is part of why I am offering."

She poured me more tea.

"Most men who climb to this seat arrive without knowing. They are surprised, after, by what they have become. The surprise is, in itself, an excuse. The surprise lets them believe they are *not* the seat. They are. They simply did not look directly at it on the way up."

She drank.

"You looked," she said. "It is a small distinction. But I find it interesting. You will be a slightly different kind of Council head than I have been. I am curious to see how you fail."

I drank with her.

I noticed, drinking, that she was right about the smallness of the distinction.

I noticed that the smallness did not, however, make the distinction *meaningless.*

I held the small piece of meaning I had earned.

It was, perhaps, all I had.

**[Continue]** → `t5.2`

*Effects: `confronted_vespera = true`, `vespera_offered_succession = true`, `vespera_interest +5`, `corruption +15`, `mika_self_aware +5`*

---

### Sub-node `t5.3b_refuse`

"No," I said.

She blinked.

"I am going to dismantle the Council," I said. "I came here to tell you. I owed you that much."

She set down her cup.

She did not laugh. She did not get angry. She did not try to talk me out of it. She did, however, look — for one half-second — *disappointed,* in a way that was worse than any anger she could have produced. The disappointment was not for herself. It was for *me.* As if I had, by refusing, become a smaller version of the thing she had been considering for years.

She said, "I see."

She picked up the cup again.

"Well, Mika. I will not retire, then. I will, in fact, become very interested in the next several decisions you make. I want you to understand, going in, that I will not be hostile. I will simply be — *present.* You will find me, in the rooms you walk into. You will find me, on the documents that come across your desk. You will find me, in the personnel decisions that affect your life. I do not threaten. I observe."

She smiled.

"And I outlast."

I left the chambers.

I noticed, in the hallway, that the conversation had, in some way, been the easiest of the four years. I had told the truth. The truth had been costly. The cost would compound, daily, for as long as either of us was alive.

I noticed, also, that I had refused without a plan.

I would have to develop a plan.

I had, perhaps, three months.

**[Continue]** → `t5.2`

*Effects: `confronted_vespera = true`, `vespera_offered_succession = true`, `vespera_interest -3`, `vespera_targets_mika = true`, `corruption -2`*

---

### Sub-node `t5.3b_delay`

"I want to think."

She nodded.

"Think."

"I'd like a few months."

"You may have them."

She said it without any irritation. She refilled my cup. We talked, for the rest of the visit, about lighter things — Capitol weather, a book she had been reading, a piece of news from one of the smaller Quadrants that had amused her.

I left without committing.

I noticed, walking back, that *not committing* was a form of commitment. She had read it as such. She would now, for the duration of the few months I had asked for, be making her own arrangements — building her own contingencies, identifying my potential weaknesses, preparing the pieces she would need to make sure that, when I finally answered, I answered the way she had wanted me to.

I had, by asking for time, given her time also.

I had not understood, going in, that this was the symmetric cost.

I would, soon enough, decide.

I had, by then, fewer real options than I had thought I had walking in.

**[Continue]** → `t5.2`

*Effects: `confronted_vespera = true`, `vespera_interest +2`, `corruption +5`*

---

## NODE `t5.3c` — Reach Out to Bran

**Image:** `t5.3c_bran_16.webp`

---

I met him at the cafe he had named in the letter.

It was a small place, three blocks from the Capitol wall on the inside, the kind of cafe Knights went to when they did not want to be seen by other Knights. He had picked it well. He had, somehow, in the eighteen months since I had last seen him, become a person who picked things well.

He was sitting at a corner table. He had a coffee in front of him. He had grown again. He was sixteen now — a year younger than I had been when I had killed Jason — and he was, by some accounting, almost a man. He was thinner than he should have been. There was a small scar on his lower lip that was new.

He stood when I came in. He did not hug me. He shook my hand. The handshake was firm.

He said, "Hello, Mika."

He said it the way you say *hello* to a man who is, in some ways, a stranger.

We sat. He had ordered me a coffee. He had remembered how I took it. I had not been sure he would remember.

He said, "I want to know what you've done."

(*Conditional opening — if `bran_knows_secret = true`:* He said it without preamble because, of course, he had been waiting to say it for four years.)
(*Otherwise:* He said it without preamble because he had figured most of it out anyway, and was, he wanted me to know, no longer pretending.)

I drank the coffee.

I had to choose how to answer my brother.

**Choices:**
- **Warn him. Leave the city. Change his name. Hide.** → `t5.3c_warn`
- **Bring him into the Capitol — protected.** → `t5.3c_protect`
- **Cut him off. For his safety, never see him again.** → `t5.3c_cut`
- **Tell him the truth. Beg his forgiveness.** → `t5.3c_truth`

---

### Sub-node `t5.3c_warn`

I told him to leave.

I told him I had access, now, to documents he would not survive being on. I told him there were lists. I told him there was a sweep coming, and that *coming* meant within months, not years. I told him that he should change his name and disappear into one of the smaller Quadrants and that I had a contact who could move him — quietly, with paperwork — who would not ask questions.

He listened.

He did not interrupt. He did not weep. He did not, in any way, behave like the boy at the kitchen table four years before.

When I was done he said, "Will you come with me?"

"No."

"Why not?"

"Because I'm finishing something."

He nodded.

He drank the rest of his coffee. He stood. He shook my hand again. He said, "Goodbye, Mika."

He said it like he meant *for the rest of our lives.*

He left. I sat at the table. I sat there a long time.

I noticed that *for the rest of our lives* was, in the end, the most love a person could safely give in this city. The kind of love that walked away.

**[Continue]** → `t5.2`

*Effects: `warned_bran = true`, `bran_in_hiding = true`, `corruption -3`*

---

### Sub-node `t5.3c_protect`

I told him to come to the Capitol.

I told him I had quarters that could fit him. I told him I could place him in a school inside the wall — a real one, the kind aristocratic children went to — and he would be on the rolls of *citizens of the Capitol,* which meant the Council would no longer be able to act against him without consulting me.

He listened.

He drank his coffee. He looked at me with an expression I could not place. It was not gratitude. It was not anger. It was something older than both. He had sat, for two years, in a kitchen, doing fractions, while I was off becoming the kind of man whose office could *protect* him.

He said, "I'm not coming."

"Bran."

"If I come into the Capitol, I am inside the wall, and I am yours. I am not yours, Mika. I have not been yours for a long time. You know this."

He drank.

"But thank you."

He said it without sarcasm. He thanked me, sincerely, for offering — for offering *the kind of thing I could offer,* which was inside-the-wall safety and a school for aristocratic children. He thanked me for it the way you thank a man who has given you a gift you cannot use because the gift, in its very design, is for someone you no longer are.

He stood.

"I'll write," he said. "Sometimes. Not from here."

He left.

I had bought him, by offering, a kind of polite distance I had not had before.

It was not protection. It was not even, really, a relationship.

It was the most I would get from him for the rest of either of our lives.

**[Continue]** → `t5.2`

*Effects: `bran_offered_protection = true`, `relationship_bran -1`, `corruption +2`*

---

### Sub-node `t5.3c_cut`

I told him I could not see him again.

I told him it was for his safety. I told him that the closer he was to me — physically, by association, by *anyone in the system noticing the connection* — the more likely it was that someday his name would land on a list I could not pull it off of in time.

He listened.

He waited a long time before answering.

Then he said, "Okay."

He said it the way he had said *okay* in the kitchen four years before. The same word. The same disappointment, dressed in a different patience. He had, by sixteen, learned a more adult version of that same patience.

He stood. He did not shake my hand this time.

He said, "Mom asks about you. I tell her you're fine."

He left.

I sat at the table.

I noticed I had used the language of *protection* to do something else. I noticed that *protection,* in this conversation, had been a word for *making my life less complicated.* I noticed, in noticing, that the noticing did not change anything I would do.

The noticing was a small private religion, by this point. I performed it. The performance was, in itself, a kind of comfort. I did not, anymore, mistake the comfort for action.

**[Continue]** → `t5.2`

*Effects: `bran_cut_off = true`, `relationship_bran -5`, `corruption +10`*

---

### Sub-node `t5.3c_truth`

I told him.

All of it. The hallway. The file. The Knight in the doorway. The morale report. The runner at the checkpoint. Ennis Ardin's family. Marya Fennik. Jason in his office at midnight. Sophie at the trial. Kaden in the apartment. The signed kill orders. The faces I no longer remembered. Vespera offering me her seat. The full account. In one cup of coffee.

He listened.

When I was done he was crying, very quietly, in the corner of the booth. He was not crying loudly. He had learned, somewhere, that loud was dangerous.

He said, "Why are you telling me this now?"

"Because you asked."

"You could have lied. You're good at it."

"I am."

"So why."

I thought about it.

I said, "Because I have not, in four years, said the truth to anyone who had a right to hear it. And you have a right to hear it. And it's the only thing left I can give you."

He nodded.

He wiped his face. He stood.

He said, "I won't tell anyone. I won't write again. I won't visit. I will, for the rest of my life, know who you are. I think I will have to live alone with knowing. I don't know yet whether I forgive you. I don't think I will."

He paused.

"But I love you. I wanted you to know that, before I leave. I do. I always did. I am leaving anyway."

He left.

I sat at the table.

I had been ready, going in, for the conversation to feel like nothing. I had been ready for the *clean* feeling of having transferred information across a table.

It was not nothing.

It was, in fact, the most painful thing that had happened to me in four years. Not Jason. Not Quinn. Not Kaden.

This.

I noticed, in the pain, that the pain was — finally — *real*. The body had not, after all, finished its training.

I held the pain for as long as I could before the body's old habits returned. They returned. I let them.

But for the eleven minutes it took me to walk back to the Capitol, I had been a person again.

**[Continue]** → `t5.2`

*Effects: `bran_knows_truth = true`, `relationship_bran -10`, `corruption -5`, `mika_self_aware +5`*

---

## NODE `t5.4` — The Surveillance Vote

**Image:** `t5.4_surveillance_vote.webp`

---

Vespera proposed it on a Tuesday.

It was on the docket as *Resolution 412: Extension of Civilian Monitoring Protocols to Knights Quadrant Personnel.* She presented it, briefly. The argument was about *fairness.* In a system that watched everyone else, why should Knights be exempt? The exemption, she said, had originated as a matter of operational security — but operational security, in the modern Council, was robust enough that the exemption was no longer necessary, and the exemption was, increasingly, *philosophically uncomfortable.* She used the word *philosophically.* She used it without irony.

The other four Hetairoi nodded along. They had been briefed. The vote was not, in principle, in question.

Except — by the rules of the chamber — the vote required a unanimity, or it had to be tabled for a public review, in which case the dissent would be on record. The other four would vote yes. That was already decided. The vote turned, technically, on me.

Vespera looked at me across the table.

She did not smile. She did not need to.

She had timed this proposal, I knew, for the week after I had refused her succession offer. Or accepted it. Or delayed. (*The same timing regardless.*) The vote was a test. It was, also, an acceleration — a way of consolidating her own power by removing the only branch of society she could not fully see, and making sure I knew, by the timing, that she was now *moving on the board.*

She said, "Hetairoi Halren. The vote, please."

**Choices:**
- **Vote yes — the Knights should not be above the system.** → `t5.4_yes`
- **Vote no — the Knights' privilege is the only space reform can breathe in.** → `t5.4_no`
- **Abstain.** → `t5.4_abstain`

---

### Sub-node `t5.4_yes`

"Yes."

The word was small. It carried.

The vote went through five to nothing. Resolution 412 passed. The Knights would, within ninety days, begin to be brought under the same monitoring infrastructure as the rest of the city.

Vespera nodded at me. The half-smile was on her face.

I had, with one word, done the thing I had — at fifteen — sworn to come into this building specifically to *prevent.*

I noticed the symmetry.

The symmetry was clean. It was the kind of clean a person could write a poem about, if a person were the kind of person who wrote poems.

I was not.

**[Continue]** → `t5.5`

*Effects: `voted_expand_surveillance = true`, `corruption +25`, `vespera_interest +5`*

---

### Sub-node `t5.4_no`

"No."

The chamber was very quiet.

It was the first time, in my term as Hetairoi, that I had broken unanimity on a major resolution. The other four turned to look at me, slowly, in the way trained dogs turn toward a sound they have not heard before.

Vespera did not look surprised.

Othman said, "On what grounds?"

I said, "On the grounds that I do not believe the exemption is philosophically uncomfortable. I believe the exemption is the *only space* in this system that allows the system to consider itself. If the Knights are watched the way the Quadrants are watched, the Council loses the only branch of society capable of independent reflection. I will not vote to take that away."

It was the cleanest sentence I had spoken in four years.

The vote was tabled. The resolution went to public review. It would, by procedure, return to the Council in six weeks. By then the political cost of my dissent would have done its work.

Vespera did not look at me.

I was, formally, in opposition now.

She had her acceleration.

**[Continue]** → `t5.5`

*Effects: `voted_against_surveillance = true`, `corruption -5`, `vespera_targets_mika = true`*

---

### Sub-node `t5.4_abstain`

"I abstain."

There was a silence.

By the rules of the chamber, an abstention had the same procedural effect as a *no* — it broke unanimity, it forced the resolution to public review. The other Hetairoi understood this. Vespera understood this.

But abstention had a different *flavor* than dissent. Abstention told the room that I did not have a position. That I was — in this matter — not a colleague but a fence-sitter. Vespera disliked fence-sitters. They were, she had once told me, *unfinished people.*

The vote was tabled.

She did not look at me with hostility.

She looked at me with something more troubling: *curiosity.* As if, by abstaining, I had not lost her — but I had, in some way, become less interesting. I had given her less to work with.

I had, by trying to keep my options open, narrowed them.

I noticed this. I held the noticing the way a person holds a small wound you have not yet decided to bandage.

**[Continue]** → `t5.5`

*Effects: `corruption +10`, `vespera_curious_about_him = true`*

---

## NODE `t5.5` — Memory: The Ultimatum, Replayed

**Image:** `t5.5_memory_ultimatum.webp` *(sepia)*

---

It was three in the morning.

I was alone in my Hetairoi office. The window was dark. The Capitol was quiet. The vote had been six days before. Whatever I was going to do next, I had a few weeks to do it in, and I had not yet decided.

The body did, again, the thing it does when I will not let it sleep.

It gave me the hallway.

I was fifteen. I was walking the long way. The door was half-open. Quinn's face was on the screen. The Knight was at the desk.

I had remembered this scene in many forms by now. From inside myself. From above. From the boy's perspective. From the Knight's.

This time, I let the camera settle on the Knight.

He turned his head. He saw me in the doorway. He stood. He came to the door. He looked at me.

He had pale skin and dark brown hair, kept short and neat. He had sharp brown eyes with a slight downturn that gave him a permanent half-tired, half-watchful look. He had a small scar on his left jaw. He was wearing the white-and-gold of a Hetairoi.

He was, in the memory, nineteen.

He was me.

He looked at the boy in the doorway. The boy looked back. There was a small silence in the hall — the kind of silence that happens when two people who are the same person, separated by four years and one signature, recognize each other.

The Hetairoi said, very gently, "I'm sorry. Come with me."

The boy nodded.

He came. He came because he had no other option. He came because the Hetairoi had been kind. He came because the kindness, four years before, was the *first* lie he had been told, and he did not yet know how to recognize the lies.

I watched myself walk down the hallway with myself.

I watched the boy disappear around the corner.

I did not follow.

I sat at the Hetairoi desk in the present, alone, in the dark, and I noticed that the door I had walked through, four years ago, was a door I had myself — at this older age, in this office — held open.

The whole architecture made sense.

I was, in this place, both the boy and the Knight. I had been both, all along.

**[Continue]** → `t5.6`

*Effects: `mika_self_aware +5`*

---

## NODE `t5.6` — The Ending Switch

**Image:** `t5.6_ending_switch.webp`

---

Dawn.

I had been at the desk for hours.

The decisions were lined up in front of me the way the dossiers had lined up at the Agema desk a year before. Each one a folder. Each one a person. Each one a future.

I could move on Vespera. I had the intelligence. I had the timing. I had the alliances I had — quietly, slowly — built in the corners she had not been watching. The coup was *possible.* The coup was even, with effort, *probable.*

I could accept her offer. Become the heir. Inherit the seat in three years and, after that, run this Council the way she had run it, with my own modest variations on the work.

I could propose my own reform. Submit, this morning, a structural revision of the Council's surveillance architecture. The proposal had been written. It was in a drawer. It had been written for months.

I could resist. Stand on the floor of the chamber, this afternoon, and refuse a key vote in a way that could not be quietly undone. They would have to remove me. They would. The removal would be a kind of statement.

Or I could stop.

Get up from the desk. Walk away. Disappear into the small room of myself that had, perhaps, been waiting for four years. Refuse to continue being the man who sat in this chair.

There was a mirror on the wall opposite the desk. The face in the mirror was nineteen. The face in the mirror was always deciding.

The face had to decide.

**Choices:**
- **A. Move against Vespera. Take the Council.** → ENDING ROUTING
- **B. Accept her succession. Become her heir.** → ENDING ROUTING
- **C. Propose your own reform. Build a new Council.** → ENDING ROUTING
- **D. Resist a vote publicly. Force their hand.** → ENDING ROUTING
- **E. You can't continue. Step away from the desk.** → ENDING ROUTING

*The engine evaluates accumulated flags against the ending decision matrix in `CHOICE_TREE.md` Section 7.1, and routes to one of the 15 ending nodes.*

---

*End of Act V prose.*
