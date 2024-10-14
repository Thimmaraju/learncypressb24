const { defineConfig } = require("cypress");
const gmailTester = require("gmail-tester");
const path = require("path");     

module.exports = defineConfig({
  e2e: {

    "baseUrl": "https://opensource-demo.orangehrmlive.com",
    "video": false,
    "videosFolder": "cypress/recordedvideos",
    //defaultCommandTimeout: 20000, 
    //pageLoadTimeout: 120000,
    // "viewportWidth": 375,
     //"viewportHeight": 667,
    retries: {openMode:5, runMode: 1},
    videoCompression: 51,
    //specPattern : "cypress/e2e/**/*.dbsqa.js",
    env:{

          "username" : "Admin",
          "password" : "admin123"
    },
    "watchForFileChanges": false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
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
