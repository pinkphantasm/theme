<script setup lang="ts">
const { t } = useI18n()
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
            <template v-for="(content, name) in route.meta" :key="name">
                <Meta :name="name" :content="t(content)" />
            </template>
            <Meta name="og:url" content="https://theme.pinkphantasm.ru/" />
            <Meta name="og:image" content="https://theme.pinkphantasm.ru/social.png"/>
            <Meta name="twitter:card" content="summary_large_image" />
            <Meta name="twitter:image" content="https://theme.pinkphantasm.ru/social.png" />
            <Meta name="color-scheme" content="dark light" />
            <Meta name="generator" content="Cloudflare" />
            <Title>{{ t('index.title') }}</Title>
        </Head>
        <Body>
            <MainHeader />
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
