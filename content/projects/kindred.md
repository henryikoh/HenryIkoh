---
project: Kindred
title: "Kindred: A Relationship Operating System"
description: "There are CRMs for sales, apps for scheduling, platforms for networking — but nothing built for the simple, human act of staying close to the people who matter. I built Kindred to fill that gap: a personal relationship operating system with 80+ users, a full Golang/Flutter stack, and a custom AI agent built from scratch. In the process, I became a developer for the first time."
cover: /image.png
alt: Kindred app interface
tag: ['Product Design', 'Systems Architecture', 'AI Integration', 'Mobile App', 'Case Study']
createdAt: January 3 2022
status: Active
type: Case Study
role: Founder, Product Designer, Systems Architect, Full-Stack Engineer
timeline: "2022 – Present"
problem: "Adults who want to build and maintain meaningful relationships have no tools designed for that purpose. CRMs are built for sales pipelines. Contact apps are built for storage. Nothing is built for human connection."
solution: "A relationship operating system with AI at the center — contact management, relationship health scoring, interaction logging, intelligent nudges, and a conversational AI agent that lets you manage your circle through natural language."
impact: "80+ users · 50+ user interviews · Full-stack solo build · Golang API · Flutter mobile app · Custom AI agent built from scratch · Pivoted to executive market · Active beta."
---

# Kindred

**There are tools for every important system in your professional life. None of them are built for the people in it.**

---

## How It Started

I was in my late twenties, trying to be more intentional about relationships, and I was doing it with Apple Notes and the iPhone Contacts app. Writing short notes about people I met — where they were from, their birthday, what we talked about — because I'd learned the hard way that without a record, conversations disappear and relationships quietly die.

It was working. Barely. But these tools weren't designed for this. They were designed for storage and communication. Not for the ongoing, intentional work of staying close to people.

What I was doing manually was really just a crude system. And the insight behind Kindred is that every relationship *is* a system — inputs, outputs, feedback loops. Attention in. Trust out. The more consistently you show up, the stronger it gets. Every other important system in a professional's life gets designed and managed. Relationships mostly get left to memory and instinct.

Memory is lossy. Instinct is inconsistent. I decided to build the system that didn't exist.

---

## The Numbers

| Metric | Value |
| --- | --- |
| Active Users | 80+ |
| User Interviews Conducted | 50+ |
| Platform | iOS + Android (Flutter) |
| Backend | Golang API on Google Cloud Platform |
| Database | PostgreSQL + Redis |
| AI Integration | Custom agent — Claude API + Golang tool calls |
| Team Size | 1 |
| Timeline | 2022 – Present |

---

## My Role

**Founder / Product Designer / Systems Architect / Full-Stack Engineer**

Every line of code, every design decision, every architectural trade-off — mine. Backend, frontend, AI integration, product strategy, user research, brand design, pricing model.

---

## The Problem

When you're young, relationships maintain themselves through proximity. School, neighborhood, family — you don't have to manage them because structure manages them for you.

Then you grow up. Proximity disappears. You meet someone at an event and never follow up. You lose touch with people who mattered. You mean to reach out and never do — not because you don't care, but because there's no system prompting you.

**The specific failure mode:** You meet someone. Great conversation. You connect on LinkedIn. Three months later you've forgotten their name, what they do, and any reason to reach back out. The relationship dies in the gap between the meeting and the follow-up.

For executives and busy professionals this compounds. Hundreds of relationships to maintain. No structure to hold them. Important people falling through the cracks — not from indifference, but because human memory was never designed for this scale.

---

## How People Currently Solve This

| Tool | What It's Built For | Why It Fails for Relationships |
| --- | --- | --- |
| **CRM (Salesforce, HubSpot)** | Sales pipelines and revenue tracking | Too transactional. Built for deals, not humans. |
| **LinkedIn** | Professional visibility | Broadcasting platform. No memory. No depth. |
| **Contacts app** | Storing phone numbers | No context, no reminders, no relationship history. |
| **Apple Notes / Notion** | General note-taking | Requires manual discipline. No built-in structure. |
| **Calendar** | Scheduling | Reactive. You have to remember to schedule. |

