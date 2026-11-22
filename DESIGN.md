---
name: Share Wifi QR
description: Guests scan. They're online.
colors:
  paper: "oklch(0.985 0.008 85)"
  paper-deep: "oklch(0.955 0.014 85)"
  line: "oklch(0.885 0.012 85)"
  ink: "oklch(0.24 0.03 245)"
  ink-soft: "oklch(0.45 0.025 245)"
  signal: "oklch(0.47 0.1 190)"
  signal-deep: "oklch(0.39 0.085 190)"
  signal-tint: "oklch(0.935 0.035 185)"
  porch: "oklch(0.83 0.13 80)"
typography:
  display:
    fontFamily: "Bricolage Grotesque, bricolage-fallback, sans-serif"
    fontSize: "clamp(2.5rem, 5.2vw, 4.25rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Bricolage Grotesque, bricolage-fallback, sans-serif"
    fontSize: "clamp(1.875rem, 3.2vw, 2.625rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Bricolage Grotesque, bricolage-fallback, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 650
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Instrument Sans, instrument-fallback, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  label:
    fontFamily: "Instrument Sans, instrument-fallback, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.08em"
rounded:
  sm: "6px"
  md: "12px"
  lg: "20px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  section-desktop: "64px"
  section-tablet: "48px"
  section-mobile: "40px"
components:
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.signal-deep}"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "11px 23px"
  card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "28px"
  badge:
    backgroundColor: "{colors.signal-tint}"
    textColor: "{colors.signal-deep}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
---

<!-- stardust:provenance writtenBy=stardust:direct writtenAt=2026-11-22T19:22:00Z userInput="professional yet simple marketing site for Share Wifi QR, layout like geo.sourcedcode.com" synthesized=all-tokens read=PRODUCT.md -->

# Design System: Share Wifi QR

## Overview

**Creative North Star: "The House Card"**

The site should feel like the small, well-made card a thoughtful host leaves on the counter: warm paper, confident ink, one clear instruction. Everything is in service of a printed object (the QR card) and a single next step (the portal). The surface is calm and light, the type does the talking, and colour is used to say "this is the thing to press".

Density is balanced: generous whitespace around a narrow set of ideas, one idea per section, alternating paper and paper-deep bands so long pages read as a sequence of cards. Product imagery is always the artefact itself — the printed guest card, the portal's scan counter — never abstract blobs or stock photos of people holding phones.

**Key Characteristics:**
- Warm off-white paper ground with deep blue-grey ink; no pure white, no pure black.
- One functional accent (Signal teal) for actions and live data; a warm Porch amber used only as a highlight.
- Friendly grotesque display type set tight, with a quiet humanist sans for reading.
- Pill buttons, softly rounded cards, hairline borders instead of heavy shadows.

## Colors

A warm, papery neutral system with one teal action colour and an amber highlight.

### Primary
- **Signal Teal** (signal): every primary button, links, active states, and the "live" numbers in product mock-ups. It means *act here* or *this is real data*.
- **Signal Deep** (signal-deep): hover and pressed state of Signal Teal; badge text.

### Secondary
- **Porch Light** (porch): a warm amber highlight — the underline mark under a key word, the eyebrow dot, a single accent on dark bands. Never a button fill, never body text.

### Neutral
- **Paper** (paper): the page ground and card fill.
- **Paper Deep** (paper-deep): alternate section bands and quiet surfaces (FAQ answers, code samples).
- **Hairline** (line): borders and dividers on paper.
- **Ink** (ink): headings and body text; also the fill of the dark CTA band, where text flips to Paper.
- **Ink Soft** (ink-soft): secondary copy, captions, meta lines.
- **Signal Tint** (signal-tint): badge and icon-tile backgrounds.

### Named Rules
**The One Accent Rule.** Signal Teal covers less than 10% of any screen. If two things on screen are teal, one of them is not important.
**The Porch Light Rule.** Amber appears at most once per section and never carries text that must be read.

## Typography

**Display Font:** Bricolage Grotesque (with a metric-matched Arial fallback)
**Body Font:** Instrument Sans (with a metric-matched Arial fallback)

