interface IconAppConfig {
    sizes: Record<string, string>
    aliases: Record<string, string>
}

declare module 'nuxt/schema' {
    interface AppConfigInput {
        baseUrl: string
        icon: IconAppConfig
    }
}

// It is always important to ensure you import/export something when augmenting a type
export {}
