## 2025-12-27 - Form Loading State & A11y
**Learning:** Adding a loading state to a form submission button (disabling and showing a spinner) is a critical micro-UX improvement that prevents multiple submissions and provides feedback. For accessibility, always use `aria-busy="true"` on the button during loading, and `role="alert"` on error containers. Also, ensuring `label for` matches `input id` is crucial for screen readers and robust testing.
**Action:** Always check form input-label associations and add explicit loading states to async actions.
