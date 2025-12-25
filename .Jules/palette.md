## 2025-12-25 - Async Button Loading State
**Learning:** Users lack feedback when submitting asynchronous Netlify forms, leading to potential multi-submissions.
**Action:** Always intercept fetch/submit events to show a loading spinner and disable the button. Use `aria-busy` for screen readers.
