import { joinURL } from 'ufo';
import { defineEventHandler, proxyRequest } from 'h3';
import type { H3Event, EventHandlerRequest } from 'h3';
import { useRuntimeConfig } from '#imports';

let callCount = 0;

/**
 * Proxy all API calls, which haven't been matched by explicit files, to the backend.
 */
export default defineEventHandler(async (event: H3Event<EventHandlerRequest>) => {
  const { backendApi } = useRuntimeConfig(event);
  if (backendApi == null) {
    throw new Error('BASE_URL_BACKEND has not been defined, but is required.');
  }

  const target = joinURL(backendApi, event.path);
  console.log(`${new Date().toISOString()}: ${++callCount} ${event.method} ${target}`);
  return proxyRequest(event, target);
});
