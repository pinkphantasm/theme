<script setup lang="ts">
const emit = defineEmits(['click'])
</script>

<template>
    <button class="button" @click="$emit('click')">
        <slot />
    </button>
</template>

<style scoped>
.button {
    transition: var(--transition-color);
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 36px;
    height: 36px;
    background-color: transparent;
    border-radius: 4px;
}

.button:hover {
    background-color: var(--selection);
}
</style>
