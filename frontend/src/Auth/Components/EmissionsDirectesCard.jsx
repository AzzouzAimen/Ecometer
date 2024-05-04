import React, { useState } from 'react';
import { Paper, Grid, Typography } from '@mui/material';
import Drop from './Drop';

const circleStyle = {
  width: '26px',
  height: '26px',
  borderRadius: '50%',
  backgroundColor: '#003049'
};

const textTitre = {
  fontFamily: 'Eudoxus , sans-serif',
  fontWeight: '700',
  fontSize: '20px',
  lineHeight: '24px'
};

const textValue = {
  fontFamily: 'Eudoxus , sans-serif',
  fontWeight: '700',
  fontSize: '20px',
};

const EmissionsDirectesCard = () => {
  const [isDropVisible, setIsDropVisible] = useState(false);

  const toggleDrop = () => {
    setIsDropVisible(!isDropVisible);
    console.log(isDropVisible);
  };

  return (
    <Paper elevation={3} sx={{ paddingTop: '25px', paddingBottom: '25px', paddingLeft: '30px', paddingRight: '30px', borderRadius: '15px', background: "#D9D9D9" }}>
      <Grid container justifyContent="space-between">
        <Grid item md={6} xs={12}>
          <Grid container>
            <Grid item md={1} xs={2}>
              <div style={circleStyle}></div>
            </Grid>
            <Grid item md={11} xs={10}>
              <Typography style={textTitre}>
                Total Emissions directes
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6} xs={12}>
          <Grid container direction={'row-reverse'}>
            <Grid item md={1} xs={2}>
              <Drop onClick={toggleDrop} />
            </Grid>
             
              <Grid item md={11} xs={10}>
                <Grid justifyContent={'start'} alignContent={'start'}>
                <Typography style={textValue} sx={{ textAlign: 'right', marginRight: { md: '20px', xs: '10px' }}}>
                  263.55
                </Typography>
                </Grid>
              </Grid>
           
          </Grid>
        </Grid>
      </Grid>
      <Grid>
      {isDropVisible && ( <Typography style={textTitre}>
          idrissszzdajdaz
        </Typography>)}
      </Grid> 
    </Paper>
  );
};

export default EmissionsDirectesCard;
