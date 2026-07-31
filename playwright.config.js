// @ts-check
const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
 // testMatch: ['**/order-risk-based.spec.ts'],
  retries: 0,
  
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
  
    timeout: 5000
  },
  
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {

    browserName : 'chromium',
    headless : false,
    screenshot : 'on',
    trace : 'on',//off,on
    actionTimeout: 10 * 1000,
    navigationTimeout: 30 * 1000,
    
    
  },


};

module.exports = config;
