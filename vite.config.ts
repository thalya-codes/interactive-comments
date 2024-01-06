import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
console.log(
  "path.resolve('src', 'components': ",
  path.resolve('src', 'components')
);
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve('src'),
      '@components': path.resolve('src', 'components'),
      '@assets': path.resolve('src', 'assets'),
    },
  },
  plugins: [react()],
});
