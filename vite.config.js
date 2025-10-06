import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import commonjs from 'vite-plugin-commonjs';

export default defineConfig({
  plugins: [
    react(),   // Include React plugin
    commonjs() // Include CommonJS plugin
  ],

  build: {
    sourcemap: true, // Enable source maps
  }
});
