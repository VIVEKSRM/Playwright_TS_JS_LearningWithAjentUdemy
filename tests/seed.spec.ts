import { test, expect } from '@playwright/test';

test.describe('Test group', () => {
  test('seed', async ({ page }) => {
    // page.route('**/*.{jpg,png,jpeg}',route=> route.abort());
      const userName = page.locator('#username');
      const signIn = page.locator("#signInBtn");
      const cardTitles =  page.locator(".card-body a");
      page.on('request',request=> console.log(request.url()));
      page.on('response',response=> console.log(response.url(), response.status()));
      await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
      console.log(await page.title());
      //css 
       await userName.fill("rahulshettyacademy");
    await page.locator("[type='password']").fill("");
    await page.locator("[type='password']").fill("Learning@830$3mK2");
    await signIn.click();
  });
});
