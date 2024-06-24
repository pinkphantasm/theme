export const useSwitchColorMode = () => {
    const colorMode = useColorMode()

    return () => {
        if (colorMode.preference === 'system') {
            colorMode.preference = 'light'
            return
        }

        if (colorMode.preference === 'light') {
            colorMode.preference = 'dark'
            return
        }

        colorMode.preference = 'system'
    }
}
