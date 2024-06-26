export default defineNuxtConfig({
    colorMode: {
        fallback: 'light',
    },

    css: [
        '~/assets/css/colors.css',
        '~/assets/css/global.css',
        '~/assets/css/variables.css',
        '~/assets/css/vue3-colorpicker.css',
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
        size: '28px',
        customCollections: [
            {
                prefix: 'local',
                dir: 'assets/icons',
            },
        ],
    },

    modules: [
        '@nuxt/content',
        '@nuxt/fonts',
        '@nuxt/image',
        '@nuxtjs/color-mode',
        '@nuxtjs/i18n',
        '@pinia/nuxt',
        '@vueuse/nuxt',
        'nuxt-icon',
    ],
})
