import { test, expect } from '@playwright/test';

async function login(page) {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await page.locator('#username').fill('rahulshettyacademy');
  await page.locator("[type='password']").fill('Learning@830$3mK2');
  await page.locator('#signInBtn').click();
  await expect(page).toHaveURL(/angularpractice/);
}

test.describe('Risk-based order validation', () => {
  test('valid login reaches the shop/home page', async ({ page }) => {
    await login(page);
    await expect(page.locator('.navbar-brand').first()).toContainText('ProtoCommerce', { timeout: 15000 });
  });

  test('shows the shop navigation after login', async ({ page }) => {
    await login(page);
    const navLinks = page.locator('a[href*="/angularpractice"]');
    await expect(navLinks.filter({ hasText: /Shop|Home/i }).first()).toBeVisible({ timeout: 20000 });
  });

  test('keeps the user on the app after a successful login', async ({ page }) => {
    await login(page);
    await expect(page.locator('body')).toContainText(/ProtoCommerce|Protractor Tutorial/i, { timeout: 15000 });
  });
});
