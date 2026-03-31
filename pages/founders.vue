<template>
  <div class="dark:bg-dark min-h-screen">
    <Navbar :show-profile="false" />

    <div class="w-11/12 md:w-3/5 mx-auto pb-32 pt-16 md:pt-24">

      <!-- OPENING — THE PROBLEM -->
      <div class="pb-20 border-b border-gray-200 dark:border-gray-800">
        <p class="text-sm font-medium uppercase tracking-widest mb-8" style="color: #00ff9f;">For Founders Building Digital Products</p>

        <h1 class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-10 leading-tight">
          You're Building.<br class="hidden md:block" /> But Deep Down You Know<br class="hidden md:block" /> Something Is Off.
        </h1>

        <div class="space-y-6 text-gray-700 dark:text-white text-lg leading-relaxed max-w-2xl">
          <p>It started with an idea.</p>
          <p>You were convinced it was good. So you did what everyone does — you Googled. You watched YouTube videos. You joined communities, asked questions, read articles. You called it "market research."</p>
          <p>None of it was documented. None of it was structured. But you felt ready.</p>
          <p>So you hired a developer.</p>
          <p>Maybe someone local. Maybe someone from Upwork to save costs. Either way, you handed over a brief — a few paragraphs, maybe a Notion doc, maybe just a voice note — and said "build this."</p>
          <p>And they did.</p>
        </div>

        <div class="my-12 h-px bg-gray-200 dark:bg-gray-800" />

        <div class="space-y-6 text-gray-700 dark:text-white text-lg leading-relaxed max-w-2xl">
          <p>Weeks passed. Then months.</p>
          <p>Features kept getting added. The scope kept shifting. Every week there was a new problem to solve, a new screen to design, a new thing the developer needed clarity on.</p>
          <p>You kept answering. Kept deciding. Kept approving.</p>
          <p>But somewhere in the middle of all of it, a thought started creeping in:</p>
        </div>

        <blockquote class="border-l-4 pl-6 my-10 max-w-2xl" style="border-color: #00ff9f;">
          <p class="text-2xl md:text-3xl italic text-gray-900 dark:text-white font-light">"I'm not sure this is right."</p>
        </blockquote>

        <div class="space-y-6 text-gray-700 dark:text-white text-lg leading-relaxed max-w-2xl">
          <p>Not the developer. Not the design. Something deeper.</p>

          <div class="space-y-5 pl-6 border-l border-gray-300 dark:border-gray-700">
            <p>You're not sure who this is really for. You said "everyone" when someone asked about your target user — but you know that's not an answer. Everyone means no one.</p>
            <p>You're not sure what problem you're actually solving. The idea made sense in your head. But mapped out in real screens and real flows — something feels off. You just can't name it.</p>
            <p>You're not sure when this ends. There's no finish line. No defined MVP. No moment where you can say "this is enough to test." It just keeps going.</p>
          </div>

          <p>But you're too deep to stop.</p>
          <p>You've spent too much money. Too much time. Stopping feels like failure. So you keep going — hoping that when it launches, it all makes sense.</p>
        </div>

        <div class="mt-14 bg-gray-100 dark:bg-gray-900 rounded-xl p-8 max-w-2xl border border-gray-200 dark:border-gray-800">
          <p class="text-gray-900 dark:text-white text-xl font-semibold mb-4">Here's the hard truth:</p>
          <p class="text-gray-700 dark:text-gray-200 text-lg leading-relaxed mb-4">The problem isn't your developer. It's not your budget. It's not even your idea.</p>
          <p class="text-gray-900 dark:text-white text-lg leading-relaxed font-semibold">The problem is that you started building before you understood the system.</p>
          <div class="mt-6 space-y-2 text-gray-600 dark:text-gray-300 text-base">
            <p>Before you mapped who your users really are and how they behave.</p>
            <p>Before you diagnosed what's actually broken in the current solution.</p>
            <p>Before you designed what the new system needs to look like.</p>
            <p>Before you defined what "done" even means.</p>
          </div>
          <p class="mt-6 text-gray-700 dark:text-gray-200 leading-relaxed">You skipped the step that makes everything else make sense. And now you're paying for it — in money, in time, and in the quiet anxiety that follows you every time you think about the launch.</p>
        </div>
      </div>

      <!-- THE COST -->
      <div class="py-20 border-b border-gray-200 dark:border-gray-800">
        <p class="text-sm font-medium uppercase tracking-widest text-gray-500 dark:text-gray-500 mb-4">The Cost of Skipping This Step</p>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10">This isn't hypothetical.</h2>

        <div class="grid gap-3 max-w-2xl">
          <div class="flex gap-4 items-start border-b border-gray-200 dark:border-gray-800 rounded-lg p-5">
            <span class="text-red-500 text-xl mt-0.5 shrink-0">×</span>
            <p class="text-gray-900 dark:text-gray-200">$10,000–$100,000 spent on development before finding out the product doesn't solve the right problem</p>
          </div>
          <div class="flex gap-4 items-start border-b border-gray-200 dark:border-gray-800 rounded-lg p-5">
            <span class="text-red-500 text-xl mt-0.5 shrink-0">×</span>
            <p class="text-gray-900 dark:text-gray-200">3–12 months of build time that has to be partially or fully redone</p>
          </div>
          <div class="flex gap-4 items-start border-b border-gray-200 dark:border-gray-800 rounded-lg p-5">
            <span class="text-red-500 text-xl mt-0.5 shrink-0">×</span>
            <p class="text-gray-900 dark:text-gray-200">Weeks of back-and-forth with developers who need decisions you're not ready to make</p>
          </div>
          <div class="flex gap-4 items-start border-b border-gray-200 dark:border-gray-800 rounded-lg p-5">
            <span class="text-red-500 text-xl mt-0.5 shrink-0">×</span>
            <p class="text-gray-900 dark:text-gray-200">A launch that goes quiet — not because nobody wants what you built, but because you built it for the wrong person</p>
          </div>
          <div class="flex gap-4 items-start border-b border-gray-200 dark:border-gray-800 rounded-lg p-5">
            <span class="text-red-500 text-xl mt-0.5 shrink-0">×</span>
            <p class="text-gray-900 dark:text-gray-200">The opportunity cost of the version you could have built if you'd known what to build from day one</p>
          </div>
        </div>

        <p class="mt-10 text-lg text-gray-700 dark:text-white max-w-2xl">
          The founders who avoid this aren't smarter than you. They just did one thing differently — <strong class="text-gray-900 dark:text-white">they got clarity before they wrote a single line of code.</strong>
        </p>
      </div>

      <!-- CONTRAST: THE RIGHT PATH -->
      <div class="py-20 border-b border-gray-200 dark:border-gray-800">
        <p class="text-sm font-medium uppercase tracking-widest text-gray-500 dark:text-gray-500 mb-4">What It Looks Like When You Get It Right</p>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 max-w-2xl">Imagine the same founder — but they paused before they built.</h2>

        <div class="space-y-6 text-gray-700 dark:text-white text-lg leading-relaxed max-w-2xl">
          <p>Same idea. Same ambition. Same budget to spend.</p>
          <p>But before they hired a developer, they spent two weeks doing one thing: understanding the system they were about to build.</p>
          <p>They mapped who their users actually were — not "everyone," but three specific archetypes with different behaviors, different needs, and different reasons to stay or leave. They could describe each one in a paragraph and tell you exactly what would make them come back.</p>
          <p>They identified the real problem — not the symptom sitting on the surface, but the root cause underneath it. The thing the current solutions were getting wrong. The gap nobody had filled yet.</p>
          <p>They got clear on scope. They had a defined MVP — a precise list of what the first version needed to do to test the core hypothesis. Not everything. Just enough.</p>
        </div>

        <div class="my-10 bg-gray-100 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-800 max-w-2xl">
          <p class="text-gray-900 dark:text-white text-xl font-semibold mb-6">Then they handed a brief to a developer.</p>
          <div class="space-y-4">
            <div class="flex gap-3 items-start">
              <span style="color: #00ff9f;" class="text-lg shrink-0 mt-0.5">✓</span>
              <p class="text-gray-700 dark:text-gray-200">The brief was 30 pages — not a voice note. Every screen, every user flow, every edge case was documented before a line of code was written.</p>
            </div>
            <div class="flex gap-3 items-start">
              <span style="color: #00ff9f;" class="text-lg shrink-0 mt-0.5">✓</span>
              <p class="text-gray-700 dark:text-gray-200">The developer had no open questions. They knew exactly what to build, for whom, and why.</p>
            </div>
            <div class="flex gap-3 items-start">
              <span style="color: #00ff9f;" class="text-lg shrink-0 mt-0.5">✓</span>
              <p class="text-gray-700 dark:text-gray-200">The build took 6 weeks — not 6 months — because scope was locked before a single line of code was written.</p>
            </div>
            <div class="flex gap-3 items-start">
              <span style="color: #00ff9f;" class="text-lg shrink-0 mt-0.5">✓</span>
              <p class="text-gray-700 dark:text-gray-200">The dev quote came in at $18,000. Not $80,000. Because there was no ambiguity, no scope creep, and no back-and-forth to bill for.</p>
            </div>
            <div class="flex gap-3 items-start">
              <span style="color: #00ff9f;" class="text-lg shrink-0 mt-0.5">✓</span>
              <p class="text-gray-700 dark:text-gray-200">The launch had users. Because they'd already validated who the product was for and what it needed to do.</p>
            </div>
          </div>
        </div>

        <blockquote class="border-l-4 pl-6 my-8 max-w-2xl" style="border-color: #00ff9f;">
          <p class="text-2xl italic text-gray-900 dark:text-white font-light">Two weeks of clarity saved four months of confusion and more than $60,000 in wasted development.</p>
        </blockquote>

        <p class="text-lg text-gray-700 dark:text-white max-w-2xl">
          That is what the right process looks like. That is what you are buying when you invest in clarity before you build.
        </p>
      </div>

      <!-- WHAT CLARITY ACTUALLY LOOKS LIKE -->
      <div class="py-20 border-b border-gray-200 dark:border-gray-800">
        <p class="text-sm font-medium uppercase tracking-widest text-gray-500 dark:text-gray-500 mb-4">What Clarity Actually Looks Like</p>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 max-w-2xl">There are seven questions every founder must be able to answer before they build.</h2>
        <p class="text-lg text-gray-700 dark:text-white mb-12 max-w-2xl">Most can't. That's why they're stuck. By the end of this process, you'll have a documented, specific answer to every single one.</p>

        <div class="max-w-2xl space-y-4">

          <div class="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
            <div class="px-6 py-4 bg-gray-100 dark:bg-gray-900">
              <p class="font-semibold text-gray-900 dark:text-white">Who exactly is this for?</p>
            </div>
            <div class="px-6 py-4">
              <p class="text-gray-500 dark:text-gray-500 text-sm mb-2 italic">Most founders answer: "Anyone who needs this." That is not an answer.</p>
              <p class="text-gray-700 dark:text-gray-200 text-sm">After Discovery: You have 2–3 named user archetypes. Each one has a behavioral profile — their goal, their frustration with the current solution, how often they'd use the product, and the one thing that would make them stay. You can describe them in a paragraph and build for them specifically.</p>
            </div>
          </div>

          <div class="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
            <div class="px-6 py-4 bg-gray-100 dark:bg-gray-900">
              <p class="font-semibold text-gray-900 dark:text-white">What problem are we actually solving?</p>
            </div>
            <div class="px-6 py-4">
              <p class="text-gray-500 dark:text-gray-500 text-sm mb-2 italic">Most founders answer: "It just makes things easier." That is a symptom, not a problem.</p>
              <p class="text-gray-700 dark:text-gray-200 text-sm">After Discovery: You have a written Problem Hypothesis — one clear statement of the root cause, who it affects, why the current solutions fail, and what changes if this problem gets solved. Not a pitch. A diagnosis.</p>
            </div>
          </div>

          <div class="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
            <div class="px-6 py-4 bg-gray-100 dark:bg-gray-900">
              <p class="font-semibold text-gray-900 dark:text-white">What does the system actually need to do?</p>
            </div>
            <div class="px-6 py-4">
              <p class="text-gray-500 dark:text-gray-500 text-sm mb-2 italic">Most founders answer with a feature list. Features are not a system.</p>
              <p class="text-gray-700 dark:text-gray-200 text-sm">After Architecture: You have a blueprint — every component of the new system, how they connect, and why each one needs to exist. Not a wireframe. A logical design that can be handed to any competent developer and built without ambiguity.</p>
            </div>
          </div>

          <div class="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
            <div class="px-6 py-4 bg-gray-100 dark:bg-gray-900">
              <p class="font-semibold text-gray-900 dark:text-white">How will each user type actually move through the product?</p>
            </div>
            <div class="px-6 py-4">
              <p class="text-gray-500 dark:text-gray-500 text-sm mb-2 italic">Most founders can't walk you through a single user's full journey without gaps.</p>
              <p class="text-gray-700 dark:text-gray-200 text-sm">After Architecture: You have a User Journey Map for each archetype — the exact path from first touch to the core action, including every decision point, every handoff, and every place the experience could break down.</p>
            </div>
          </div>

          <div class="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
            <div class="px-6 py-4 bg-gray-100 dark:bg-gray-900">
              <p class="font-semibold text-gray-900 dark:text-white">What is the MVP — what is actually enough to test?</p>
            </div>
            <div class="px-6 py-4">
              <p class="text-gray-500 dark:text-gray-500 text-sm mb-2 italic">Most founders either overbuild or can't name their MVP without waving their hands.</p>
              <p class="text-gray-700 dark:text-gray-200 text-sm">After Solution Design: You have a locked MVP Scope — a precise list of what the first version must do to test the core hypothesis, with everything else explicitly cut. No scope creep. No "just one more feature." A line in the sand.</p>
            </div>
          </div>

          <div class="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
            <div class="px-6 py-4 bg-gray-100 dark:bg-gray-900">
              <p class="font-semibold text-gray-900 dark:text-white">What do I hand to a developer and what will it cost?</p>
            </div>
            <div class="px-6 py-4">
              <p class="text-gray-500 dark:text-gray-500 text-sm mb-2 italic">Most founders hand over a vague brief and get back a vague — and inflated — quote.</p>
              <p class="text-gray-700 dark:text-gray-200 text-sm">After Solution Design: You have a full PRD — every screen, every flow, every functional requirement, documented clearly. Developers quote against specifics, not guesses. That alone typically cuts development costs by 30–60%.</p>
            </div>
          </div>

          <div class="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
            <div class="px-6 py-4 bg-gray-100 dark:bg-gray-900">
              <p class="font-semibold text-gray-900 dark:text-white">How do I know if it worked?</p>
            </div>
            <div class="px-6 py-4">
              <p class="text-gray-500 dark:text-gray-500 text-sm mb-2 italic">Most founders launch and wait. Waiting is not a success criterion.</p>
              <p class="text-gray-700 dark:text-gray-200 text-sm">After the Pilot: You have real data — not surveys, not assumptions — from actual users interacting with the actual product. And a decision framework: what the data means, what you do next, and why. You go into the full build knowing it works.</p>
            </div>
          </div>

        </div>
      </div>

      <!-- THE SOLUTION -->
      <div class="py-20 border-b border-gray-200 dark:border-gray-800">
        <p class="text-sm font-medium uppercase tracking-widest text-gray-500 dark:text-gray-500 mb-4">The Solution</p>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">The Zero <span style="color: #00ff9f;">Point</span> System</h2>
        <p class="text-xl text-gray-600 dark:text-gray-400 mb-6 max-w-2xl leading-relaxed">That founder didn't get lucky. They followed a process. This is that process.</p>
        <p class="text-lg text-gray-700 dark:text-white mb-14 max-w-2xl leading-relaxed">Four phases, each building on the last. Each one delivering real value on its own. By the end, you don't just have a plan — you have proof that the plan works.</p>

        <!-- Phase 1 -->
        <div class="mb-12 max-w-2xl">
          <div class="flex items-start gap-6">
            <div class="shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-black font-bold text-lg" style="background-color: #00ff9f;">1</div>
            <div class="flex-1">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-1">System Discovery</h3>
              <p class="text-sm text-gray-500 dark:text-gray-500 mb-5">Answers: Who is this for? What problem are we actually solving?</p>
              <p class="text-gray-700 dark:text-gray-200 leading-relaxed mb-5">We map everything that exists before we imagine anything new — every user type, every step in the current experience, every place it breaks down. Then we go deeper: not the symptom on the surface, but the root cause underneath it. The thing nobody has fixed yet. The gap your product can actually own.</p>
              <div class="bg-gray-100 dark:bg-gray-900 rounded-lg p-5 border border-gray-200 dark:border-gray-800">
                <p class="text-sm font-semibold text-gray-900 dark:text-white mb-3">You walk away with:</p>
                <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li class="flex gap-2"><span style="color: #00ff9f;">→</span> Current System Map — a visual diagram of your system, how it works, and where it breaks</li>
                  <li class="flex gap-2"><span style="color: #00ff9f;">→</span> User Archetypes — behavioral profiles of every user type and what they need</li>
                  <li class="flex gap-2"><span style="color: #00ff9f;">→</span> Problem Hypothesis — a clear documented statement of the real problem and what solving it unlocks</li>
                </ul>
                <p class="mt-4 text-sm italic text-gray-500 dark:text-gray-500">A clear, honest picture of reality before a single dollar goes to development.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Phase 2 -->
        <div class="mb-12 max-w-2xl">
          <div class="flex items-start gap-6">
            <div class="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg border-2 text-gray-900 dark:text-white border-gray-900 dark:border-gray-400">2</div>
            <div class="flex-1">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-1">System Architecture</h3>
              <p class="text-sm text-gray-500 dark:text-gray-500 mb-5">Answers: What does the system need to do? How will users move through it?</p>
              <p class="text-gray-700 dark:text-gray-200 leading-relaxed mb-5">With the discovery in hand, I rebuild the system from scratch — not from templates or best practices, but from what the problem actually requires. I present 2–3 architectural options with explicit trade-offs, so you're choosing with full information. Then we map exactly how each user type moves through the new system, end to end.</p>
              <div class="bg-gray-100 dark:bg-gray-900 rounded-lg p-5 border border-gray-200 dark:border-gray-800">
                <p class="text-sm font-semibold text-gray-900 dark:text-white mb-3">You walk away with:</p>
                <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li class="flex gap-2"><span style="color: #00ff9f;">→</span> Architecture Blueprint — the full design of the new system with trade-off analysis</li>
                  <li class="flex gap-2"><span style="color: #00ff9f;">→</span> User Journey Map — exactly how each user type moves through the new system</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Phase 3 -->
        <div class="mb-12 max-w-2xl">
          <div class="flex items-start gap-6">
            <div class="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg border-2 text-gray-900 dark:text-white border-gray-900 dark:border-gray-400">3</div>
            <div class="flex-1">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-1">Solution Design</h3>
              <p class="text-sm text-gray-500 dark:text-gray-500 mb-5">Answers: What is the MVP? What do I hand to a developer?</p>
              <p class="text-gray-700 dark:text-gray-200 leading-relaxed mb-5">Architecture becomes a build package. We lock the MVP scope — a precise, non-negotiable definition of what the first version must do to test the core hypothesis. Then we write the full PRD: every screen, every flow, every functional requirement. The document a developer can execute from without a single follow-up question.</p>
              <div class="bg-gray-100 dark:bg-gray-900 rounded-lg p-5 border border-gray-200 dark:border-gray-800">
                <p class="text-sm font-semibold text-gray-900 dark:text-white mb-3">You walk away with:</p>
                <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li class="flex gap-2"><span style="color: #00ff9f;">→</span> Product Strategy Document</li>
                  <li class="flex gap-2"><span style="color: #00ff9f;">→</span> Full Product Requirements Document (PRD)</li>
                  <li class="flex gap-2"><span style="color: #00ff9f;">→</span> MVP Scope Definition — exactly what to build first to test the core hypothesis</li>
                </ul>
                <p class="mt-4 text-sm italic text-gray-500 dark:text-gray-500">Everything a developer needs to execute — clearly, efficiently, without ambiguity.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Phase 4 -->
        <div class="max-w-2xl">
          <div class="flex items-start gap-6">
            <div class="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg border-2 text-gray-900 dark:text-white border-gray-900 dark:border-gray-400">4</div>
            <div class="flex-1">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-1">Pilot</h3>
              <p class="text-sm text-gray-500 dark:text-gray-500 mb-5">Answers: Does it actually work? Should I keep going?</p>
              <p class="text-gray-700 dark:text-gray-200 leading-relaxed mb-5">Before you build the full product, you test the core hypothesis with real users under controlled conditions. We define success criteria before the pilot starts — so the result is a verdict, not an interpretation. Keep going. Adjust. Or stop before you spend $80,000 finding out it didn't work.</p>
              <div class="bg-gray-100 dark:bg-gray-900 rounded-lg p-5 border border-gray-200 dark:border-gray-800">
                <p class="text-sm font-semibold text-gray-900 dark:text-white mb-3">You walk away with:</p>
                <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li class="flex gap-2"><span style="color: #00ff9f;">→</span> Pilot results — real data on whether the solution works for real users</li>
                  <li class="flex gap-2"><span style="color: #00ff9f;">→</span> Decision framework — a clear verdict on what to do next and why</li>
                  <li class="flex gap-2"><span style="color: #00ff9f;">→</span> Validated foundation — proof of concept before you spend serious money on development</li>
                </ul>
                <p class="mt-4 text-sm italic text-gray-500 dark:text-gray-500">The founders who skip this are the ones who launch to silence. Don't skip this.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- THE OFFER -->
      <div class="py-20 border-b border-gray-200 dark:border-gray-800">
        <p class="text-sm font-medium uppercase tracking-widest text-gray-500 dark:text-gray-500 mb-4">The Offer</p>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Start With Discovery.</h2>
        <p class="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl leading-relaxed">Phase 1 is where everything starts. Before architecture, before a PRD, before a developer touches anything — you need a clear picture of the system, the users, and the real problem. That is what this session delivers.</p>

        <div class="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 mb-6 max-w-2xl border border-gray-200 dark:border-gray-800">
          <p class="text-lg font-bold text-gray-900 dark:text-white mb-1">System Discovery Session</p>
          <p class="text-4xl font-bold text-gray-900 dark:text-white mb-6">$500</p>
          <p class="text-gray-600 dark:text-gray-400 mb-6 text-sm">A working session, not a consultation. You walk away with real deliverables — not slides, not talking points, but a documented picture of your system that you can act on immediately.</p>
          <ul class="space-y-3 text-gray-700 dark:text-gray-200 text-sm">
            <li class="flex gap-3 items-start"><span style="color: #00ff9f;" class="shrink-0 mt-0.5">✓</span> Current System Map — a visual diagram of your system and where it breaks down</li>
            <li class="flex gap-3 items-start"><span style="color: #00ff9f;" class="shrink-0 mt-0.5">✓</span> User Archetypes — behavioral profiles of every user type and what keeps them coming back</li>
            <li class="flex gap-3 items-start"><span style="color: #00ff9f;" class="shrink-0 mt-0.5">✓</span> Problem Hypothesis — a clear documented statement of the real problem and what solving it would unlock</li>
          </ul>
        </div>

        <div class="bg-gray-900 dark:bg-gray-900 rounded-xl p-8 max-w-2xl border border-gray-700 dark:border-gray-700">
          <p class="text-sm text-gray-400 mb-1">If you want to keep going:</p>
          <p class="text-lg font-bold text-white mb-1">Phases 2 + 3 — Architecture &amp; Solution Design</p>
          <p class="text-4xl font-bold text-white mb-6">$5,000</p>
          <p class="text-gray-400 mb-6 text-sm leading-relaxed">Everything you need before you go near a development shop. This price is available for a limited time while I build my initial case study portfolio.</p>
          <ul class="space-y-3 text-gray-200 text-sm">
            <li class="flex gap-3 items-start"><span style="color: #00ff9f;" class="shrink-0 mt-0.5">✓</span> Full Architecture Blueprint with trade-off analysis</li>
            <li class="flex gap-3 items-start"><span style="color: #00ff9f;" class="shrink-0 mt-0.5">✓</span> User Journey Map for every user type</li>
            <li class="flex gap-3 items-start"><span style="color: #00ff9f;" class="shrink-0 mt-0.5">✓</span> Product Strategy Document</li>
            <li class="flex gap-3 items-start"><span style="color: #00ff9f;" class="shrink-0 mt-0.5">✓</span> Full Product Requirements Document (PRD)</li>
            <li class="flex gap-3 items-start"><span style="color: #00ff9f;" class="shrink-0 mt-0.5">✓</span> MVP Scope Definition</li>
          </ul>
        </div>
      </div>

      <!-- WHO IT'S FOR -->
      <div class="py-20 border-b border-gray-200 dark:border-gray-800">
        <p class="text-sm font-medium uppercase tracking-widest text-gray-500 dark:text-gray-500 mb-8">Is This For You?</p>

        <div class="grid md:grid-cols-2 gap-10 max-w-2xl">
          <div>
            <p class="text-base font-bold text-gray-900 dark:text-white mb-5">This is for you if:</p>
            <div class="space-y-4">
              <div class="flex gap-3 items-start text-sm text-gray-700 dark:text-gray-200">
                <span style="color: #00ff9f;" class="shrink-0 mt-0.5">✓</span>
                <p>You have a product idea and haven't started building yet — and you want to get it right the first time</p>
              </div>
              <div class="flex gap-3 items-start text-sm text-gray-700 dark:text-gray-200">
                <span style="color: #00ff9f;" class="shrink-0 mt-0.5">✓</span>
                <p>You are already building and something feels off — but you cannot put your finger on what</p>
              </div>
              <div class="flex gap-3 items-start text-sm text-gray-700 dark:text-gray-200">
                <span style="color: #00ff9f;" class="shrink-0 mt-0.5">✓</span>
                <p>You are about to hand a brief to a development shop and you know it is not clear enough</p>
              </div>
              <div class="flex gap-3 items-start text-sm text-gray-700 dark:text-gray-200">
                <span style="color: #00ff9f;" class="shrink-0 mt-0.5">✓</span>
                <p>You have been burned before by building something nobody used — and you refuse to repeat that</p>
              </div>
              <div class="flex gap-3 items-start text-sm text-gray-700 dark:text-gray-200">
                <span style="color: #00ff9f;" class="shrink-0 mt-0.5">✓</span>
                <p>You are a non-technical founder who needs someone to translate vision into a system that can actually be built</p>
              </div>
            </div>
          </div>

          <div>
            <p class="text-base font-bold text-gray-900 dark:text-white mb-5">This is NOT for you if:</p>
            <div class="space-y-4">
              <div class="flex gap-3 items-start text-sm text-gray-500 dark:text-gray-500">
                <span class="text-red-500 shrink-0 mt-0.5">×</span>
                <p>You just need someone to execute instructions you have already figured out</p>
              </div>
              <div class="flex gap-3 items-start text-sm text-gray-500 dark:text-gray-500">
                <span class="text-red-500 shrink-0 mt-0.5">×</span>
                <p>You are not willing to question what you are building</p>
              </div>
              <div class="flex gap-3 items-start text-sm text-gray-500 dark:text-gray-500">
                <span class="text-red-500 shrink-0 mt-0.5">×</span>
                <p>You want to skip the thinking and go straight to code</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ABOUT HENRY -->
      <div class="py-20 border-b border-gray-200 dark:border-gray-800">
        <p class="text-sm font-medium uppercase tracking-widest text-gray-500 dark:text-gray-500 mb-8">About Henry</p>

        <div class="max-w-2xl space-y-6 text-gray-700 dark:text-white text-lg leading-relaxed">
          <p>I am Henry Ikoh — Systems Architect and Product Engineer.</p>
          <p>I have spent years working with founders at the exact moment this problem shows up — when they are mid-build, money is leaving, and something feels wrong but nobody can name it. I have seen this from every angle: as a founder who made these mistakes myself, and as the person founders bring in to untangle the mess.</p>
          <p>The pattern is always the same. Not a bad idea. Not a bad developer. A missing step — the step where you stop and actually understand what you are building, for whom, and what success looks like before anyone writes a line of code.</p>
          <p>I built The Zero Point System because that step needs a structure. Left to themselves, most founders skip it — not because they are lazy, but because nobody ever showed them what it looks like to do it properly.</p>

          <div class="border-l-4 pl-6 my-8" style="border-color: #00ff9f;">
            <p class="text-xl italic text-gray-900 dark:text-white font-light">Every founder I have run this process with has walked away knowing exactly what to build, who to build it for, and what it will take to prove it works. That clarity is worth more than any feature on your roadmap.</p>
          </div>
        </div>
      </div>

      <!-- FINAL CTA -->
      <div class="pt-20 text-center">
        <h2 class="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Ready to Get Clarity?</h2>
        <p class="text-xl text-gray-600 dark:text-gray-400 mb-2 max-w-xl mx-auto">Spots are limited. I am only accepting a small number of qualified founders for this offer.</p>
        <p class="text-gray-500 dark:text-gray-500 mb-12">Discovery Session — $500. Phases 2 + 3 — $5,000. No fluff. Just clarity.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://cal.com/henryikoh" target="_blank" rel="noopener" class="inline-block px-10 py-5 text-lg font-semibold rounded-md text-black transition-opacity hover:opacity-80" style="background-color: #00ff9f;">
            Book a Discovery Session →
          </a>
          <nuxt-link to="/contact" class="inline-block px-10 py-5 text-lg font-semibold rounded-md text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-gray-400 transition-colors">
            Reach Out Directly →
          </nuxt-link>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'FoundersPage',
  head() {
    return {
      title: 'The Zero Point System — For Founders | Henry Ikoh',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Get clarity before you build. The Zero Point System is a three-phase process that takes you from idea to a fully specified, build-ready solution — so you stop wasting money building the wrong thing.'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'The Zero Point System — For Founders | Henry Ikoh'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Get clarity before you build. Stop wasting money building the wrong thing.'
        }
      ]
    }
  }
}
</script>
