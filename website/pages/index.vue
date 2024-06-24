<script setup lang="ts">
const localePath = useLocalePath()

definePageMeta({
    title: 'home.title',
})
</script>

<template>
    <main>
        <section class="hero">
            <div class="hero-text">
                <h1 class="hero-title">{{ $t('home.heading') }}</h1>
                <p class="hero-tagline">{{ $t('home.tagline') }}</p>
            </div>
            <ColorPalette />
        </section>
        <section class="section upstream">
            <div class="section-text">
                <h2 class="section-heading">
                    {{ $t('home.upstream.heading') }}
                </h2>
                <p class="section-description">
                    {{ $t('home.upstream.description') }}
                </p>
                <UiButtonLinkPrimary :to="localePath('apps')">{{
                    $t('home.upstream.button')
                }}</UiButtonLinkPrimary>
            </div>
            <NuxtImg class="section-img" src="/img/upstream.svg" />
        </section>
        <section class="section customization">
            <div class="section-text">
                <h2 class="section-heading">
                    {{ $t('home.customization.heading') }}
                </h2>
                <p class="section-description">
                    {{ $t('home.customization.description') }}
                </p>
                <UiButtonLinkPrimary :to="localePath('editor')">{{
                    $t('home.customization.button')
                }}</UiButtonLinkPrimary>
            </div>
            <NuxtImg class="section-img" src="/img/customization.svg" />
        </section>
    </main>
</template>

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
    .hero-title {
        font-size: 3.5rem;
    }

    .section,
    .section.customization {
        flex-direction: column-reverse;
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
