const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests",
  use: {
    browserName: "chromium",
    headless: true,
    viewport: { width: 1365, height: 900 }
  },
  reporter: [["list"], ["html", { open: "never" }]]
});
