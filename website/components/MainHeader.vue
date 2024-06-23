<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const menuIsOpen = ref(false)
</script>

<template>
    <header class="header">
        <div class="header-nav">
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
                <LocaleSwitcher class="locale-switcher" />
                <ColorModeSwitcher />
                <GitHubButton class="github-button" />
                <UiButton
                    class="button-toggle-menu"
                    @click="menuIsOpen = !menuIsOpen"
                >
                    <Icon
                        :name="
                            menuIsOpen ? 'carbon:close-large' : 'carbon:menu'
                        "
                        size="28px"
                    />
                </UiButton>
            </menu>
        </div>
        <nav class="navigation-menu" :data-open="menuIsOpen">
            <h2>{{ $t('header.menu') }}</h2>
            <ul class="navigation-menu-list">
                <li class="navigation-menu-item">
                    <UiButtonLink
                        class="navigation-menu-link"
                        to="https://pinkphantasm.ru/"
                        target="_blank"
                        external
                    >
                        <Icon name="lucide:ghost" size="28px" />
                        <span>Pink Phantasm</span>
                    </UiButtonLink>
                </li>
                <li class="navigation-menu-item">
                    <UiButtonLink
                        class="navigation-menu-link"
                        to="https://github.com/pinkphantasm/theme"
                        target="_blank"
                        external
                    >
                        <Icon name="carbon:logo-github" size="28px" />
                        <span>GitHub</span>
                    </UiButtonLink>
                </li>
                <li>
                    <LocaleSwitcher class="menu-locale-switcher" />
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
.header {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 68px;
    z-index: var(--z5);
    background-color: var(--background);
    border-bottom: 1px solid var(--selection);
}

.header-nav {
    display: flex;
    justify-content: space-between;
    padding: 16px;
}

.button-toggle-menu {
    display: none;
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

.navigation-menu {
    display: none;
    height: calc(100vh - 68px);
}

.navigation-menu[data-open='true'] {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 32px;
    gap: 32px;
}

.navigation-menu-list {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    gap: 12px;
}

.navigation-menu-link {
    justify-content: space-between;
    padding-right: 4px;
    gap: 16px;
}

.menu-locale-switcher {
    width: 100%;
}

@media screen and (max-width: 450px) {
    .button-toggle-menu {
        display: block;
    }

    .menu .locale-switcher,
    .menu .github-button {
        display: none;
    }
}
</style>
