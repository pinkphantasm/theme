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
                <td><UiTextCopy :text="colors.background" /></td>
                <td><div class="color background"></div></td>
            </tr>
            <tr>
                <td>{{ $t('home.palette.currentLine') }}</td>
                <td><UiTextCopy :text="colors.currentLine" /></td>
                <td><div class="color current-line"></div></td>
            </tr>
            <tr>
                <td>{{ $t('home.palette.selection') }}</td>
                <td><UiTextCopy :text="colors.selection" /></td>
                <td><div class="color selection"></div></td>
            </tr>
            <tr>
                <td>{{ $t('home.palette.foreground') }}</td>
                <td><UiTextCopy :text="colors.foreground" /></td>
                <td><div class="color foreground"></div></td>
            </tr>
            <tr>
                <td>{{ $t('home.palette.comment') }}</td>
                <td><UiTextCopy :text="colors.comment" /></td>
                <td><div class="color comment"></div></td>
            </tr>
            <tr>
                <td>{{ $t('home.palette.blue') }}</td>
                <td><UiTextCopy :text="colors.blue" /></td>
                <td><div class="color blue"></div></td>
            </tr>
            <tr>
                <td>{{ $t('home.palette.green') }}</td>
                <td><UiTextCopy :text="colors.green" /></td>
                <td><div class="color green"></div></td>
            </tr>
            <tr>
                <td>{{ $t('home.palette.orange') }}</td>
                <td><UiTextCopy :text="colors.orange" /></td>
                <td><div class="color orange"></div></td>
            </tr>
            <tr>
                <td>{{ $t('home.palette.pink') }}</td>
                <td><UiTextCopy :text="colors.pink" /></td>
                <td><div class="color pink"></div></td>
            </tr>
            <tr>
                <td>{{ $t('home.palette.purple') }}</td>
                <td><UiTextCopy :text="colors.purple" /></td>
                <td><div class="color purple"></div></td>
            </tr>
            <tr>
                <td>{{ $t('home.palette.red') }}</td>
                <td><UiTextCopy :text="colors.red" /></td>
                <td><div class="color red"></div></td>
            </tr>
            <tr>
                <td>{{ $t('home.palette.yellow') }}</td>
                <td><UiTextCopy :text="colors.yellow" /></td>
                <td><div class="color yellow"></div></td>
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

.background {
    background-color: var(--background);
}

.current-line {
    background-color: var(--current-line);
}

.comment {
    background-color: var(--comment);
}

.selection {
    background-color: var(--selection);
}

.foreground {
    background-color: var(--foreground);
}

.blue {
    background-color: var(--blue);
}

.green {
    background-color: var(--green);
}

.orange {
    background-color: var(--orange);
}

.pink {
    background-color: var(--pink);
}

.purple {
    background-color: var(--purple);
}

.red {
    background-color: var(--red);
}

.yellow {
    background-color: var(--yellow);
}

@media screen and (max-width: 516px) {
    .palette {
        font-size: small;
    }
}
</style>
