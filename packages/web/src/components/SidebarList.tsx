import React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PeopleIcon from '@mui/icons-material/People'
import BarChartIcon from '@mui/icons-material/BarChart'
import LayersIcon from '@mui/icons-material/Layers'
import AssignmentIcon from '@mui/icons-material/Assignment'
import ViewKanbanRoundedIcon from '@mui/icons-material/ViewKanbanRounded'
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded'
import { useLocation } from 'wouter'

export const SidebarList: React.FC<{}> = (props) => {
    const [location, setLocation] = useLocation()

    return (
        <>
            <ListItemButton
                selected={location.startsWith('/dashboard')}
                onClick={() => setLocation('/dashboard')}
            >
                <ListItemIcon>
                    <DashboardRoundedIcon />
                </ListItemIcon>
                <ListItemText primary='Dashboard' />
            </ListItemButton>
            <ListItemButton
                selected={location.startsWith('/location')}
                onClick={() => setLocation('/location')}
            >
                <ListItemIcon>
                    <ViewKanbanRoundedIcon />
                </ListItemIcon>
                <ListItemText primary='Kanban' />
            </ListItemButton>
            <ListItemButton
                selected={location.startsWith('/calendar')}
                onClick={() => setLocation('/calendar')}
            >
                <ListItemIcon>
                    <CalendarMonthRoundedIcon />
                </ListItemIcon>
                <ListItemText primary='Calendar' />
            </ListItemButton>
        </>
    )
}

export default SidebarList
