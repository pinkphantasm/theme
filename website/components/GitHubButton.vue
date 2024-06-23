<template>
    <NuxtLink
        class="button"
        to="https://github.com/pinkphantasm/theme"
        external
        target="_blank"
    >
        <Icon name="carbon:logo-github" size="28" />
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
