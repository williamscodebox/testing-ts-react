import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // Use jsdom as the test environment
    globals: true, // Make global variables like `describe`, `it`, etc., available
    setupFiles: "tests/setup.ts", // Optional setup file
  },
});
