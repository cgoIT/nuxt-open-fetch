import { defineNuxtRouteMiddleware, navigateTo } from '#imports';

/**
 * This route middle redirects calls to the empty path to a url which is defined in the
 * runtimeConfiguration.
 * This route does not redirect all other paths middleware.
 */
export default defineNuxtRouteMiddleware((to) => {
  if (to.path === '/') {
    return navigateTo('/my-module/pets');
  }

  return true;
});
