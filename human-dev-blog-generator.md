# Human Developer Blog Generator Prompt

Generate a complete markdown blog post that feels natural, human, constructive, slightly conversational, and enjoyable to read.

The writing should sound like a real developer sharing experience, not AI-generated corporate content.

Avoid robotic phrasing, repetitive transitions, and generic filler.

The tone can be:

- slightly funny
- story-driven
- developer-to-developer
- practical and constructive
- direct to the point
- casually technical

Do NOT use em dashes (—).

Do NOT use horizontal dividers for every section.

Keep paragraphs varied in size naturally.

Do NOT make every paragraph only 2-3 sentences long.

The article should feel organic and readable.

Output everything in pure markdown format.

Use this frontmatter format:

```md
---
title: "INSERT TITLE"
date: "YYYY-MM-DD"
excerpt: "Short engaging summary about the project."
topics: ["topic-1", "topic-2", "topic-3", "topic-4"]
---
```

After the frontmatter, create the blog title using:

```md
# Blog Title
```

## Introduction Rules

The introduction can have:

- 1 or 2 paragraphs maximum

The first paragraph:

- must contain around 5-7 sentences
- should hook the reader naturally
- explain the problem or annoyance that inspired the project
- can include relatable developer situations
- can feel slightly humorous if appropriate

The optional second paragraph:

- should contain around 2-4 sentences
- should transition naturally into the actual project discussion

Do NOT start with generic phrases like:

- "In today's world"
- "Technology is evolving"
- "As developers"
- "This blog will discuss"

## Main Content Rules

Structure the article using markdown headings:

```md
## Section Title
```

Possible section examples:

- Why I Built It
- The Problem
- What It Actually Does
- Weird Issues I Ran Into
- Features I Added
- Things That Surprisingly Worked
- What I Learned
- Why This Became Useful
- Small Details That Matter
- Future Improvements

The article should:

- explain the project clearly
- include realistic developer experiences
- include implementation thoughts when relevant
- avoid sounding overly formal
- avoid exaggerated marketing language
- avoid repeating the same sentence structure
- include practical insights instead of vague descriptions

When discussing code or features:

- explain WHY something exists
- explain the annoyance or use case behind it
- keep explanations concise but meaningful

The blog should feel like:

- an indie hacker devlog
- a real engineering story
- a practical project breakdown
- something written after actually building the tool

## Writing Style Rules

Make the writing:

- human
- slightly opinionated
- constructive
- technically aware
- readable
- naturally flowing

Avoid:

- overexplaining simple concepts
- sounding like documentation
- repetitive transitions
- AI buzzwords
- forced excitement
- excessive emojis

You may include:

- small frustrations
- funny observations
- relatable debugging moments
- tiny development decisions that mattered

## Ending Rules

NEVER use headings like:

- Conclusion
- Final Thoughts
- Lastly
- In Summary
- Wrapping Up

Instead:

- end naturally with either:
  - a short reflective ending
  - a practical closing thought
  - future plans
  - a casual signoff
  - a developer insight

Ending options:

- 2-4 sentence short ending
  OR
- 2 paragraphs:
  - first paragraph: 4-5 sentences
  - second paragraph: max 2 sentences

At the end, optionally include:

```md
You can explore more about the project here:

- [Project Name](https://example-link.com)
- [GitHub Repository](https://github.com/example/repo)
```

## Output Requirements

- Entire response must be markdown
- No HTML
- No em dashes
- No repetitive filler
- No generic AI tone
- Make the blog feel naturally written
- Keep technical explanations balanced and readable
- Prioritize authenticity over perfection
