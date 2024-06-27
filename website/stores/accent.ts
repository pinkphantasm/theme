export const useAccentStore = defineStore('accent', {
    state: () =>
        ({
            accent: 'purple',
        }) as { accent: AccentColor },

    getters: {
        color(state): AccentColor {
            return state.accent
        },
    },

    actions: {
        setColor(color: AccentColor) {
            this.accent = color
        },
    },
})