**The gap:** Every existing tool treats relationships as either a database entry or a transaction. Nothing treats a relationship as something to be actively tended — with memory, context, health monitoring, and intelligent follow-up built in.

---

## Discovery

### 50+ User Interviews

Before building anything, I ran 50+ user interviews. This was the most important time spent on the product — and it changed the direction.

The early assumption was that Kindred was for everyone who valued relationships. The interviews revealed something more specific: the people who felt the problem most acutely, and were willing to pay to solve it, were executives and senior professionals managing large relationship networks at high stakes. They already believed relationships mattered. They just had no infrastructure for them.

**The pivot:** From a general-purpose personal CRM to an executive relationship management platform. Narrower audience. Sharper problem. Higher stakes.

### Three User Types That Emerged

**The Executive** — Managing hundreds of relationships across business, personal, and professional domains. Needs structure, not advice to "be more social."

**The Network Builder** — Founders, investors, community leaders who understand that their network compounds over time and want to be systematic about it.

**The Introvert Connector** — Selective and intentional. High energy cost per interaction. Needs preparation tools and consistency support — not social pressure.

---

## What Was Built

### Backend — Golang API on Google Cloud Platform

A production Golang API with a server/app/service layer architecture, designed for scale from day one.

| Decision | Why |
| --- | --- |
| **PostgreSQL** | Relationship modeling, health scoring, and network graph queries need relational structure |
| **Redis** | Session caching and frequently accessed relationship data |
| **Google Cloud Platform** | Deployment, managed services, scalability |
| **End-to-end encryption** | Relationship data is sensitive — privacy was a design constraint, not an afterthought |
| **Cron jobs** | Background processing for health scoring, nudge generation, birthday tracking |
| **One-directional model** | You manage your view of a relationship without touching the other person's data |

### Frontend — Flutter/Dart (iOS + Android)

One codebase, two platforms. Cross-platform reach without sacrificing native feel.

**Native integrations:** Contacts import and sync · Calendar for interaction logging · Push notifications for nudges and reminders

**Core features shipped:**
- Contact management with phone verification
- Relationship profiles with goals, health score, and full interaction history
- Interaction logging — calls, messages, emails, meetups
- Circle-based organization
- Birthday tracker
- Network graph for multi-degree connection mapping
- Gamification layer

### The AI Agent — Built From Scratch

This is where Kindred goes beyond a contact manager — and where the build pushed me furthest technically.

The AI agent is not a wrapper around an existing product. It's a custom conversational agent built in Golang using the Claude API and custom tool calls, engineered from first principles.

**How it works:**

- **Custom tool calls in Golang:** The agent takes real actions inside the app — log an interaction, set a reminder, update notes, surface dormant relationships — all through natural language, via a function-calling layer built server-side
- **Prompt engineering for personality consistency:** The agent's tone and behavior are structured through prompting to stay coherent across multi-turn conversations — it doesn't reset or drift
- **Server-side context management:** Conversation context is managed on the server so follow-up questions work naturally
- **Relationship health algorithms:** Server-side scoring based on interaction frequency, recency, stated goals, and contact patterns — surfaces which relationships need attention
- **Intelligent nudge generation:** Contextual nudges based on the specific relationship, not generic time-since-last-contact alerts

**Why build it from scratch:** Using a pre-built framework would have been faster. It would also have been less precise, less controllable, and less educational. Building it in Golang forced a real understanding of how conversational agents work at the infrastructure level — and produced something I fully own.

**Why Claude:** Relationship management requires nuance and instruction-following consistency across long, context-heavy conversations. That's what Claude is built for.

### Network Effects Architecture

Kindred is designed so the product gets more valuable as more people use it:

- **Contact discovery** — surface shared connections across the user base
- **Multi-degree network analysis** — find who can introduce you to who, and the shortest path
- **LinkedIn integration** — in progress; pulls professional context directly into profiles

This isn't a feature added later. It's an architectural decision made at the data model level from the start.

---

## The Build

### How I Became a Developer

I was not a developer when I started Kindred. I was a systems thinker who could direct technical work. Building Kindred changed that.

