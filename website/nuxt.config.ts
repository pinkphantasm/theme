// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    colorMode: {
        fallback: 'light',
    },

    css: [
        '~/assets/css/colors.css',
        '~/assets/css/global.css',
        '~/assets/css/variables.css',
    ],

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
                name: 'English',
            },
            {
                code: 'ru',
                iso: 'ru-RU',
                name: 'Русский',
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

    icon: {
        class: 'icon',
    },

    modules: [
        '@nuxt/fonts',
        '@nuxt/image',
        '@nuxtjs/color-mode',
        '@nuxtjs/i18n',
        'nuxt-icon',
    ],
})
