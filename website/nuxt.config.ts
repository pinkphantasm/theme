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
        size: '28px',
        aliases: {
            abc: 'carbon:string-text',
            close: 'carbon:close-large',
            copy: 'carbon:copy',
            divider: 'carbon:chevron-right',
            hex: 'carbon:hashtag',
            home: 'carbon:home',
            lang: 'carbon:language',
            menu: 'carbon:menu',
            'theme-dark': 'carbon:moon',
            'theme-light': 'carbon:sun',
            'theme-loading': 'carbon:circle-dash',
            'theme-system': 'carbon:screen',
            tick: 'carbon:checkmark',
            view: 'carbon:view',

            github: 'carbon:logo-github',
            pinkphantasm: 'local:pinkphantasm',
        },
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
        '@nuxt/icon',
        '@nuxt/image',
        '@nuxtjs/color-mode',
        '@nuxtjs/i18n',
        '@vueuse/nuxt',
    ],
})