I learned Golang specifically for the server. I learned Flutter specifically for the mobile app. Neither was in my toolkit. The learning was slow, often overwhelming — there were stretches where progress felt invisible. But I kept going, and what came out the other side was a production system: real architecture, real users, real AI integration.

Completing it changed how I see myself. Before Kindred, I could describe how a system should be built. After it, I can build it. That's a different category.

The AI agent came from the same instinct. AI was everywhere and I didn't want to watch from the outside. I wanted to understand — not wrap an API and call it done, but actually understand how conversational agents work, how tool calls integrate, how context management functions at the server level. It pushed me into new technical territory, which is where the most useful learning happens.

Throughout the build I used Claude and GitHub Copilot as development multipliers — code generation, architecture review, debugging, prompt engineering. One person executing at team velocity because the tooling made it possible.

---

## What's Still Unresolved

Kindred is an active product. The work isn't done, and some of the hardest questions are still open.

**The positioning tension.** The problem isn't only an executive problem — everyone has relationships worth managing. Someone who just wants to remember birthdays has the same underlying need as a CEO managing 200 business relationships; it's a difference of scale and stakes. Right now the product works at both levels. The question is which market to lead with.

**The pricing question.** The current thinking is a tiered model — free for the basic system (contact management, reminders, birthday tracking), paid for the AI agent and advanced features. An executive at $200/month is a strong signal. A broad consumer base is a different kind of signal. Which one to pursue first hasn't been resolved.

**Retention at the core loop.** The AI agent surprises users. Interaction logging has the highest daily active use. The relationship health score creates accountability. But the real test — does using Kindred measurably change the quality of people's relationships over time — takes longer to prove than an early beta can show.

These aren't reasons to slow down. They're the next set of things to figure out.

---

## What I Built and What I Learned

### Skills Demonstrated

**Full-Stack Engineering:** Production Golang backend, Flutter mobile frontend, PostgreSQL schema, Redis caching, GCP deployment, background jobs, E2E encryption. Every layer built and owned by one person.

**AI Systems Design:** Custom conversational agent with function calling, prompt engineering, server-side context management, and AI-powered health algorithms. Built from scratch — not a wrapper.

**Product Strategy:** 50+ user interviews, a real pivot based on data, a pricing model under active validation. Product management without the handoff gap between PM and engineer.

**Systems Architecture:** Relationship management data model designed for scale — person-to-person connections, health scoring, interaction history, multi-degree network traversal, built for millions of connections from day one.

**Brand and Product Design:** Designed the full Kindred identity from scratch — name, logo, visual system, product language.

### The Lessons

**Personal need is the most honest product brief.** I didn't need to validate that the Contacts app was insufficient for relationship management. I knew it because I'd been living the workaround for years. That kind of certainty about the problem is hard to manufacture through research alone.

**The interviews changed the product, not the direction.** I didn't need 50 interviews to believe the problem was real. I needed them to understand who felt it most acutely, what they'd pay, and how to position it. The pivot from "everyone" to "executives" was the most valuable output.

**Building it yourself forces better decisions.** When you're the designer and the engineer, there's no handoff gap where intent gets lost in translation. Architectural decisions and product decisions are made by the same person at the same time. The product and the code stay aligned.

**Slow learning is still learning.** Golang and Flutter were both new. Progress was slow. The temptation to find shortcuts or abandon the hard parts was real. But there's no shortcut to actually understanding a system — and the understanding is the durable part.

---

## If I Built This From Scratch Today

| Decision | Then | Now |
| --- | --- | --- |
| **Stack** | Golang + Flutter | Same — right call |
| **Target user** | Broad → pivoted via interviews | Define the primary persona before writing line one |
| **AI integration** | Built after core product | AI-first from the architecture — agent as primary interface |
| **Pricing** | Defined after beta | Validate in interviews, before MVP |
| **Network effects** | Designed in from the start | Same — this was right |
| **Retention measure** | Not defined early enough | Define the core retention metric before launch |

---

## Links

- **Website**: [trykindredapp.com](https://www.trykindredapp.com/)
- **Status**: Active — live beta, 80+ users
