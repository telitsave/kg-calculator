/// <reference types='vitest' />
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import svgr from 'vite-plugin-svgr'


export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/client-vite',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  resolve: {
    alias: {
      '@entities': path.resolve(__dirname, 'src', 'entities'),
      '@widgets': path.resolve(__dirname, 'src', 'widgets'),
      '@shared': path.resolve(__dirname, 'src', 'shared'),
      '@pages': path.resolve(__dirname, 'src', 'pages'),
      '@features': path.resolve(__dirname, 'src', 'features'),
    },
  },

  plugins: [
    react({
      babel: {
        configFile: true,
      },
    }),
    svgr({}),
    nxViteTsPaths(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: `eslint -c "${path.resolve(__dirname, '.eslintrc.json')}" "${path.resolve(__dirname, 'src', '**/*.{ts,tsx}')}"`,
        useFlatConfig: false,
      },
      enableBuild: false,
    }),
  ],

  css: {
    modules: {
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    },
    preprocessorOptions: {
      sass: {
        api: 'modern-compiler',
        silenceDeprecations: ['legacy-js-api', 'mixed-decls'],
      },
    },
  },

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  build: {
    outDir: '../../dist/apps/client-vite',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
})
