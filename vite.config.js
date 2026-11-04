import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        vision: resolve(__dirname, 'vision-mission.html'),
        services: resolve(__dirname, 'services.html'),
        training: resolve(__dirname, 'training.html'),
        contact: resolve(__dirname, 'contact.html')
      }
    }
  }
});
