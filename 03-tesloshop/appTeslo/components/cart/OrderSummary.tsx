import { Divider, Grid, Typography } from '@mui/material'
import React from 'react'

export const OrderSummary = () => {
  return (
    <Grid container>
        <Grid item xs={6}>
            <Typography>No. de Productos</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='end'>
            <Typography>3 items</Typography>
        </Grid>
        <Grid item xs={6}>
            <Typography>Subtotal</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='end'>
            <Typography>{` $${ 180.5 }`}</Typography>
        </Grid>
        <Grid item xs={6}>
            <Typography>Impuestos (21%)</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='end'>
            <Typography>{` $${ 35.5 }`}</Typography>
        </Grid>
        <Divider light />
        <Grid item xs={6} sx={{ mt: 2 }}>
            <Typography variant='subtitle1'>Total</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='end' sx={{ mt: 2 }}>
            <Typography  variant='subtitle1' >{` $${ 215.0 }`}</Typography>
        </Grid>
    </Grid>
  )
}
