import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const port = Number(process.env.PORT ?? 5173);
const basePath = process.env.BASE_PATH ?? "/";

export default defineConfig({
  base: basePath,
  plugins: [tailwindcss()],
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: path.resolve(import.meta.dirname, "index.html"),
        ourStory: path.resolve(import.meta.dirname, "our-story.html"),
        lifeAtRossholme: path.resolve(import.meta.dirname, "life-at-rossholme.html"),
        getInvolved: path.resolve(import.meta.dirname, "get-involved.html"),
        newsletter: path.resolve(import.meta.dirname, "newsletter.html"),
      },
    },
  },
  server: {
    port,
    strictPort: false,
    host: "0.0.0.0",
    allowedHosts: true,
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
