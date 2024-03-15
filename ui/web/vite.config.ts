import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  plugins: [
    solidPlugin(),
    legacy({
      targets: [ 'defaults', 'not IE 11'],
    }),
  ],
  server: {
    port: 5173,
    hmr: false,
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
    },
  },
});
