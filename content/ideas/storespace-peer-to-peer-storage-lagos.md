---
title: "StoreSpace: Designing a Peer-to-Peer Storage System for Lagos"
description: "In Lagos, people are forced into informal storage arrangements during relocations and emergencies — paying security guards, negotiating with neighbors, calling everyone they know. Meanwhile, thousands of homes have unused space sitting idle. The supply and demand exist. The trusted infrastructure to connect them doesn't."
cover: /storespace.png
tag: ['PropTech', 'Marketplace', 'Lagos', 'Peer-to-Peer', 'Trust Systems']
status: Concept
problem: "Thousands of Lagos residents have no safe, affordable place to store belongings during relocations and emergencies — yet thousands of homes have unused space sitting idle."
idea: "A peer-to-peer storage marketplace that connects people who need space with verified hosts who have it — built on a trust system, not new infrastructure."
market: "Lagos has 15M+ residents. Urbanisation, rising rents, and frequent relocations make storage a recurring need for millions of professionals."
gain: "Hosts earn passive income from unused space. Renters get a safety net at moments of transition. The platform earns from every transaction — no land, no construction required."
createdAt: March 28 2026
---

# StoreSpace: Designing a Peer-to-Peer Storage System for Lagos

*A hypothetical system design. A thought experiment in how I approach building something from zero — starting with a real problem, resisting the obvious solution, and designing from what already exists rather than what needs to be created.*

---

## The Problem

A friend was forced to evacuate his house with almost no notice.

Not a gradual move. A sudden displacement — the kind that gives you days, not weeks. He had furniture, equipment, personal items — the physical weight of a life built over years. And nowhere safe to put any of it.

No trusted facility. No affordable option. No system designed for this moment.

So he did what most Nigerians do. He called everyone he knew and asked if anyone had space.

That informal scramble — calling relatives, negotiating with neighbors, paying a security guard to watch things in a corner — is the current solution to a problem that affects thousands of people in Lagos every year. People relocating for work. Professionals in shrinking apartments accumulating more than their space can hold. Families managing belongings after a loss. Students leaving for abroad.

The solution exists. It's just fragmented, informal, and invisible.

---

## The First Instinct (And Why I Rejected It)

When most people hear "storage problem in Lagos" the first answer that comes to mind is: build storage facilities.

It sounds right. It's what exists in the West. Public Storage, CubeSmart, Big Yellow — purpose-built facilities you rent by the unit. Clean, secure, accessible.

But I didn't go there. And the reason is important.

**Building requires land.**

Lagos is one of the most densely developed cities in Africa. Available land in the areas where this problem is most acute — Lekki, Victoria Island, Ikoyi, Surulere — is almost nonexistent. And where land exists, it's expensive. The economics of building a storage facility in those areas would make the end price inaccessible to most of the people who actually need storage.

You'd be solving the problem for the wrong person.

More importantly — building assumes the supply doesn't exist yet. But I knew from my own experience that it does.

---

## The Real Insight

When I lived in Lagos, I had an apartment with a full empty kitchen — a large room sitting completely unused. I thought about leasing it out but the friction stopped me. I didn't want to become a salesperson. I didn't want to advertise it publicly. I didn't know who to trust with access to my building.

The space was just there. Wasting.

And I realized — this is everywhere. Drive through any estate in Lagos and you'll find boys quarters sitting empty. Garages used as dumping grounds. Spare rooms that haven't been opened in months. Storage rooms generating zero value for people sitting on two and three year leases.

The supply already exists. It's just unorganized, untrusted, and invisible to the people who need it.

And here's what made it click — this already happens informally. People already ask relatives, neighbors, and friends for space. The behavior exists. The transaction happens. It's just happening without any system around it — no verification, no documentation, no accountability, no protection for either side.

I wasn't designing something new from scratch. I was designing the system around something that already works informally so it could work at scale.

That distinction matters enormously. It means the demand is proven. The supply is real. The only thing missing is the infrastructure to connect them safely.

---

## Phase 1 — System Discovery

### What's Actually Broken

The storage problem in Lagos isn't a supply problem. It's a trust and discovery problem.

**On the supply side:** Thousands of people have unused space they'd happily monetize — but no safe, low-friction way to offer it to strangers. The informal network only reaches people you already know. Beyond that network, the space sits empty.

**On the demand side:** People who need storage can't find available space. And even when they find it through word of mouth, there's no system protecting them. No documentation of what they handed over. No accountability if something goes missing. No recourse.

**The root cause:** There is no trusted intermediate layer between "I have space" and "I need space." The informal system works within existing relationships. It breaks down the moment you need to transact with a stranger.

