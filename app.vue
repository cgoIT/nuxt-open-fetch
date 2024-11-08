<template>
  <nuxt-layout layout="standard-layout">
    <nuxt-page />
  </nuxt-layout>
</template>

<script setup lang="ts">
import { NuxtLayout, NuxtPage } from '#components';
import { useHeadSafe, useRuntimeConfig } from '#imports';

const config = useRuntimeConfig();

/**
 * This is a replacement for the same configuration within the 'nuxt.config.ts'.
 *
 * This is necessary, because we want to use ENV variables within the definition,
 * but within the 'nuxt.config.ts' you cannot use the runtime-config, because the
 * Nuxt config needs to be initialized before it can be used. Using 'process.env'
 * variables within the Nuxt config isn't an alternative, because those values are
 * statically replaced at build-time.
 */
useHeadSafe({
  link: [
    { rel: 'icon', href: `${config.app.baseURL}/favicon.ico` },
  ],
});
</script>
