<script setup lang="ts">
const colorMode = useColorMode()
const { i, s } = useIcon()
const switchColorMode = useSwitchColorMode()
</script>

<template>
    <ClientOnly>
        <ButtonSecondary @click="switchColorMode">
            <Icon :name="i[$colorMode.preference]" :size="s.df" />
        </ButtonSecondary>
        <template #fallback>
            <LoadingIcon />
        </template>
    </ClientOnly>
</template>
