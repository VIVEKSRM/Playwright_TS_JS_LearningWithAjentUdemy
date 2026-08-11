// @ts-check
const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  retries :2,
  workers: 3,
  /* Maximum time one test can run for. */
  //10-
  timeout: 30 * 1000,
  expect: {
  
    timeout: 5000
  },
  
  reporter: 'html',
  projects : [
    {
      name : 'safari',
      use: {

        browserName : 'webkit',
        headless: process.env.CI ? true : false,
        screenshot : 'off',
        trace : 'on',//off,on 
        actionTimeout: 10 * 1000,
        navigationTimeout: 30 * 1000,
        ...devices['iPhone 11'],    
      }

    },
    {
      name : 'chrome',
      use: {

        browserName : 'chromium',
        headless: process.env.CI ? true : false,
        screenshot : 'on',
        video: 'retain-on-failure',
        ignoreHttpsErrors:true,
        actionTimeout: 10 * 1000,
        navigationTimeout: 30 * 1000,
        trace : 'on',
         }

    }
    ]

};

module.exports = config;