### Who Actually Needs This

The target renter is specific: the Lagos professional living in a smaller apartment who is either accumulating more than their space holds, or going through a moment of transition — relocation, evacuation, temporary travel.

These two profiles are actually the same person at different moments in their life. The professional with an overstuffed apartment becomes the person in crisis the moment something disrupts their living situation. They're not two customers. They're one customer across a lifecycle.

This matters for the system design. You acquire them at the moment of transition — moving is the trigger event, the moment they realize they have more stuff than space. But you retain them as the recurring customer who needs ongoing storage long after the move is done.

### Who Has the Space

The ideal host is someone with a long lease — two years or more remaining — and unused space within their property. Long tenure is critical. A renter whose host loses their own lease mid-storage loses everything. Long leases filter for stability.

This profile exists in significant numbers in Lagos estates. It's not a small edge case. It's a predictable segment of the residential market.

---

## Phase 2 — System Architecture

### The Design Options

Before committing to a direction I always map the options with their real trade-offs.

**Option A — Build private storage facilities**
Acquire or lease commercial space, fit it out as storage units, rent directly to customers.

Trade-offs: High capital requirement. Land scarcity in target areas. Long setup time before first transaction. Unit economics only work at scale. Not viable as a starting point.

**Option B — Partner with existing commercial facilities**
Act as a booking layer on top of warehouses and logistics companies that already have space.

Trade-offs: Faster to market. But existing facilities aren't designed for personal storage. Pricing is typically commercial. Location is usually industrial, not residential. Misaligned with the target customer's needs.

**Option C — Peer-to-peer marketplace using existing residential space**
Build the trust infrastructure and discovery layer that connects people who have unused residential space with people who need it.

Trade-offs: No capital required for space acquisition. Supply already exists. Behavior already happens informally. The challenge is entirely in the trust system — making strangers feel safe enough to transact.

**Option C is the right architecture.** Not because it's the easiest, but because it matches the actual structure of the problem. The supply exists. The demand exists. The missing piece is the system that connects them safely.

### The Three Core Systems

A peer-to-peer storage platform isn't one system. It's three systems running simultaneously, each one dependent on the others.

**The Supply System** — how spaces get onto the platform and stay trustworthy
**The Demand System** — how renters find, evaluate, and book spaces
**The Trust System** — what makes both sides feel safe enough to transact with a stranger

Most product builders design the demand system first because it's the most visible. The app, the search, the booking flow. That's the wrong starting point.

**The trust system is the foundation.** Without it, the supply system doesn't work — hosts won't list spaces they can't protect. And the demand system doesn't work — renters won't hand over their belongings without protection. You build trust infrastructure first, or you build nothing.

### Designing the Trust System

**Host verification has three layers:**

*Identity* — who are you? Nigerian ID verification confirms the host is a real, traceable person. Non-negotiable.

*Tenure* — do you actually control this space? Lease upload with minimum two years remaining filters out people trying to sublet spaces they don't control. A renter mid-storage shouldn't be displaced because their host lost their own lease.

*Space* — is it what you say it is? Photo uploads and declared dimensions give renters a clear picture before they commit. For larger spaces, physical verification before the listing goes live.

**Renter protection has two layers:**

*Inventory documentation* — every item stored is photographed and logged at handover. Timestamped. Stored on the platform. This creates an evidentiary record that protects both parties and makes disputes resolvable with evidence rather than argument.

*Insurance* — the platform bears baseline liability. Renters who want additional coverage purchase item insurance through a partnered insurer. This isn't optional — it's built into every transaction so both sides are always covered at some level.

**The liability logic:**

If an item goes missing and the platform can verify it was placed within a host's property — the host shares liability. If the platform cannot verify this — the platform bears it.

This creates the right incentives throughout the system. Hosts are motivated to document handovers carefully because their liability depends on it. The platform is motivated to verify spaces thoroughly before listing them because their liability depends on it. Good incentives produce good behavior without enforcement.

### The Feedback Loop

Every completed transaction generates ratings — renters rate hosts, hosts rate renters. Over time this creates a reputation layer that self-regulates quality.

Hosts with high ratings earn more visibility. Renters with good ratings get faster approvals from selective hosts. The system improves itself with every transaction. This is the compounding effect of well-designed trust infrastructure — you build it once, it gets stronger over time without additional investment.

---

## Phase 3 — Solution Design

### What the Product Actually Needs to Do

Version one needs to do exactly one thing well: make a single safe, documented, repeatable storage transaction possible between two strangers.

Nothing more than that.

