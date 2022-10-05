import React from 'react'
import Badge from '@mui/material/Badge'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/NotificationsRounded'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import MuiDrawer from '@mui/material/Drawer'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles'
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded'
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded'
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'

import { mainListItems, secondaryListItems } from './SidebarList'
import { useTheme } from '../theme'

const drawerWidth = 240

interface AppBarProps extends MuiAppBarProps {
    open?: boolean
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}))

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
)

export default function HeaderMenu() {
    const { colorMode, theme } = useTheme()

    const [open, setOpen] = React.useState(true)

    const toggleDrawer = () => {
        setOpen(!open)
    }

    return (
        <>
            <AppBar position='absolute' open={open}>
                <Toolbar
                    sx={{
                        pr: '24px', // keep right padding when drawer closed
                    }}
                >
                    <IconButton
                        edge='start'
                        color='inherit'
                        aria-label='open drawer'
                        onClick={toggleDrawer}
                        sx={{
                            marginRight: '36px',
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuRoundedIcon />
                    </IconButton>
                    {open ? <Typography sx={{ flexGrow: 1 }}></Typography> : <Typography
                        component='h1'
                        variant='h6'
                        color='inherit'
                        noWrap
                        sx={{ flexGrow: 1 }}
                    >
                        Dashboard
                    </Typography>}

                    <IconButton color='inherit'>
                        <Badge badgeContent={0} color='secondary'>
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color='inherit'>
                        {theme.palette.mode === 'dark' ? (
                            <LightModeRoundedIcon />
                        ) : (
                            <DarkModeRoundedIcon />
                        )}
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Drawer variant='permanent' open={open}>
                <Toolbar
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        // px: [1],
                    }}
                >
                    <Typography
                        component='h1'
                        variant='h5'
                        color='inherit'
                        noWrap
                        sx={{ flexGrow: 1 }}
                    >
                        Dashboard
                    </Typography>
                    <IconButton onClick={toggleDrawer}>
                        <MenuOpenRoundedIcon />
                    </IconButton>
                </Toolbar>
                <Divider />
                <List component='nav'>
                    {mainListItems}
                    <Divider sx={{ my: 1 }} />
                    {secondaryListItems}
                </List>
            </Drawer>
        </>
    )
}
