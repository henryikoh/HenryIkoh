---
project: Tradr
title: "Tradr: Bringing Local Markets Online"
description: "I designed and built a three-sided marketplace that brought the local market experience online — live shopper conversations, real-time item confirmations, and doorstep delivery. ₦20M in sales. 300+ users. And the hardest lessons I've ever learned about building the right thing."
cover: /tradr.png
alt: Tradr mobile app interface
tag: ['Systems Design', 'Product Strategy', 'Marketplace', 'Case Study']
createdAt: March 1 2022
status: Completed
type: Case Study
role: Product Manager, Systems Architect, Cloud Engineer
timeline: "~8 months"
problem: "Millions of Nigerians prefer local market goods (better prices, variety, negotiation) but lose 100+ hours/year commuting. Existing solutions — supermarkets, e-commerce, informal WhatsApp traders — either cost 30-100% more or lack trust and accountability."
solution: "A three-sided marketplace with live shopping conversations. Buyers create lists, get matched with expert shoppers physically in the market, confirm each item via photo in real-time, and receive doorstep delivery."
impact: "₦20M in sales · 300+ users · 48 active · 2 apps shipped · Proved market demand exists — the system worked, the scope didn't."
---

# Tradr

**A three-sided marketplace that reimagined how people shop from local markets — without being there.**

---

## How It Started

I'd been a creative wanderer for 4 years — exploring photography, design, coding, branding, and marketing as a one-man team, discovering what I love to do and what I could be the best at. That journey led me through running a small consulting agency, learning to facilitate strategy sessions, and slowly gravitating toward the intersection of systems and products.

Then I stumbled into product management.

After going through YC Startup School twice, I randomly opened the group chat one day and saw a message from Chidi — he was looking for a team to build an app. I reached out, we spoke about the idea, and I liked it. It felt like something worth building. We knew each other from a previous town and hadn't spoken in years, but after catching up, he decided to work with me as the product manager.

Being completely new to the startup space, Chidi needed someone who could help put him through the entire process — building an application, working with and hiring a team, and making sure we were solving the right problem. So I suggested we start where I always start: a strategy session.

This project became my first real pass through what I now call the Zero Point System. It generated ₦20M in sales, taught me everything about why you diagnose before you build, and the lessons from both its successes and failures shaped everything I do today.

---

## The Numbers

| Metric | Value |
| --- | --- |
| Total Sales | ₦20,000,000+ |
| Users Signed Up | 300+ |
| Active Users | 48 |
| Apps Shipped | 2 (Buyer + Shopper) |
| Usability Tests | 2 (in real markets) |
| Team Size | 4 |
| Timeline | ~8 months |

---

## My Role

**Product Manager / Systems Architect / Cloud Engineer**

I led strategy, facilitated every design session, architected the data layer, built the entire backend (Firebase Cloud Functions), implemented analytics (Mixpanel), coordinated a remote team across multiple locations, and made the critical product decisions throughout.

**Team:** Chidi (Founder & Business Lead), Tassy Omah (UI/UX Designer), Godwin Asuquo (Flutter Developer)

---

## The Problem

Millions of people in Nigeria prefer shopping from local markets — the variety is better, the rates are lower, and you can negotiate. But the experience of getting there is painful:

- **Time cost:** 2-4 hours round trip for a single market visit
- **Physical barrier:** Elderly, disabled, or unwell individuals can't go at all
- **Stress:** Traffic, crowds, heat, carrying heavy bags home
- **Frequency:** Everyday buyers go weekly or biweekly — that's 100+ hours/year lost to commuting

These aren't people who don't want market goods. They love them. They just can't justify the cost of getting them.

---

## How People Currently Solve This

| Current Solution | Limitation |
| --- | --- |
| **Supermarkets / Mini-marts** | 30-100% markup over market prices. Limited selection. No negotiation. |
| **Jumia / Konga (e-commerce)** | Packaged goods only. No fresh produce. No local market variety. Delivery delays. |
| **Send a friend or relative** | Unreliable. Creates social debt. No quality control. |
| **Informal WhatsApp traders** | No accountability. No pricing transparency. No delivery guarantee. Trust issues. |

**The gap:** There was no structured system that gave you the full local market experience — variety, negotiation, trust, fair pricing — without physically being there.

---

## The Innovation

Tradr wasn't e-commerce. It wasn't grocery delivery. It was something new:

**A live, human-powered shopping experience where you're virtually present in the market through your shopper.**

