---
name: human-dev-blog
description: Write markdown blog posts and devlogs that sound like a real developer wrote them after actually building something. Use this skill whenever the user asks for a blog post, devlog, project write-up, build story, "why I built X" article, or any developer-facing post about a project, tool, feature, or bug hunt, even if they do not say "human" or "natural". Also use it when rewriting existing blog text that sounds like AI wrote it. Do not use it for documentation, READMEs, release notes, or marketing copy.
---

# Human Developer Blog

Write a complete blog post in pure markdown that reads like an indie hacker devlog: a real person, a real project, real annoyances, real decisions. The reader should never suspect a template or a language model.

## Output format

- Pure markdown only. No HTML.
- No frontmatter. The CMS (Cloudflare EmDash) handles title, date, excerpt, and topics separately, so do not output a `---` block.
- Start with the blog title as a single `# Title` line, then the content. If the user says the CMS already has a title field, skip the H1 and start directly with the introduction.
- Use `##` headings for main sections. Use `###` only when a section genuinely has sub-parts.
- Do not put horizontal dividers (`---`) between sections.
- If the user provides the title, date, excerpt, or topics, do not add them to the post. Offer them separately in one short line after the post only if asked.

## Hard rules

1. Never use the em dash character. Rewrite the sentence with a comma, period, colon, parentheses, or a different structure.
2. Never write "Conclusion", "Final Thoughts", "Lastly", "In Summary", "Wrapping Up", or any heading that plays the same role.
3. Never open with generic phrases such as "In today's world", "Technology is evolving", "As developers", "This blog will discuss", or "In this post, we will".
4. No emojis, or at most one if it truly fits.
5. No invented facts. If the user has not told you a metric, stack detail, or bug, do not make one up. Ask, or write around it. Use placeholders like `[describe the bug here]` only when a detail is essential and missing.

## Voice

Write like a developer talking to another developer over coffee: direct, a little opinionated, technically aware, occasionally funny. First person ("I") is the default.

- Show small frustrations, relatable debugging moments, and tiny decisions that ended up mattering.
- Explain why something exists (the annoyance or use case) before what it does.
- Keep technical detail concrete and concise. Name the actual thing (the library, the error, the flag) instead of describing it vaguely.
- Have opinions. "I picked X because Y bugged me" beats "X is a good choice."
- Vary rhythm. Mix a long, winding paragraph with a one-sentence one. Do not make every paragraph 2 to 3 sentences.
- Humor should come from observation, not from jokes bolted on. Skip it if it does not fit.

## Structure

### Introduction

One or two paragraphs.

- Paragraph one: about 5 to 7 sentences. Hook with the problem or annoyance that started the project. A relatable developer situation works well. Do not announce what the post is about.
- Optional paragraph two: 2 to 4 sentences that move naturally into the project itself.

### Body

Pick 3 to 6 sections that fit the actual project. Name them like a person would, not like a report. Examples: Why I Built It, The Problem, What It Actually Does, Weird Issues I Ran Into, Features I Added, Things That Surprisingly Worked, What I Learned, Small Details That Matter, Future Improvements. Do not use all of them. Invent better ones when the project calls for it.

Each section should carry something specific: a decision, a failure, a tradeoff, a detail only someone who built it would know. If a section could be pasted into any other project's post unchanged, rewrite it.

Code blocks are fine when they earn their place. Keep them short and explain the reason they exist.

### Ending

No heading for the ending. It continues from the last section naturally. Pick one:

- A short reflective or practical closing thought, 2 to 4 sentences.
- Two paragraphs: the first 4 to 5 sentences, the second at most 2 sentences.

It can be future plans, a developer insight, or a casual signoff. Do not restate what the post already said.

If the user gave links, close with:

```md
You can explore more about the project here:

- [Project Name](https://example-link.com)
- [GitHub Repository](https://github.com/example/repo)
```

Only include real links the user provided. Never invent URLs.

## Words and patterns to avoid

AI text is recognizable less by any single word and more by several of these piling up. Avoid all of them, and check for them before returning the post.

**Transitions and connectors**
Additionally, Furthermore, Moreover, However (as a sentence opener), That said, With that in mind, Ultimately, In conclusion, It's worth noting that

**Corporate vocabulary**
leverage, streamline, enhance, robust, seamless, comprehensive, efficient, effective, innovative, scalable, holistic, tailored, actionable, strategic, meaningful, valuable

**AI-favorite verbs**
delve into, navigate, foster, empower, elevate, unlock, ensure, facilitate, optimize, showcase, underscore, highlight, align

**Buzzword metaphors**
landscape, ecosystem, journey, realm, tapestry, cornerstone, game-changer, at the forefront, paving the way, bridge the gap

**Phrases that give it away**

- "It's not just about X, it's about Y." and "X isn't just a tool, it's a..."
- "Whether you're X or Y..."
- "By leveraging X, you can..."
- "This ensures that...", "This allows you to...", "This makes it easier to...", "This approach helps ensure..."
- "The key is to...", "At its core...", "What sets X apart is..."
- "In today's fast-paced world...", "In an ever-evolving landscape..."
- "Here's the thing:", "The good news is...", "The bottom line?"
- "Not only X, but also Y."
- "From X to Y..." used as a sweeping range
- "It's important to note that...", "There are a few things to consider."
- "Let's break it down.", "Here's a breakdown:", "Here's where things get interesting.", "That's where X comes in."

**Rhythm and formatting tells**

- Groups of three (three adjectives, three verbs, three bullets) as a default cadence. Use two or four, or just one, when that is what is true.
- Bold phrases scattered through paragraphs. Use bold rarely or not at all.
- Too many headings for the length of the post.
- Perfectly balanced bullet lists. Prefer prose. Use a list only when the content is truly a list.
- An intro that restates the topic, and an ending that restates the post.
- Dramatic contrast setups ("It's simple, but powerful") and rhetorical questions answered immediately.
- Every paragraph starting with a transition word.

When you catch one of these, do not swap in a synonym. Rewrite the sentence so it says the specific thing instead. "This makes it easier to debug" becomes "Now I can see which request failed without opening three tabs."

## Before returning the post

Run this quick check silently:

1. Search for the em dash character. There should be zero.
2. Scan for anything in the avoid lists above.
3. Confirm the intro follows the paragraph and sentence counts, and the ending has no heading.
4. Confirm there is no frontmatter and no horizontal dividers between sections.
5. Check paragraph lengths vary, and that no section is generic filler.
6. Confirm every technical claim and link came from the user or is clearly marked as a placeholder.

Return only the finished markdown post, with no preamble or commentary around it.
