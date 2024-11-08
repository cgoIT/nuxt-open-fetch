import {
  addPlugin,
  createResolver, defineNuxtModule, extendPages,
} from '@nuxt/kit';
import type { NuxtPage } from 'nuxt/schema';

const MODULE_PREFIX = 'my-module';

export default defineNuxtModule({
  meta: {
    // Defines the package name of the module
    name: MODULE_PREFIX,
    // The key in `nuxt.config` that holds your module options
    configKey: MODULE_PREFIX,
  },
  async setup() {
    // To have a prefix for all routes that belong to the bounded context we add a path prefix.
    const { resolve } = createResolver(import.meta.url);

    extendPages((pages: NuxtPage[]) => {
      pages.push({
        name: 'Pets',
        path: `/${MODULE_PREFIX}/pets`,
        file: resolve(__dirname, './pages/Pets.vue'),
      });
    });

    // addPlugin(resolve('./plugins/routeMiddlewares.client.ts'));
  },
});