The buyer creates a shopping list. They're matched with a shopper who is physically in the market. The shopper walks through stalls, finds items, photographs them, sends prices — and the buyer confirms or rejects each item in real-time through an in-app conversation. Only confirmed items go into the basket.

**Why this matters:** It preserves what makes local markets special — the selection, the negotiation, the ability to see before you buy — while removing what makes them painful. Nobody was doing this.

---

## System Discovery

### Strategy Session

Before touching any design tool, I facilitated a deep strategy session with the founder. We mapped the entire problem space:

**Market:** People who want to shop at local markets at good rates but don't have the time or physical ability to go. Primarily urban Nigerians — busy professionals, parents, elderly, resellers.

**We identified three distinct user types with different needs and behaviors:**

### User 1 — The Reseller (Wholesaler)

| | |
| --- | --- |
| **Goal** | Buy products in bulk at wholesale prices. Build trust with sellers for repeat transactions. |
| **Pain** | Commute stress. Limited variety from current suppliers. Overpaying. Can't get detailed product information remotely. |
| **What they need from us** | Guaranteed trust. Item confirmation before payment. Reliable delivery of bulk orders. |

### User 2 — The Price Comparer

| | |
| --- | --- |
| **Goal** | Compare local market prices without physically going. Make informed purchase decisions. |
| **Pain** | Paying supermarket markup because they can't verify market prices. No access to real-time pricing information. |
| **What they need from us** | Quick, easy connection with a shopper who can check prices on demand. |

### User 3 — The Everyday Buyer

| | |
| --- | --- |
| **Goal** | Buy everyday items (foodstuff, clothes, toiletries) from local markets. Get them delivered. |
| **Pain** | Having to leave the house every week. No one to run market errands. Time and energy lost. |
| **What they need from us** | Guaranteed trust. Item confirmation. Handled delivery. |

### The Critical Decision: Who Do We Build For First?

The system could serve all three. But trying to serve everyone at once is how startups die. We needed to pick one.

**The analysis:**

| User Type | Usage Frequency | Retention Signal | Complexity |
| --- | --- | --- | --- |
| Reseller | Monthly / Quarterly | Low frequency, high value | High (bulk logistics, seller relationships) |
| Price Comparer | Ad hoc | Low (one-time need) | Medium (pricing data is volatile) |
| **Everyday Buyer** | **Weekly / Biweekly** | **High (habitual need)** | **Medium (manageable item sizes)** |

**We chose the Everyday Buyer.** They shop at least once a week. If the system works, they come back. Repeat usage meant we could test retention — the hardest metric to fake.

### Assumptions We Needed to Validate

1. People want to purchase from major markets because they want a better deal (not just convenience)
2. Distance is the real barrier — they settle for expensive supermarkets because the market is too far
3. People would want and trust a contact in the market for ongoing transactions

### Critical Questions We Had to Answer

- Why would people come back to the platform after being linked with a shopper? (What stops them from going direct?)
- Would a shop owner give goods to a shopper before payment is confirmed?
- If users pay on delivery, does the shopper front the money?

These weren't hypothetical. Each one could break the business model.

---

## System Architecture

### The Three-Sided Marketplace

The solution required three distinct user types working in coordination:

```
BUYER                    SHOPPER                   LOGISTICS
Creates shopping list →  Accepts request →         Receives items →
Matches with shopper →   Goes to market →          Confirms against list →
Real-time chat →         Photographs items →       Delivers to address →
Confirms/rejects items → Purchases confirmed →     Collects payment
Pays on delivery         Earns per transaction
```

**Why three sides, not two?** Separating shopping from delivery was a deliberate architectural choice. Shoppers need to be in the market — they're experts at finding items and negotiating. Delivery people need to be mobile. Combining these roles would limit both.

**The trade-off:** More complexity. Three user types means three onboarding flows, three apps, three sets of incentives to manage. But the alternative — forcing shoppers to also deliver — would destroy the core experience.

### The User Flow

**Matching logic:** Users are matched with shoppers based on item category and shopper expertise. Some shoppers are better with clothes, others with foodstuff. This specialization was critical for quality.

**Shopping conversation:** This was the core innovation. Once matched:

1. Shopper receives the buyer's list
2. Shopper walks through the market, finding each item
3. For each item: shopper photographs it, sends price and details
4. Buyer confirms or rejects in real-time
5. Only confirmed items go into the basket
6. Either party can end the session when done

