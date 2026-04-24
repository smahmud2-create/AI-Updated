import { defineConfig, type Plugin } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

function figmaAssetPlugin(): Plugin {
  return {
    name: 'figma-asset-placeholder',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        return '\0' + id;
      }
    },
    load(id) {
      if (id.startsWith('\0figma:asset/')) {
        const svg = `<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22 viewBox=%220 0 24 24%22 fill=%22none%22><rect width=%2224%22 height=%2224%22 rx=%224%22 fill=%22%23E0E0E0%22/></svg>`;
        return `export default "data:image/svg+xml,${svg}"`;
      }
    },
  };
}

export default defineConfig({
  plugins: [
    figmaAssetPlugin(),
    react(),
    tailwindcss(),
  ],
  server: {
    port: 5174,
    /** Fail fast if 5174 is taken (avoids silently serving another project on 5173/5175). */
    strictPort: true,
    /** Reduces stale HTML/JS in embedded browsers (e.g. Cursor Simple Browser). */
    headers: {
      'Cache-Control': 'no-store',
    },
    /** Opens the correct URL in your default browser when you run `npm run dev`. */
    open: '/',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
