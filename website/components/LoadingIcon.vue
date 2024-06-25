<template>
    <div class="loading">
        <Icon name="loading" />
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
