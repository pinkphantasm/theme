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
            add: 'carbon:add-large',
            close: 'carbon:close-large',
            copy: 'carbon:copy',
            divider: 'carbon:chevron-right',
            hex: 'carbon:hashtag',
            home: 'carbon:home',
            lang: 'carbon:language',
            loading: 'carbon:circle-dash',
            menu: 'carbon:menu',
            random: 'carbon:shuffle',
            share: 'carbon:share',
            'theme-dark': 'carbon:moon',
            'theme-light': 'carbon:sun',
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
