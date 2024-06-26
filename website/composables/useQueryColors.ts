interface ColorWithId {
    id: string
    color: string
}

const addIds = (colors: string[]): ColorWithId[] => {
    return colors.map((color) => ({
        id: `${Date.now()}:${color}`,
        color,
    }))
}

export const useQueryColors = (): Ref<ColorWithId[]> => {
    const colors = useColors()
    const { query } = useRoute()
    const { replace } = useRouter()

    if (query.c) {
        replace({ query: undefined })

        return ref(
            addIds(
                query.c
                    .toString()
                    .split('-')
                    .map((c) => `#${c}`),
            ),
        )
    }

    return ref(addIds(Object.values(colors.value)))
}
