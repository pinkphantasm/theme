<script setup lang="ts">
interface Props {
    to: string
    target?: '_blank' | '_self' | '_top' | '_parent'
    external?: boolean
}

defineProps<Props>()

const accentColor = useAccentColor()
</script>

<template>
    <NuxtLink class="button" :to="to" :external="external" :target="target">
        <slot />
    </NuxtLink>
</template>

<style scoped>
.button {
    transition: var(--transition-color);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 16px;
    border-radius: 4px;
    border: 2px solid v-bind(accentColor);
    background: transparent;
    color: v-bind(accentColor);
    font-size: large;
    font-weight: bold;
    text-decoration: none;
}

.button:hover {
    background: v-bind(accentColor);
    color: var(--background);
}
</style>
