// tailwind.config.js
import { defineConfig } from "tailwindcss";

export default defineConfig({
  theme: {
    extend: {
      colors: {
        brand: "#646cff",
        ink: {
          bg: "#0b0b0d",
          card: "#111114",
          text: "#eaeaf0",
          sub: "#b7b7c2",
          accent: "#7c5cff",
        },
      },
    },
  },
});
