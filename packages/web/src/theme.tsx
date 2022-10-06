import * as React from 'react'
import { styled, createTheme, ThemeProvider, Theme } from '@mui/material/styles'
import type { Palette } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

export enum Mode {
    'light' = '1',
    'dark' = '2',
    'system' = '3',
}

let theme: Theme
let mode: Mode
let setMode: React.Dispatch<React.SetStateAction<Mode>>
let colorMode: {
    toggleColorMode: () => void
}

export const modeDescriptions = {
    [Mode.dark]: 'Dark Mode',
    [Mode.light]: 'Light Mode',
    [Mode.system]: 'Follow System Prefered Mode',
}

export const getModeDescription = (mode: Mode) => modeDescriptions[mode]

const MODE_PREFER = 'modePrefer'

export function initTheme() {
    if (!localStorage.getItem(MODE_PREFER)) localStorage.setItem(MODE_PREFER, Mode.system)

    const modePreferOrigin: Mode = localStorage.getItem('modePrefer') as Mode
    const systemPreferedMode: 'dark' | 'light' = useMediaQuery('(prefers-color-scheme: dark)')
        ? 'dark'
        : 'light'

    ;[mode, setMode] = React.useState<Mode>(modePreferOrigin)

    theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode:
                        mode === Mode.dark
                            ? 'dark'
                            : mode === Mode.light
                            ? 'light'
                            : systemPreferedMode,
                },
            }),
        [mode],
    )

    colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => {
                    const newMode =
                        prevMode === Mode.light
                            ? Mode.dark
                            : prevMode === Mode.dark
                            ? Mode.system
                            : Mode.light

                    localStorage.setItem(MODE_PREFER, newMode)

                    return newMode
                })
            },
        }),
        [],
    )
}

export function useTheme() {
    return {
        theme,
        mode,
        setMode,
        colorMode,
    }
}
