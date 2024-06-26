<script setup lang="ts">
interface Props {
    text: string
}

const props = defineProps<Props>()

const { copy, copied, isSupported } = useClipboard({ source: props.text })
const { i, s } = useIcon()
</script>

<template>
    <div class="text-copy">
        <span class="text">{{ text }}</span>
        <ClientOnly>
            <ButtonSecondary v-if="isSupported && !copied" @click="copy()">
                <Icon class="icon-copy" :name="i.copy" :size="s.sm" />
            </ButtonSecondary>
            <ButtonSecondary class="button-sucess" v-else-if="copied">
                <Icon class="icon-success" :name="i.tick" :size="s.sm" />
            </ButtonSecondary>
            <div class="fallback" v-else></div>
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
