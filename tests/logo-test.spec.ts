
import { test, expect } from '@playwright/test';

test('take screenshot of about us section', async ({ page }) => {
  await page.goto('http://localhost:4321');
  const aboutSection = page.locator('#about');
  await aboutSection.scrollIntoViewIfNeeded();
  await page.screenshot({ path: 'tests/about-us-logo.png' });
});
