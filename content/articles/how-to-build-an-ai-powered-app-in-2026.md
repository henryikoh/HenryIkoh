---
title: "How to Build an AI-Powered App in 2026"
description: A practical guide for founders and developers who want to go beyond the ChatGPT wrapper — covering how AI actually works at the API level, how to build with it properly, and the tool use, agents, and architecture patterns that make AI apps genuinely useful.
cover: /computer.jpeg
alt: Developer building an AI-powered application
tag: ['AI', 'Founders']
createdAt: May 23 2026
---

Everyone wants to build an AI-powered app right now. Very few people understand what that actually means at the level that produces something good.

There's a wide gap between pasting an API key into a tutorial and understanding how to build AI features that work reliably in production — features that use real data, respond correctly under different conditions, and don't fall apart when the input doesn't match what you tested. Closing that gap is what this guide is for.

What follows is a ground-up explanation of how AI works at the API level, how to build basic and advanced functionality on top of it, and the patterns — tool use, evaluations, agents — that separate AI features that genuinely work from ones that just look like they work in a demo.

---

## What AI Is and How It Works at the API Level

Before you can build well with AI, you need a working model of what's happening when your code makes an API call. The abstraction of "send a message, get a response" is accurate but not sufficient. To build reliably, you need to understand what's underneath it.

**Tokenization**

AI models don't process text as words or characters — they process it as tokens. A token is roughly four characters of text on average, though this varies. Common words are often a single token; rarer words get broken into multiple tokens; a number like 12345 might be one token or several depending on the model.

This matters for a few practical reasons. API pricing is based on token counts, not character or word counts. Context windows — how much a model can "see" at once — are measured in tokens. And certain quirks in model behaviour, like difficulty counting letters in a word, trace back to tokenization.

**Embeddings**

An embedding is a numerical representation of a piece of text as a vector — a list of numbers that encodes its semantic meaning. Text with similar meanings produces similar vectors. Text with different meanings produces vectors that are far apart in the embedding space.

Embeddings are the foundation of semantic search, recommendation systems, and retrieval-augmented generation (RAG). When an AI app can "search" a knowledge base and pull in relevant context, embeddings are almost certainly involved. You don't need to implement this from scratch, but knowing it exists explains a class of problems you'll encounter.

**Context and Generation**

When you call the API, you're sending a context window — a sequence of messages — and the model generates a response by predicting, token by token, what should come next given everything it's been shown. It's a probabilistic process, not a lookup. The model doesn't retrieve answers from a database; it generates them based on patterns learned during training, conditioned on your specific input.

This is why the same prompt can produce different outputs on different runs. It's also why context management matters: the model can only work with what's in the window you send it, which means that what you include — and how you frame it — directly shapes what you get back.

---

## How to Build a Chatbot and What System Prompts Are

The simplest thing you can build with an AI API is a chatbot. It's a good place to start because it forces you to understand the structure of API requests before adding complexity on top.

**The API call structure**

At minimum, an API call to a model like Claude has two components: a model identifier and a messages array. The messages array contains the conversation history as a sequence of turns, each with a role (`user` or `assistant`) and content.

```python
import anthropic

client = anthropic.Anthropic()

message = client.messages.create(
    model="claude-opus-4-7",
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "What's the difference between an API and a database?"}
    ]
)

print(message.content[0].text)
```

The response comes back as a message object. `message.content[0].text` is the model's reply.

**The API is stateless**

This is the most important architectural fact to understand early. The model has no memory between API calls. Every time you make a request, you're starting fresh — the model has no idea what was said in previous turns unless you include that history in the messages array yourself.

A chatbot that feels like it "remembers" the conversation is really just an application that stores previous messages and appends them to every new API call. You are responsible for managing that state. The model itself retains nothing.

In practice, this means your chat application needs to:
1. Store the conversation history somewhere (in memory for simple apps, in a database for anything persistent)
2. Append each new user message to the stored history
3. Send the full history with every API call
4. Append the model's response to the stored history after the call returns

This is straightforward to implement, but misunderstanding it is the source of many confusing bugs in early AI apps.

**System prompts**

A system prompt is a special message, separate from the conversation history, that you send to tell the model how to behave. It defines the model's role, tone, constraints, and instructions — the context it should operate in for your specific application.

