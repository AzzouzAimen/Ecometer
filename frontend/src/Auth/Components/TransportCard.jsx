import React, { useState } from 'react';
import { Paper, Grid, Typography, Stack } from '@mui/material';
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
const subTextStyle = {
  fontFamily: 'Inter , sans-serif',
  fontWeight: '400',
  fontSize: '16px',
};
const TransportCard = () => {
  const [isDropVisible, setIsDropVisible] = useState(false);
  const [deplacementList ,setDeplacementList] = useState([
    { label : "Transport de marchandise amont",
      dialogueOptions : [ {label : 'Transport de marchandises' , value : 1}],
      selectedOptions: []  
    },
    { label : "Transport de marchandise aval",
      dialogueOptions : [{ label : 'Transport de marchandises' , value : 1}],
      selectedOptions: []  
    }
    ,
    { label : "Déplacements domicile-travail",
      dialogueOptions : [{ label : 'Transport de personnes' , value : 1}],
      selectedOptions: []  
    },
    { label : "Déplacements des visiteurs et des clients",
      dialogueOptions : [{ label : 'Transport de personnes' , value : 1}],
      selectedOptions: [] 
    },
    { label : "Déplacements professionnels",
      dialogueOptions : [{ label : 'Transport de personnes' , value : 1}],
      selectedOptions: []  
    }
]);

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
                Total Emissions indirectes (Transport)
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
      {isDropVisible && (
        <Stack direction="column" spacing={1} marginTop={{md : '25px'}}>
          {deplacementList.map((item,index)=>(<React.Fragment key={index}>
            <Typography style={subTextStyle}>
              {item.label}
            </Typography>
            <Grid container>
              <Grid item md={1.8} xs={12}>
                  <Grid container spacing = {1}>
                    <Grid item md={12}>
                        <Typography sx={{fontFamily : 'Inter ,sans-serif' , fontWeight : '400' , fontSize : '14px'}}> CHO2</Typography>
                    </Grid>
                    <Grid item md={12}>
                          <Typography sx={{fontFamily : 'Inter ,sans-serif' , fontWeight : '700' , fontSize : '16px'}}> 12.4</Typography>
                    </Grid>
                  </Grid>
              </Grid>
              <Grid item md={1.8} xs={12}>
                <Grid container spacing = {1}>
                    <Grid item md={12}>
                        <Typography sx={{fontFamily : 'Inter ,sans-serif' , fontWeight : '400' , fontSize : '14px'}}> CHO2</Typography>
                    </Grid>
                    <Grid item md={12}>
                          <Typography sx={{fontFamily : 'Inter ,sans-serif' , fontWeight : '700' , fontSize : '16px'}}> 12.4</Typography>
                    </Grid>
                  </Grid>
              </Grid>
              <Grid item md={1.8} xs={12}>
                <Grid container spacing = {1}>
                    <Grid item md={12}>
                        <Typography sx={{fontFamily : 'Inter ,sans-serif' , fontWeight : '400' , fontSize : '14px'}}> CHO2</Typography>
                    </Grid>
                    <Grid item md={12}>
                          <Typography sx={{fontFamily : 'Inter ,sans-serif' , fontWeight : '700' , fontSize : '16px'}}> 12.4</Typography>
                    </Grid>
                  </Grid>
              </Grid>
              <Grid item md={1.8} xs={12}>
                <Grid container spacing = {1}>
                    <Grid item md={12}>
                        <Typography sx={{fontFamily : 'Inter ,sans-serif' , fontWeight : '400' , fontSize : '14px'}}> CHO2</Typography>
                    </Grid>
                    <Grid item md={12}>
                          <Typography sx={{fontFamily : 'Inter ,sans-serif' , fontWeight : '700' , fontSize : '16px'}}> 12.4</Typography>
                    </Grid>
                  </Grid>
              </Grid>
            </Grid>
            </React.Fragment>))}
        </Stack>
      )}
      </Grid> 
    </Paper>
  );
};

export default TransportCard;