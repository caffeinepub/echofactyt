# Specification

## Summary
**Goal:** Build EchoFactyt, a vibrant content website targeting teens and young adults, featuring facts, guides, lists, videos, quizzes, calculators, and downloadable freebies with a bold coral-to-yellow/teal-to-lime color theme.

**Planned changes:**
- Apply a vibrant, mobile-first visual theme: bold gradient accents (coral-to-yellow, teal-to-lime), modern sans-serif typography, colorful category badges, card-based layouts, and smooth hover effects throughout
- Full-width hero banner with tagline, subtitle, and three CTA buttons ("Learn More", "Try Now", "Watch Video") on a bold gradient background with hero illustration
- "Trending Facts" section with 6+ colorful fact cards spanning technology, school, health, entertainment, and daily life categories, each with badge, fact text, icon, and "Learn More" button
- "Top 10 Lists" section with 3+ numbered list cards/accordion panels (e.g., Study Hacks, Free Apps, Healthy Snacks) each with a "Try Now" button
- "Step-by-Step Guides" section with 3+ guide cards showing numbered steps and a "Learn More" button each
- "Videos" section with 4+ embedded YouTube iframes in a grid/carousel layout, each with a title and "Watch Video" label
- Interactive Quiz module ("Which Study Style Are You?") with 5+ multiple-choice questions, React state tracking, and a results/score screen
- "Calculators" section with a GPA Calculator (course grades + credit hours → GPA) and a Screen Time Tracker (hours input → wellness assessment), all computed in React state
- "Free Downloads" section with 4+ freebie cards (title, description, "Download Free" button linking to placeholder)
- Social media share buttons (Twitter/X, Facebook, WhatsApp, Copy Link) on fact cards, guide cards, and quiz results screen
- Category filter bar (All, Technology, School, Health, Entertainment, Daily Life) filtering Trending Facts, Guides, and Top 10 Lists sections via React state
- Motoko backend storing posts with view counts; "Popular Posts" section displaying 5+ posts sorted by views, incrementing count on click
- Motoko backend storing content items with timestamps; "New Updates" section displaying the 4 most recent items with a "New" badge
