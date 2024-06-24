<script setup lang="ts">
interface Props {
    picture: string
}

defineProps<Props>()
</script>

<template>
    <section class="section">
        <NuxtImg class="picture" :src="picture" :alt="text" />
        <div class="content">
            <slot />
        </div>
    </section>
</template>

<style scoped>
.section {
    display: flex;
    align-items: center;
    width: 100%;
    margin: 48px 0;
    padding: 16px;
    gap: 16px;
}

.section:nth-of-type(2n) {
    flex-direction: row-reverse;
}

.picture {
    width: 100%;
    max-width: 324px;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 48px;
    padding: 32px;
    font-size: larger;
    width: fit-content;
}

@media screen and (max-width: 840px) {
    .section:nth-of-type(n) {
        flex-direction: column;
    }
}
</style>
