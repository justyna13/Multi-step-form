import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), svgr()],
    base: env.VITE_APP_BASE_URL || '/',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  };
});