**Character:** Bricolage brings warmth and a little personality to headlines without turning playful; Instrument Sans keeps long instructional copy crisp and neutral.

### Hierarchy
- **Display** (700, clamp 2.5–4.25rem, 1.04): the page `<h1>` only.
- **Headline** (700, clamp 1.875–2.625rem, 1.1): section `<h2>`.
- **Title** (650, 1.25rem, 1.25): card and step `<h3>`.
- **Body** (400, 1.0625rem, 1.6): paragraphs, max 66ch; ledes at 1.25rem in Ink Soft.
- **Label** (600, 0.8125rem, 0.08em, uppercase): eyebrows above section headlines, plan names, meta.

### Named Rules
**The Plain Words Rule.** Headlines are sentences a host would say out loud ("Guests scan. They're online."), not slogans with buzzwords.

## Layout

A single centred column with a 1200px content cap and 24px gutters (16px under 600px). Sections stack vertically with 64px vertical padding on desktop, 48px on tablet, 40px on mobile. Section heads (eyebrow, headline, lede) are left-aligned on wide screens and sit above the block they introduce. Grids use 3 columns for feature cards, 3 for pricing, 3 for blog cards, collapsing to 2 at 900px and 1 at 600px. The hero is a 6/5 split (copy left, artefact right) that stacks with the artefact second on mobile.

## Elevation & Depth

Depth comes from tonal bands and hairline borders, not shadows. Cards sit on Paper with a 1px Hairline border. The only shadow in the system is the "printed card" lift used on product artefacts (`0 1px 2px oklch(0.24 0.03 245 / 0.06), 0 12px 32px -12px oklch(0.24 0.03 245 / 0.18)`), which makes the guest card read as a physical object.

### Named Rules
**The Flat-By-Default Rule.** Interface surfaces are flat. Only things that would be printed get a shadow.

## Shapes

Gently rounded throughout: 6px for inputs and small tiles, 12px for images and icon tiles, 20px for cards and the hero artefact, full pills for buttons and badges. No sharp corners, no blobs, no diagonal section edges.

## Components

### Buttons
- **Shape:** full pill (999px).
- **Primary:** Signal Teal fill, Paper text, 12px × 24px, label weight 600.
- **Hover / Focus:** fill shifts to Signal Deep over 150ms; focus shows a 3px Signal Teal outline offset 3px.
- **Secondary:** Paper fill, Ink text, 1px Ink border; hover fills Paper Deep.
- **Accent (high-impact):** Ink fill with Paper text, used once per page at most (the final CTA band uses the inverse: Paper fill on Ink).

### Cards / Containers
- **Corner Style:** 20px.
- **Background:** Paper on Paper-Deep bands, Paper-Deep on Paper bands.
- **Shadow Strategy:** none (see Flat-By-Default).
- **Border:** 1px Hairline.
- **Internal Padding:** 28px (24px on mobile).

### Badges
- Signal Tint fill, Signal Deep text, label type, pill. Used for "Most popular", "Free", "Tracked".

### Navigation
- Sticky Paper bar with a Hairline bottom border, 72px tall. Wordmark left, text links centre-right in Ink Soft (hover Ink), **Log in** as a secondary pill at the far right. Under 900px the links collapse behind a menu button; Log in stays visible.

### Guest Card (signature)
The printed QR card: Paper fill, 20px radius, the printed-card lift, network name in Title type, the QR in Ink on Paper, a small "Scan with your camera" label. It is the hero image and recurs in blog articles.

## Do's and Don'ts

### Do:
- **Do** show the printed card or the portal counter whenever explaining a feature.
- **Do** keep one primary button per section.
- **Do** use example names ("Lakeside Guest", "Maple Café") and say example numbers are examples.

### Don't:
- **Don't** use gradients on text or backgrounds, glassmorphism, or floating 3D shapes.
- **Don't** use pure #fff or #000 anywhere.
- **Don't** add testimonials, customer logos, ratings or user counts that have not been supplied.
- **Don't** use a coloured side stripe on cards or callouts.
