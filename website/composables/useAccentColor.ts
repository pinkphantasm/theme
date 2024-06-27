export const useAccentColor = () => {
    const colors = useColors()
    const accent = useAccentStore()

    return computed(() => colors.value[accent.color])
}
