/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      // Exclude test files from Fast Refresh to avoid preamble errors
      exclude: /\.test\.(ts|tsx)$/,
    }),
  ],
  server: {
    port: 5173,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    deps: {
      // Inline react dependencies for proper JSX handling in tests
      inline: [/@testing-library/],
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      reportsDirectory: './coverage',
      exclude: [
        'node_modules/',
        'dist/',
        '**/*.d.ts',
        'src/test/**',
        'vite.config.ts',
      ],
    },
  },
});

