import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { importChunkUrl } from 'vite-plugin-import-chunk-url';

export default defineConfig({
  plugins: [importChunkUrl(), solidPlugin({
    solid: {
      moduleName: "@lightningjs/solid",
      generate: 'universal',
    },
  })],
  resolve: {
    dedupe: ['solid-js'],
  },
  server: {
    port: 5174,
    hmr: false,
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
    },
  },
});
