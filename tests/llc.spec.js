import { test, expect } from '@playwright/test';

test('Playwright Special locators', async ({ page }) => {
  
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").click(); // here we have used click method to click on the checkbox, we can also use check() method to check the checkbox, but it will not work if the checkbox is already checked, so we have used click() method here.
    // await page.getByLabel("Check me out if you Love IceCreams!").isChecked(); // here we have used isChecked() method to check if the checkbox is checked or not, it will return true if the checkbox is checked, otherwise false.
    // await expect(page.getByLabel("Check me out if you Love IceCreams!")).toBeChecked(); // here we have used toBeChecked() method to check if the checkbox is checked or not, it will return true if the checkbox is checked, otherwise false.
    // await expect(page.getByLabel("Check me out if you Love IceCreams!")).not.toBeChecked(); // here we have used not.toBeChecked() method to check if the checkbox is not checked or not, it will return true if the checkbox is not checked, otherwise false.
    // await page.getByLabel("Check me out if you Love IceCreams!").uncheck(); // here we have used uncheck() method
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByPlaceholder("Password").fill("abc123");
    await page.getByRole("button", {name: 'Submit'}).click();
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    await page.getByRole("link",{name : "Shop"}).click();
    await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();

    //locator(css)


await page.get











});