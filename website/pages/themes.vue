<script setup lang="ts">
const localePath = useLocalePath()

definePageMeta({
    title: 'themes.title',
})
</script>

<template>
    <main>
        <h1>{{ $t('themes.heading') }}</h1>
        <ContentList path="/themes">
            <template #default="{ list }">
                <AppCard
                    v-for="{ title, _path } in list"
                    :key="_path"
                    :title="title"
                    :to="_path"
                />
            </template>
            <template #not-found>
                <section class="not-found">
                    <h2>{{ $t('themes.notFound') }}</h2>
                    <menu>
                        <UiButtonLink :to="localePath('index')">
                            <Icon name="carbon:home" size="28px" />
                        </UiButtonLink>
                    </menu>
                </section>
            </template>
        </ContentList>
    </main>
</template>

<style scoped>
.not-found {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    padding: 32px 32px calc(32px + var(--header-height)) 32px;
    text-align: center;
}
</style>
