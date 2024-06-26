<script setup lang="ts">
definePageMeta({
    // Base.
    title: 'apps.title',
    description: 'apps.description',
    keywords: 'apps.keywords',

    // Open Graph.
    'og:title': 'apps.title',
    'og:description': 'apps.description',
    'og:keywords': 'apps.keywords',
})

const { t } = useI18n({ useScope: 'local' })
const { i, s } = useIcon()
const localePath = useLocalePath()
</script>

<template>
    <main>
        <h1>{{ t('heading') }}</h1>
        <ContentList path="/apps">
            <template #default="{ list }">
                <AppCard
                    v-for="{ app, _path } in list"
                    :key="_path"
                    :title="app"
                    :logo="resolveLogo(app)"
                    :to="localePath(_path)"
                />
            </template>
            <template #not-found>
                <section class="not-found">
                    <h2>{{ t('not_found') }}</h2>
                    <menu>
                        <ButtonLinkSecondary
                            :to="localePath('index')"
                            :aria-label="t('home')"
                        >
                            <Icon :name="i.home" :size="s.df" />
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
    home: Return to the home page
ru:
    heading: Основные темы
    not_found: Здесь пока ничего нет...
    home: Вернуться на главную страницу
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
