<script setup lang="ts">
interface Props {
    text: string
}

const props = defineProps<Props>()

const { copy, copied, isSupported } = useClipboard()
const { t } = useI18n({ useScope: 'local' })
const { i, s } = useIcon()
</script>

<template>
    <div class="text-copy">
        <span class="text">{{ text }}</span>
        <ClientOnly>
            <ButtonSecondary
                :aria-label="t('copy')"
                v-if="isSupported && !copied"
                @click="copy(props.text)"
            >
                <Icon class="icon-copy" :name="i.copy" :size="s.sm" />
            </ButtonSecondary>
            <ButtonSecondary
                class="button-sucess"
                :aria-label="t('copied')"
                v-else-if="copied"
            >
                <Icon class="icon-success" :name="i.tick" :size="s.sm" />
            </ButtonSecondary>
            <div class="fallback" :aria-label="t('fallback')" v-else></div>
            <template #fallback>
                <div class="fallback">
                    <Icon
                        class="icon-copy-fallback"
                        :name="i.copy"
                        :size="s.sm"
                    />
                </div>
            </template>
        </ClientOnly>
    </div>
</template>

<i18n>
en:
    copy: Copy hex code to clipboard
    copied: Copied successfully
    fallback: Your browser does not support clipboard
ru:
    copy: Скопировать hex-код в буфер обмена
    copied: Скопировано
    fallback: Ваш браузер не поддерживает буфер обмена
</i18n>

<style scoped>
.text-copy {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--selection);
    gap: 20px;
    padding: 4px 0 4px 8px;
    border-radius: 4px;
}

.text {
    font-family: 'JetBrains Mono', monospace;
}

.icon-copy,
.icon-copy *,
.icon-copy-fallback,
.icon-copy-fallback * {
    color: var(--comment);
}

.icon-copy:hover,
.icon-copy:hover * {
    color: var(--foreground);
}

.icon-success,
.icon-success * {
    color: var(--green);
}

.fallback {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
}
</style>