An app that:
- Onboards and verifies hosts — ID, lease, space photos
- Lists verified spaces searchable by location and size
- Manages booking and payment with escrow logic — payment held until handover confirmed
- Guides both parties through a documented handover with photo inventory
- Manages access terms and communications post-handover
- Handles ratings after transaction completion
- Connects to an insurance partner for item coverage

The temptation with any marketplace is to build the full vision before proving the core transaction. Logistics integration. Branded storage containers. Moving services. Corporate accounts. These are real opportunities — but they're post-validation opportunities. Version one exists only to prove that a stranger will list their space, another stranger will pay to use it, and both will feel safe enough to do it again.

### Pilot Design

**Geography:** Lekki Phase 1 and Victoria Island only. Storage is hyper-local — a renter in Lekki won't store in Ikeja. Density within a small area matters more than coverage across a large one. Concentrated supply in a concentrated geography gives early renters real choice.

**Supply first:** Launch with manually recruited hosts before opening to renters. The chicken and egg problem kills marketplaces that open both sides simultaneously. Seed the supply. Then open demand.

**Success criteria at three levels:**

Output — did the system function? Hosts verified and listed. Renters found and booked spaces. Handovers documented. Payments processed.

Outcome — did it create value? Host earnings. Renter satisfaction. Repeat bookings. Average storage duration.

Signal — does the trust system work? Dispute rate. Insurance claims. Rating distribution. Would both sides transact again?

**The critical rule: we don't scale until the trust system is proven.** One high-profile incident — items stolen, unresolved dispute, host damage — in the early days can destroy the platform's reputation before it reaches the scale needed to survive it.

---

## Phase 4 — Pilot

### What We're Proving

The pilot answers three questions that cannot be answered any other way:

1. Will Lagos residents actually list their unused space on a platform for strangers to use?
2. Will people trust that platform enough to store things that matter to them?
3. Does the trust system hold under real conditions — real disputes, real edge cases, real human behavior?

These questions sound simple. They're not. And no amount of research, surveys, or planning answers them. Only real transactions do.

### What We're Watching

Every transaction generates data on both sides. What we track:

Host side: Time from registration to first booking. Cancellation rate. Response time to renter inquiries. Rating scores. Repeat hosting.

Renter side: Search to booking conversion. Handover completion rate. Storage duration. Repeat usage. Referrals.

Trust system: Dispute rate per 100 transactions. Insurance claim rate. Resolution time. Satisfaction post-dispute.

The most important metric in the pilot isn't revenue. It's repeat usage on both sides. A host who lists again and a renter who books again is the signal that the trust system worked. That's the proof we need before scaling.

### The Decision Framework

At the end of the pilot — defined duration, not open-ended — we make a data-driven decision:

**Scale** if: repeat usage is strong on both sides, dispute rate is low, trust system held under real conditions, unit economics are positive.

**Iterate** if: one side of the marketplace isn't working, trust system has gaps, pricing needs adjustment.

**Stop** if: neither side repeats, disputes are unresolvable, the informal market is too strong a competitor to the platform.

We never scale a broken system.

---

## The Honest Risks

**Trust is hard to build and easy to destroy.** This platform lives or dies on whether both sides feel safe. The trust infrastructure has to be overengineered relative to the size of the pilot. Move carefully early, or risk destroying the foundation before the platform is big enough to survive a scandal.

**The informal market is the real competitor.** The person storing items in a relative's spare room isn't paying anything. Converting that behavior to a paid transaction requires enough trust and enough convenience to justify the cost. The platform doesn't win on price — it wins on safety, accountability, and discoverability.

**Private facilities will eventually be necessary.** Residential space has real limitations — access hours, host preferences, size constraints. As the platform scales, a hybrid model with some privately controlled facilities makes sense. But that's a Series A problem, not a pilot problem.

---

## Why This Matters Beyond the Business

Lagos is becoming a city where space is a luxury. Apartments are getting smaller. Rents are rising. People are accumulating more but living in less.

The informal solutions that exist — relatives, security guards, church storerooms — work until they don't. And when they don't, people lose things that matter to them during moments that are already stressful.

A well-designed storage system creates a new layer of economic activity from space that was generating nothing. Hosts earn passive income from square footage they weren't using. Renters get a safety net at moments of transition and stress. The platform earns from volume.

But more than the economics — it formalizes something that already exists informally and makes it safe for everyone inside it. That's what good system design does. It doesn't invent new behavior. It builds the infrastructure that makes existing behavior trustworthy, scalable, and accessible to people beyond your immediate network.

The best systems solve a real problem and create value for everyone inside them. Not just the platform. Everyone.

That's the standard I design to.
