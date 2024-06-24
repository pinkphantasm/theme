<script setup lang="ts">
const colorMode = useColorMode()
const switchColorMode = useSwitchColorMode()
</script>

<template>
    <ClientOnly>
        <ButtonSecondary @click="switchColorMode">
            <Icon
                name="carbon:screen"
                size="28"
                v-if="$colorMode.preference === 'system'"
            />
            <Icon
                name="carbon:sun"
                size="28"
                v-else-if="$colorMode.preference === 'light'"
            />
            <Icon size="28" v-else name="carbon:moon" />
        </ButtonSecondary>
        <template #fallback>
            <ButtonSecondary>
                <Icon name="carbon:circle-dash" size="28" />
            </ButtonSecondary>
        </template>
    </ClientOnly>
</template>
