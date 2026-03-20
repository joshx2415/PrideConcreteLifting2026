# Email Templates — Pride Concrete Lifting

Standalone HTML email templates for outreach and marketing. These are **not** part of the Astro build pipeline.

## Templates

| File | Purpose | Audience |
|------|---------|----------|
| `brochure-commercial.html` | Introductory brochure for cold/warm outreach | Property managers, commercial businesses, municipalities, industrial facilities |
| `brochure-commercial.txt` | Plain-text companion (improves deliverability) | Same — send alongside the HTML version as multipart/alternative |

## Images

Email images are hosted at stable URLs via `public/email/`:

| File | Source | Used In |
|------|--------|---------|
| `public/email/logo-white.png` | White logo for navy header | Header |
| `public/email/before-curb.jpg` | Fallen curb — before shot | Before/After section |
| `public/email/after-curb.jpg` | Raised curb — after shot | Before/After section |
| `public/email/foam-cross-section.jpg` | Foam beneath slab cross-section | How It Works section |

These resolve to `https://prideconcretelifting.com/email/<filename>` once deployed.

## Usage Notes

- **Inline styles:** All CSS is inline for maximum email client compatibility (Gmail, Outlook, Apple Mail, etc.).
- **Responsive:** The template is mobile-responsive with stacked columns on screens under 620px.
- **Outlook support:** Includes MSO conditionals for Outlook desktop rendering.
- **Plain-text version:** Always send both HTML and plain-text together (multipart/alternative) for best deliverability scores.
- **Unsubscribe:** The footer includes a manual reply-to-unsubscribe line. If using an ESP (Mailchimp, SendGrid, etc.), replace this with their dynamic unsubscribe link.

## Brand Reference

- **Navy:** `#001f54`
- **Red accent:** `#c8102e`
- **Font:** Montserrat (falls back to Segoe UI / system sans-serif)
- **Phone:** 817-888-6254
- **Email:** contact@prideconcretelifting.com
