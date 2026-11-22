# stardust journal — Share Wifi QR

## 2026-11-22 · direct
- Prompt: build a simple, professional marketing site for Share Wifi QR on EDS/da.live, layout like geo.sourcedcode.com; Log in (top right) → portal.sharewifiqr.com.
- Decisions: both code kinds (direct = native join, tracked = counted); pages Home/Pricing/FAQ/Blog(+3 articles)/Privacy/Terms; no generator on home.
- Blocked: donor capture (Cloudflare challenge). Named deviation recorded in direction.md.
- Wrote PRODUCT.md, DESIGN.md, DESIGN.json, stardust/direction.md, stardust/state.json.
- Open: pricing, download formats, legal review.

## 2026-11-22 · prototype + deploy (local)
- Prototype: stardust/prototypes/home.html + site.css; illustrations rendered to stardust/prototypes/media/ (real, scannable QR codes).
- EDS: blocks hero, cards (features/steps/compare/posts/pricing), columns, accordion; header/footer restyled; styles.css rebranded; scripts.js adds eyebrow/lede wrapping and section Id anchors.
- Content: content/{index,pricing,faq,privacy,terms,nav,footer}.html, content/blog/{index,3 articles}.html — lint PASS (0 🔴).
- QA: qa-gate PASS on home, pricing, faq, blog, article; privacy content-cap exception (see direction.md).
- Not yet done: media upload to DA, DA PUT/preview, push branch — awaiting owner go-ahead and DA_TOKEN.

## 2026-11-22 · layout alignment + DA delivery
- Layout reference captured from https://main--geo-sourcedcode-com--kasingca.aem.live/ (owner-supplied copy): centred hero + product window, chip strip, concept split, centred heads, dark audience split, numbered steps, home FAQ. Brand kept (paper/ink/teal).
- DA: previous index/nav/footer backed up to stardust/.work/da-backup/; 5 images uploaded to media/site; 11 documents PUT + previewed on site-v1 (not published live).
- Deployed QA: qa-gate PASS on /, /pricing, /faq, /blog/, article; /privacy content-cap exception as recorded; CLS 0.024 on home.
