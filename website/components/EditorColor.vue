<script setup lang="ts">
interface Emits {
    (e: 'change', value: string): void
    (e: 'remove'): void
}

interface Props {
    color: string
}

const emit = defineEmits<Emits>()
const props = defineProps<Props>()

const value = ref(props.color)
const foreground = computed(() => textColor(value.value))

const { copy, copied, isSupported } = useClipboard({ source: value })
const { t } = useI18n({ useScope: 'local' })
const { i, s } = useIcon()

const randomize = () => {
    value.value = randomColor()
    emit('change', value.value.toUpperCase())
}

const onChange = (hex: string) => {
    value.value = hex
    emit('change', value.value.toUpperCase())
}
</script>

<template>
    <div class="color">
        <ColorPicker
            :disableAlpha="true"
            format="hex"
            :pureColor="props.color"
            shape="circle"
            @update:pureColor="onChange"
        />
        <span class="label">
            {{ value.toUpperCase() }}
        </span>
        <menu class="menu">
            <button
                class="menu-button"
                :disabled="copied"
                :data-copied="copied"
                :aria-label="copied ? t('copied') : t('copy')"
                v-if="isSupported"
                @click="copy()"
            >
                <Icon
                    class="menu-icon"
                    :name="copied ? i.tick : i.copy"
                    :size="s.sm"
                />
            </button>
            <button
                class="menu-button"
                :aria-label="t('remove')"
                @click="$emit('remove')"
            >
                <Icon class="menu-icon" :name="i.close" :size="s.sm" />
            </button>
            <button
                class="menu-button"
                :aria-label="t('shuffle')"
                @click="randomize"
            >
                <Icon class="menu-icon" :name="i.shuffle" :size="s.sm" />
            </button>
        </menu>
    </div>
</template>

<i18n>
en:
    copy: Copy hex code to clipboard
    copied: Copied successfully
    remove: Remove color from palette
    shuffle: Replace with a random color
ru:
    copy: Скопировать hex-код в буфер обмена
    copied: Скопировано
    remove: Убрать цвет из палитры
    shuffle: Заменить на случайный цвет
</i18n>

<style scoped>
.color {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-width: 128px;
    padding: 72px 0;
    gap: 36px;
    background-color: v-bind(value);
}

/* vue3-colorpicker  */
:deep(.vc-color-wrap.round) {
    margin-right: 0;
    border-color: v-bind(foreground);
}

.label {
    font-family: 'JetBrains Mono', monospace;
    color: v-bind(foreground);
}

.menu {
    display: none;
    flex-direction: column;
    gap: 16px;
}

.color:hover .menu {
    display: flex;
}

.menu-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background: transparent;
    cursor: pointer;
}

.menu-icon,
.menu-icon * {
    color: v-bind(foreground);
}
</style>
