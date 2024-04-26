import React from 'react';
import { Box, Typography, Grid, Button, Paper, useMediaQuery, useTheme } from '@mui/material';
import AppBarComponent from '../Components/AppBarComponent';
import SideBar from '../Components/SideBar';
import FirstCard from '../Components/FirstCard';
function Acceuil() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Grid container>
            <Grid item md={2.1} sx={{ height: '100vh', display: { xs: 'none', md: 'block' } }}>
                <SideBar />
            </Grid>
            <Grid item md={9.9} xs={12}>
                <Grid container height={'auto'} justifyContent="center">
                    <Grid item height={'64px'} xs={12} sx={{ fontFamily: 'Inter, sans-serif' }}>
                        <AppBarComponent title="Acceuil" />
                    </Grid>
                    <Grid item height={'auto'} xs={12} sx={{ background: '#F2F4F8', minHeight: 'calc(100vh - 64px)', fontFamily: 'Inter, sans-serif' }}>
                        <Grid container height="auto" justifyContent="center" marginTop={isSmallScreen ? '10px' : '50px'}>
                            <Grid item xs={12} md={10.36} sx={{ height: 'auto', marginBottom: isSmallScreen ? '10px' : '0' }}>
                                <Paper elevation={3} sx={{ height: '100%', borderRadius: '15px', boxShadow: '0px 8px 28px 0px #4859661A' }}>
                                     <FirstCard />
                                </Paper>
                            </Grid>

                            <Grid item xs={12} md={5.33} sx={{ height: '320px', padding: '10px', marginBottom: isSmallScreen ? '10px' : '0' }}>
                                <Paper elevation={3} sx={{ height: '100%', borderRadius: '15px', boxShadow: '0px 8px 28px 0px #4859661A' }}>

                                </Paper>
                            </Grid>

                            <Grid item xs={12} md={5.33} sx={{ height: '320px', padding: '10px' }}>
                                <Paper elevation={3} sx={{ height: '100%', borderRadius: '15px', boxShadow: '0px 8px 28px 0px #4859661A' }}>

                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Acceuil;
