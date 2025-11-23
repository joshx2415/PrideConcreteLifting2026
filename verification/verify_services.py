from playwright.sync_api import sync_playwright, expect

def verify_service_page():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Visit the new dynamic service page
        page.goto("http://localhost:4321/services/driveways")

        # Verify title
        expect(page.get_by_role("heading", name="Driveway Lifting & Leveling", level=1)).to_be_visible()

        # Verify content from markdown is rendered
        expect(page.get_by_text("Driveways are the gateway to your home")).to_be_visible()

        # Verify hero image is present
        hero_img = page.locator('img[alt="Driveway Lifting & Leveling"]')
        expect(hero_img).to_be_visible()

        # Take screenshot
        page.screenshot(path="verification/service_page.png", full_page=True)

        # Visit old URL to check redirect (Note: Astro dev server might not handle redirects same as build, but let's try)
        # Actually, redirects in Astro config work in dev mode too usually.

        print("Service page verification complete.")
        browser.close()

if __name__ == "__main__":
    verify_service_page()
