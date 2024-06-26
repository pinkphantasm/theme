<script setup lang="ts">
import { IconSet } from '~/assets/icons'

const { baseIcon: config } = useAppConfig()

interface Props {
    name: keyof typeof IconSet
    size?: number | string
    color?: string
}

const props = defineProps<Props>()

const sizePx = computed(() => {
    const defaultSize = config.size || 32

    if (!props.size) {
        return defaultSize
    }

    if (typeof props.size === 'number') {
        return props.size
    }

    if (props.size.endsWith('px')) {
        const s = parseInt(props.size.replace('px', ''))
        return isNaN(s) ? defaultSize : s
    }

    if (props.size.endsWith('em')) {
        const s = parseInt(props.size.replace('em', ''))
        return isNaN(s) ? defaultSize : s * 32
    }

    return defaultSize
})

const style = computed(() => ({
    color: props.color || 'auto',
    transform: `scale(${sizePx.value / 32})`,
}))

const color = computed(() => props.color ?? 'auto')
</script>

<template>
    <suspense>
        <component
            class="icon"
            :is="IconSet[name] || 'span'"
            :style="style"
            v-bind="$attrs"
        />
    </suspense>
</template>

<style scoped>
.icon,
.icon * {
    color: v-bind(color);
}
</style>
