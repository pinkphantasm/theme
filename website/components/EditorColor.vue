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
const { i, s } = useIcon()
const id = useId()

const randomize = () => {
    value.value = randomColor()
    emit('change', value.value.toUpperCase())
}
</script>

<template>
    <div class="color">
        <label class="label" :for="id">
            {{ value.toUpperCase() }}
        </label>
        <input
            :id="id"
            hidden
            type="color"
            v-model="value"
            @change="$emit('change', value.toUpperCase())"
        />
        <menu class="menu">
            <button
                class="menu-button"
                :disabled="copied"
                :data-copied="copied"
                v-if="isSupported"
                @click="copy()"
            >
                <Icon
                    class="menu-icon"
                    :name="copied ? i.tick : i.copy"
                    :size="s.sm"
                />
            </button>
            <button class="menu-button" @click="$emit('remove')">
                <Icon class="menu-icon" :name="i.close" :size="s.sm" />
            </button>
            <button class="menu-button" @click="randomize">
                <Icon class="menu-icon" :name="i.shuffle" :size="s.sm" />
            </button>
        </menu>
    </div>
</template>

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

.label {
    cursor: pointer;
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