<script setup lang="ts">
const { t } = useI18n({ useScope: 'local' })
const localePath = useLocalePath()

definePageMeta({
    title: 'themes.title',
})
</script>

<template>
    <main>
        <h1>{{ t('heading') }}</h1>
        <ContentList path="/apps">
            <template #default="{ list }">
                <AppCard
                    v-for="{ title, _path } in list"
                    :key="_path"
                    :title="title"
                    :logo="resolveLogo(title)"
                    :to="localePath(_path)"
                />
            </template>
            <template #not-found>
                <section class="not-found">
                    <h2>{{ t('not_found') }}</h2>
                    <menu>
                        <ButtonLinkSecondary :to="localePath('index')">
                            <Icon name="home" />
                        </ButtonLinkSecondary>
                    </menu>
                </section>
            </template>
        </ContentList>
    </main>
</template>

<i18n>
en:
    heading: Upstream themes
    not_found: There is nothing here yet...
ru:
    heading: Основные темы
    not_found: Здесь пока ничего нет...
</i18n>

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
