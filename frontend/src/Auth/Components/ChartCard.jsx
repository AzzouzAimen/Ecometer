import React from 'react';
import {Grid ,  Paper, Typography } from '@mui/material';
const ChartCard = () => {
  return (
    <Paper elevation={3} sx={{ paddingTop: '10px',paddingBottom : '10px',paddingLeft : '30px', paddingRight : '30px' , borderRadius: '15px', background: "#D9D9D9"  }}>
      <Typography  >Emissions Totales</Typography>
      <Grid container justifyContent="space-between">
        <Grid item>
            <Typography  >43.924.5</Typography>
        </Grid>
        <Grid item>
            <Typography  >43.924.5</Typography>
        </Grid>  
      </Grid>
      <Typography  >Avec un taux d'incertitudede 16%</Typography>
    </Paper>
  );
};

export default ChartCard;
