import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: import.meta.env.VITE_API_URL, // URL base de la API de TMDb
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Reemplaza '/api' en las peticiones
      },
    },
  },
});