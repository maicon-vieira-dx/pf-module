import { defineVitestProject } from "@nuxt/test-utils/config";
import { defineConfig } from "vitest/config";
import Vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [Vue()],
  test: {
    projects: [
      {
        test: {
          name: "unit",
          include: ["test/{e2e,unit}/*.{test,spec}.ts"],
          environment: "node"
        },
      },
      await defineVitestProject({
        test: {
            globals: true,
          name: "nuxt",
          include: ["test/nuxt/*.{test,spec}.ts"],
          environment: "nuxt",
          setupFiles: ["./test/setup.ts"],
          server: {
            deps: {
              inline: ["vuetify"],
            },
          }
        },
      }),
    ],
  },
});
