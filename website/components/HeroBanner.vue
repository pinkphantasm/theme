<script setup lang="ts">
const { t } = useI18n({ useScope: 'local' })
</script>

<template>
    <section class="hero">
        <div class="hero-text">
            <h1 class="hero-title">{{ t('heading') }}</h1>
            <p class="hero-tagline">{{ t('tagline') }}</p>
        </div>
        <ColorPalette />
    </section>
</template>

<i18n>
en:
    heading: Pink Phantasm Theme
    tagline: A simple and consistent color scheme by Pink Phantasm
ru:
    heading: Тема Pink Phantasm
    tagline: Простая и последовательная цветовая палитра от Pink Phantasm
</i18n>

<style scoped>
.hero {
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
}

.hero-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 48px;
    gap: 32px;
    position: sticky;
    top: 120px;
    text-align: center;
}

.hero-title {
    font-size: 4.5rem;
}

.hero-tagline {
    font-size: 1.4rem;
}

@media screen and (max-width: 840px) {
    .hero-title {
        font-size: 3.5rem;
    }
}

@media screen and (max-width: 750px) {
    .hero-title {
        font-size: 2.5rem;
    }

    .hero-tagline {
        font-size: 1.1rem;
    }
}

@media screen and (max-width: 680px) {
    .hero {
        flex-direction: column;
        align-items: center;
    }

    .hero-text {
        position: unset;
    }
}
</style>
