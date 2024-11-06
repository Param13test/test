const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 10000, // 10 seconds
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
