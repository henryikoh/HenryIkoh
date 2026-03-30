<template>
  <div class="dark:bg-dark min-h-screen">
    <Navbar :show-profile="false" />

    <!-- Cover -->
    <div ref="coverWrap" class="w-full mb-12 md:mb-20">
      <SystemCover />
    </div>

    <div class="wrapper w-11/12 md:w-3/5 mx-auto pb-20">

      <!-- Header -->
      <div class="mb-16">
        <h1 class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          The <span style="color: #00ff9f;">Zero</span> Point System
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
          <h2 class="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">System Discovery + Impact Mapping</h2>
          <p class="text-lg text-gray-700 dark:text-gray-300 font-medium mb-1">Understanding What's Actually Broken (And What Success Really Looks Like)</p>
          <p class="text-sm text-gray-500 dark:text-gray-400">Duration: 1-2 weeks</p>
        </div>

        <div class="space-y-8 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
          <p>This is where we get clear on the real problem — not what you think it is, but what it actually is. And more importantly, what "good" looks like for the people your system serves.</p>

          <div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">What We'll Do Together</h3>
            <div class="space-y-6">
              <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-5">
                <h4 class="font-bold text-gray-900 dark:text-white mb-2">Discovery Session (2-3 hours)</h4>
                <p class="mb-3">This session is about mapping reality — not brainstorming solutions. Whether you have an existing system or are designing something new, we map what exists or what you're imagining: how it works, who interacts with it, and where it breaks down.</p>
                <p class="mb-3">We work through three things together:</p>
                <div class="space-y-3 text-sm">
                  <div>
                    <p class="font-semibold text-gray-900 dark:text-white mb-1">1. System Mapping</p>
                    <p class="text-gray-600 dark:text-gray-400">We trace the system step by step — inputs, processes, outputs, handoffs. If you have an existing system, we map what actually happens today. If you're building something new, we map the hypothetical system you're designing for, so we can stress-test it before anything is built.</p>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900 dark:text-white mb-1">2. User Archetypes</p>
                    <p class="text-gray-600 dark:text-gray-400">Every system has people in it. We identify every type of user who interacts with the system — their goals, their frustrations, how often they engage, and what they need the system to do for them. This isn't demographic profiling. It's behavioral mapping.</p>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900 dark:text-white mb-1">3. Problem Diagnosis</p>
                    <p class="text-gray-600 dark:text-gray-400">Once the system and its users are visible, the problems become visible too. We identify where the system breaks down, what's causing it, and whose experience it's damaging.</p>
                  </div>
                </div>
                <p class="text-sm text-gray-500 dark:text-gray-400 mt-3">I record everything so I can go back and analyze it deeply after our session.</p>
              </div>
              <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-5">
                <h4 class="font-bold text-gray-900 dark:text-white mb-2">Impact Mapping Workshop <span class="text-sm font-normal text-gray-500">(Optional, +1-2 hours)</span></h4>
                <p>For social impact clients or organizations that need to prove outcomes to stakeholders, we add a structured session defining: Activities, Outputs, Outcomes (short, medium, long-term), and Impact Indicators.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">What I Do After Our Session</h3>
            <p>After our call, I obsessively replay the conversation — sometimes 3-5 times — mapping your system, finding the true bottleneck (often not where you think), identifying root causes vs symptoms, and sketching new flows. I question every step: "Why does this exist? What can be eliminated? What does success actually look like?"</p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">What You Get: "System Discovery + Impact Report"</h3>
            <ul class="space-y-1.5 text-sm">
              <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span>Current system map: Input → Process → Output (visual diagram)</li>
              <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span>Measured baseline metrics: The "before" data (time, cost, quality)</li>
              <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span>Diagnosed problems: What's actually broken and why (symptoms vs root causes)</li>
              <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span>Key stakeholders identified: Who's affected and how</li>
              <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span><span><strong>Problem Hypothesis:</strong> A clear statement of the root cause and what solving it would unlock</span></li>
              <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span><span><strong>User Archetypes:</strong> A behavioral profile for each distinct user type in the system — their goal, pain points, usage patterns, retention signal, and what they specifically need from the solution. This goes beyond demographics to capture how each user type thinks, behaves, and what it would take to keep them coming back.</span></li>
              <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span>Theory of Change map: Activities → Outputs → Outcomes → Impact <span class="text-gray-400">(social impact clients)</span></li>
              <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span>Key indicators defined: What we'll measure to prove it worked <span class="text-gray-400">(social impact clients)</span></li>
              <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span><span><strong>Stakeholder Map:</strong> All actors in the system, their roles, and how they relate <span class="text-gray-400">(social impact clients)</span></span></li>
            </ul>
            <p class="mt-4 text-sm italic text-gray-500 dark:text-gray-400">Even if we never work together beyond this point, you'll know exactly what to fix and how to measure success.</p>
          </div>
        </div>
      </div>

      <!-- Phase 2 -->
      <div class="mb-20">
        <div class="border-l-4 border-gray-900 dark:border-gray-300 pl-6 mb-8">
          <div class="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Phase 2</div>
          <h2 class="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">System Architecture</h2>
          <p class="text-lg text-gray-700 dark:text-gray-300 font-medium mb-1">Rebuilding Your System From First Principles</p>
          <p class="text-sm text-gray-500 dark:text-gray-400">Duration: 2-3 weeks</p>
        </div>

        <div class="space-y-8 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
          <p>Phase 1 gave us a clear picture of reality — the system as it exists, the people inside it, and what's broken. Phase 2 is where I take that picture apart and design something better.</p>
          <p>This is the most intellectually demanding part of the process. I'm not applying templates or best practices. I'm rebuilding your system from first principles — eliminating what shouldn't exist, redesigning what should, and producing a blueprint for a system that actually works.</p>

          <div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">What We'll Do Together</h3>
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-5 mb-4">
              <h4 class="font-bold text-gray-900 dark:text-white mb-2">Visualization Session 1 (Collaborative)</h4>
              <p>I'll present the current state map and walk through what's broken together. Then we'll set clear improvement targets — efficiency targets like "reduce processing time by 70%" and impact targets like "improve customer satisfaction by 30%."</p>
            </div>
          </div>

          <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-5">
              <h4 class="font-bold text-gray-900 dark:text-white mb-2">Visualization Session 2 (Collaborative)</h4>
              <p>I'll present the redesigned system(s) to you — before/after comparison, walk through the new flows, explain trade-offs, show expected gains. This is a collaborative refinement session: you know your business context, I know systems architecture. Together, we iterate to get it exactly right.</p>
            </div>

          <div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">What I Do After: The Mental Reconstruction</h3>
            <p class="mb-4">This is what you're really paying for. I take your system completely apart in my mind and rebuild it from scratch.</p>
            <div class="space-y-3">
              <div class="flex gap-3">
                <span class="font-bold text-gray-900 dark:text-white w-36 shrink-0">1. Deconstruction</span>
                <p>Strip everything down to fundamental components. Question every single step: "Why does this exist? Is it essential or just accumulated cruft?"</p>
              </div>
              <div class="flex gap-3">
                <span class="font-bold text-gray-900 dark:text-white w-36 shrink-0">2. Reconstruction</span>
                <p>Start from first principles. Design new flows — eliminate steps, parallelize, automate, simplify. Account for human behavior. Design for measurable outcomes.</p>
              </div>
              <div class="flex gap-3">
                <span class="font-bold text-gray-900 dark:text-white w-36 shrink-0">3. Options</span>
                <p>I don't give you one solution. I give you 2-3 approaches with clear trade-offs: minimal change, complete rebuild, or hybrid.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">What You Get: "System Architecture Blueprint"</h3>
            <ul class="space-y-1.5 text-sm">
              <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span>Redesigned system map(s): 2-3 options, fully visualized</li>
              <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span>Before/After comparison: Clear visual showing the transformation</li>
              <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span>Expected improvement projections (efficiency + impact)</li>
              <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span>Trade-off analysis: What each option costs vs what it gains</li>
              <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span>Recommended approach with reasoning</li>
              <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span><span><strong>User Journey Map:</strong> How users move through the redesigned system, step by step, from first touchpoint to outcome</span></li>
              <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span><strong>Theory of Change</strong> <span class="text-gray-500">(social impact clients):</span> The logic connecting your activities to the outcomes you're designing for</li>
            </ul>
            <p class="mt-4 text-sm italic text-gray-500 dark:text-gray-400">Even if you use your internal team to build it, you now have the architecture. The thinking is done.</p>
          </div>
        </div>
      </div>

      <!-- Phase 3 -->
      <div class="mb-20">
        <div class="border-l-4 border-gray-900 dark:border-gray-300 pl-6 mb-8">
          <div class="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Phase 3</div>
          <h2 class="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Solution Design + Impact Indicators</h2>
          <p class="text-lg text-gray-700 dark:text-gray-300 font-medium mb-1">Defining What to Build (And How to Prove It Worked)</p>
          <p class="text-sm text-gray-500 dark:text-gray-400">Duration: 1-2 weeks</p>
        </div>

        <div class="space-y-8 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
          <p>We have the architecture. Now we define exactly what to build, how to scope it for a focused test, and how to measure whether it actually worked.</p>

          <div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">What We'll Do Together</h3>
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-5">
              <h4 class="font-bold text-gray-900 dark:text-white mb-3">Solution Scoping Session</h4>
              <p class="mb-4">We'll define exactly how we're going to prove this works:</p>
              <div class="space-y-4 text-sm">
                <div>
                  <p class="font-semibold text-gray-900 dark:text-white mb-1">Goals (Measurable at Three Levels):</p>
                  <ul class="space-y-1.5 ml-3">
                    <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span><span><strong>Output Goals:</strong> Did we build what we said? System is functional, data is accurate, team can operate it.</span></li>
                    <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span><span><strong>Outcome Goals:</strong> Did it change behavior/performance? "Reduce time from 5 hours to 1 hour", "Improve satisfaction by 25%"</span></li>
                    <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span><span><strong>Impact Goals:</strong> Did it change lives/business? Long-term systemic effects (if applicable)</span></li>
                  </ul>
                </div>
                <div>
                  <p class="font-semibold text-gray-900 dark:text-white mb-1">Budget + Scope:</p>
                  <p class="ml-3 text-gray-600 dark:text-gray-400">How much can we invest in testing? What's the minimum version we need? Where should we test it? How long should it run?</p>
                </div>
                <div>
                  <p class="font-semibold text-gray-900 dark:text-white mb-1">Data Collection Plan:</p>
                  <ul class="space-y-1.5 ml-3">
                    <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span>Efficiency metrics: Time, cost, quality, throughput</li>
                    <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span>User experience: Surveys, interviews, observations</li>
                    <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span>Outcome metrics: Behavioral changes, performance improvements</li>
                    <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span>Methods: Baseline data, continuous tracking, post-pilot assessment, follow-up tracking</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">What You Get: "Solution Design + Impact Measurement Plan"</h3>
            <ul class="space-y-1.5 text-sm">
              <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span>Clear goals: Measurable, time-bound targets at output, outcome, and impact levels</li>
              <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span>Budget breakdown: What you'll spend and where</li>
              <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span>Pilot scope definition: Exactly what, where, who, and for how long</li>
              <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span>Data collection framework with methods and instruments</li>
              <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span>Success criteria: How we'll know if it worked (evidence, not opinions)</li>
              <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span>Risk mitigation plan</li>
              <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span>Week-by-week execution timeline</li>
              <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span><span><strong>Product Strategy Document:</strong> Vision, target market, personas, competitive landscape — the why before the what. <span class="text-gray-400">(product clients)</span></span></li>
              <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span><span><strong>Product Requirements Document (PRD):</strong> Feature requirements, technical considerations, and explicit out-of-scope — what your dev team needs to execute. <span class="text-gray-400">(product clients)</span></span></li>
              <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span><span><strong>MVP Scope Definition:</strong> The minimum slice needed to test the core hypothesis — what's in, what's out, and why. <span class="text-gray-400">(product clients)</span></span></li>
            </ul>
          </div>

          <p class="text-sm italic text-gray-500 dark:text-gray-400">This plan de-risks your investment and defines success clearly. You can execute it yourself with your internal team, or have me run it.</p>
        </div>
      </div>

      <!-- Phase 4 -->
      <div class="mb-20">
        <div class="border-l-4 border-gray-900 dark:border-gray-300 pl-6 mb-8">
          <div class="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Phase 4</div>
          <h2 class="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Pilot + Impact Measurement</h2>
          <p class="text-lg text-gray-700 dark:text-gray-300 font-medium mb-1">Proving It Works (With Real Users, Real Data, Real Outcomes)</p>
          <p class="text-sm text-gray-500 dark:text-gray-400">Duration: 4 weeks to 6 months (depends on system complexity)</p>
        </div>

        <div class="space-y-8 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
          <p>This is where we stop theorizing and start testing in the real world.</p>

          <div class="space-y-4">
            <div class="flex gap-4">
              <div class="w-8 h-8 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">1</div>
              <div>
                <h4 class="font-bold text-gray-900 dark:text-white mb-1">Build Minimum Testable System</h4>
                <p class="text-sm">Implement the new process in limited scope — train people, set up data collection, establish baselines. Timeline depends on what we're building: a process change might need 1-2 weeks; a digital product could need 4-8 weeks.</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="w-8 h-8 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">2</div>
              <div>
                <h4 class="font-bold text-gray-900 dark:text-white mb-1">Run Pilot in Real Conditions</h4>
                <p class="text-sm">Test with real users, real inputs, real environment — not in a lab. Track efficiency, measure user experience, monitor outcomes, hold regular reviews.</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="w-8 h-8 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">3</div>
              <div>
                <h4 class="font-bold text-gray-900 dark:text-white mb-1">Iterate Based on Reality</h4>
                <p class="text-sm">Fix what broke, simplify what's too complex, respond to user feedback, re-measure after each adjustment.</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="w-8 h-8 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">4</div>
              <div>
                <h4 class="font-bold text-gray-900 dark:text-white mb-1">Scale or Iterate Decision</h4>
                <p class="text-sm">Based on results, we decide together: scale, iterate, or pivot. Critical rule: we don't scale broken systems.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">What You Get: "Pilot Results + Impact Evidence"</h3>
            <ul class="space-y-1.5 text-sm">
              <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span>Before/After comparison: Real measured data, not projections</li>
              <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span>Efficiency gains: Time saved, costs reduced, quality improved</li>
              <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span>Outcome evidence: What changed for people (data + stories)</li>
              <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span>What worked, what didn't, what we learned: Honest analysis</li>
              <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span>ROI calculation: Investment vs value created</li>
              <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span>Recommendation: Scale, iterate, or pivot?</li>
              <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span>If scaling: Full implementation roadmap for rollout</li>
            </ul>
            <p class="mt-4 text-sm italic text-gray-500 dark:text-gray-400">You're not trusting my opinion. You're looking at real data from real users in real conditions.</p>
          </div>
        </div>
      </div>

      <!-- Phase 5 -->
      <div class="mb-20">
        <div class="border-l-4 border-gray-300 dark:border-gray-600 pl-6 mb-8">
          <div class="text-sm font-medium text-gray-400 uppercase tracking-wider mb-2">Phase 5 — Optional</div>
          <h2 class="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Impact Reporting</h2>
          <p class="text-lg text-gray-700 dark:text-gray-300 font-medium mb-1">Communicating the Difference You Made</p>
          <p class="text-sm text-gray-500 dark:text-gray-400">Duration: 2-4 weeks | For social impact clients</p>
        </div>

        <div class="space-y-8 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
          <p>For NGOs, foundations, social enterprises, government programs, or any organization that needs to prove outcomes to funders, stakeholders, or the public.</p>

          <div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">The Report Addresses Five Key Questions</h3>
            <div class="space-y-2 text-sm">
              <div class="flex gap-3"><span class="font-bold text-gray-900 dark:text-white w-24 shrink-0">Need</span><span>What problem were you trying to solve?</span></div>
              <div class="flex gap-3"><span class="font-bold text-gray-900 dark:text-white w-24 shrink-0">Activities</span><span>What did you do to address it?</span></div>
              <div class="flex gap-3"><span class="font-bold text-gray-900 dark:text-white w-24 shrink-0">Outcomes</span><span>What were the results?</span></div>
              <div class="flex gap-3"><span class="font-bold text-gray-900 dark:text-white w-24 shrink-0">Evidence</span><span>How do you know you made a difference?</span></div>
              <div class="flex gap-3"><span class="font-bold text-gray-900 dark:text-white w-24 shrink-0">Lessons</span><span>What would you do differently next time?</span></div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">What You Get: "Impact Report"</h3>
            <ul class="space-y-1.5 text-sm">
              <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span>Executive summary</li>
              <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span>Problem statement and activities</li>
              <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span>Outcomes achieved with supporting evidence</li>
              <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span>Data visualizations and before/after comparisons</li>
              <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span>Impact stories (data + testimonials)</li>
              <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span>Lessons learned and recommendations</li>
              <li class="flex gap-2"><span class="text-gray-400 mt-0.5">•</span>One-page visual summary — shareable for presentations and funder pitches</li>
            </ul>
          </div>
          <p class="text-sm italic text-gray-500 dark:text-gray-400">Most organizations can show activities (we did X). Few can show outcomes (X changed lives). This report gives you evidence-based storytelling.</p>
        </div>
      </div>

      <!-- How We Work Together -->
      <div class="mb-20 bg-gray-50 dark:bg-gray-800 rounded-lg p-6 md:p-8">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">How We Work Together</h2>
        <p class="text-gray-600 dark:text-gray-400 mb-6">Each phase builds on the previous one, but delivers standalone value. You decide how far we go together based on your needs, budget, and internal capabilities.</p>
        <div class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
          <div class="flex gap-3"><span class="font-bold text-gray-900 dark:text-white shrink-0">After Phase 1 —</span><span>You know exactly what's broken, why, and what success looks like. You can stop here — you have the diagnosis.</span></div>
          <div class="flex gap-3"><span class="font-bold text-gray-900 dark:text-white shrink-0">After Phase 2 —</span><span>You have the blueprint for how to fix it. You can stop here and build it yourself if you have the team.</span></div>
          <div class="flex gap-3"><span class="font-bold text-gray-900 dark:text-white shrink-0">After Phase 3 —</span><span>You have the complete test plan and measurement framework. You can execute it internally if you prefer.</span></div>
          <div class="flex gap-3"><span class="font-bold text-gray-900 dark:text-white shrink-0">After Phase 4 —</span><span>You have proof it works and a roadmap to scale. You can take it from here or continue working with me on the rollout.</span></div>
          <div class="flex gap-3"><span class="font-bold text-gray-900 dark:text-white shrink-0">After Phase 5 —</span><span>You have professional documentation of your impact. Use it to secure funding, report to stakeholders, or demonstrate accountability.</span></div>
        </div>
      </div>

      <!-- What Makes This Different -->
      <div class="mb-20">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">What Makes This Different</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
            <h4 class="font-bold text-gray-900 dark:text-white mb-2">I don't just give advice — I design solutions.</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400">Most consultants give you a report full of recommendations. I give you a redesigned system ready to build — with diagrams, process flows, and clear before/after comparisons.</p>
          </div>
          <div class="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
            <h4 class="font-bold text-gray-900 dark:text-white mb-2">I think deeply before I act.</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400">The mental work I do between sessions — deconstructing your system, rebuilding it from first principles — this is where the real value is created. I give you a custom-designed system that fits your constraints, your people, your context.</p>
          </div>
          <div class="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
            <h4 class="font-bold text-gray-900 dark:text-white mb-2">I measure what actually matters.</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400">Most consultants measure efficiency (time, cost). I measure efficiency and outcomes (what changed for people). You get the full picture, not just the numbers.</p>
          </div>
          <div class="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
            <h4 class="font-bold text-gray-900 dark:text-white mb-2">You get data, not opinions.</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400">Every phase produces measurable outputs. Discovery gives you current state metrics. Pilot gives you before/after data. You're not trusting my gut — you're looking at evidence.</p>
          </div>
          <div class="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
            <h4 class="font-bold text-gray-900 dark:text-white mb-2">Collaborative, not dictatorial.</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400">You know your business, your team, your constraints. I know systems architecture, impact measurement, and how to build things that scale. Together, we create something better than either of us could alone.</p>
          </div>
          <div class="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
            <h4 class="font-bold text-gray-900 dark:text-white mb-2">I bridge worlds most consultants can't.</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400">Business consultants don't measure real human outcomes. Implementation firms don't diagnose properly first. Impact specialists don't fix the actual systems. I do all three: diagnose deeply, design properly, prove it worked.</p>
          </div>
        </div>
      </div>

      <!-- Service Tiers -->
      <div class="mb-20">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">Service Tiers</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-1">Systems Optimization</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">Phases 1-4 | Corporate / Startup Focus</p>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">Focus on efficiency, cost reduction, and scalability. Best for startups building from scratch and organizations fixing broken operations.</p>
            <div class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <p class="font-semibold text-gray-900 dark:text-white">Deliverables:</p>
              <ul class="space-y-1">
                <li>• System Discovery Report (incl. Problem Hypothesis + User Archetypes)</li>
                <li>• System Architecture Blueprint (incl. User Journey Map)</li>
                <li>• Solution Design Document (incl. Product Strategy + PRD + MVP Scope for product clients)</li>
                <li>• Pilot Results + ROI Proof</li>
              </ul>
            </div>
            <p class="text-xs text-gray-400 dark:text-gray-500 mt-4">Best for: Corporations fixing broken operations · Startups building scalable systems · Businesses optimizing for growth</p>
          </div>
          <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-1">Systems + Impact 🌱</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">Phases 1-5 | Social Impact Focus</p>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">Full measurement framework, outcome evidence, and professional documentation for funders and stakeholders.</p>
            <div class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <p class="font-semibold text-gray-900 dark:text-white">Deliverables:</p>
              <ul class="space-y-1">
                <li>• System Discovery + Impact Report (incl. Stakeholder Map + Problem Hypothesis)</li>
                <li>• System Architecture Blueprint (incl. Theory of Change + User Journey Map)</li>
                <li>• Solution Design + Impact Measurement Plan</li>
                <li>• Pilot Results + Impact Evidence</li>
                <li>• Professional Impact Report</li>
              </ul>
            </div>
            <p class="text-xs text-gray-400 dark:text-gray-500 mt-4">Best for: NGOs proving impact to funders · Foundations measuring program outcomes · Social enterprises tracking social + financial returns</p>
          </div>
        </div>
      </div>

      <!-- Is This For You -->
      <div class="mb-20">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">Is This For You?</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <h4 class="font-bold text-gray-900 dark:text-white mb-4">You're a good fit if:</h4>
            <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li class="flex gap-2"><span style="color: #00ff9f;">✓</span> You have a system that's broken and you're tired of band-aid fixes</li>
              <li class="flex gap-2"><span style="color: #00ff9f;">✓</span> You're building something new and want to avoid expensive mistakes</li>
              <li class="flex gap-2"><span style="color: #00ff9f;">✓</span> You value strategic thinking as much as execution</li>
              <li class="flex gap-2"><span style="color: #00ff9f;">✓</span> You're willing to test before scaling</li>
              <li class="flex gap-2"><span style="color: #00ff9f;">✓</span> You want proof (with data) that your investment worked</li>
              <li class="flex gap-2"><span style="color: #00ff9f;">✓</span> You care about real outcomes for people, not just operational efficiency</li>
            </ul>
          </div>
          <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <h4 class="font-bold text-gray-900 dark:text-white mb-4">You're not a good fit if:</h4>
            <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li class="flex gap-2"><span class="text-red-400">✗</span> You already know exactly what to build and just need someone to execute</li>
              <li class="flex gap-2"><span class="text-red-400">✗</span> You're not willing to question your assumptions</li>
              <li class="flex gap-2"><span class="text-red-400">✗</span> You want to skip the testing phase and "just launch"</li>
              <li class="flex gap-2"><span class="text-red-400">✗</span> You're looking for the cheapest option, not the best solution</li>
              <li class="flex gap-2"><span class="text-red-400">✗</span> You only care about efficiency and don't want to measure impact on people</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- What Happens Next -->
      <div class="mb-20">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">What Happens Next</h2>
        <div class="space-y-6">
          <div class="flex gap-5">
            <div class="w-10 h-10 rounded-full border-2 border-gray-900 dark:border-gray-300 flex items-center justify-center text-sm font-bold text-gray-900 dark:text-white shrink-0">1</div>
            <div>
              <h4 class="font-bold text-gray-900 dark:text-white mb-1">Initial Conversation <span class="text-sm font-normal text-gray-500">(30-60 minutes, free)</span></h4>
              <p class="text-sm text-gray-600 dark:text-gray-400">We'll talk about what you're trying to fix or build, whether my process is the right fit, which tier and phases you might need, and rough timeline.</p>
            </div>
          </div>
          <div class="flex gap-5">
            <div class="w-10 h-10 rounded-full border-2 border-gray-900 dark:border-gray-300 flex items-center justify-center text-sm font-bold text-gray-900 dark:text-white shrink-0">2</div>
            <div>
              <h4 class="font-bold text-gray-900 dark:text-white mb-1">Proposal</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400">If we're aligned, I'll send you a proposal outlining which phases we'll start with, timeline, investment, and expected deliverables.</p>
            </div>
          </div>
          <div class="flex gap-5">
            <div class="w-10 h-10 rounded-full border-2 border-gray-900 dark:border-gray-300 flex items-center justify-center text-sm font-bold text-gray-900 dark:text-white shrink-0">3</div>
            <div>
              <h4 class="font-bold text-gray-900 dark:text-white mb-1">Discovery Session</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400">Once you're ready, we begin Phase 1. From there, we move through the process at your pace — stopping wherever makes sense for your situation.</p>
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
import SystemCover from '~/components/SystemCover.vue'

