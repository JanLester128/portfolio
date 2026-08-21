import { defineConfig, transformWithEsbuild } from 'vite';
import react from '@vitejs/plugin-react';

function jsxInJs() {
  return {
    name: 'jsx-in-js',
    enforce: 'pre',
    async transform(code, id) {
      if (!id.endsWith('/js/portfolio.js')) return;

      return transformWithEsbuild(code, id, {
        loader: 'jsx',
        jsx: 'automatic',
      });
    },
  };
}

export default defineConfig({
  plugins: [jsxInJs(), react()],
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
});
