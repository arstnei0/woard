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

export const mainListItems = (
    <React.Fragment>
        <ListItemButton>
            <ListItemIcon>
                <DashboardRoundedIcon />
            </ListItemIcon>
            <ListItemText primary='Dashboard' />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <ViewKanbanRoundedIcon />
            </ListItemIcon>
            <ListItemText primary='Kanban' />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <CalendarMonthRoundedIcon />
            </ListItemIcon>
            <ListItemText primary='Calendar' />
        </ListItemButton>
    </React.Fragment>
)

export const secondaryListItems = (
    <React.Fragment>
        {/* <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton> */}
    </React.Fragment>
)
