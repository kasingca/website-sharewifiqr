<!-- stardust:provenance
writtenBy: stardust:direct
writtenAt: 2026-11-22T19:20:00Z
userInput: "create a simple website like geo.sourcedcode.com (layout example only) for Share Wifi QR … professional yet simple … for da.live"
synthesized: Positioning, Product Principles
authored: Users, Product Purpose, Capabilities and Constraints (from the user's brief and Q&A of 2026-11-22)
read: user brief, AskUserQuestion answers (QR model, pages, layout capture)
-->

# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Adobe Edge Delivery Services (aem-boilerplate) with content authored in Document Authoring (da.live). No build step. The marketing site is `sharewifiqr.com`; the signed-in product lives at `portal.sharewifiqr.com`, which talks to a private `api.sharewifiqr.com`. The marketing site never calls the API.

## Users

- **Hosts at home** who are tired of reading a 20-character password off the back of the router to every visitor.
- **Short-term rental hosts** (Airbnb, cottages, B&Bs) who want a framed card guests can scan on arrival, and who change passwords between stays.
- **Small venues** — cafés, salons, clinics, offices — sharing a guest network with customers.
- **Event organisers** — weddings, parties, conferences, pop-ups — who need a temporary network to be joinable by everyone, fast.

They are not network administrators. They want it done in under a minute and want it to look decent when printed.

## Product Purpose

Share Wifi QR turns a Wi-Fi network name and password into a QR code that guests scan to connect.
Scope of this site: explain the service, show both kinds of codes, price them, teach people how to use them (blog), and send every action to the portal, where codes are created and managed.

## Positioning

Two kinds of code, honestly explained. A **direct code** stores the network in the QR itself, so a phone camera joins in one tap — but nobody can count it. A **tracked code** points at a short Share Wifi QR link, so the owner sees how many times it was scanned and can change the password later without reprinting — at the cost of one extra tap for the guest. Most generators hide this trade-off; we lead with it.
<!-- _provenance: inferred — synthesized from the user's QR-model answer ("Both: free + tracked") -->

## Operating Context

- Codes end up on paper: fridge cards, framed signs, table tents, wedding welcome boards, check-in binders.
- Creating and managing codes happens only in the portal. The top-right **Log in** on every page goes to `https://portal.sharewifiqr.com`.
- The marketing home page carries **no generator** (user decision, 2026-11-22).

## Capabilities and Constraints

- Network security types supported when creating a code: WPA/WPA2/WPA3 (personal), WEP, and open (no password); hidden networks (SSID not broadcast) supported.
- Direct codes: Wi-Fi payload encoded in the QR (`WIFI:T:…;S:…;P:…;H:…;;`); joins natively on iOS 11+ and Android 10+ camera apps; not countable.
- Tracked codes: encode a short URL; each scan is counted and shown in the portal; the network details can be edited without changing the printed code.
- Content is authored in DA by non-developers: every page must be editable in the da.live editor.
- **Undecided (open):** final pricing, plan limits, download formats, and team accounts. Pricing copy on this site is placeholder until the owner confirms it.

## Brand Commitments

- Name: **Share Wifi QR** (written with that capitalisation; "Wi-Fi" in running prose).
- Register: brand (marketing site), professional yet simple.
- Personality: helpful, plain-spoken, quietly confident — a well-made house card, not a tech gadget.
- Anti-references: the generic 2026 SaaS silhouette (purple-to-blue gradient hero, glassmorphic cards, floating 3D blobs, gradient text); "hacker" network aesthetics (terminal green, dark mode by default); cluttered QR-generator sites stuffed with ads.
- Layout reference: geo.sourcedcode.com was named as a layout example only. It could not be captured (Cloudflare challenge), so no design was copied from it.

## Evidence on Hand

- No captured site, logos, customer quotes, testimonials, usage statistics, press, or screenshots exist. **Do not fabricate** testimonials, customer logos, "trusted by N users" counts, ratings, or security certifications.
- Product illustrations (the guest card, the portal dashboard) are illustrative mock-ups and must be labelled or worded as such (example network names, example numbers).

## Product Principles

- **Explain the trade-off up front.** Every page that mentions codes makes clear which kind does what; no guest should be stuck on a tracked code expecting a one-tap join.
- **One action per screen.** Each section leads to a single next step, almost always the portal.
- **Print is the product.** What people see is the card on the wall; show the printed artefact, not abstract UI.
- **Teach, don't hype.** The blog and FAQ answer real setup questions (events, rentals, homes) in plain steps.

## Accessibility & Inclusion

WCAG 2.2 AA: text contrast ≥ 4.5:1, visible focus on every interactive element, a single `<h1>` per page, alt text on every editorial image, and nothing that only works on hover. Instructions for scanning must cover both iPhone and Android.
