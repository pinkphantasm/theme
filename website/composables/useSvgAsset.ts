export const useSvgAsset = () => {
    const accent = useAccentStore()

    return (name: string): string => {
        return `/svg/${accent.color}/${name}.svg`
    }
}
