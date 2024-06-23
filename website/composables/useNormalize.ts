type NormalizeFunc = (text: string) => string

export const useNormalize = (): NormalizeFunc => {
    return (text: string) => {
        return text
            .replace(/[^\w\s]/gi, '')
            .replace(/\s/gi, '-')
            .toLowerCase()
    }
}
