import { defineConfig } from "vite"

export default defineConfig({
  test: {
    environment: "happy-dom",
    deps: {
      inline: ["@babel/types"],
    },
  },
})
