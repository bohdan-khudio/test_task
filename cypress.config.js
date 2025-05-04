const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    env: {
      apiUrl: 'https://jsonplaceholder.typicode.com',
      users: {
        user: {
          username: 'standard_user',
          password: 'secret_sauce',
        },
      },
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
