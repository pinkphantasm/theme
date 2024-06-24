export const resolveLogo = (app: string): string => {
    return `/logo/${normalize(app)}.svg`
}
