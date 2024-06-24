export const normalize = (text: string): string => {
    return text
        .replace(/[^\w\s]/gi, '')
        .replace(/\s+/gi, '-')
        .toLowerCase()
}
