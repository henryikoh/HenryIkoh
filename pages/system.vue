<template>
  <div class="dark:bg-dark min-h-screen">
    <Navbar :show-profile="false" />
    <div class="wrapper w-11/12 md:w-3/5 mx-auto pt-8 md:pt-32 pb-20">

      <!-- Header -->
      <div class="mb-16">
        <h1 class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          The Zero Point System
        </h1>
        <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light mb-6 max-w-3xl italic">
          Strategic Systems Architecture for Operations That Scale and Impact That Lasts
        </p>
        <p class="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed">
          Most people jump straight to building. I start by understanding the real problem. Whether you're fixing a broken system or creating something new, I use a proven process that ensures we build the right thing, the right way, and measure what actually matters.
        </p>
      </div>

      <!-- Process Overview -->
      <div class="mb-16 bg-gray-50 dark:bg-gray-800 rounded-lg p-6 md:p-8">
        <h2 class="text-lg font-bold text-gray-900 dark:text-white mb-4">The Process</h2>
        <div class="flex flex-wrap items-center gap-2 text-sm md:text-base font-medium text-gray-700 dark:text-gray-300">
          <span class="bg-white dark:bg-gray-700 px-3 py-1 rounded">1. Discovery</span>
          <span class="text-gray-400">&rarr;</span>
          <span class="bg-white dark:bg-gray-700 px-3 py-1 rounded">2. Architecture</span>
          <span class="text-gray-400">&rarr;</span>
          <span class="bg-white dark:bg-gray-700 px-3 py-1 rounded">3. Solution Design</span>
          <span class="text-gray-400">&rarr;</span>
          <span class="bg-white dark:bg-gray-700 px-3 py-1 rounded">4. Pilot</span>
          <span class="text-gray-400">&rarr;</span>
          <span class="bg-white dark:bg-gray-700 px-3 py-1 rounded opacity-60">5. Impact Reporting *</span>
        </div>
        <p class="text-sm text-gray-500 dark:text-gray-400 mt-3">Each phase builds on the previous one. Each phase delivers tangible value on its own. * Phase 5 is for social impact clients.</p>
      </div>

      <!-- Phase 1 -->
      <div class="mb-20">
        <div class="border-l-4 border-gray-900 dark:border-gray-300 pl-6 mb-8">
          <div class="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Phase 1</div>
          <h2 class="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            System Discovery + Impact Mapping
          </h2>
          <p class="text-lg text-gray-700 dark:text-gray-300 font-medium mb-1">
            Understanding What's Actually Broken (And What Success Really Looks Like)
          </p>
          <p class="text-sm text-gray-500 dark:text-gray-400">Duration: 1-2 weeks</p>
        </div>

        <div class="space-y-8 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
          <p>
            This is where we get clear on the real problem — not what you think it is, but what it actually is. And more importantly, what "good" looks like for the people your system serves.
          </p>

          <div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">What We'll Do Together</h3>

            <h4 class="font-bold text-gray-900 dark:text-white mb-2">Discovery Session (2-3 hours)</h4>
            <p class="mb-3">We'll sit down and I'll ask you to walk me through your current situation:</p>
            <ul class="space-y-1 mb-4 ml-4">
              <li>- If you have an existing system: How does it work today, step by step?</li>
              <li>- If you're building something new: What problem are you trying to solve, and for whom?</li>
            </ul>
            <p class="mb-2">I'll ask questions like:</p>
            <ul class="space-y-1 mb-4 ml-4">
              <li>- Where does it break down?</li>
              <li>- What frustrates your team or customers?</li>
              <li>- How long does this take? How much does it cost?</li>
              <li>- Who are all the people involved?</li>
              <li>- What would success look like for the people affected?</li>
            </ul>
            <p>I record everything so I can go back and analyze it deeply later.</p>
          </div>

          <div>
            <h4 class="font-bold text-gray-900 dark:text-white mb-2">Impact Mapping Workshop (Optional, +1-2 hours)</h4>
            <p class="mb-3">For social impact clients or organizations that need to prove outcomes to stakeholders, we add a structured impact mapping session where we define:</p>
            <ul class="space-y-1 ml-4">
              <li>- <span class="font-medium text-gray-900 dark:text-white">Activities:</span> What are the key things you do?</li>
              <li>- <span class="font-medium text-gray-900 dark:text-white">Outputs:</span> What direct results do those activities produce?</li>
              <li>- <span class="font-medium text-gray-900 dark:text-white">Outcomes:</span> What changes for people? (Short-term, medium-term, long-term)</li>
              <li>- <span class="font-medium text-gray-900 dark:text-white">Impact Indicators:</span> How will we know those changes happened?</li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">What I Do After Our Session</h3>
            <p class="mb-3">After our call, I obsessively replay the conversation — sometimes 3-5 times — and start mentally mapping your system:</p>
            <ul class="space-y-1 ml-4">
              <li>- What are the true inputs and outputs?</li>
              <li>- Where's the actual bottleneck? (Often not where you think)</li>
              <li>- What's the root cause vs just symptoms?</li>
              <li>- Where are the dysfunction points?</li>
            </ul>
            <p class="mt-3">I start sketching flows, questioning every step: <em>"Why does this exist? What can be eliminated? What does success actually look like?"</em></p>
          </div>

          <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <h3 class="font-bold text-gray-900 dark:text-white mb-3">What You Get: "System Discovery + Impact Report"</h3>
            <p class="font-medium text-gray-900 dark:text-white mb-2">System Analysis:</p>
            <ul class="space-y-1 ml-4 mb-4">
              <li>- Current system map: Input &rarr; Process &rarr; Output (visual diagram)</li>
              <li>- Measured baseline metrics: The "before" data (time, cost, quality)</li>
              <li>- Diagnosed problems: What's actually broken and why (symptoms vs root causes)</li>
              <li>- Key stakeholders identified: Who's affected and how</li>
            </ul>
            <p class="font-medium text-gray-900 dark:text-white mb-2">Impact Framework (if applicable):</p>
            <ul class="space-y-1 ml-4">
              <li>- Theory of Change map: Activities &rarr; Outputs &rarr; Outcomes &rarr; Impact</li>
              <li>- Key indicators defined: What we'll measure to prove it worked</li>
              <li>- Target audience identified: Who benefits and how we'll track them</li>
            </ul>
          </div>

          <p class="text-gray-900 dark:text-white font-medium">
            Even if we never work together beyond this point, you'll know exactly what to fix and how to measure success.
          </p>
        </div>
      </div>

      <!-- Phase 2 -->
      <div class="mb-20">
        <div class="border-l-4 border-gray-900 dark:border-gray-300 pl-6 mb-8">
          <div class="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Phase 2</div>
          <h2 class="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            System Architecture
          </h2>
          <p class="text-lg text-gray-700 dark:text-gray-300 font-medium mb-1">
            Rebuilding Your System From First Principles
          </p>
          <p class="text-sm text-gray-500 dark:text-gray-400">Duration: 2-3 weeks</p>
        </div>

        <div class="space-y-8 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
          <p>This is where the real magic happens. This is my secret sauce.</p>

          <div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">What We'll Do Together</h3>

            <h4 class="font-bold text-gray-900 dark:text-white mb-2">Visualization Session 1 (Collaborative)</h4>
            <p class="mb-3">I'll present the current state map to you and your key stakeholders. We'll walk through what's broken together and make sure everyone sees the same picture. Then we'll set clear improvement targets:</p>
            <ul class="space-y-1 ml-4 mb-4">
              <li>- <span class="font-medium text-gray-900 dark:text-white">Efficiency targets:</span> "Reduce processing time by 70%", "Cut operating costs by 50%"</li>
              <li>- <span class="font-medium text-gray-900 dark:text-white">Impact targets:</span> "Increase student retention from 60% to 90%", "Improve customer satisfaction by 30%"</li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">What I Do After: The Mental Reconstruction</h3>
            <p class="mb-4 font-medium text-gray-900 dark:text-white">This is what you're really paying for. This is where I do my deepest thinking.</p>

            <p class="mb-2">I take your system completely apart in my mind and rebuild it from scratch:</p>

            <div class="space-y-4 ml-4">
              <div>
                <p class="font-medium text-gray-900 dark:text-white">1. Deconstruction</p>
                <p>Strip everything down to fundamental components. Question every single step: <em>"Why does this exist? Is it essential or just accumulated cruft?"</em></p>
              </div>
              <div>
                <p class="font-medium text-gray-900 dark:text-white">2. Reconstruction</p>
                <p>Start from first principles. Design new flows — where can we eliminate steps, parallelize, automate, or simplify? Account for human behavior. Design for measurable outcomes. Design within your constraints.</p>
              </div>
              <div>
                <p class="font-medium text-gray-900 dark:text-white">3. Options Development</p>
                <p>I don't give you one solution. I give you 2-3 approaches with clear trade-offs:</p>
                <ul class="space-y-1 ml-4 mt-2">
                  <li>- <span class="font-medium text-gray-900 dark:text-white">Option A:</span> Minimal change — fast, low cost, modest improvement</li>
                  <li>- <span class="font-medium text-gray-900 dark:text-white">Option B:</span> Complete rebuild — slower, higher investment, maximum improvement</li>
                  <li>- <span class="font-medium text-gray-900 dark:text-white">Option C:</span> Hybrid — quick wins now + foundation for long-term scale</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 class="font-bold text-gray-900 dark:text-white mb-2">Visualization Session 2 (Collaborative)</h4>
            <p class="mb-3">I'll present the redesigned system(s) to you — before/after comparison, walk through the new flows, explain trade-offs, show expected gains. This is a collaborative refinement session: you know your business context, I know systems architecture. Together, we iterate to get it exactly right.</p>
          </div>

          <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <h3 class="font-bold text-gray-900 dark:text-white mb-3">What You Get: "System Architecture Blueprint"</h3>
            <ul class="space-y-1 ml-4">
              <li>- Redesigned system map(s): 2-3 options, fully visualized</li>
              <li>- Before/After comparison: Clear visual showing the transformation</li>
              <li>- Expected improvement projections (efficiency + impact)</li>
              <li>- Trade-off analysis: What each option costs vs what it gains</li>
              <li>- Recommended approach with reasoning</li>
            </ul>
          </div>

          <p class="text-gray-900 dark:text-white font-medium">
            Even if you use your internal team to build it, you now have the architecture. The thinking is done. Most consultants give you theory. I give you the actual design — ready to build.
          </p>
        </div>
      </div>

      <!-- Phase 3 -->
      <div class="mb-20">
        <div class="border-l-4 border-gray-900 dark:border-gray-300 pl-6 mb-8">
          <div class="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Phase 3</div>
          <h2 class="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Solution Design + Impact Indicators
          </h2>
          <p class="text-lg text-gray-700 dark:text-gray-300 font-medium mb-1">
            Defining What to Build (And How to Prove It Worked)
          </p>
          <p class="text-sm text-gray-500 dark:text-gray-400">Duration: 1-2 weeks</p>
        </div>

        <div class="space-y-8 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
          <p>We have the architecture. Now we define exactly <em>what</em> to build, how to scope it for a focused test, and <em>how</em> to measure whether it actually worked.</p>

          <div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">What We'll Do Together</h3>

            <h4 class="font-bold text-gray-900 dark:text-white mb-2">Solution Scoping Session</h4>
            <p class="mb-3">We'll define exactly how we're going to prove this works:</p>

            <div class="space-y-4 ml-4">
              <div>
                <p class="font-medium text-gray-900 dark:text-white">Goals (Measurable at Three Levels):</p>
                <ul class="space-y-1 ml-4 mt-1">
                  <li>- <span class="font-medium text-gray-900 dark:text-white">Output Goals:</span> Did we build what we said? System is functional, data is accurate, team can operate it.</li>
                  <li>- <span class="font-medium text-gray-900 dark:text-white">Outcome Goals:</span> Did it change behavior/performance? "Reduce time from 5 hours to 1 hour", "Improve satisfaction by 25%"</li>
                  <li>- <span class="font-medium text-gray-900 dark:text-white">Impact Goals:</span> Did it change lives/business? Long-term systemic effects (if applicable)</li>
                </ul>
              </div>
              <div>
                <p class="font-medium text-gray-900 dark:text-white">Budget + Scope:</p>
                <p>How much can we invest in testing? What's the minimum version we need? Where should we test it? How long should it run?</p>
              </div>
              <div>
                <p class="font-medium text-gray-900 dark:text-white">Data Collection Plan:</p>
                <ul class="space-y-1 ml-4 mt-1">
                  <li>- Efficiency metrics: Time, cost, quality, throughput</li>
                  <li>- User experience: Surveys, interviews, observations</li>
                  <li>- Outcome metrics: Behavioral changes, performance improvements</li>
                  <li>- Methods: Baseline data, continuous tracking, post-pilot assessment, follow-up tracking</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <h3 class="font-bold text-gray-900 dark:text-white mb-3">What You Get: "Solution Design + Impact Measurement Plan"</h3>
            <ul class="space-y-1 ml-4">
              <li>- Clear goals: Measurable, time-bound targets at all three levels</li>
              <li>- Budget breakdown: What you'll spend and where</li>
              <li>- Pilot scope definition: Exactly what, where, who, and for how long</li>
              <li>- Data collection framework with methods and instruments</li>
              <li>- Success criteria: How we'll know if it worked (evidence, not opinions)</li>
              <li>- Risk mitigation plan</li>
              <li>- Week-by-week execution timeline</li>
            </ul>
          </div>

          <p class="text-gray-900 dark:text-white font-medium">
            This plan de-risks your investment and defines success clearly. You can execute it yourself with your internal team, or have me run it.
          </p>
        </div>
      </div>

      <!-- Phase 4 -->
      <div class="mb-20">
        <div class="border-l-4 border-gray-900 dark:border-gray-300 pl-6 mb-8">
          <div class="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Phase 4</div>
          <h2 class="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Pilot + Impact Measurement
          </h2>
          <p class="text-lg text-gray-700 dark:text-gray-300 font-medium mb-1">
            Proving It Works (With Real Users, Real Data, Real Outcomes)
          </p>
          <p class="text-sm text-gray-500 dark:text-gray-400">Duration: 4 weeks to 6 months (depends on system complexity)</p>
        </div>

        <div class="space-y-8 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
          <p>This is where we stop theorizing and start testing in the real world.</p>

          <div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">What Happens</h3>

            <div class="space-y-6">
              <div>
                <h4 class="font-bold text-gray-900 dark:text-white mb-2">Build Minimum Testable System (Weeks 1-2)</h4>
                <p>We implement the new process in a limited scope — train the people involved, set up data collection systems, establish baseline measurements.</p>
              </div>

              <div>
                <h4 class="font-bold text-gray-900 dark:text-white mb-2">Run Pilot in Real Conditions (Weeks 3-12+)</h4>
                <p class="mb-3">We test with real users, real inputs, real environment — not in a lab, but in actual operating conditions. Throughout the pilot, we:</p>
                <ul class="space-y-2 ml-4">
                  <li>- <span class="font-medium text-gray-900 dark:text-white">Track efficiency:</span> Time, cost, quality metrics, error rates, bottlenecks</li>
                  <li>- <span class="font-medium text-gray-900 dark:text-white">Measure user experience:</span> Weekly check-ins, surveys, interviews, observations</li>
                  <li>- <span class="font-medium text-gray-900 dark:text-white">Monitor outcomes:</span> Behavioral changes, performance improvements, unexpected effects</li>
                  <li>- <span class="font-medium text-gray-900 dark:text-white">Hold regular reviews:</span> Stay aligned and respond quickly, document learnings</li>
                </ul>
              </div>

              <div>
                <h4 class="font-bold text-gray-900 dark:text-white mb-2">Iterate Based on Reality</h4>
                <p>As we learn, we adjust — fix what broke, simplify what's too complex, respond to user feedback, re-measure after each adjustment. This is the beauty of a pilot: we learn and improve before scaling.</p>
              </div>

              <div>
                <h4 class="font-bold text-gray-900 dark:text-white mb-2">Scale or Iterate Decision</h4>
                <p>Based on the results, we decide together: If the pilot succeeded, plan the full rollout. If issues remain, design the next iteration. <span class="font-medium text-gray-900 dark:text-white">Critical rule: We don't scale broken systems.</span></p>
              </div>
            </div>
          </div>

          <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <h3 class="font-bold text-gray-900 dark:text-white mb-3">What You Get: "Pilot Results + Impact Evidence"</h3>
            <ul class="space-y-1 ml-4">
              <li>- Before/After comparison: Real measured data, not projections</li>
              <li>- Efficiency gains: Time saved, costs reduced, quality improved</li>
              <li>- Outcome evidence: What changed for people (data + stories)</li>
              <li>- What worked, what didn't, what we learned: Honest analysis</li>
              <li>- ROI calculation: Investment vs value created</li>
              <li>- Recommendation: Scale, iterate, or pivot?</li>
              <li>- If scaling: Full implementation roadmap for rollout</li>
            </ul>
          </div>

          <p class="text-gray-900 dark:text-white font-medium">
            You're not trusting my opinion. You're looking at real data from real users in real conditions.
          </p>
        </div>
      </div>

      <!-- Phase 5 (Optional) -->
      <div class="mb-20">
        <div class="border-l-4 border-gray-400 dark:border-gray-600 pl-6 mb-8">
          <div class="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Phase 5 — Optional</div>
          <h2 class="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Impact Reporting
          </h2>
          <p class="text-lg text-gray-700 dark:text-gray-300 font-medium mb-1">
            Communicating the Difference You Made
          </p>
          <p class="text-sm text-gray-500 dark:text-gray-400">Duration: 2-4 weeks | For social impact clients</p>
        </div>

        <div class="space-y-8 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
          <p>
            For NGOs, foundations, social enterprises, government programs, or any organization that needs to prove outcomes to funders, stakeholders, or the public.
          </p>

          <div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">The Report Addresses Five Key Questions</h3>
            <ol class="space-y-2 ml-4">
              <li>1. <span class="font-medium text-gray-900 dark:text-white">Need:</span> What problem were you trying to solve?</li>
              <li>2. <span class="font-medium text-gray-900 dark:text-white">Activities:</span> What did you do to address it?</li>
              <li>3. <span class="font-medium text-gray-900 dark:text-white">Outcomes:</span> What were the results?</li>
              <li>4. <span class="font-medium text-gray-900 dark:text-white">Evidence:</span> How do you know you made a difference?</li>
              <li>5. <span class="font-medium text-gray-900 dark:text-white">Lessons Learned:</span> What would you do differently next time?</li>
            </ol>
          </div>

          <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <h3 class="font-bold text-gray-900 dark:text-white mb-3">What You Get: "Impact Report"</h3>
            <p class="mb-3">A professionally designed report (your choice of format):</p>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <p class="font-medium text-gray-900 dark:text-white mb-2">Standard Format:</p>
                <ul class="space-y-1 ml-4 text-sm">
                  <li>- Executive summary</li>
                  <li>- Problem statement</li>
                  <li>- Activities and outputs</li>
                  <li>- Outcomes achieved</li>
                  <li>- Evidence (data, stories, testimonials)</li>
                  <li>- Lessons learned and recommendations</li>
                </ul>
              </div>
              <div>
                <p class="font-medium text-gray-900 dark:text-white mb-2">Visual Format:</p>
                <ul class="space-y-1 ml-4 text-sm">
                  <li>- One-page visual summary</li>
                  <li>- Data visualizations</li>
                  <li>- Impact stories with photos</li>
                  <li>- Before/after comparisons</li>
                  <li>- Key metrics highlighted</li>
                  <li>- Shareable for presentations</li>
                </ul>
              </div>
            </div>
          </div>

          <p class="text-gray-900 dark:text-white font-medium">
            Most organizations can show activities (we did X). Few can show outcomes (X changed lives). This report gives you evidence-based storytelling.
          </p>
        </div>
      </div>

      <!-- How We Work Together -->
      <div class="mb-20">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
          How We Work Together
        </h2>
        <p class="text-gray-600 dark:text-gray-400 text-base mb-8">
          Each phase builds on the previous one, but delivers standalone value. You decide how far we go together based on your needs, budget, and internal capabilities.
        </p>
        <div class="space-y-4">
          <div class="flex items-start gap-4 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <span class="text-sm font-bold text-gray-500 dark:text-gray-400 mt-1 shrink-0">After Phase 1</span>
            <p class="text-gray-700 dark:text-gray-300">You know exactly what's broken, why, and what success looks like. You can stop here — you have the diagnosis.</p>
          </div>
          <div class="flex items-start gap-4 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <span class="text-sm font-bold text-gray-500 dark:text-gray-400 mt-1 shrink-0">After Phase 2</span>
            <p class="text-gray-700 dark:text-gray-300">You have the blueprint for how to fix it. You can stop here and build it yourself if you have the team.</p>
          </div>
          <div class="flex items-start gap-4 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <span class="text-sm font-bold text-gray-500 dark:text-gray-400 mt-1 shrink-0">After Phase 3</span>
            <p class="text-gray-700 dark:text-gray-300">You have the complete test plan and measurement framework. You can execute it internally if you prefer.</p>
          </div>
          <div class="flex items-start gap-4 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <span class="text-sm font-bold text-gray-500 dark:text-gray-400 mt-1 shrink-0">After Phase 4</span>
            <p class="text-gray-700 dark:text-gray-300">You have proof it works and a roadmap to scale. You can take it from here or continue working with me on the rollout.</p>
          </div>
          <div class="flex items-start gap-4 border border-gray-200 dark:border-gray-700 rounded-lg p-4 opacity-75">
            <span class="text-sm font-bold text-gray-500 dark:text-gray-400 mt-1 shrink-0">After Phase 5</span>
            <p class="text-gray-700 dark:text-gray-300">You have professional documentation of your impact. Use it to secure funding, report to stakeholders, or demonstrate accountability.</p>
          </div>
        </div>
      </div>

      <!-- What Makes This Different -->
      <div class="mb-20">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
          What Makes This Different
        </h2>
        <div class="space-y-6">
          <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-5">
            <h3 class="font-bold text-gray-900 dark:text-white mb-2">I don't just give advice — I design solutions.</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">Most consultants give you a report full of recommendations. I give you a redesigned system ready to build — with diagrams, process flows, and clear before/after comparisons.</p>
          </div>
          <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-5">
            <h3 class="font-bold text-gray-900 dark:text-white mb-2">I think deeply before I act.</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">The mental work I do between sessions — deconstructing your system, rebuilding it from first principles — this is where the real value is created. I don't give you generic "best practices." I give you a custom-designed system that fits your constraints, your people, your context.</p>
          </div>
          <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-5">
            <h3 class="font-bold text-gray-900 dark:text-white mb-2">I measure what actually matters.</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">Most consultants measure efficiency (time, cost). I measure efficiency and outcomes (what changed for people). You get the full picture, not just the numbers.</p>
          </div>
          <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-5">
            <h3 class="font-bold text-gray-900 dark:text-white mb-2">You get data, not opinions.</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">Every phase produces measurable outputs. Discovery gives you current state metrics. Architecture gives you improvement projections. Solution Design gives you success criteria. Pilot gives you before/after data. You're not trusting my gut. You're looking at evidence.</p>
          </div>
          <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-5">
            <h3 class="font-bold text-gray-900 dark:text-white mb-2">Collaborative, not dictatorial.</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">This isn't me telling you what to do. You know your business, your team, your constraints. I know systems architecture, impact measurement, how to build things that scale. Together, we create something better than either of us could alone.</p>
          </div>
          <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-5">
            <h3 class="font-bold text-gray-900 dark:text-white mb-2">I bridge worlds most consultants can't.</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">Business consultants don't measure real human outcomes. Implementation firms don't diagnose properly first. Impact specialists don't fix the actual systems. I do all three: diagnose deeply, design properly, prove it worked.</p>
          </div>
        </div>
      </div>

      <!-- Service Tiers -->
      <div class="mb-20">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Service Tiers
        </h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-1">Systems Optimization</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">Corporate / Startup Focus</p>
            <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">Phases 1-4</p>
            <p class="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-4">
              Focus on efficiency, cost reduction, and scalability.
            </p>
            <p class="text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">Deliverables:</p>
            <ul class="text-gray-600 dark:text-gray-400 text-sm space-y-1 ml-4 mb-4">
              <li>- System Discovery Report</li>
              <li>- System Architecture Blueprint</li>
              <li>- Solution Design Document</li>
              <li>- Pilot Results + ROI Proof</li>
            </ul>
            <p class="text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">Best for:</p>
            <ul class="text-gray-600 dark:text-gray-400 text-sm space-y-1 ml-4">
              <li>- Corporations fixing broken operations</li>
              <li>- Startups building scalable systems</li>
              <li>- Businesses optimizing for growth</li>
            </ul>
          </div>
          <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-1">Systems + Impact</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">Social Impact Focus</p>
            <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">Phases 1-5</p>
            <p class="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-4">
              Full measurement framework, outcome evidence, and professional documentation for funders and stakeholders.
            </p>
            <p class="text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">Deliverables:</p>
            <ul class="text-gray-600 dark:text-gray-400 text-sm space-y-1 ml-4 mb-4">
              <li>- System Discovery + Impact Report</li>
              <li>- System Architecture Blueprint</li>
              <li>- Solution Design + Impact Measurement Plan</li>
              <li>- Pilot Results + Impact Evidence</li>
              <li>- Professional Impact Report</li>
            </ul>
            <p class="text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">Best for:</p>
            <ul class="text-gray-600 dark:text-gray-400 text-sm space-y-1 ml-4">
              <li>- NGOs proving impact to funders</li>
              <li>- Foundations measuring program outcomes</li>
              <li>- Social enterprises tracking social + financial returns</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Is This For You -->
      <div class="mb-20">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Is This For You?
        </h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h3 class="font-bold text-gray-900 dark:text-white mb-4">You're a good fit if:</h3>
            <ul class="text-gray-600 dark:text-gray-400 text-base space-y-3">
              <li class="flex items-start">
                <span class="text-gray-900 dark:text-white mr-2 mt-1 shrink-0">+</span>
                <span>You have a system that's broken and you're tired of band-aid fixes</span>
              </li>
              <li class="flex items-start">
                <span class="text-gray-900 dark:text-white mr-2 mt-1 shrink-0">+</span>
                <span>You're building something new and want to avoid expensive mistakes</span>
              </li>
              <li class="flex items-start">
                <span class="text-gray-900 dark:text-white mr-2 mt-1 shrink-0">+</span>
                <span>You value strategic thinking as much as execution</span>
              </li>
              <li class="flex items-start">
                <span class="text-gray-900 dark:text-white mr-2 mt-1 shrink-0">+</span>
                <span>You're willing to test before scaling</span>
              </li>
              <li class="flex items-start">
                <span class="text-gray-900 dark:text-white mr-2 mt-1 shrink-0">+</span>
                <span>You want proof (with data) that your investment worked</span>
              </li>
              <li class="flex items-start">
                <span class="text-gray-900 dark:text-white mr-2 mt-1 shrink-0">+</span>
                <span>You care about real outcomes for people, not just operational efficiency</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="font-bold text-gray-900 dark:text-white mb-4">You're not a good fit if:</h3>
            <ul class="text-gray-600 dark:text-gray-400 text-base space-y-3">
              <li class="flex items-start">
                <span class="text-gray-900 dark:text-white mr-2 mt-1 shrink-0">-</span>
                <span>You already know exactly what to build and just need someone to execute</span>
              </li>
              <li class="flex items-start">
                <span class="text-gray-900 dark:text-white mr-2 mt-1 shrink-0">-</span>
                <span>You're not willing to question your assumptions</span>
              </li>
              <li class="flex items-start">
                <span class="text-gray-900 dark:text-white mr-2 mt-1 shrink-0">-</span>
                <span>You want to skip the testing phase and "just launch"</span>
              </li>
              <li class="flex items-start">
                <span class="text-gray-900 dark:text-white mr-2 mt-1 shrink-0">-</span>
                <span>You're looking for the cheapest option, not the best solution</span>
              </li>
              <li class="flex items-start">
                <span class="text-gray-900 dark:text-white mr-2 mt-1 shrink-0">-</span>
                <span>You only care about efficiency and don't want to measure impact on people</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- What Happens Next -->
      <div class="mb-20">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
          What Happens Next
        </h2>
        <div class="space-y-6">
          <div class="flex items-start gap-4">
            <span class="bg-gray-900 dark:bg-gray-300 text-white dark:text-gray-900 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shrink-0">1</span>
            <div>
              <h3 class="font-bold text-gray-900 dark:text-white mb-1">Initial Conversation (30-60 minutes, free)</h3>
              <p class="text-gray-600 dark:text-gray-400">We'll talk about what you're trying to fix or build, whether my process is the right fit, which tier and phases you might need, and rough timeline.</p>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <span class="bg-gray-900 dark:bg-gray-300 text-white dark:text-gray-900 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shrink-0">2</span>
            <div>
              <h3 class="font-bold text-gray-900 dark:text-white mb-1">Proposal</h3>
              <p class="text-gray-600 dark:text-gray-400">If we're aligned, I'll send you a proposal outlining which phases we'll start with, timeline, investment, and expected deliverables.</p>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <span class="bg-gray-900 dark:bg-gray-300 text-white dark:text-gray-900 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shrink-0">3</span>
            <div>
              <h3 class="font-bold text-gray-900 dark:text-white mb-1">Discovery Session</h3>
              <p class="text-gray-600 dark:text-gray-400">Once you're ready, we begin Phase 1. From there, we move through the process at your pace — stopping wherever makes sense for your situation.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center border-t border-gray-200 dark:border-gray-700 pt-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Let's Build Something That Actually Works
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Most things that are broken aren't broken because of bad people — they're broken because of bad design. Systems can be redesigned. Processes can be rebuilt. Problems can be solved. You just need someone who knows how to think about systems properly.
        </p>
        <nuxt-link
          to="/contact"
          class="bg-black dark:bg-gray-600 inline-block px-8 py-4 text-lg rounded-md md:text-2xl text-white hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
        >
          Start a Conversation
        </nuxt-link>
      </div>

    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'SystemPage',
  head() {
    return {
      title: 'The Zero Point System - Henry Ikoh',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'The Zero Point System: a strategic systems architecture framework that helps early stage innovators save time and money by designing processes and systems that work from day one.'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'The Zero Point System - Henry Ikoh'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'A 5-phase framework: System Discovery, System Architecture, Solution Design, Pilot, and Impact Reporting. Understand first, design second, prove third.'
        }
      ]
    }
  }
}
</script>
