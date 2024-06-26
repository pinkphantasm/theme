<script setup>
const { i, s } = useIcon()
</script>

<template>
    <div class="loading">
        <Icon :name="i.loading" :size="s.df" />
    </div>
</template>

<style scoped>
.loading {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
}

.loading .icon {
    animation: spin 2s linear infinite;
}

@keyframes spin {
    100% {
        transform: rotate(360deg);
    }
}
</style>
