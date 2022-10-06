import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import img1URL from '../assets/404-1.png'
import img2URL from '../assets/404-2.png'
import img3URL from '../assets/404-3.png'
import { lightGreen, cyan } from '@mui/material/colors'
import { useLocation } from 'wouter'

const NotFound: React.FC<{}> = (props) => {
    const [location, setLocation] = useLocation()

    return (
        <Grid container justifyContent='center' alignItems='center' spacing={4}>
            <Grid item xs={12}>
                <Typography
                    variant='h4'
                    component='h4'
                    align='center'
                    sx={{ color: lightGreen[900] }}
                >
                    404 Not Found!
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography
                    variant='h3'
                    component='h3'
                    align='center'
                    sx={{ color: cyan[700], fontWeight: 500 }}
                >
                    I think we lost our way...
                </Typography>
            </Grid>
            {/* <Grid item display="flex" justifyContent="center" alignItems="center">
                <img src={img1URL} width="50%"></img>
            </Grid> */}
            <Grid item display='flex' justifyContent='center' alignItems='center'>
                <Button variant='text' onClick={() => setLocation('/dashboard')}>
                    Go back to Dashboard
                </Button>
            </Grid>
            <Grid item display='flex' justifyContent='center' alignItems='center' xs={12}>
                <img src={img2URL} width='35%'></img>
            </Grid>
        </Grid>
    )
}

export default NotFound
