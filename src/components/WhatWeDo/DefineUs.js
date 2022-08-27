import { Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import Mentor from '../../assets/wwd/mentor1.jpg'
import Dev from '../../assets/wwd/dev.jpg'
import GroupImg from '../../assets/wwd/group.jpg'

const DefineUs = () => {
  return (
    <div className='general'>
        <Grid container spacing={2} sx={{ pt: 1, pb: 3}}>
            <Grid item xs={6} sm={3}>
                <Stack justifyContent="center" alignItems="center">
                    <h1 className='defText'>2,434+</h1>
                    <h5 className='text-number'>Freshmen</h5>
                </Stack>
            </Grid>

            <Grid item xs={6} sm={3}>
                <Stack justifyContent="center" alignItems="center">
                    <h1 className='defText'>15,001+</h1>
                    <h5 className='text-number'>Sophomore</h5>
                </Stack>
            </Grid>
            <Grid item xs={6} sm={3} >
                <Stack justifyContent="center" alignItems="center">
                    <h1 className='defText'>11,070+</h1>
                    <h5 className='text-number'>Juniors</h5>
                </Stack>
            </Grid>
            <Grid item xs={6} sm={3} >
                <Stack justifyContent="center" alignItems="center">
                    <h1 className='defText'>136,370+</h1>
                    <h5 className='text-number'>Seniors</h5>
                </Stack>
            </Grid>
        </Grid>
    </div>
  )
}

export default DefineUs