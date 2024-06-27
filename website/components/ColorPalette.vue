<script setup lang="ts">
const accent = useAccentStore()
const { t } = useI18n({ useScope: 'local' })
const { i, s } = useIcon()
const colors = useColors()
</script>

<template>
    <table class="palette">
        <thead>
            <tr>
                <td :aria-label="t('name')">
                    <Icon class="head-icon" :name="i.abc" :size="s.sm" />
                </td>
                <td :aria-label="t('hex')">
                    <Icon class="head-icon" :name="i.hex" :size="s.sm" />
                </td>
                <td :aria-label="t('preview')">
                    <Icon class="head-icon" :name="i.view" :size="s.sm" />
                </td>
            </tr>
        </thead>
        <tbody>
            <template v-for="(color, name) in colors" :key="color">
                <tr>
                    <td>{{ t(name) }}</td>
                    <td><TextCopy :text="colors[name]" /></td>
                    <td v-if="isAccentColor(name)">
                        <div
                            :class="`color color-accent bg-${name}`"
                            @click="accent.setColor(name)"
                        ></div>
                    </td>
                    <td v-else>
                        <div :class="`color bg-${name}`"></div>
                    </td>
                </tr>
            </template>
        </tbody>
    </table>
</template>

<i18n>
en:
    name: 'Color Name'
    hex: 'HEX'
    preview: 'Preview'
    background: 'Background'
    currentLine: 'Current Line'
    selection: 'Selection'
    comment: 'Comment'
    foreground: 'Foreground'
    blue: 'Blue'
    green: 'Green'
    orange: 'Orange'
    pink: 'Pink'
    purple: 'Purple'
    red: 'Red'
    yellow: 'Yellow'
ru:
    name: 'Название цвета'
    hex: 'HEX'
    preview: 'Предпросмотр'
    background: 'Фон'
    currentLine: 'Текущая линия'
    selection: 'Выделение'
    comment: 'Комментарий'
    foreground: 'Текст'
    blue: 'Синий'
    green: 'Зелёный'
    orange: 'Оранжевый'
    pink: 'Розовый'
    purple: 'Фиолетовый'
    red: 'Красный'
    yellow: 'Жёлтый'
</i18n>

<style scoped>
.palette {
    border-collapse: collapse;
}

.palette thead {
    font-weight: bold;
}

.palette thead td {
    text-align: center;
}

.head-icon {
    margin: 0 auto;
}

.palette td {
    padding: 8px;
    border: 1px solid var(--selection);
}

.color {
    width: 32px;
    height: 32px;
    border: 1px solid var(--foreground);
    margin: 0 auto;
    cursor: not-allowed;
}

.color-accent {
    cursor: pointer;
}

@media screen and (max-width: 516px) {
    .palette {
        font-size: small;
    }
}
</style>
