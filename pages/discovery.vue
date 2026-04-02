<template>
  <div class="dark:bg-dark min-h-screen">
    <Navbar :show-profile="false" />

    <div class="w-11/12 md:w-3/5 mx-auto pb-32 pt-16 md:pt-24">

      <!-- HERO -->
      <div class="pb-20 border-b border-gray-200 dark:border-gray-800">
        <p class="text-sm font-medium uppercase tracking-widest mb-8" style="color: #00ff9f;">System Discovery — Phase 1 of The Zero Point System</p>

        <h1 class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
          You Can't Build the Right Thing If You Don't Know What's Wrong.
        </h1>

        <div class="space-y-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed mb-10">
          <p>Every failed build, every wasted sprint, every launch that went quiet — they all trace back to the same root cause: someone started moving before they understood what they were actually dealing with.</p>
          <p>Building a new product without knowing who it's for or what problem it solves. Fixing a broken system without knowing where it actually breaks. Running a programme without knowing why it isn't working.</p>
          <p class="text-gray-900 dark:text-white font-medium">System Discovery changes that — before you spend another dollar moving in the wrong direction.</p>
        </div>

        <div class="flex flex-wrap gap-3">
          <span class="text-sm px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400">Founders building new products</span>
          <span class="text-sm px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400">Teams with broken systems</span>
          <span class="text-sm px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400">Social impact organisations</span>
        </div>
      </div>

      <!-- WHAT THE SESSION IS -->
      <div class="py-20 border-b border-gray-200 dark:border-gray-800">
        <p class="text-sm font-medium uppercase tracking-widest text-gray-500 dark:text-gray-500 mb-4">What This Is</p>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 max-w-2xl">Two to three hours of structured, uncomfortable honesty about what you're actually dealing with.</h2>

        <div class="space-y-6 text-gray-700 dark:text-white text-lg leading-relaxed max-w-2xl">
          <p>We map reality — not the version you present to investors, not the version that lives in your pitch deck, but what actually exists. Every step in the system. Every person inside it. Every place it breaks down or falls short.</p>
          <p>I ask questions most people don't ask. Why does this step exist? What happens when it fails? Who does it actually serve — and who does it leave behind? I push back on assumptions. I name what I see. I record everything so I can go deep after the session and find what the conversation didn't surface.</p>
          <p>Then I go away and do the analysis. I replay the session. I map what we covered. I look for the root cause underneath the symptoms, the gap between what the system was designed to do and what it actually does. And I write it down — clearly, specifically, without softening it.</p>
          <p class="text-gray-900 dark:text-white font-medium">By the end of this process, you will see your situation in a way you have not seen it before. That is the point.</p>
        </div>

        <div class="mt-12 grid gap-4 max-w-2xl">
          <div class="flex gap-4 items-center bg-gray-100 dark:bg-gray-900 rounded-lg px-5 py-4 border border-gray-200 dark:border-gray-800">
            <span style="color: #00ff9f;" class="text-lg shrink-0">✓</span>
            <p class="text-gray-700 dark:text-gray-200 text-sm">2–3 hours working session — recorded and fully documented</p>
          </div>
          <div class="flex gap-4 items-center bg-gray-100 dark:bg-gray-900 rounded-lg px-5 py-4 border border-gray-200 dark:border-gray-800">
            <span style="color: #00ff9f;" class="text-lg shrink-0">✓</span>
            <p class="text-gray-700 dark:text-gray-200 text-sm">Three written deliverables produced after the session</p>
          </div>
          <div class="flex gap-4 items-center bg-gray-100 dark:bg-gray-900 rounded-lg px-5 py-4 border border-gray-200 dark:border-gray-800">
            <span style="color: #00ff9f;" class="text-lg shrink-0">✓</span>
            <p class="text-gray-700 dark:text-gray-200 text-sm">Debrief call to walk through everything and answer your questions</p>
          </div>
          <div class="flex gap-4 items-center bg-gray-100 dark:bg-gray-900 rounded-lg px-5 py-4 border border-gray-200 dark:border-gray-800">
            <span style="color: #00ff9f;" class="text-lg shrink-0">✓</span>
            <p class="text-gray-700 dark:text-gray-200 text-sm">Everything you receive belongs to you — no expiry, no strings</p>
          </div>
        </div>
      </div>

      <!-- THE THREE DELIVERABLES -->
      <div class="py-20 border-b border-gray-200 dark:border-gray-800">
        <p class="text-sm font-medium uppercase tracking-widest text-gray-500 dark:text-gray-500 mb-4">What You Walk Away With</p>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Three questions. Three documents. Complete clarity.</h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-14 max-w-2xl">Whether you're building something new or fixing something broken, these are the three questions that need clear answers before anything else moves.</p>

        <div class="max-w-2xl space-y-6">

          <div class="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
            <div class="px-6 py-5 bg-gray-100 dark:bg-gray-900 flex items-center gap-4">
              <div class="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-black text-xs font-bold" style="background-color: #00ff9f;">1</div>
              <div>
                <p class="font-bold text-gray-900 dark:text-white">Current System Map</p>
                <p class="text-sm text-gray-500 dark:text-gray-500">Answers: What is broken and where?</p>
              </div>
            </div>
            <div class="px-6 py-5">
              <p class="text-gray-700 dark:text-gray-200 text-sm leading-relaxed mb-3">A visual diagram of your system as it actually exists — every step, every user touchpoint, every handoff, and every place it breaks down. Not how you think it works. How it actually works.</p>
              <p class="text-gray-500 dark:text-gray-500 text-sm italic">Most founders have never seen their system laid out this clearly. That alone changes how they think about it.</p>
            </div>
          </div>

          <div class="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
            <div class="px-6 py-5 bg-gray-100 dark:bg-gray-900 flex items-center gap-4">
              <div class="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-black text-xs font-bold" style="background-color: #00ff9f;">2</div>
              <div>
                <p class="font-bold text-gray-900 dark:text-white">User Archetypes</p>
                <p class="text-sm text-gray-500 dark:text-gray-500">Answers: Who is this actually for?</p>
              </div>
            </div>
            <div class="px-6 py-5">
              <p class="text-gray-700 dark:text-gray-200 text-sm leading-relaxed mb-3">2–3 behavioral profiles of the real people who use your system — not demographics, but how they think, what they need, what frustrates them, and what it would take to keep them coming back. Built from what we mapped together, not from assumptions.</p>
              <p class="text-gray-500 dark:text-gray-500 text-sm italic">This is the difference between designing for who you imagine your users are and designing for who they actually are.</p>
            </div>
          </div>

          <div class="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
            <div class="px-6 py-5 bg-gray-100 dark:bg-gray-900 flex items-center gap-4">
              <div class="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-black text-xs font-bold" style="background-color: #00ff9f;">3</div>
              <div>
                <p class="font-bold text-gray-900 dark:text-white">Problem Hypothesis</p>
                <p class="text-sm text-gray-500 dark:text-gray-500">Answers: What is the real problem — and what would solving it unlock?</p>
              </div>
            </div>
            <div class="px-6 py-5">
              <p class="text-gray-700 dark:text-gray-200 text-sm leading-relaxed mb-3">One clear, written statement of the root cause — not the symptom you've been treating. Who it affects, why the current situation persists, and what changes when it gets solved. Not a pitch deck. A diagnosis.</p>
              <p class="text-gray-700 dark:text-gray-200 text-sm leading-relaxed mb-3">Whether you're a founder diagnosing a product gap, an organisation with a broken process, or a social enterprise trying to understand why your programme isn't creating the change you designed it for — this is the document that reframes everything.</p>
              <p class="text-gray-500 dark:text-gray-500 text-sm italic">Most people can describe symptoms. Very few can name the root cause with precision. This is how you get there.</p>
            </div>
          </div>

        </div>
      </div>

      <!-- WHY IT'S FREE -->
      <div class="py-20 border-b border-gray-200 dark:border-gray-800">
        <p class="text-sm font-medium uppercase tracking-widest text-gray-500 dark:text-gray-500 mb-4">The Price</p>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10">This session is free.</h2>

        <div class="max-w-2xl space-y-6 text-gray-700 dark:text-white text-lg leading-relaxed">
          <p>Not discounted. Not "free intro then we pitch you." Free.</p>
          <p>I am building my portfolio of case studies — documented, real-world examples of the discovery process working for real founders with real products. To do that, I need to run real sessions with real problems.</p>
          <p>In exchange for your time and honest engagement, you get the full session and all three deliverables at no cost. I get to document the process and the results.</p>
        </div>

        <div class="mt-10 bg-gray-900 dark:bg-gray-900 rounded-xl p-8 max-w-2xl border border-gray-700">
          <p class="text-white font-semibold mb-3">This will not be free forever.</p>
          <p class="text-gray-300 text-sm leading-relaxed">Once I have the case studies I need, this session moves to a paid offer. The founders who come in now get the full value at none of the cost. No hidden pitch. No obligation to continue. No expiry on what you receive.</p>
        </div>
      </div>

      <!-- IF YOU WANT TO KEEP GOING -->
      <div class="py-20 border-b border-gray-200 dark:border-gray-800">
        <p class="text-sm font-medium uppercase tracking-widest text-gray-500 dark:text-gray-500 mb-4">What Comes Next</p>
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6 max-w-2xl">After the session, some founders want to keep going.</h2>
        <p class="text-lg text-gray-700 dark:text-white mb-14 max-w-2xl">The discovery session stands completely on its own. But clarity is just the start — once you know what you're building and who it's for, the natural next step is to design and specify it. Here's what that looks like.</p>

        <div class="max-w-2xl space-y-4">

          <div class="flex items-start gap-5 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
            <div class="shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300">2</div>
            <div>
              <p class="font-bold text-gray-900 dark:text-white mb-1">System Architecture</p>
              <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">With the discovery in hand, I rebuild your system from first principles — 2–3 architectural options with clear trade-offs, a full Architecture Blueprint, and a User Journey Map showing exactly how your users move through the new system.</p>
            </div>
          </div>

          <div class="flex items-start gap-5 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
            <div class="shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300">3</div>
            <div>
              <p class="font-bold text-gray-900 dark:text-white mb-1">Solution Design</p>
              <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Architecture becomes a build package — a locked MVP Scope, a full Product Requirements Document, and a Product Strategy Document. The exact brief you hand to a developer so they build what you actually need, without ambiguity.</p>
            </div>
          </div>

          <div class="flex items-start gap-5 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
            <div class="shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300">4</div>
            <div>
              <p class="font-bold text-gray-900 dark:text-white mb-1">Pilot</p>
              <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Before you build the full product, you test the core hypothesis with real users. Defined success criteria, measured outcomes, a clear verdict: keep going, adjust, or stop. This is where assumptions become data.</p>
            </div>
          </div>

        </div>

        <p class="mt-8 text-sm text-gray-500 dark:text-gray-500 max-w-2xl">If you want to go further, we discuss what makes sense for your specific situation after the debrief. No packages to commit to upfront — just the next right step.</p>
      </div>

      <!-- TESTIMONIALS -->
      <div class="py-20 border-b border-gray-200 dark:border-gray-800">
        <p class="text-sm font-medium uppercase tracking-widest text-gray-500 dark:text-gray-500 mb-10">What Founders Are Saying</p>
        <div class="grid md:grid-cols-2 gap-6 max-w-2xl">
          <div class="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
            <p class="text-gray-400 dark:text-gray-600 text-sm italic mb-6">Results will be documented here as sessions are completed.</p>
            <div class="border-t border-gray-200 dark:border-gray-800 pt-4">
              <p class="text-sm font-semibold text-gray-400 dark:text-gray-600">Name, Role</p>
              <p class="text-xs text-gray-400 dark:text-gray-700">Company</p>
            </div>
          </div>
          <div class="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
            <p class="text-gray-400 dark:text-gray-600 text-sm italic mb-6">Results will be documented here as sessions are completed.</p>
            <div class="border-t border-gray-200 dark:border-gray-800 pt-4">
              <p class="text-sm font-semibold text-gray-400 dark:text-gray-600">Name, Role</p>
              <p class="text-xs text-gray-400 dark:text-gray-700">Company</p>
            </div>
          </div>
        </div>
      </div>

      <!-- ABOUT -->
      <div class="py-20 border-b border-gray-200 dark:border-gray-800">
        <p class="text-sm font-medium uppercase tracking-widest text-gray-500 dark:text-gray-500 mb-10">About Henry</p>

        <div class="max-w-2xl">
          <div class="flex items-start gap-6 mb-10">
            <img src="/profile.jpeg" alt="Henry Ikoh" class="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover shrink-0" />
            <div>
              <p class="text-xl font-bold text-gray-900 dark:text-white mb-1">Henry Ikoh</p>
              <p class="text-gray-500 dark:text-gray-500 text-sm">Systems Architect &amp; Product Engineer</p>
            </div>
          </div>

          <div class="space-y-6 text-gray-700 dark:text-white text-lg leading-relaxed">
            <p>I have spent years working with founders at the exact moment this problem shows up — when they are mid-build, money is leaving, and something feels deeply wrong but nobody can name it.</p>
            <p>I have seen this from both sides. As a founder, I built Tradr — a three-sided marketplace that generated 20M naira in sales with a team of four. The concept worked. But we built two full mobile apps before we knew if the model would hold. We ran for 8 months with no defined success criteria and no decision framework.</p>
            <p>The product did not fail because the idea was wrong. <strong class="text-gray-900 dark:text-white">It failed because we built too much before we knew enough.</strong> I know exactly what it feels like to be deep in a build with a growing sense that something isn't right — and to keep going anyway because stopping feels like failure.</p>
            <p>I also know what it looks like when a founder gets clarity first. The speed of the build. The confidence in the brief. The dev quotes that come in at a fraction of what they would have been. The launch that actually has users.</p>
            <p>That difference — between building blind and building with clarity — is what The Zero Point System is designed to create. System Discovery is where it starts.</p>

            <div class="border-l-4 pl-6 my-8" style="border-color: #00ff9f;">
              <p class="text-xl italic text-gray-900 dark:text-white font-light">Every founder I have run this process with has walked away knowing exactly what to build, who to build it for, and what problem they are actually solving. That clarity is worth more than any feature on your roadmap.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- FINAL CTA -->
      <div class="pt-20 text-center">
        <h2 class="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Book Your Free Session</h2>
        <p class="text-xl text-gray-600 dark:text-gray-400 mb-2 max-w-xl mx-auto">Spots are limited. Qualified founders only.</p>
        <p class="text-gray-500 dark:text-gray-500 mb-12">Free for now. Not free forever.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://cal.com/henryikoh" target="_blank" rel="noopener" class="inline-block px-10 py-5 text-lg font-semibold rounded-md text-black transition-opacity hover:opacity-80" style="background-color: #00ff9f;">
            Book Your Free Session →
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
  name: 'DiscoveryPage',
  head() {
    return {
      title: 'Free System Discovery Session — The Zero Point System | Henry Ikoh',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'A structured 2–3 hour working session where we map your system, identify your real users, and diagnose what\'s actually broken — before you spend another dollar on development. Free for qualified founders.'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Free System Discovery Session | Henry Ikoh'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Free for qualified founders. Not free forever.'
        }
      ]
    }
  }
}
</script>
