<script setup lang="ts">
const localePath = useLocalePath()
</script>

<template>
    <header class="header">
        <nav class="logo-navigation">
            <ul class="logo-navigation-list">
                <li class="navigation-item">
                    <NuxtLink
                        to="https://pinkphantasm.ru"
                        external
                        target="_blank"
                    >
                        <NuxtImg
                            class="logo"
                            width="32"
                            height="32"
                            src="/icons/logo.svg"
                            alt="Pink Phantasm"
                        />
                    </NuxtLink>
                </li>
                <li class="navigation-item" role="presentation">
                    <Icon
                        class="divider"
                        name="carbon:chevron-right"
                        size="24"
                    />
                </li>
                <li class="navigation-item">
                    <NuxtLink class="link" :to="localePath('index')">
                        Theme
                    </NuxtLink>
                </li>
            </ul>
        </nav>
        <menu class="menu">
            <ChangeColorModeButton />
            <GitHubButton />
        </menu>
    </header>
</template>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    padding: 16px;
}

.logo-navigation {
    height: 100%;
}

.logo-navigation-list {
    display: flex;
    align-items: center;
    height: 100%;
    list-style-type: none;
    gap: 4px;
}

.navigation-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.divider,
.divider * {
    color: var(--secondary);
}

.link {
    text-decoration: none;
}

.menu {
    display: flex;
    align-items: center;
    gap: 8px;
}
</style>
