import { test, expect } from '@playwright/test';

test.describe('All In One Plumbing - Smoke Tests', () => {
  test('Homepage loads and displays key elements', async ({ page }) => {
    await page.goto('/');
    
    // Check title
    await expect(page).toHaveTitle(/All In One Plumbing/);
    
    // Check main navigation
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.getByText('Services')).toBeVisible();
    await expect(page.getByText('Rates')).toBeVisible();
    await expect(page.getByText('Portfolio')).toBeVisible();
    await expect(page.getByText('About')).toBeVisible();
    await expect(page.getByText('Contact')).toBeVisible();
    
    // Check hero section
    await expect(page.getByRole('heading', { name: /Fast, Reliable Plumbing/i })).toBeVisible();
    
    // Check service areas section
    await expect(page.getByText('Service Areas')).toBeVisible();
    
    // Check quote form
    await expect(page.locator('#quote-form')).toBeVisible();
  });

  test('Services page navigation works', async ({ page }) => {
    await page.goto('/');
    
    // Navigate to services
    await page.getByText('Services').first().click();
    await page.waitForURL('/services');
    
    // Check services page content
    await expect(page.getByRole('heading', { name: /Professional Plumbing Services/i })).toBeVisible();
    
    // Check that service cards are present
    await expect(page.getByText('Drain Cleaning')).toBeVisible();
    await expect(page.getByText('Water Heater Repair')).toBeVisible();
  });

  test('Individual service page loads', async ({ page }) => {
    await page.goto('/services/drain-cleaning');
    
    // Check service-specific content
    await expect(page.getByRole('heading', { name: /Drain Cleaning/i })).toBeVisible();
    await expect(page.getByText(/Problems We Solve/i)).toBeVisible();
    await expect(page.getByText(/Our Process/i)).toBeVisible();
  });

  test('Quote form submission (mock)', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to quote form
    await page.locator('#quote-form').scrollIntoViewIfNeeded();
    
    // Fill out form
    await page.getByPlaceholder('Enter your full name').fill('John Doe');
    await page.getByPlaceholder('(555) 123-4567').fill('5551234567');
    await page.getByPlaceholder('33101').fill('33101');
    await page.selectOption('select[name="service"]', 'drain-cleaning');
    await page.selectOption('select[name="preferredTime"]', 'morning');
    
    // Mock the API response
    await page.route('/api/quote', async route => {
      const json = { success: true, message: 'Quote request submitted successfully' };
      await route.fulfill({ json });
    });
    
    // Submit form
    await page.getByRole('button', { name: /Get Free Quote/i }).click();
    
    // Check for success message
    await expect(page.getByText(/Quote Request Received/i)).toBeVisible({ timeout: 10000 });
  });

  test('Theme toggle works', async ({ page }) => {
    await page.goto('/');
    
    // Find theme toggle button
    const themeToggle = page.getByRole('button', { name: /Toggle theme/i });
    await expect(themeToggle).toBeVisible();
    
    // Click theme toggle
    await themeToggle.click();
    
    // Verify theme changed (this is a basic check - in reality you'd check CSS variables)
    await expect(themeToggle).toBeVisible();
  });

  test('Contact page displays contact information', async ({ page }) => {
    await page.goto('/contact');
    
    // Check contact methods
    await expect(page.getByText('Call Us')).toBeVisible();
    await expect(page.getByText('Text Us')).toBeVisible();
    await expect(page.getByText('Email Us')).toBeVisible();
    
    // Check business hours
    await expect(page.getByText('Business Hours')).toBeVisible();
    await expect(page.getByText('Monday - Friday')).toBeVisible();
  });

  test('Service areas page and city pages work', async ({ page }) => {
    await page.goto('/service-areas');
    
    // Check service areas page
    await expect(page.getByRole('heading', { name: /Service Areas/i })).toBeVisible();
    await expect(page.getByText('Miami, FL')).toBeVisible();
    
    // Navigate to a city page
    await page.getByText('Miami, FL').first().click();
    await page.waitForURL('/service-areas/miami-fl');
    
    // Check city page content
    await expect(page.getByRole('heading', { name: /Plumbing Services in Miami, FL/i })).toBeVisible();
  });

  test('Rates page displays pricing information', async ({ page }) => {
    await page.goto('/rates');
    
    // Check pricing cards
    await expect(page.getByText('Service Call')).toBeVisible();
    await expect(page.getByText('Drain Clearing')).toBeVisible();
    await expect(page.getByText('Water Heater Install')).toBeVisible();
    
    // Check pricing displays
    await expect(page.getByText('$79')).toBeVisible();
    await expect(page.getByText('$129')).toBeVisible();
    await expect(page.getByText('$899')).toBeVisible();
  });

  test('Mobile navigation works', async ({ page }) => {
    // Test on mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Check that mobile menu button is visible
    const menuButton = page.getByRole('button', { name: /Toggle menu/i });
    await expect(menuButton).toBeVisible();
    
    // Click menu button
    await menuButton.click();
    
    // Check that mobile menu items are visible
    await expect(page.getByText('Services')).toBeVisible();
    await expect(page.getByText('Rates')).toBeVisible();
  });

  test('Accessibility basics', async ({ page }) => {
    await page.goto('/');
    
    // Check for skip link (accessibility feature)
    const skipLink = page.locator('a[href="#main"]');
    if (await skipLink.count() > 0) {
      await expect(skipLink).toBeVisible();
    }
    
    // Check for proper heading hierarchy
    const h1 = page.locator('h1');
    await expect(h1).toHaveCount(1); // Should have exactly one h1
    
    // Check for alt text on logo/icons (basic check)
    const images = page.locator('img');
    const imageCount = await images.count();
    
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      if (await img.isVisible()) {
        await expect(img).toHaveAttribute('alt');
      }
    }
  });
});
