## 2024-05-23 - Accessibility of Icon-Only Buttons
**Learning:** Icon-only buttons (like delete/edit) are common but often lack `aria-label`.
**Action:** Always verify `aria-label` is present on icon-only buttons during code review.

## 2024-05-23 - Form Validation Feedback
**Learning:** Browser-native validation bubbles are good, but custom validation often provides better UX if tied to specific inputs with `aria-describedby`.
**Action:** When implementing custom validation, ensure error messages are programmatically associated with their inputs.

## 2024-05-23 - Label Association Mismatches
**Learning:** It is easy to mismatch `label for` and input `id` when refactoring, breaking accessibility for screen reader users who rely on the label being read when focusing the input.
**Action:** Always verify that `label for` exactly matches the target input's `id`.

## 2024-05-23 - Async Form Loading States
**Learning:** Users often double-submit forms if there is no immediate visual feedback. Adding a loading spinner and disabling the button significantly improves perceived performance and prevents errors.
**Action:** Ensure all async form submissions have a distinct "submitting" state that provides visual feedback and prevents re-submission.
