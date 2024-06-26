<script setup lang="ts">
const { copy, copied, isSupported } = useClipboard()
const id = useId()

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
                @click="copy(value)"
            >
                <Icon
                    class="menu-icon"
                    :name="copied ? 'tick' : 'copy'"
                    size="24px"
                />
            </button>
            <button class="menu-button" @click="$emit('remove')">
                <Icon class="menu-icon" name="close" size="24px" />
            </button>
            <button class="menu-button" @click="randomize">
                <BaseIcon name="shuffle" size="24px" :color="foreground" />
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