**Checkout:** Confirmed items are listed with full pricing breakdown. Buyer adds delivery address. Payment on delivery (the shopper doesn't front the money — this was a critical business model decision).

**Service fee calculation:** I designed an algorithm that factors in shopping duration, number of items purchased, and total item value. This balanced fair compensation for shoppers with affordable pricing for buyers.

### Design Process

**User Journey Mapping Session:** I facilitated a collaborative session on Miro with the full team — founder, designer, and myself. Everyone mapped what they imagined the flow would look like. This served two purposes:

1. **Alignment:** Everyone had input, creating buy-in from day one
2. **Designer onboarding:** Tassy understood the full system before touching a design tool

**Low-Fidelity First:** Before opening Figma, we built low-fi wireframes in Miro. The goal: identify what features each screen needed at the earliest possible stage. This was a critical part of the design-development handoff — we were making feature decisions during wireframing, not after high-fidelity designs were locked.

**High-Fidelity Design:** Tassy took the wireframes to Figma and designed both apps:

**Buyer App:**
- Home → market selection → shopping list creation
- Shopper matching → live shopping conversation
- Item confirmation flow (accept/reject with photos)
- Shopping basket → delivery details → checkout summary
- Order tracking → order history → re-ordering

**Shopper App:**
- "Go live" in a specific market
- Accept/reject shopping requests
- Shopping timer (tracks duration for service fee calculation)
- Item photography + details submission flow
- Earnings dashboard → wallet → shopping history

### Data Architecture

I ran a technical onboarding session with the developer, designing the full Firebase data model:

- **Database:** Cloud Firestore (NoSQL) — chosen for real-time sync capabilities essential for the live chat experience
- **Document/collection structure:** Designed to handle the relationships between buyers, shoppers, orders, and items without SQL joins
- **Variable naming conventions:** Standardized across the entire codebase
- **Trade-offs considered:** NoSQL meant denormalizing data for read performance vs. data consistency. For a real-time shopping conversation, read speed won.

### Technical Implementation

**Backend (my build):** I built the entire Cloud Functions backend — all server-side logic, database operations, and business rules. This wasn't planned. I took it on for three reasons:

1. **Speed:** I could ship backend features faster than onboarding another dev
2. **Security:** All sensitive operations (payments, matching, fee calculation) needed to be server-side
3. **Quality control:** Zero tolerance for backend errors in a payment-handling system

**Mobile apps (Godwin's build):** Flutter for cross-platform — one codebase for both Buyer and Shopper apps on Android. I directed the build sequence: screens first (no functionality), then connect to backend services one by one.

**Analytics (my implementation):** Mixpanel for conversion funnel tracking. First analytics implementation I'd ever done — I controlled exactly what events to track and built a basic funnel: signup → first list → first match → first purchase → repeat purchase.

---

## Solution Design

### MVP Scope

**The goal:** Create the simplest system that validates three business questions:

| Question | How We'd Validate |
| --- | --- |
| Do people want market prices badly enough to use a new platform? | Track signup-to-first-purchase conversion |
| Will people trust a stranger to shop for them? | Track item confirmation rate + repeat usage |
| Can we deliver local market goods reliably? | Track delivery completion rate + customer complaints |

**What we built vs. what we cut:**

| Built (MVP) | Cut (Post-validation) |
| --- | --- |
| Shopping list creation | Price comparison tool |
| Shopper matching (by expertise) | Seller direct marketplace |
| Live shopping conversation | Bulk/wholesale flow |
| Photo confirmation flow | Scheduled recurring orders |
| Basic checkout + delivery | In-app payments (used cash on delivery) |
| Service fee calculator | Shopper rating system |

**Tech stack:**
- Flutter (cross-platform mobile)
- Firebase Cloud Firestore (real-time database)
- Firebase Cloud Functions (backend logic)
- Mixpanel (analytics)

---

## The Pilot

### Launch Strategy

We chose a soft beta launch on Google Play — real shoppers in real markets serving real buyers. No fake data. No simulations. Real transactions with real money.

### What Worked

**The core experience validated.** Shoppers went to markets, photographed items, buyers confirmed in real-time, items were delivered. The system functioned. The live shopping conversation — the thing nobody had done before — actually worked.

**₦20M in total sales.** Real money flowing through the system. People were willing to pay for this service.

**300+ signups, 48 active users.** Small numbers, but these were real people repeatedly using the app for their weekly shopping.

**2 in-market usability tests.** We watched real shoppers use the app in actual market conditions — heat, crowds, poor connectivity. The insights were invaluable.

### Where It Broke Down

**In-app chat bugs persisted.** The real-time conversation — our core differentiator — had reliability issues we couldn't resolve fast enough. The founder directed buyers to WhatsApp as a workaround.

**The WhatsApp moment:** This was the hardest lesson. The instant we moved to WhatsApp, orders kept flowing. The core value — connecting buyers with shoppers — didn't require a custom app. WhatsApp could have been our entire MVP from day one.

**The pilot had no boundaries.** No defined duration. No success criteria. No decision framework for when to scale, iterate, or stop. It just... kept running. For 6-8 months. Until capital and founder energy ran out.

### Why It Shut Down

| Factor | What Happened |
| --- | --- |
| **Capital** | No external funding. Personal runway depleted over 8 months. |
| **Founder drive** | The extended timeline without clear milestones eroded motivation. |
| **Over-engineering** | Two custom apps when the core hypothesis could've been tested with WhatsApp + spreadsheets. |
| **No exit criteria** | We never defined "if X by Y date, we scale / pivot / stop." The pilot just drifted. |

**What didn't fail:** The market. ₦20M in sales proves demand exists. The concept. Live shopping conversations worked and users loved them. The system design. The architecture was sound — it was execution, scoping, and capital that broke down.

---

## Results

| Metric | Result | What It Proved |
| --- | --- | --- |
| **₦20M in sales** | Real revenue through the platform | Demand exists. People will pay for this. |
| **300+ users** | Organic growth during beta | The problem resonates. |
| **48 active users** | Repeat usage | Retention signal — people came back. |
| **2 live usability tests** | In-market with real shoppers | The experience works in real conditions. |
| **2 apps shipped** | Buyer + Shopper on Play Store | Full execution from strategy to launch. |

---

## What I Built and What I Learned

### Skills Demonstrated

**Strategy & Facilitation:** Ran discovery sessions, user journey mapping workshops, and technical architecture calls. Facilitated alignment across a remote team with different skill sets and locations.

**Systems Architecture:** Designed a three-sided marketplace from scratch — user flows, matching logic, payment flows, service fee algorithms, data models. Made hard trade-offs (three user types vs. two, NoSQL vs. SQL, server-side vs. client-side logic).

**Technical Execution:** Built the entire backend solo. Implemented analytics. Made data architecture decisions for a real-time system handling money.

**Product Management:** Prioritized ruthlessly for MVP. Defined user personas. Managed design-development handoff. Coordinated parallel workstreams (design + development).

**Team Leadership:** Led a remote team of 4 across multiple locations. Onboarded a designer through collaborative workshops (not documentation). Onboarded a developer through technical architecture sessions.

### The Lessons That Changed How I Work

**Start with the cheapest possible test.** Two custom apps was a 6-month build. A WhatsApp group + Google Form could have tested the same hypothesis in 2 weeks. Now I always ask: "What's the cheapest way to prove this works?"

**Define success before you build.** We had a vision but no measurable targets. No "if we hit X users by Y date, we proceed." Now I define success criteria at three levels — output, outcome, impact — before any build starts.

**Scope the pilot.** Ours drifted for 8 months with no endpoint. Now every pilot has a defined duration, budget, and decision framework: scale, iterate, or stop.

**Separate the signal from the system.** The demand signal (₦20M) was strong. The system we built to capture it was too heavy. Matching the weight of your solution to the weight of your evidence is a skill I learned here.

**Design and development should run in parallel.** Our sequential approach (design → develop) meant the designer reworked screens multiple times as we learned things during development. Parallel workstreams would have saved weeks.

---

## If I Built This Today

| Phase | Then (~8 months) | Now (estimated 6-8 weeks) |
| --- | --- | --- |
| **Discovery** | Informal strategy calls | Structured 1-2 week discovery with measured baseline |
| **Architecture** | One solution, jumped straight to building | 2-3 options with trade-offs, collaborative selection |
| **Solution Design** | Built two custom apps as MVP | WhatsApp + simple web form as first test |
| **Pilot** | 6-8 months, no success criteria | 4-6 weeks with defined metrics and exit criteria |
| **Decision** | Drifted until capital ran out | Data-driven: scale, iterate, or stop by week 6 |

The market is still there. The problem hasn't been solved. The ₦20M in sales proved that. Tradr didn't fail because the idea was wrong — it failed because we built too much before we knew enough.

That's the lesson that shaped everything I do now. It's also the lesson that became the foundation of how I work with every founder and organization I take on today — a structured process called **The Zero Point System**: diagnose before you build, scope the pilot before you commit, define success before you start. What we did wrong on Tradr is exactly what the system is designed to prevent.
