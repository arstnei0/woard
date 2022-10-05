import * as React from 'react'
import { styled, createTheme, ThemeProvider, Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

let theme: Theme
let mode: 'light' | 'dark'
let setMode: React.Dispatch<React.SetStateAction<'light' | 'dark'>>
let colorMode: {
    toggleColorMode: () => void
}

export function initTheme() {
    const systemPrefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    const memoryPerfersDarkMode = localStorage.getItem('perfersDarkMode') === 'yes'

    ;[mode, setMode] = React.useState<'light' | 'dark'>(
        memoryPerfersDarkMode ? 'dark' : systemPrefersDarkMode ? 'dark' : 'light',
    )

    theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    )

    colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => {
                    localStorage.setItem('perfersDarkMode', prevMode === 'dark' ? 'no' : 'yes')

                    return prevMode === 'light' ? 'dark' : 'light'
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
