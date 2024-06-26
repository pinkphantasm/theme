<script setup lang="ts">
definePageMeta({
    // Base.
    title: 'editor.title',
    description: 'editor.description',
    keywords: 'editor.keywords',

    // Open Graph.
    'og:title': 'editor.title',
    'og:description': 'editor.description',
    'og:keywords': 'editor.keywords',
})

const { baseUrl } = useAppConfig()
const { t } = useI18n({ useScope: 'local' })
const { i, s } = useIcon()
const localePath = useLocalePath()
const colors = useQueryColors()

const persistentLink = computed(() => {
    const colorSearchParam = colors.value.map((c) => c.slice(1)).join('-')
    return `${baseUrl}${localePath('editor')}?c=${colorSearchParam}`
})

const {
    copy,
    copied,
    isSupported: clipboardIsSupported,
} = useClipboard({ source: persistentLink })

const { share, isSupported: shareIsSupported } = useShare({
    url: persistentLink.value,
})

const changeColor = (index: number, value: string) => {
    colors.value[index] = value
}

const removeColor = (index: number) => {
    colors.value.splice(index, 1)
}
</script>

<template>
    <main class="editor">
        <ClientOnly>
            <div class="colors">
                <EditorColor
                    v-for="(color, index) in colors"
                    :key="color"
                    :color="color"
                    @change="(v) => changeColor(index, v)"
                    @remove="removeColor(index)"
                />
            </div>
            <menu class="menu">
                <ButtonSecondary
                    class="menu-button"
                    @click="colors.push(randomColor())"
                >
                    <Icon :name="i.add" :size="s.sm" />
                    {{ t('add') }}
                </ButtonSecondary>
                <ButtonSecondary
                    class="menu-button"
                    v-if="shareIsSupported"
                    @click="share"
                >
                    <Icon :name="i.share" :size="s.sm" />
                    {{ t('share') }}
                </ButtonSecondary>
                <ButtonSecondary
                    class="menu-button"
                    v-else-if="clipboardIsSupported"
                    @click="copy()"
                >
                    <Icon :name="copied ? i.tick : i.copy" :size="s.sm" />
                    {{ t('copy') }}
                </ButtonSecondary>
            </menu>
            <template #fallback>
                <div class="fallback">
                    <h2>{{ t('loading') }}</h2>
                    <LoadingIcon />
                </div>
            </template>
        </ClientOnly>
    </main>
</template>

<i18n>
en:
    loading: Loading...
    add: Add color
    share: Share
    copy: Copy link
ru:
    loading: Загрузка...
    add: Добавить цвет
    share: Поделиться
    copy: Скопировать ссылку
</i18n>

<style scoped>
.editor {
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
}

.colors {
    flex-grow: 1;
    height: 100%;
    min-height: 368px;
    display: flex;
    align-items: stretch;
    width: 100vw;
    overflow: scroll;
}

.menu {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    border-width: 1px 0;
    border-style: solid;
    border-color: var(--selection);
}

.menu-button {
    padding: 4px;
    gap: 4px;
    color: var(--foreground);
}

.fallback {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    flex-grow: 1;
}

@media screen and (max-width: 450px) {
    .rotate-hint {
        display: flex;
    }
}
</style>
