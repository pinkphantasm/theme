<script setup lang="ts">
const { t } = useI18n({ useScope: 'local' })
const { i, s } = useIcon()
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
                                src="/logo.svg"
                                width="32px"
                                height="32px"
                            />
                        </NuxtLink>
                    </li>
                    <li class="navigation-item" role="presentation">
                        <Icon class="divider" :name="i.divider" :size="s.sm" />
                    </li>
                    <li class="navigation-item">
                        <NuxtLink class="link" :to="localePath('index')">
                            Theme
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
            <menu class="menu">
                <LocaleSwitcher class="hideable" />
                <ColorModeSwitcher />
                <ButtonLinkSecondary
                    class="hideable"
                    to="https://github.com/pinkphantasm/theme"
                    external
                    target="_blank"
                >
                    <Icon :name="i.github" :size="s.df" />
                </ButtonLinkSecondary>
                <ClientOnly>
                    <ButtonSecondary
                        class="button-toggle-menu"
                        @click="menuIsOpen = !menuIsOpen"
                    >
                        <Icon
                            :name="menuIsOpen ? i.close : i.menu"
                            :size="s.df"
                        />
                    </ButtonSecondary>
                    <template #fallback>
                        <ButtonSecondary class="button-toggle-menu-fallback">
                            <Icon :name="i.menu" :size="s.df" />
                        </ButtonSecondary>
                    </template>
                </ClientOnly>
            </menu>
        </div>
        <nav class="navigation-menu" :data-open="menuIsOpen">
            <h2>{{ t('menu') }}</h2>
            <ul class="navigation-menu-list">
                <li class="navigation-menu-item">
                    <ButtonLinkSecondary
                        class="navigation-menu-link"
                        to="https://pinkphantasm.ru/"
                        target="_blank"
                        external
                    >
                        <NuxtImg src="/logo.svg" width="32px" height="32px" />
                        <span>Pink Phantasm</span>
                    </ButtonLinkSecondary>
                </li>
                <li class="navigation-menu-item">
                    <ButtonLinkSecondary
                        class="navigation-menu-link"
                        to="https://github.com/pinkphantasm/theme"
                        target="_blank"
                        external
                    >
                        <Icon :name="i.github" :size="s.df" />
                        <span>GitHub</span>
                    </ButtonLinkSecondary>
                </li>
                <li>
                    <LocaleSwitcher class="menu-locale-switcher" />
                </li>
            </ul>
        </nav>
    </header>
</template>

<i18n>
en:
    menu: Menu
ru:
    menu: Меню
</i18n>

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

.button-toggle-menu-fallback {
    display: none !important;
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
    .navigation-menu[data-open='true'] {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 32px;
        gap: 32px;
    }

    .button-toggle-menu {
        display: flex;
    }

    .button-toggle-menu-fallback {
        display: block !important;
    }

    .menu .hideable {
        display: none;
    }
}
</style>
