import path from 'path';

import { defineConfig, mergeConfig } from 'vitest/config';

// eslint-disable-next-line no-restricted-imports
import viteConfig from './vite.config.js';

export default defineConfig((env) =>
  mergeConfig(
    viteConfig(env),
    defineConfig({
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src')
        }
      },
      test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: 'setupTest.ts',
        coverage: {
          provider: 'istanbul',
          all: true,
          exclude: [
            'coverage/**',
            'dist/**',
            '**/*.d.ts',
            'test{,s}/**',
            'test{,-*}.{js,cjs,mjs,ts,tsx,jsx}',
            '**/*{.,-}test.{js,cjs,mjs,ts,tsx,jsx}',
            '**/*{.,-}spec.{js,cjs,mjs,ts,tsx,jsx}',
            '**/{webpack,vite,vitest,jest,build}.config.*',
            '**/.{eslint,mocha,prettier}rc.{js,cjs,yml}',
            'src/constants/*.ts',
            'src/pages/**/__mocks__/**',
            'src/App.tsx',
            'src/index.tsx',
            'src/router.tsx',
          ],
          reporter: ['text', 'json', 'html'],
          lines: 80,
          functions: 80,
          branches: 80,
          statements: 80
        }
      }
    })
  )
);
