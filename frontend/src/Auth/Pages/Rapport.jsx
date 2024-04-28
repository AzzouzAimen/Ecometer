import React from 'react';
import { Box, Typography, Grid, Button, Paper, useMediaQuery, useTheme } from '@mui/material';
import AppBarComponent from '../Components/AppBarComponent';
import SideBar from '../Components/SideBar';

const Styles = {
   TitleText : {
    fontFamily : "Eudoxus , sans-serif",
    fontWeight : '700',
    fontSize: '30px',
    lineHeight : '30px'
   },

   DetailsText : {
     fontFamily : 'Inter , sans-serif',
     fontWeight : '400',
     fontSize : '18px',
     lineHeight : '24px',
     color : '#F77F00',
   },
   Detail : {
    fontFamily :  'Inter',
    fontSize :  '16px',
    fontWXeight : '400',
    lineHeight : '24px',
    textalign : 'left',

   },
   
   TotalText : {
    fontFamily : 'Eudoxus , sans-serif',
    fontWeight : '500',
    fontSize : '48px',
    lineHeight : '58px',
   },
   TotalText2 : {
    fontFamily : 'Eudoxus , sans-serif',
    fontWeight : '500',
    fontSize : '30px',
    lineHeight : '70px',
   },

   TotalSubText : {
    fontFamily : 'Eudoxus , sans-serif',
    fontWeight : '700',
    fontSize : '23px',
    lineHeight : '58px',
    color : '#D62828',
   },

   PartialText : {
     fontFamily : 'Eudoxus , sans-serif',
    fontWeight : '500',
    fontSize : '48px',
    lineHeight : '40px',
    color : '#000000',
   },
   PartialText2 : {
    fontFamily : 'Eudoxus , sans-serif',
    fontWeight : '500',
    fontSize : '23px',
    lineHeight : '40px',
    color : '#000000',

   },
   PartialSubText : {
    fontFamily : 'Eudoxus , sans-serif',
    fontWeight : '700',
    fontSize : '20px',
    lineHeight : '58px',
    color : '#D62828',
   }
}

const Rapport = () => {
  return (
    <Grid container>
      {/* Sidebar */}
      <Grid item md={2.1} sx={{ minHeight: '100vh', display: { xs: 'none', md: 'block' } }}>
        <SideBar />
      </Grid>
      
      {/* Main Content */}
      <Grid item md={9.9} xs={12}>
        <Grid container height={'auto'}>
          {/* Header */}
          <Grid item height={'64px'} xs={12} sx={{ fontFamily: 'Inter, sans-serif' }}>
            <AppBarComponent title="Rapport" />
          </Grid>

          {/* Main Content Body */}
          <Grid item height={'auto'} xs={12} sx={{ background: '#F2F4F8', minHeight: 'calc(100vh - 64px)', fontFamily: 'Inter, sans-serif' }}>
               <Grid container justifyContent='center' marginTop={ {md : '50px' , xs :'10px'} } height='auto'>
                
                    <Grid item md={9.77} xs={12} height = 'auto'>
                        <Paper>                       
                            <Grid container justifyContent='center' >
                                <Grid item md={10.63} height= 'auto' sx={{marginBottom: { md: '43px' },marginTop: { md: '40px' }}}>
                                    <Grid container height = 'auto'>
                                        <Grid item xs={12} md={8.91}>
                                            <Typography style={Styles.TitleText} sx={{textAlign: { xs: 'center', md: 'initial' },marginBottom: { xs: '25px'}, marginTop: { xs: '25px'}}}>
                                                Rapport annuel d'émissions 2024
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} md={3.09} textAlign='center' sx={{marginBottom: { xs: '25px' },marginTop: { xs: '25px'}}}>
                                            <Typography  style={Styles.DetailsText}>
                                                Voir plus de details
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                    <Grid item md={10.63} height= 'auto' xs={12} sx={{marginBottom: { md: '43px' }}}>
                                        <Grid container height='auto'  >
                                            <Grid item md={5.95} xs={12}   sx={{background : '#FFD5D5'  , borderRadius : '15px'}} >
                                             <Grid container justifyContent={'center'}>
                                                <Grid item md={10.01}>

                                                    <Grid container direction={'column'} height={'auto'} >
                                                        
                                                        <Grid item >
                                                            <Grid container>
                                                                <Grid item md={6} sx={{marginBottom: { xs: '25px' } , marginTop : { md : '10px'}}}> 
                                                                  <Typography style={Styles.TotalText}>43,924.5</Typography>      
                                                                </Grid>
                                                                <Grid item md={6} textAlign={'center'} sx={{marginTop : { md : '10px'}}}> 
                                                                  <Typography style={Styles.TotalText2}>tCO2e</Typography>      
                                                                </Grid> 
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item > 
                                                            <Typography style={Styles.TotalSubText} sx={{textAlign: { xs: 'center', md: 'initial' }}}>EMISSIONS TOTALES</Typography>     
                                                        </Grid>

                                                    </Grid>
                                              </Grid>
                                            </Grid>
                                            </Grid>
                                            <Grid item md={0.4}></Grid>
                                            <Grid item md={5.65} xs={12}   sx={{marginBottom: { xs: '25px' },marginTop: { xs: '25px' } , textAlign : {xs : 'center'}}}>
                                                    <Typography style={Styles.Detail}>
                                                    Votre emissions 2024 ont été ventilées par scopes et catégories conformément
                                                     au GHG Corporate Standard. Les résultats sont également ventilés par trimestre pour comprendre 
                                                    l’évolution de votre empreinte carbone au cours de l’année 2022.
                                                    </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item md={10.63} height='auto'>
            {/* Premier Grid Item */}
            <Grid container >
                <Grid item md={5.95}>
                    <Grid container>
                        <Grid item md={7.61} xs={12} style={{ background : '#FFD5D5', height: 'auto' }} >

                                                    <Grid container direction={'column'} height={'auto'} >
                                                        <Grid item >
                                                            <Grid container>
                                                                <Grid item md={6} sx={{marginBottom: { xs: '25px' } , marginTop : { md : '10px'}}}> 
                                                                  <Typography style={Styles.PartialText}>43,924.5</Typography>      
                                                                </Grid>
                                                                <Grid item md={6} textAlign={'center'} sx={{marginTop : { md : '10px'}}}> 
                                                                  <Typography style={Styles.PartialText2}>tCO2e</Typography>      
                                                                </Grid> 
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item > 
                                                            <Typography style={Styles.PartialSubText} sx={{textAlign: { xs: 'center', md: 'initial' }}}>SCOPE 1</Typography>     
                                                        </Grid>
                                                    </Grid>

                        </Grid>
                        <Grid item md={7.61} xs={12} style={{ backgroundColor: 'blue', height: '75px' }} />
                        <Grid item md={7.61} xs={12} style={{ backgroundColor: 'green', height: '75px' }} />
                        <Grid item md={7.61} xs={12} style={{ backgroundColor: 'yellow', height: '75px' }} />
                        </Grid>
                </Grid>
                <Grid item md={5.65} xs={12} style={{ backgroundColor: 'purple', height: '75px' }} />
                </Grid>
            </Grid>

            {/* Deuxième Grid Item */}
           
                                
                            </Grid>
                        </Paper>   
                    </Grid>
                
                    

                    
               </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Rapport;
