<script setup lang="ts">
const route = useRoute()
const head = useLocaleHead({
    addDirAttribute: true,
    identifierAttribute: 'id',
    addSeoAttributes: true,
})
</script>

<template>
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
        <Head>
            <Title>Pink Phantasm Theme</Title>
            <template v-for="link in head.link" :key="link.id">
                <Link
                    :id="link.id"
                    :rel="link.rel"
                    :href="link.href"
                    :hreflang="link.hreflang"
                />
            </template>
            <template v-for="meta in head.meta" :key="meta.id">
                <Meta
                    :id="meta.id"
                    :property="meta.property"
                    :content="meta.content"
                />
            </template>
        </Head>
        <Body>
            <slot />
        </Body>
    </Html>
</template>

<style>
html,
body {
    height: 100%;
}

#__nuxt {
    display: flex;
    flex-direction: column;
    height: 100%;
}

#__nuxt > main {
    flex-grow: 1;
}
</style>
