
import { test, expect } from '@playwright/test';

test('take screenshot of contact form', async ({ page }) => {
  await page.goto('http://localhost:4321');
  const contactForm = page.locator('#myForm');
  await contactForm.scrollIntoViewIfNeeded();
  await page.screenshot({ path: 'tests/contact-form.png' });
});
