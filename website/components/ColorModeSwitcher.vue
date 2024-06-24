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
            <div class="fallback">
                <ButtonSecondary>
                    <Icon name="theme-loading" />
                </ButtonSecondary>
            </div>
        </template>
    </ClientOnly>
</template>

<style scoped>
.fallback .icon {
    animation: spin 2s linear infinite;
}

@keyframes spin {
    100% {
        transform: rotate(360deg);
    }
}
</style>
