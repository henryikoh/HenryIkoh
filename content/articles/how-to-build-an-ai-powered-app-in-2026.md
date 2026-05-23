---
title: "How to Build an AI-Powered App in 2026"
description: A practical guide for founders and developers who want to go beyond the ChatGPT wrapper — covering how AI actually works at the API level, the full model landscape (text, image generation, open source), and the tool use, agents, and architecture patterns that make AI apps genuinely useful.
cover: /computer.jpeg
alt: Developer building an AI-powered application
tag: ['AI', 'Founders']
createdAt: May 23 2026
---

Everyone wants to build an AI-powered app right now. Very few people understand what that actually means at the level that produces something good.

There's a wide gap between pasting an API key into a tutorial and understanding how to build AI features that work reliably in production — features that use real data, respond correctly under different conditions, and don't fall apart when the input doesn't match what you tested. Closing that gap is what this guide is for.

What follows is a ground-up explanation of how AI works at the API level, a map of what's actually out there — text models, image generation, open source alternatives — and the patterns that separate AI features that genuinely work from ones that just look like they work in a demo.

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

## The Model Landscape: Text, Images, and Open Source

The concepts in this guide — system prompts, tool use, temperature, evaluations — apply across all the major AI APIs. But before getting into how to build, it's worth knowing what's actually available and what each type of model is designed to do. The AI ecosystem in 2026 has three distinct categories, and most real products end up using at least two of them.

**Text and language model APIs**

This is the category most founders reach for first. Send text in, get text back. The major providers:

