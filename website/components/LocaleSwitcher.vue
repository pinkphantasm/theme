<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()
const { i, s } = useIcon()

const currentLocale = computed(() => {
    return locales.value.find((i) => i.code === locale.value)
})
</script>

<template>
    <div class="locale-switcher">
        <p class="current">
            <Icon :name="i.lang" :size="s.df" />
            <span>{{ currentLocale.name }}</span>
        </p>
        <nav class="locales">
            <ul class="locales-list">
                <li
                    class="locale-item"
                    v-for="availableLocale in locales"
                    :key="availableLocale.code"
                >
                    <a
                        class="locale-link"
                        href="#"
                        :data-current="availableLocale.code === locale"
                        @click.prevent.stop="setLocale(availableLocale.code)"
                    >
                        <Icon
                            class="icon-current"
                            :name="i.tick"
                            :size="s.xs"
                            v-if="availableLocale.code === locale"
                        />
                        <span>{{ availableLocale.name }}</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
.locale-switcher {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    width: 112px;
    height: 32px;
    position: relative;
    cursor: pointer;
}

.current {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    transition: var(--transition-color);
    width: 100%;
    height: 100%;
    padding: 0 4px;
    border-radius: 4px;
}

.locales {
    display: none;
    position: absolute;
    top: 32px;
    left: 0;
    width: 100%;
}

.locales:hover {
    display: flex;
}

.locale-switcher:hover .current {
    background-color: var(--selection);
    border-radius: 4px 4px 0 0;
}

.locale-switcher:hover .locales {
    display: flex;
}

.locales-list {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 4px 0;
    width: 100%;
    list-style-type: none;
    background-color: var(--background);
    border-radius: 0 0 4px 4px;
    border: 2px solid var(--selection);
}

.locale-item {
    width: 100%;
    height: 32px;
}

.locale-link {
    transition: var(--transition-color);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    width: 100%;
    height: 100%;
    padding: 0 4px;
    border-radius: 4px;
    text-decoration: none;
}

.locale-link[data-current='true'] {
    justify-content: space-between;
}

.locale-link:hover {
    background-color: var(--selection);
}

.icon-current,
.icon-current * {
    color: var(--green);
}
</style>
