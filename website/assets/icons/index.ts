export const IconSet = {
    add: defineAsyncComponent(() => import('./add.svg')),
    pinkphantasm: defineAsyncComponent(() => import('./pinkphantasm.svg')),
    share: defineAsyncComponent(() => import('./share.svg')),
    shuffle: defineAsyncComponent(() => import('./shuffle.svg')),
} as Record<string, ReturnType<typeof defineAsyncComponent>>
