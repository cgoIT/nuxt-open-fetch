// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['nuxt-open-fetch'],
  runtimeConfig: {
    backendApi: 'https://petstore3.swagger.io',
  },
  openFetch: {
    clients: {
      pets: {
        baseURL: '/api/v3/',
      }
    }
  }
})
