import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

/**
 * @type {import('vite').UserConfig}
 */
const config = defineConfig(function({ mode }) {
  return {
    plugins: [sveltekit()],
    build: {
      sourcemap: "hidden"
    },
    server: {
      host: true,
      port: process.env.PORT || 3000,
      fs: {
        // Allow serving files from one level up to the project root
        allow: [".."]
      }
    }
  };
});

export default config;
