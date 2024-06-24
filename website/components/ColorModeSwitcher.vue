<script setup lang="ts">
const colorMode = useColorMode()
const switchColorMode = useSwitchColorMode()
</script>

<template>
    <ClientOnly>
        <ButtonSecondary @click="switchColorMode">
            <Icon
                name="carbon:screen"
                v-if="$colorMode.preference === 'system'"
            />
            <Icon
                name="carbon:sun"
                v-else-if="$colorMode.preference === 'light'"
            />
            <Icon v-else name="carbon:moon" />
        </ButtonSecondary>
        <template #fallback>
            <ButtonSecondary>
                <Icon name="carbon:circle-dash" />
            </ButtonSecondary>
        </template>
    </ClientOnly>
</template>
