import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import svelte from '@astrojs/svelte'; // <--- 1. Importar esto

export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  integrations: [svelte()], // <--- 2. Añadir esto aquí
});