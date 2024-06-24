<script setup lang="ts">
const colorMode = useColorMode()

const colors = computed(() => {
    if (colorMode.preference === 'light') {
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
    }

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
})
</script>

<template>
    <table class="palette">
        <thead>
            <tr>
                <td :aria-label="$t('home.palette.name')">
                    <Icon
                        class="head-icon"
                        name="carbon:string-text"
                        size="24px"
                    />
                </td>
                <td :aria-label="$t('home.palette.hex')">
                    <Icon class="head-icon" name="carbon:hashtag" size="24px" />
                </td>
                <td :aria-label="$t('home.palette.preview')">
                    <Icon class="head-icon" name="carbon:view" size="24px" />
                </td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{{ $t('home.palette.background') }}</td>
                <td><TextCopy :text="colors.background" /></td>
                <td><div class="color bg-background"></div></td>
            </tr>
            <tr>
                <td>{{ $t('home.palette.currentLine') }}</td>
                <td><TextCopy :text="colors.currentLine" /></td>
                <td><div class="color bg-current-line"></div></td>
            </tr>
            <tr>
                <td>{{ $t('home.palette.selection') }}</td>
                <td><TextCopy :text="colors.selection" /></td>
                <td><div class="color bg-selection"></div></td>
            </tr>
            <tr>
                <td>{{ $t('home.palette.foreground') }}</td>
                <td><TextCopy :text="colors.foreground" /></td>
                <td><div class="color bg-foreground"></div></td>
            </tr>
            <tr>
                <td>{{ $t('home.palette.comment') }}</td>
                <td><TextCopy :text="colors.comment" /></td>
                <td><div class="color bg-comment"></div></td>
            </tr>
            <tr>
                <td>{{ $t('home.palette.blue') }}</td>
                <td><TextCopy :text="colors.blue" /></td>
                <td><div class="color bg-blue"></div></td>
            </tr>
            <tr>
                <td>{{ $t('home.palette.green') }}</td>
                <td><TextCopy :text="colors.green" /></td>
                <td><div class="color bg-green"></div></td>
            </tr>
            <tr>
                <td>{{ $t('home.palette.orange') }}</td>
                <td><TextCopy :text="colors.orange" /></td>
                <td><div class="color bg-orange"></div></td>
            </tr>
            <tr>
                <td>{{ $t('home.palette.pink') }}</td>
                <td><TextCopy :text="colors.pink" /></td>
                <td><div class="color bg-pink"></div></td>
            </tr>
            <tr>
                <td>{{ $t('home.palette.purple') }}</td>
                <td><TextCopy :text="colors.purple" /></td>
                <td><div class="color bg-purple"></div></td>
            </tr>
            <tr>
                <td>{{ $t('home.palette.red') }}</td>
                <td><TextCopy :text="colors.red" /></td>
                <td><div class="color bg-red"></div></td>
            </tr>
            <tr>
                <td>{{ $t('home.palette.yellow') }}</td>
                <td><TextCopy :text="colors.yellow" /></td>
                <td><div class="color bg-yellow"></div></td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
.palette {
    border-collapse: collapse;
}

.palette thead {
    font-weight: bold;
}

.palette thead td {
    text-align: center;
}

.head-icon {
    margin: 0 auto;
}

.palette td {
    padding: 8px;
    border: 1px solid var(--comment);
}

.color {
    width: 32px;
    height: 32px;
    border: 1px solid var(--foreground);
    margin: 0 auto;
}

@media screen and (max-width: 516px) {
    .palette {
        font-size: small;
    }
}
</style>