```python
message = client.messages.create(
    model="claude-opus-4-7",
    max_tokens=1024,
    system="You are a helpful assistant for a B2B SaaS product called Flowdesk. \
            You answer questions about billing, features, and integrations. \
            If asked about anything outside Flowdesk, politely redirect the user.",
    messages=[
        {"role": "user", "content": "Can I export my data to CSV?"}
    ]
)
```

System prompts are powerful but misunderstood. They guide how the model responds — its tone, focus, persona, and scope — but they don't override the model's underlying capabilities or safety training. Think of a system prompt as the briefing you give an employee before they take a customer call: it shapes their behaviour significantly, but they're still the same person.

A well-written system prompt is specific about role, context, and constraints. Vague prompts like "be helpful" do almost nothing. Specific prompts like "you are a support agent for X, your job is Y, when Z happens do W" produce much more consistent and useful behaviour.

---

## Temperature: What It Is and Why It Matters

Temperature is a parameter you can set on most API calls that controls how deterministic or random the model's outputs are. It typically ranges from 0 to 1 (or higher in some models).

**At low temperature (near 0)**, the model becomes more deterministic. Given the same input, it will produce very similar or identical outputs. It favours the most likely token at each step. The result is focused, consistent, and predictable — but potentially repetitive or rigid.

**At high temperature (near 1)**, the model introduces more randomness. It's more likely to choose less probable tokens, producing outputs that are more varied, creative, and unexpected — but potentially less accurate or coherent.

**In practice, how should you set it?**

- **Extraction, classification, structured output** — low temperature (0–0.2). You want consistent, accurate outputs and you're not looking for creativity.
- **Question answering, summarisation, support responses** — medium temperature (0.3–0.6). Some flexibility is fine, but you want reliability.
- **Brainstorming, creative writing, ideation** — higher temperature (0.7–1.0). Variety is the point.

The default is usually around 0.7 for general use, which is fine to start with. But once you're building a specific feature, test temperature explicitly. The difference between 0.2 and 0.8 on a support chatbot response is significant — one is crisp and direct, the other meanders.

Temperature is one of the easier levers to tune once you understand what it does. Don't ignore it.

---

## Prompt Evaluations: Why Testing Prompts Is Non-Negotiable

You can't tell if your prompt is good by looking at it. You can only tell by running it against a set of test cases and measuring whether the outputs are correct.

This is prompt evaluation, and most teams building AI features skip it until they get burned.

**Why prompts need to be tested**

A prompt that looks reasonable will fail in ways you don't expect. The model will get confused by edge cases. It will misinterpret ambiguous instructions. It will behave differently on inputs that seem similar to you but are semantically different to the model. Without a test suite, you find out about these failures in production, from users.

The stakes are higher than in traditional software development in one important way: prompt failures are often silent. Bad code usually throws an error. A bad AI response just returns text — text that looks plausible, that users may act on, that may contain subtle errors that don't surface until later.

**The eval workflow**

A basic prompt evaluation setup looks like this:

1. **Define your task clearly** — what should the model do, and what does a good response look like?
2. **Build a dataset of test cases** — pairs of inputs and expected outputs, or at minimum a set of inputs with criteria for what a good output looks like. Start with 20–50 cases. Real examples from actual usage are better than synthetic ones.
3. **Run your prompt against the dataset** — generate outputs for all your test cases.
4. **Score the outputs** — either with human review, with automated scoring logic (e.g. checking that a JSON output has required fields), or with another model acting as a judge.
5. **Iterate on the prompt** — change something, run again, compare the scores.

This loop is the actual work of prompt engineering. Writing a clever prompt is not the skill. Writing a prompt, measuring it against a real test set, understanding where it fails, and improving it systematically — that's the skill.

**When to do this**

Evals matter most when:
- You're using AI to do something that affects users directly (support responses, recommendations, generated content)
- The output needs to be in a specific format or meet specific criteria
- You're updating a prompt in production and want to know if the new version is actually better

Even a basic eval — twenty test cases, manually reviewed — is dramatically better than no eval. Build the habit early.

---

## Tool Use: How AI Interacts with Your App's Logic and Data

If system prompts are how you give the model context about its role, and temperature is how you tune its creativity, tool use is how you give it the ability to actually *do things*.

