<script setup lang="ts">
interface Props {
    text: string
}

const props = defineProps<Props>()
const { copy, copied, isSupported } = useClipboard({ source: props.text })
</script>

<template>
    <div class="text-copy">
        <span class="text">{{ text }}</span>
        <ClientOnly>
            <ButtonSecondary
                v-if="isSupported && !copied"
                @click="copy(props.text)"
            >
                <Icon class="icon-copy" name="carbon:copy" size="24px" />
            </ButtonSecondary>
            <ButtonSecondary class="button-sucess" v-else-if="copied">
                <Icon
                    class="icon-success"
                    name="carbon:checkmark"
                    size="24px"
                />
            </ButtonSecondary>
            <template #fallback>
                <div class="fallback"></div>
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
.icon-copy * {
    color: var(--comment);
}

.icon-success,
.icon-success * {
    color: var(--green);
}

.fallback {
    width: 36px;
    height: 36px;
}
</style>
