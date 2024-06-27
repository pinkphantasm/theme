export class ColorWithId {
    id: string
    color: string

    constructor(color: string) {
        this.id = `${Date.now()}:${color}`
        this.color = color
    }
}

export const useQueryColors = (): Ref<ColorWithId[]> => {
    const colors = useColors()
    const { query } = useRoute()
    const { replace } = useRouter()

    if (query.c) {
        replace({ query: undefined })

        return ref(
            query.c
                .toString()
                .split('-')
                .map((c) => new ColorWithId(`#${c}`)),
        )
    }

    return ref(Object.values(colors.value).map((c) => new ColorWithId(c)))
}
