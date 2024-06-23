<script setup lang="ts">
interface Props {
    to: string
    target: '_blank' | '_self' | '_top' | '_parent'
    external: boolean
}

withDefaults(defineProps<Props>(), {
    target: '_self',
    external: false,
})
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
    width: 36px;
    height: 36px;
    background-color: transparent;
    border-radius: 4px;
}

.button:hover {
    background-color: var(--selection);
}
</style>
