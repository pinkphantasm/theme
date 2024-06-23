<script setup lang="ts">
const colorMode = useColorMode()

const switchColorMode = () => {
    if (colorMode.preference === 'system') {
        colorMode.preference = 'light'
        return
    }

    if (colorMode.preference === 'light') {
        colorMode.preference = 'dark'
        return
    }

    colorMode.preference = 'system'
}
</script>

<template>
    <ClientOnly>
        <UiButton @click="switchColorMode">
            <Icon
                name="carbon:screen"
                size="28"
                v-if="$colorMode.preference === 'system'"
            />
            <Icon
                name="carbon:sun"
                size="28"
                v-else-if="$colorMode.preference === 'light'"
            />
            <Icon size="28" v-else name="carbon:moon" />
        </UiButton>
        <template #fallback>
            <UiButton>
                <Icon name="carbon:circle-dash" size="28" />
            </UiButton>
        </template>
    </ClientOnly>
</template>
