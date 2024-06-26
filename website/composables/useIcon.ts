export const useIcon = () => {
    const { icon } = useAppConfig()

    return {
        s: icon.sizes,
        i: icon.aliases,
    }
}
