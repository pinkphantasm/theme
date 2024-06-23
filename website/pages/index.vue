<script setup lang="ts">
definePageMeta({
    title: 'home.title',
})
</script>

<template>
    <main>
        <h1>{{ $t('home.heading') }}</h1>
        <p>{{ $t('home.tagline') }}</p>
        <ColorPalette />
    </main>
</template>
