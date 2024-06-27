<script setup lang="ts">
definePageMeta({
    // Title.
    title: 'index.title',
    description: 'index.description',
    keywords: 'index.keywords',

    // Open Graph.
    'og:title': 'index.title',
    'og:description': 'index.description',
    'og:keywords': 'index.keywords',

    // Twitter.
    'twitter:title': 'index.title',
    'twitter:description': 'index.description',
})

const { t } = useI18n({ useScope: 'local' })
const localePath = useLocalePath()
const svgAsset = useSvgAsset()
</script>

<template>
    <main>
        <HeroBanner />
        <HomeSection
            :picture="svgAsset('upstream')"
            :alt="t('upstream.heading')"
        >
            <h2>{{ t('upstream.heading') }}</h2>
            <p>{{ t('upstream.description') }}</p>
            <ButtonLinkPrimary :to="localePath('apps')">
                {{ t('upstream.button') }}
            </ButtonLinkPrimary>
        </HomeSection>
        <HomeSection
            :picture="svgAsset('customization')"
            :alt="t('customization.heading')"
        >
            <h2>{{ t('customization.heading') }}</h2>
            <p>{{ t('customization.description') }}</p>
            <ButtonLinkPrimary :to="localePath('editor')">
                {{ t('customization.button') }}
            </ButtonLinkPrimary>
        </HomeSection>
    </main>
</template>

<i18n>
en:
    upstream:
        heading: 'Embrace the Beauty of Upstream Color Palettes'
        description: 'Use the light and dark theme created at Pink Phantasm to get quality, aesthetic and elegant color schemes for your content and configurations.'
        button: 'Explore the official themes!'
    customization:
        heading: 'Customize Your Journey, Unleash Your Imagination'
        description: 'Customise our colour palettes the way you want. Create your own unique, flawless theme that suits you best!'
        button: 'Creativity is just a click away!'
ru:
    upstream:
        heading: 'Воспользуйтесь красотой основных цветовых палитр'
        description: 'Используйте светлую и тёмную темы, созданные в Pink Phantasm, чтобы получить качественные, эстетичные и элегантные цветовые гаммы для вашего контента и конфигураций.'
        button: 'Познакомьтесь с официальными темами!'
    customization:
        heading: 'Кастомизируйте свое путешествие, раскройте свое воображение'
        description: 'Настройте наши цветовые палитры так, как вам хочется. Создайте свою уникальную, безупречную тему, которая подойдёт вам лучше всего!'
        button: 'Творчество — всего в одном клике!'
</i18n>
