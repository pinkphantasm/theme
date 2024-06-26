<script setup lang="ts">
const { t } = useI18n({ useScope: 'local' })
const { i, s } = useIcon()
</script>

<template>
    <section class="not-found">
        <h2 class="heading">404</h2>
        <p>
            {{ t('not_found') }}: <b>{{ $route.params.app }}</b>
        </p>
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

<i18n>
en:
    not_found: Theme not found
    home: Return to the home page
ru:
    not_found: Тема не найдена
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

.heading {
    font-size: 4rem;
}
</style>
