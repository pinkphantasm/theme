<script setup lang="ts">
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
                    {{ $t('home.upstream.heading') }}
                </h2>
                <p class="section-description">
                    {{ $t('home.upstream.description') }}
                </p>
                <ButtonLinkPrimary :to="localePath('apps')">{{
                    $t('home.upstream.button')
                }}</ButtonLinkPrimary>
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
                <ButtonLinkPrimary :to="localePath('editor')">{{
                    $t('home.customization.button')
                }}</ButtonLinkPrimary>
            </div>
            <NuxtImg class="section-img" src="/img/customization.svg" />
        </section>
    </main>
</template>

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
