import React from 'react';
import { Grid, Paper, Typography , Box } from '@mui/material';
import AppBarComponent from '../Components/AppBarComponent';
import SideBar from '../Components/SideBar';

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
            <Grid container justifyContent={'center'} marginTop={'50px'}>
              <Grid item md={10}>
                <Paper sx={{ padding: '60px', marginTop: '20px', marginBottom: '20px' }}>
                  <Grid container spacing={2}>
                    {/* Titre Rapport annuel d'émissions 2024 */}
                    <Grid item xs={12} md={6}>
                      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '20px' }}>Rapport annuel d'émissions 2024</Typography>
                    </Grid>

                    {/* Bouton Voir plus de détails */}
                    <Grid item md={6} xs={12} sx={{ textAlign: 'end' }}>
                      <Typography variant="body1" sx={{ color: '#F77F00' }}>Voir plus de détails</Typography>
                    </Grid>
                  </Grid>

                  <Grid container spacing={2} justifyContent="center">
                    {/* Premier Grid Item */}
                    <Grid item md={6} xs={12}>
                    <Paper elevation={3} sx={{ padding: '20px', paddingLeft: '40px', borderRadius: '15px', background: '#FFD5D5' }}>
                        <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: { xs: 'center', md: 'flex-start' }, marginBottom: '10px' }}>
                            <Typography variant="h3" sx={{ marginRight: { xs: '5px', md: '30px' } }}>43,924</Typography>
                            <Typography variant="h6" sx={{ color: '#000000' }}>tCO2e</Typography>
                        </Box>
                        <Typography variant="h5" sx={{ textAlign: { xs: 'center', md: 'left' }, color: '#D62828', marginBottom: '10px' }}>EMISSIONS TOTALES</Typography>
                    </Paper>



                    </Grid>

                    {/* Deuxième Grid Item */}
                    <Grid item md={6} xs={12}>
                      <Paper elevation={3} sx={{ padding: '20px', borderRadius: '15px', background: '#FFD5D5' }}>
                        <Typography variant="h5" sx={{ textAlign: 'center', color: '#D62828', marginBottom: '10px' }}>SCOPE 1</Typography>
                        <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '10px' }}>43,924.5</Typography>
                        <Typography variant="h6" sx={{ textAlign: 'center', color: '#000000' }}>tCO2e</Typography>
                      </Paper>
                    </Grid>
                  </Grid>

                  {/* Nouveau Grid Item pour contenir quatre sous-items */}
                  <Grid item md={6} xs={12} sx={{ marginTop: '20px' }}>
                    <Grid container spacing={2}>
                      {[1, 2, 3].map((item) => (
                        <Grid key={item} item md={7.61} xs={12}>
                          <Paper elevation={3} sx={{ padding: '20px', borderRadius: '15px', background: '#FFD5D5' }}>
                            <Typography variant="h5" sx={{ textAlign: 'center', color: '#D62828', marginBottom: '10px' }}>SCOPE 1</Typography>
                            <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '10px' }}>43,924.5</Typography>
                            <Typography variant="h6" sx={{ textAlign: 'center', color: '#000000' }}>tCO2e</Typography>
                          </Paper>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>

                  {/* Autre contenu ici */}
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
