<script setup lang="ts">
interface Props {
    text: string
}

defineProps<Props>()

const { i, s } = useIcon()
const hidden = ref(false)
</script>

<template>
    <div class="bar" :data-hidden="hidden">
        <p>{{ text }}</p>
        <button class="button-close" @click="hidden = true">
            <Icon :name="i.close" :size="s.xxs" />
        </button>
    </div>
</template>

<style scoped>
.bar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 28px;
    background-color: var(--yellow);
    color: var(--black);
    font-size: 10pt;
    font-weight: bold;
}

.bar[data-hidden='true'] {
    display: none;
}

.button-close {
    position: absolute;
    top: 0;
    right: 0;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
}

.button-close .icon,
.button-close .icon * {
    color: var(--black);
}
</style>
