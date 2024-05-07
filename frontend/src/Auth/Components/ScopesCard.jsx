import React from 'react';
import {Grid ,  Paper, Typography } from '@mui/material';

const Styles = {
  ScopeText : {
    fontFamily : 'Inter , sans-serif',
    fontWeight : '400',
    fontSize : '18px',
    lineHeight : '28px',
    color : '#FFFFFF',
  },
  EmissionsText : {
    fontFamily : 'Inter , sans-serif',
    fontWeight : '700',
    fontSize : '48px',
    lineHeight : '58px',
    color : '#FFFFFF',
  },
  UnityText : {
    fontFamily : 'Eudoxus , sans-serif',
    fontWeight : '500',
    fontSize : '23px',
    lineHeight : '58px',
    color : '#FFF'
  }
}
const ScopesCard = () => {
  return (
    <Paper sx={{borderRadius : '15px'}} elevation={3}>
        <Grid container>
          <Grid item md={4} xs={12}>
              <Paper sx={{paddingLeft : '55px' , paddingRight : '55px' , paddingTop : '10px' , paddingBottom : '10px' , backgroundColor : '#D62828' , textAlign : {md : 'center'}}}>
                    <Typography style={Styles.ScopeText}>Scope 1</Typography>
                    <Typography style={Styles.EmissionsText}>35.139.6</Typography>
                    <Typography style={Styles.UnityText}>tCO2e</Typography>
              </Paper>
          </Grid>

          <Grid item md={4} xs={12}>
              <Paper sx={{paddingLeft : '55px' , paddingRight : '55px' , paddingTop : '10px' , paddingBottom : '10px' , backgroundColor : '#F77F00' , textAlign : {md : 'center'}}}>
                    <Typography style={Styles.ScopeText}>Scope 1</Typography>
                    <Typography style={Styles.EmissionsText}>35.139.6</Typography>
                    <Typography style={Styles.UnityText}>tCO2e</Typography>
              </Paper>
          </Grid>

          <Grid item md={4} xs={12}>
              <Paper sx={{paddingLeft : '55px' , paddingRight : '55px' , paddingTop : '10px' , paddingBottom : '10px' , backgroundColor : '#FCBF49' , textAlign : {md : 'center'}}}>
                    <Typography style={Styles.ScopeText}>Scope 1</Typography>
                    <Typography style={Styles.EmissionsText}>35.139.6</Typography>
                    <Typography style={Styles.UnityText}>tCO2e</Typography>
              </Paper>
          </Grid>

        </Grid>
    </Paper>
  );
};

export default ScopesCard;