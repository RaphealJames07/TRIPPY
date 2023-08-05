// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy API requests to the backend server
      '/trippy': {
        target: 'https://trippyapiv1.onrender.com/trippy', // Backend server URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/trippy/, ''),
      },
    },
  },
});
