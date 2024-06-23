import { useNormalize } from '~/composables/useNormalize'

type PathFunc = (appName: string) => string

export const useLogoPath = (): PathFunc => {
    const normalize = useNormalize()

    return (appName: string) => {
        return `/logo/${normalize(appName)}.svg`
    }
}
