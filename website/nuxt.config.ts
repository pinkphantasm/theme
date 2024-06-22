// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

    hooks: {
        'prerender:routes'({ routes }) {
            routes.clear()
        },
    },

    i18n: {
        baseUrl: 'https://theme.pinkphantasm.ru',
        locales: [
            {
                code: 'en',
                iso: 'en-US',
            },
            {
                code: 'ru',
                iso: 'ru-RU',
            },
        ],
        defaultLocale: 'ru',
        strategy: 'prefix_and_default',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: '__lang',
            cookieCrossOrigin: true,
        },
    },

    modules: ['@nuxtjs/color-mode', '@nuxtjs/i18n'],
})
