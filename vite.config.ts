import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
// import react from '@vitejs/plugin-react-swc';
// import path from 'path';

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 8080,
//     host: true,
//   },
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//     },
//   },
// });

import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  preview: {
    // port: parseInt(process.env.PORT) || 8080, // Use PORT env variable or default to 4173
    host: '0.0.0.0', // Allow access from outside the container
    allowedHosts: ["https://2zklg96udc.execute-api.us-east-1.amazonaws.com", "facedetector-web.onrender.com", "localhost"],
  },
})