This is the section to pay the most attention to. Tool use is what transforms an AI from a text generator into something that can interact with your application's logic and data — look up records, call your API, run calculations, update databases. Without tools, your AI can only respond with text based on what it already knows. With tools, it can act.

**How tool use works**

When you define tools, you're giving the model a set of functions it can choose to call when answering a user request. The model doesn't execute the functions directly — it generates a structured request to call a function with specific arguments, you execute the function in your code, and you return the result to the model so it can incorporate it into its response.

The flow looks like this:
1. User sends a message
2. Model decides a tool call is needed, returns a tool_use block with the function name and arguments
3. Your code detects the tool_use block, runs the actual function with those arguments
4. Your code sends the function result back to the model
5. Model generates a final response incorporating the result

```python
import anthropic
import json

client = anthropic.Anthropic()

tools = [
    {
        "name": "get_customer",
        "description": "Looks up a customer by their email address and returns their account details.",
        "input_schema": {
            "type": "object",
            "properties": {
                "email": {
                    "type": "string",
                    "description": "The customer's email address"
                }
            },
            "required": ["email"]
        }
    }
]

messages = [
    {"role": "user", "content": "What plan is sarah@example.com on?"}
]

response = client.messages.create(
    model="claude-opus-4-7",
    max_tokens=1024,
    tools=tools,
    messages=messages
)

# Check if the model wants to call a tool
if response.stop_reason == "tool_use":
    tool_use = next(block for block in response.content if block.type == "tool_use")
    
    # Execute the actual function
    result = get_customer(tool_use.input["email"])  # your real function
    
    # Send the result back
    messages.append({"role": "assistant", "content": response.content})
    messages.append({
        "role": "user",
        "content": [{"type": "tool_result", "tool_use_id": tool_use.id, "content": json.dumps(result)}]
    })
    
    # Get final response
    final_response = client.messages.create(
        model="claude-opus-4-7",
        max_tokens=1024,
        tools=tools,
        messages=messages
    )
    print(final_response.content[0].text)
```

**Defining custom tools**

The tool definition is the critical part. Each tool has three components:

- **name** — what the model calls it. Be specific and descriptive (`search_orders` not `search`).
- **description** — when and why to use this tool. The model reads this to decide whether to call it. Vague descriptions lead to wrong calls or missed calls.
- **input_schema** — a JSON Schema definition of the parameters the function accepts, with descriptions for each parameter.

The description is where most people underinvest. Write it the way you'd brief a new employee: what does this function do, when should it be used, what are its limitations? A well-described tool gets called correctly. A poorly described tool creates subtle, hard-to-debug failures.

**Built-in tools**

Beyond custom tools you define yourself, Claude also supports a set of built-in tools you can enable without writing schemas:

- **Web search** — lets the model search the internet for current information and include results in its response
- **Text editor** — allows the model to read and modify files in an agentic context
- **Code execution** — lets the model run Python code and return the output, enabling calculations, data transformations, and analysis that would otherwise require you to build custom tools

These are particularly useful in agentic workflows where you want the model to be able to gather information or perform operations without you having to anticipate and implement every possible action in advance.

**Why tool use is the foundation of useful AI apps**

Without tools, your AI app is limited to what the model knows from training — which is static, potentially outdated, and has no access to your application's specific data. With tools, the model can look up the current user's account details, search your product catalogue, check inventory, create records, send notifications, or do anything else your backend can do.

This is the difference between a chatbot that answers general questions and one that can actually help your users accomplish tasks in your product. Every seriously useful AI feature either uses tool calls or should.

---

## Introduction to MCP: Model Context Protocol

As you add more tools to your AI app, you run into a practical problem: writing and maintaining tool schemas for every external service you want to connect to is slow and repetitive. If you want the model to interact with Notion, Slack, GitHub, your database, and your internal APIs, you're writing and maintaining a lot of boilerplate.

MCP — Model Context Protocol — is Anthropic's answer to this problem. It's an open standard that lets AI models connect to external services through a consistent interface, without you having to write bespoke tool definitions for each one.

**What MCP actually is**

MCP defines a standard protocol for how AI models communicate with external tools and data sources. An MCP server is a small service that implements this protocol for a specific integration — say, Notion or Slack. Your AI application connects to MCP servers, which expose their capabilities as tools the model can use.

