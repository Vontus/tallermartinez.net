// @ts-check
import { defineConfig } from 'astro/config';
import { paraglideVitePlugin } from '@inlang/paraglide-js';

// https://astro.build
export default defineConfig({
  // Dominio propio (apex) vía CNAME → servido en la raíz.
  site: 'https://tallermartinez.net',
  base: '/',
  vite: {
    plugins: [
      paraglideVitePlugin({
        project: './project.inlang',
        outdir: './src/paraglide',
        emitTsDeclarations: true,
        // Sin astro:i18n: el locale se fija en build (setLocale) por cada
        // ruta generada vía getStaticPaths(), no por request/middleware.
        strategy: ['url', 'globalVariable', 'baseLocale'],
        urlPatterns: [
          {
            pattern: '/:path(.*)?',
            localized: [
              ['es', '/es/:path(.*)?'],
              ['en', '/en/:path(.*)?'],
            ],
          },
        ],
      }),
    ],
  },
});
