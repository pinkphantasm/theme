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
            <ButtonSecondary>
                <Icon class="loading" name="theme-loading" />
            </ButtonSecondary>
        </template>
    </ClientOnly>
</template>

<style scoped>
.loading {
    animation: spin 2s linear infinite;
}

@keyframes spin {
    100% {
        transform: rotate(360deg);
    }
}
</style>