- **[Claude (Anthropic)](https://docs.anthropic.com)** — strong reasoning, long-context tasks, and instruction-following. The largest models support context windows up to 200k tokens, meaning you can feed an entire document or codebase into a single request. The examples in this guide use Claude, but the patterns work everywhere.
- **[GPT-4o (OpenAI)](https://platform.openai.com)** — the model most developers learn on first, with an extensive ecosystem of documentation and community resources. Broad capability across nearly every task category.
- **[Gemini (Google DeepMind)](https://ai.google.dev)** — competitive performance across most benchmarks, with Gemini 1.5 Pro supporting a 1 million token context window for very large document analysis tasks. Tightly integrated with Google's infrastructure.

The good news: the API structure across all three is nearly identical. Messages in, completion out, system prompt, temperature — these concepts transfer directly. The main differences are in pricing, context window size, and which specific tasks each model performs best on. Learning one gets you most of the way to using the others.

**Multimodal: sending images to language models**

All the major text models now accept images alongside text. You include an image in the messages array — either as a URL or base64-encoded data — and the model reads and reasons about what it sees alongside your text instructions.

```python
message = client.messages.create(
    model="claude-opus-4-7",
    max_tokens=1024,
    messages=[
        {
            "role": "user",
            "content": [
                {
                    "type": "image",
                    "source": {"type": "url", "url": "https://example.com/receipt.jpg"}
                },
                {
                    "type": "text",
                    "text": "Extract all line items, quantities, and totals from this receipt as JSON."
                }
            ]
        }
    ]
)
```

Real use cases for this in products: extracting structured data from uploaded invoices and receipts, reading scanned contracts or forms, analysing screenshots to give design or UX feedback, verifying that user-uploaded images meet requirements, and processing any document that arrives as a photo rather than structured text.

Gemini has particularly strong document understanding capabilities. GPT-4o handles a wide range of visual tasks. Claude handles vision through the same API pattern shown above. All three work with this same model — image and text together in the messages array.

**Image generation APIs: a different paradigm entirely**

Image generation works nothing like a language model. There's no messages array, no system prompt, no conversation history, no tool use. You send a text prompt describing the image you want, and the API returns an image. The primary inputs are the prompt and a few parameters — size, quality, style.

```python
# OpenAI DALL-E 3
from openai import OpenAI
client = OpenAI()

response = client.images.generate(
    model="dall-e-3",
    prompt="A minimal SaaS dashboard showing revenue metrics, dark mode, clean typography, no people",
    size="1024x1024",
    quality="hd"
)

image_url = response.data[0].url
```

The main image generation APIs founders use in products:

- **[DALL-E 3 (OpenAI)](https://platform.openai.com/docs/guides/images)** — high quality, strong prompt adherence, accessible through the same OpenAI API key you likely already have. Best for product mockups, marketing visuals, and cases where the output needs to match the prompt closely.
- **[Imagen 3 (Google)](https://ai.google.dev/gemini-api/docs/image-generation)** — Google's model, accessible through the Gemini API. Strong photorealism and detail.
- **[Flux (Black Forest Labs)](https://replicate.com/black-forest-labs)** — fast, high-quality, available through Replicate and other hosting providers. Popular for products that need generation at volume because of its speed-to-quality ratio.
- **[Stable Diffusion (Stability AI)](https://stability.ai)** — open source, which means you can run it on your own infrastructure with no per-image API cost. More setup required, but at scale the economics change significantly.

Real product use cases: generating product imagery from written descriptions, creating social media assets on demand, avatar and profile picture generation, design-tool integrations that let users describe and generate visuals, and personalised content creation at scale.

One important practical note: image generation is slow compared to text — typically 5–15 seconds per image depending on the model and quality settings. Design your UX around this. Show progress states, generate asynchronously in the background, pre-generate where possible, and cache results aggressively.

**Open source models: when you run your own**

Hosted APIs are pay-per-token and you never touch the underlying model. Open source models are different: you download the weights and run them yourself, either locally or on cloud infrastructure you control. The API you call looks the same, but the compute is yours.

The major open source text models:

- **[Llama 3 (Meta)](https://llama.meta.com)** — Meta's open source model family, ranging from 8B to 70B+ parameters. The 70B model is competitive with closed APIs on most benchmarks and is widely deployed in production.
- **[Mistral / Mixtral (Mistral AI)](https://mistral.ai)** — strong European open source models. Mistral 7B is remarkably capable for its size. Mixtral 8x7B uses a mixture-of-experts architecture — multiple specialist models routing between them — that delivers high quality with lower compute requirements than a dense model of equivalent performance.
- **[Qwen 2.5 (Alibaba)](https://huggingface.co/Qwen)** — competitive models with strong multilingual capabilities, particularly for Asian language tasks.
- **[Phi-4 (Microsoft)](https://huggingface.co/microsoft/phi-4)** — small models built to punch above their weight on reasoning. Good for cost-sensitive deployments where context windows stay short.

Why you might use open source instead of a hosted API:

*Cost at scale.* At high token volumes, running your own model is dramatically cheaper than paying per token. The crossover point is usually somewhere in the range of tens of millions of tokens per day — but once you're there, the savings are significant.

*Data privacy.* If you're handling sensitive data — healthcare records, legal documents, financial information — and can't send it to a third-party API, running your own model is often the only compliant option.

*Fine-tuning.* Open source models can be trained further on your own data to specialise them for a specific task. A fine-tuned Llama 3 8B can outperform much larger general-purpose models on a narrow domain, at a fraction of the cost per token.

The easiest way to start with open source is through a hosting provider that runs them for you: [Groq](https://groq.com), [Together AI](https://together.ai), [Replicate](https://replicate.com), and [Hugging Face Inference](https://huggingface.co/inference-api) all let you call open source models via API without managing servers. Most expose OpenAI-compatible endpoints, which means switching from GPT-4o to Llama 3 is often one line of code.

The tradeoff is honest: open source models generally require more prompting work to get consistent results, tool use support is less mature (though improving fast), and you take on infrastructure responsibility as you scale. The right default for most founders: start with a hosted API, move to open source when cost, data requirements, or customisation needs make it necessary.

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

## Prompt Engineering: Writing Prompts That Actually Work

Temperature is about tuning the output distribution. Prompt engineering is about being understood in the first place. Most prompts underperform not because the model is incapable, but because the instructions are vague, unstructured, or assume context the model doesn't have.

There are four techniques that account for the majority of improvement in prompt quality.

**Be clear and direct**

The first line of your prompt is the most important. It should start with an action verb and state exactly what you want in plain terms: "Generate a one-day meal plan for an athlete based on their height, weight, and dietary restrictions" is a clear prompt. "Can you help with a meal plan?" is not.

The gap between these two prompts is a gap in eval scores, not just aesthetics. A prompt that opens with a vague request forces the model to infer what you want, and those inferences are often wrong for your specific case.

**Be specific about format and reasoning**

After the main instruction, add two kinds of guidelines:

*Output attributes* — specific things you want the output to have. Length, format, structure, tone, what to include, what to exclude. "Return a JSON object with keys: meal_name, ingredients, prep_time" is an output attribute. "Keep the response under 200 words" is an output attribute. Most prompts benefit from at least two or three of these.

*Reasoning steps* — instructions for how you want the model to arrive at its answer. "Before giving a recommendation, list the tradeoffs of each option" or "First identify the core problem, then propose a solution." Use reasoning steps when you want the model to consider something it might otherwise skip — an edge case, a second perspective, a validation step.

Combined, these two types of specificity are the single highest-leverage prompt improvement available. In practice, adding clear output attributes and reasoning steps to an otherwise vague prompt can move eval scores from poor to good in one iteration.

**Use XML tags to separate content from instructions**

When your prompt includes interpolated content — user input, document excerpts, data records — wrap it in descriptive XML tags to make the structure explicit.

```python
prompt = f"""
Analyse the support ticket below and classify it by urgency and category.

<support_ticket>
{ticket_text}
</support_ticket>

Return JSON with keys: urgency (low/medium/high), category, and a one-sentence summary.
"""
```

Without the XML tags, longer prompts become ambiguous — the model can lose track of where the instructions end and the content begins. With them, the structure is obvious. Use descriptive tag names (`<support_ticket>`, `<athlete_profile>`, `<sales_data>`) that describe what the content actually is, not generic names like `<input>`.

**Give examples**

If you want a specific output format, style, or handling of an edge case, show it. One well-chosen example (one-shot) outperforms three paragraphs of description for complex or structured outputs. Multiple examples (multi-shot) are especially useful when there are tricky edge cases the model would otherwise mishandle.

```python
system = """
You classify customer messages as: complaint, question, or praise.

Examples:
Message: "I've been waiting three weeks and nothing has arrived."
Classification: complaint

Message: "Does this plan include API access?"
Classification: question

Message: "Your support team was incredibly helpful, thank you."
Classification: praise
"""
```

Place examples after your main instructions and, where useful, add a brief note about what makes the example ideal — this reinforces the pattern rather than just demonstrating it.

**Controlling output precisely: prefilling and stop sequences**

Two more techniques worth knowing for when you need clean, structured output with no surrounding commentary.

*Prefilling* means manually adding the beginning of the assistant's response in the messages array before making the API call. The model then continues from exactly where you left off — it treats your prefill as content it has already authored.

```python
messages = [
    {"role": "user", "content": "Extract the key metrics from this report as JSON."},
    {"role": "assistant", "content": "```json"}  # prefill — model continues from here
]
```

*Stop sequences* tell the model to stop generating the moment it produces a specific string. Pair a prefill of ` ```json` with a stop sequence of ` ``` ` and you get raw JSON back — no explanation, no markdown, no preamble — which you can parse directly.

These two techniques together are the cleanest way to extract structured data from a model without using a full tool call.

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

**What tool use looks like in real products**

Here's where it clicks. Without tools, an AI feature in your product can only respond based on what the model was trained on — which has no knowledge of your users, your data, or anything that's happened since the training cutoff. With tools, you connect the model to your actual application.

A few real examples of what this unlocks:

*Customer support chatbot for a SaaS product.* Without tools, the chatbot can only answer generic questions about the category. With tools — `get_account_details(email)`, `get_recent_invoices(account_id)`, `check_subscription_status(account_id)` — it can answer "why did my card get charged twice last month?" with a real answer, not a redirect to the billing page.

*E-commerce shopping assistant.* Without tools, it can describe products in general terms. With tools — `search_catalogue(query, filters)`, `check_inventory(product_id)`, `get_delivery_estimate(product_id, postcode)` — it can tell a customer "the navy version is in stock and will arrive Thursday if you order now."

*Internal ops tool for a hiring team.* Without tools, it can draft job descriptions. With tools — `get_applicants(role_id)`, `fetch_resume(applicant_id)`, `get_interview_notes(applicant_id)`, `update_application_status(applicant_id, status)` — a recruiter can ask "which candidates for the senior engineer role have been waiting more than a week for feedback?" and get a real answer they can act on.

In every case the tool use pattern is identical — the model decides what to call, your code executes it, the result comes back. What changes is the data you expose and the actions you allow. The more of your app's logic you surface through well-described tools, the more genuinely useful the AI feature becomes.

**Why tool use is the foundation of useful AI apps**

Without tools, your AI app is limited to what the model knows from training — static, potentially outdated, and completely blind to your application's specific data. With tools, the model can look up the current user's account details, search your product catalogue, check inventory, create records, send notifications, or do anything else your backend can do.

This is the difference between a chatbot that answers general questions and one that can actually help your users accomplish tasks in your product. Every seriously useful AI feature either uses tool calls or should.

---

## Introduction to MCP: Model Context Protocol

As you add more tools to your AI app, you run into a practical problem: writing and maintaining tool schemas for every external service you want to connect to is slow and repetitive. If you want the model to interact with Notion, Slack, GitHub, your database, and your internal APIs, you're writing and maintaining a lot of boilerplate.

MCP — [Model Context Protocol](https://modelcontextprotocol.io) — is Anthropic's answer to this problem. It's an open standard that lets AI models connect to external services through a consistent interface, without you having to write bespoke tool definitions for each one.

**What MCP actually is**

MCP defines a standard protocol for how AI models communicate with external tools and data sources. An MCP server is a small service that implements this protocol for a specific integration — say, Notion or Slack. Your AI application connects to MCP servers, which expose their capabilities as tools the model can use.

Instead of writing a custom tool schema for each service, you connect to the relevant MCP server, and the model can discover and use whatever tools that server exposes. The protocol handles the handshake.

**Why this matters for builders**

The practical benefit is leverage. MCP servers already exist for dozens of common services — databases, productivity tools, communication platforms, developer tools. When you need to connect your AI app to one of these, you can use an existing MCP server rather than building the integration from scratch.

You can also build your own MCP servers for your internal services or products, which then makes them available not just to your own AI app but to any MCP-compatible client.

MCP is still relatively early, but it's the direction the ecosystem is moving. For founders building AI apps, it's worth knowing it exists — both so you can use existing integrations and so you understand the architecture when you see it referenced.

---

## Agents vs Workflows: A Distinction That Matters

Once you understand tools, you can build both workflows and agents. These terms get used interchangeably everywhere, but they describe fundamentally different architectures — and choosing the wrong one is one of the most expensive mistakes founders make when building AI features.

**Workflows: the model as a step in your process**

A workflow is a predetermined sequence of steps that you design and control. Your code decides what happens and in what order. The model plays a role in specific steps — extracting information, generating text, classifying input — but the overall structure is fixed. The model doesn't decide what to do next. Your code does.

Three real examples:

*Inbound lead qualification for a B2B SaaS.* When a signup comes in: extract company name and role from the email → enrich with company size data → score the lead against your ICP criteria → if score is above threshold, draft a personalised outreach email and add to CRM → if below threshold, add to nurture sequence. Every step is defined. The model handles the language tasks (extraction, scoring logic, email drafting), but the pipeline is yours.

*Invoice processing for a finance tool.* Upload an invoice → extract line items, amounts, vendor name, and due date → validate against purchase orders in the database → flag discrepancies → if clean, create the payment record → notify the finance team. The model reads and extracts; the workflow decides what to do with what it finds.

*Content moderation for a marketplace.* New listing submitted → classify content against policy categories → if flagged, identify the specific violation → generate a rejection notice in the seller's language → log the decision for audit. Same path every time, predictable output, easy to test.

What these have in common: the task has a known structure. You can draw the flowchart before writing any code. The AI handles the parts that require language understanding, but the orchestration logic is explicit and auditable.

**Agents: the model as the orchestrator**

An agent is a system where the model itself decides what to do next. You give it tools, a goal, and context. It figures out how to reach the goal by choosing which tools to use, in what order, based on what it discovers along the way. It loops — calling tools, incorporating results, deciding on the next step — until it completes the task or concludes it can't.

Three real examples:

*Customer success health check agent.* You give it a tool to pull account usage data, a tool to search support ticket history, a tool to fetch NPS scores, and a tool to look up contract renewal date. Then you say: "Assess the health of Acme Corp's account and recommend whether we need to intervene." The agent decides which data to pull first, what patterns to look for, which threads to follow based on what it finds, and what conclusion to draw. A workflow couldn't do this because you don't know in advance what's going to be relevant.

*Competitor research assistant.* You give it web search, the ability to visit URLs, and the ability to create structured notes. You say: "Research how our three main competitors have changed their pricing in the last six months." It searches, finds relevant pages, reads them, decides what's signal versus noise, follows links that seem relevant, and synthesises a summary — adapting its path based on what it finds. You couldn't write a workflow for this because the steps depend entirely on what's out there.

*Automated bug triage agent.* A new bug report comes in. The agent can search existing issues, read code files, check recent commits, and look up error logs. It determines whether this is a duplicate, identifies likely cause, estimates severity based on how many users are affected, and drafts a summary for the engineering team. Each of these decisions depends on what the previous step found.

What these have in common: the task is open-ended. The right sequence of steps isn't knowable until you start gathering information. The model needs flexibility to adapt.

**Why the distinction matters — and what goes wrong**

Most founders building AI features for the first time reach for the agent architecture because it sounds more impressive and more capable. This is usually the wrong call.

Agents are harder to test (the path changes with every run), harder to debug (failures can happen anywhere in a dynamic loop), and prone to a failure mode called "reasoning drift" — where the model makes a plausible-seeming but wrong decision mid-loop, and everything that follows is built on that wrong foundation. In a workflow, a bad step produces a bad output you can catch and fix. In an agent, a bad intermediate decision can compound invisibly.

The right instinct: start with a workflow whenever the task has any discernible structure. Build the most boring version that could work. You can always introduce agent-like flexibility later for the parts that genuinely need it.

**The hybrid — which is what most good AI apps actually are**

The pattern that works best in production is usually a workflow with one or two agentic sub-tasks embedded in it. The outer structure is defined and controlled. Within a specific step — one that's genuinely open-ended — you let the model loose with a set of tools.

A recruiting tool might have a fixed workflow: receive application → run background check → screen for minimum requirements → route to hiring manager. But the "screen for minimum requirements" step is where you embed an agent that reads the resume, looks up the company on LinkedIn, checks references if available, and makes a nuanced recommendation — because that step involves open-ended reasoning you can't fully script.

This hybrid is the architecture most mature AI products converge on. Structure what you can. Give the model flexibility only where the task genuinely requires it. And always build evaluation into both layers so you know when either one is failing.

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

Building with AI in 2026 isn't about knowing the latest models or following the hype cycle. It's about understanding the fundamentals — what the API actually does, how the model landscape fits together, how to structure your prompts and tools, how to test what you build, and when to use agents versus workflows. Get those right and the rest is implementation detail: which provider, which model size, hosted or open source.

If you're building something with AI and want to think through the architecture or talk through where to start, [get in touch](/contact). This is work I find genuinely interesting.

> **💬 Building an AI-powered app and not sure where to start?** Whether you're figuring out tool use, evaluations, or the right architecture for your use case, [let's talk](/contact) — I'd rather help you build it right from the start.