export default {
  name: 'SystemPage',
  components: { SystemCover },
  mounted() {
    this.scaleCover()
    window.addEventListener('resize', this.scaleCover)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.scaleCover)
  },
  methods: {
    scaleCover() {
      const wrap = this.$refs.coverWrap
      if (!wrap) return
      const scale = wrap.offsetWidth / 1200
      const canvas = wrap.querySelector('.canvas')
      if (canvas) {
        canvas.style.setProperty('--cover-scale', scale)
        canvas.style.transform = `scale(${scale})`
      }
    }
  },
  head() {
    return {
      title: 'The Zero Point System - Henry Ikoh',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'The Zero Point System: a strategic systems architecture framework that helps founders and organizations diagnose broken systems, design the right solution, and prove it works before scaling.'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'The Zero Point System - Henry Ikoh'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'A 5-phase framework: System Discovery, System Architecture, Solution Design, Pilot, and Impact Reporting. Diagnose first, design second, prove third.'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://www.henryikoh.com/point.png'
        },
        {
          hid: 'og:image:width',
          property: 'og:image:width',
          content: '1200'
        },
        {
          hid: 'og:image:height',
          property: 'og:image:height',
          content: '630'
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://www.henryikoh.com/point.png'
        }
      ]
    }
  }
}
</script>
