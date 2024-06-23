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
        <button class="button" @click="switchColorMode">
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
        </button>
        <template #fallback>
            <button class="button">
                <Icon name="carbon:circle-dash" size="28" />
            </button>
        </template>
    </ClientOnly>
</template>

<style scoped>
.button {
    transition: var(--transition-color);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    background-color: transparent;
    border-radius: 4px;
    cursor: pointer;
}

.button:hover {
    background-color: var(--selection);
}
</style>
