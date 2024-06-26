<script setup lang="ts">
const colorMode = useColorMode()
const { t } = useI18n({ useScope: 'local' })
const { i, s } = useIcon()
const switchColorMode = useSwitchColorMode()
</script>

<template>
    <ClientOnly>
        <ButtonSecondary
            @click="switchColorMode"
            :aria-label="t($colorMode.preference)"
        >
            <Icon :name="i[$colorMode.preference]" :size="s.df" />
        </ButtonSecondary>
        <template #fallback>
            <LoadingIcon />
        </template>
    </ClientOnly>
</template>

<i18n>
en:
    dark: 'Current color mode: Dark'
    light: 'Current color mode: Light'
    system: 'Current color mode: System'
ru:
    dark: 'Текущая тема: Тёмная'
    light: 'Текущая тема: Светлая'
    system: 'Текущая тема: Как в системе'
</i18n>