Instead of writing a custom tool schema for each service, you connect to the relevant MCP server, and the model can discover and use whatever tools that server exposes. The protocol handles the handshake.

**Why this matters for builders**

The practical benefit is leverage. MCP servers already exist for dozens of common services — databases, productivity tools, communication platforms, developer tools. When you need to connect your AI app to one of these, you can use an existing MCP server rather than building the integration from scratch.

You can also build your own MCP servers for your internal services or products, which then makes them available not just to your own AI app but to any MCP-compatible client.

MCP is still relatively early, but it's the direction the ecosystem is moving. For founders building AI apps, it's worth knowing it exists — both so you can use existing integrations and so you understand the architecture when you see it referenced.

---

## Agents vs Workflows: A Distinction That Matters

Once you understand tools, you can build both workflows and agents. These terms get used interchangeably, but they describe genuinely different architectural patterns with different tradeoffs. Understanding the distinction helps you choose the right approach for a given problem.

**Workflows**

A workflow is a predetermined sequence of steps. You decide in advance what needs to happen and in what order. The model plays a role in some or all of the steps — it might extract information, generate text, classify something — but the structure of the process is fixed in your code.

Example: A content moderation workflow might always run: classify input → if flagged, extract the specific violation → generate a moderator notification. The steps don't change. The model doesn't decide what to do next; your code does.

Workflows are:
- Predictable and auditable — you know exactly what will run
- Easy to test and debug — each step can be examined independently
- Appropriate when the task structure is known and consistent

**Agents**

An agent is a system where the model itself decides what actions to take, in what order, based on the current situation and a goal. You give it tools and a task; it figures out how to accomplish the task by deciding which tools to use and when, looping until it reaches the goal or determines it can't.

Example: A research agent given "summarise the competitive landscape for project management tools" might decide to: search for recent comparisons, visit specific product pages, extract pricing information, find recent news, and then synthesise everything into a report — choosing each step based on what it's found so far, not because you wrote a script that told it to do those things.

Agents are:
- Flexible — they can handle situations you didn't anticipate when writing the code
- More powerful for open-ended tasks — they can adapt their approach based on what they find
- Harder to predict and audit — since the model chooses its own path
- More prone to failure modes that are difficult to reproduce — because the path depends on intermediate results

**Choosing between them**

The rule of thumb: if the problem has a clear, consistent structure, use a workflow. If the problem is open-ended or requires adapting to information that isn't known in advance, use an agent.

In practice, most production AI apps use workflows more than agents. Workflows are easier to ship reliably. Agents are compelling but require more careful design, better evaluation, and more robust error handling to behave consistently at scale.

The hybrid pattern — a workflow that delegates to an agent-like component for specific open-ended sub-tasks — is common and often the right call. Structure what you can; give the model flexibility where you must.

---

## What to Build First

If you've read this far and want to start building, here's a practical sequence:

1. **Get a basic API call working** — send a message, get a response. Understand the structure.
2. **Add a system prompt** — give the model a role relevant to your app. See how it changes the output.
3. **Implement multi-turn conversation** — manage the message history yourself. Build the state management.
4. **Define one custom tool** — something simple, like looking up a record in a mock database. See the full tool call loop.
5. **Write ten test cases** for that tool — inputs and expected outputs. Run them. Build the eval habit early.
6. **Tune temperature** — run the same prompt at 0.2 and 0.8. See the difference.
7. **Add a second tool and test whether the model calls the right one** — this is where tool descriptions start to matter.

By the time you've done all of that, you'll have more practical understanding of how AI apps work than most people building them. The concepts here aren't complicated — but they need to be experienced, not just read.

---

Building with AI in 2026 isn't about knowing the latest models or following the hype cycle. It's about understanding the fundamentals — what the API actually does, how to structure your prompts and tools, how to test what you build, and when to use agents versus workflows. Get those right and the rest is implementation.

If you're building something with AI and want to think through the architecture or talk through where to start, [get in touch](/contact). This is work I find genuinely interesting.

> **💬 Building an AI-powered app and not sure where to start?** Whether you're figuring out tool use, evaluations, or the right architecture for your use case, [let's talk](/contact) — I'd rather help you build it right from the start.
