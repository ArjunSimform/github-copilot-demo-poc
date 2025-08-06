import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    browser: {
      provider: "playwright", // or 'webdriverio'
      enabled: true,
      // at least one instance is required
      instances: [{ browser: "chromium" }],
    },
    include: ["test/**/*.test.tsx"], // Include browser tests
    exclude: ["**/node_modules/**"],
  },
});
