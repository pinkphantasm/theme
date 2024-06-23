<script setup lang="ts">
const logoPath = useLogoPath()

interface Props {
    title: string
    to: string
}

defineProps<Props>()
</script>

<template>
    <NuxtLink class="wrapper" :to="to">
        <figure class="card">
            <NuxtImg class="logo" :src="logoPath(title)" :alt="title" />
            <figcaption>
                <h2 class="title">{{ title }}</h2>
            </figcaption>
        </figure>
    </NuxtLink>
</template>

<style scoped>
.wrapper {
    width: 100%;
    text-decoration: none;
}

.card {
    transition: var(--transition-color);
    display: flex;
    align-items: center;
    gap: 64px;
    width: 100%;
    padding: 24px 48px;
    background: var(--selection);
    border: 2px solid var(--secondary);
    border-radius: 12px;
}

.card:hover {
    border-color: var(--green);
}

.logo {
    width: 100px;
    height: 100px;
    padding: 8px;
    object-fit: contain;
    border: 2px solid var(--secondary);
    border-radius: 4px;
}

.title {
    font-size: 2.2rem;
    font-family: 'JetBrains Mono', monospace;
}

@media screen and (max-width: 700px) {
    .card {
        flex-direction: column;
        align-items: center;
        gap: 12px;
        padding: 40px 16px;
    }

    .title {
        font-size: 2rem;
    }
}
</style>
