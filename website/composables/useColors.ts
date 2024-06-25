export const useColors = () => {
    const colorMode = useColorMode()

    return computed(() => {
        if (colorMode.preference === 'dark') {
            return {
                background: '#232323',
                currentLine: '#404240',
                selection: '#404240',
                foreground: '#F5FFFA',
                comment: '#787976',
                blue: '#6495ED',
                green: '#50B160',
                orange: '#FFA474',
                pink: '#FDD0E5',
                purple: '#9579E5',
                red: '#FE4242',
                yellow: '#FFF44F',
            }
        }

        return {
            background: '#F5FFFA',
            currentLine: '#E8EAE8',
            selection: '#E8EAE8',
            foreground: '#232323',
            comment: '#A9A9A7',
            blue: '#4169E1',
            green: '#3EA04B',
            orange: '#FF7514',
            pink: '#F664AF',
            purple: '#8D71AA',
            red: '#B11213',
            yellow: '#DDD645',
        }
    })
}
