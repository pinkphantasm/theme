<script setup lang="ts">
const { t } = useI18n({ useScope: 'local' })
const localePath = useLocalePath()

definePageMeta({
    title: 'home.title',
})
</script>

<template>
    <main>
        <HeroBanner />
        <section class="section upstream">
            <div class="section-text">
                <h2 class="section-heading">
                    {{ t('upstream.heading') }}
                </h2>
                <p class="section-description">
                    {{ t('upstream.description') }}
                </p>
                <ButtonLinkPrimary :to="localePath('apps')">{{
                    t('upstream.button')
                }}</ButtonLinkPrimary>
            </div>
            <NuxtImg class="section-img" src="/img/upstream.svg" />
        </section>
        <section class="section customization">
            <div class="section-text">
                <h2 class="section-heading">
                    {{ t('customization.heading') }}
                </h2>
                <p class="section-description">
                    {{ t('customization.description') }}
                </p>
                <ButtonLinkPrimary :to="localePath('editor')">{{
                    t('customization.button')
                }}</ButtonLinkPrimary>
            </div>
            <NuxtImg class="section-img" src="/img/customization.svg" />
        </section>
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

<style scoped>
.section {
    display: flex;
    align-items: center;
    width: 100%;
    margin: 48px 0;
    padding: 16px;
    gap: 16px;
}

.section.customization {
    flex-direction: row-reverse;
}

.section-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 48px;
    padding: 32px;
}

.section-heading {
    font-size: 2rem;
}

.section-description {
    font-size: 1.2rem;
}

.section-img {
    width: 100%;
    max-width: 324px;
}

@media screen and (max-width: 840px) {
    .section,
    .section.customization {
        flex-direction: column-reverse;
    }
}
</style>
