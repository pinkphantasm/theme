export const useQueryColors = (): Ref<string[]> => {
    const colors = useColors()
    const { query } = useRoute()
    const { replace } = useRouter()

    if (query.c) {
        replace({ query: undefined })

        return ref(
            query.c
                .toString()
                .split('-')
                .map((c) => `#${c}`),
        )
    }

    return ref(Object.values(colors.value))
}
