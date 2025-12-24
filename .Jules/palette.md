## 2024-05-24 - Async Loading States in Vue Forms
**Learning:** Users often double-submit forms when there is no immediate visual feedback. Adding a loading spinner and disabling the button significantly improves perceived performance and prevents errors. Additionally, standard `required` attributes aren't enough for screen readers; `aria-required="true"` and `role="alert"` for error containers are essential.
**Action:** Always implement `isSubmitting` state in Vue forms, toggle `aria-busy` and `disabled` attributes on submit buttons, and ensure error messages are announced immediately.
