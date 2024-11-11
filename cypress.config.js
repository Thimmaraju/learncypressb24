const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
const gmailTester = require("gmail-tester");
const path = require("path");     

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Orange HRM Test results',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
  },
  e2e: {

    projectId: "3jn4z5",
    "baseUrl": "https://opensource-demo.orangehrmlive.com",
    "video": true,
    //"videosFolder": "cypress/recordedvideos",
    defaultCommandTimeout: 20000, 
    pageLoadTimeout: 120000,
    // "viewportWidth": 375,
     //"viewportHeight": 667,
    retries: {openMode:2, runMode: 1},
    //videoCompression: 51,
    //specPattern : "cypress/e2e/**/*.dbsqa.js",
    env:{

          "username" : "Admin",
          "password" : "admin123"
    },
    "watchForFileChanges": false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {downloadFile})
      on("task", {
        "gmail:get-messages": async (args) => {
          const messages = await gmailTester.get_messages(
            path.resolve(__dirname, "credentials.json"),
            path.resolve(__dirname, "token.json"),
            args.options
          );
          return messages;
        }
      });


    },
  },
});
