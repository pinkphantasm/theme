<script setup lang="ts">
const colorMode = useColorMode()
const switchColorMode = useSwitchColorMode()
</script>

<template>
    <ClientOnly>
        <ButtonSecondary @click="switchColorMode">
            <Icon :name="'theme-' + $colorMode.preference" />
        </ButtonSecondary>
        <template #fallback>
            <LoadingIcon />
        </template>
    </ClientOnly>
</template>
