import React, { useState } from 'react';
import { Box, Typography, Grid, Button, Paper, useMediaQuery, useTheme ,List , ListItem , ListItemIcon , ListItemText} from '@mui/material';
import AppBarComponent from '../Components/AppBarComponent';
import SideBarr from '../Components/Sidebarr';
import AccueilIcon from './../Components/AcceuilIcon';
import CalculateurIcon from './../Components/CalculateurIcon';
import RapportIcon from './../Components/RapportIcon';
import ObjectifIcon from './../Components/ObjectifIcon';
import LogoutIcon from './../Components/LogoutIcon';
import {  TextField, Select, MenuItem } from '@mui/material';


const inputStyle = {
    borderRadius: 15,
    borderColor: '#0F172A',
    '&:hover': {
      borderColor: '#0F172A',
    },
    '&:focus': {
      borderColor: '#0F172A',
      boxShadow: '0 0 0 0.15rem rgba(15, 23, 42, 0.25)',
    },
  };
function Parametres() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [index , setIndex] = useState(0);
    const SwitchIndex = (i) => {
        setIndex(i);
        console.log(i);
    }
    return (
        <Grid container>
            <Grid item md={0.9} sx={{ minHeight: '100vh', display: { xs: 'none', md: 'block' }  }}>
                <SideBarr />  
            </Grid>
            <Grid item md={11.1} xs={12}>
                <Grid container height={'auto'} justifyContent="center" >
                    <Grid item height={'64px'} xs={12} sx={{ fontFamily: 'Inter, sans-serif' }}>
                        <AppBarComponent title="Parametres" />
                    </Grid>
                    <Grid item height={'auto'} xs={12} sx={{ background: '#F2F4F8', minHeight: 'calc(100vh - 64px)', fontFamily: 'Inter, sans-serif' }}>
                        <Grid container>
                            <Grid item md={2.03}>
                                <Paper sx={{minHeight : '100vh'}}>
                                    <List>
                                        <ListItem button style={{ marginTop: 64 }} onClick={() => SwitchIndex(0)}>
                                        <ListItemIcon style={{ color: '#969696' }}>
                                            <CalculateurIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Modifier le profil" />
                                        </ListItem>
                                        <ListItem button style={{ marginTop: 64 }} onClick={() => SwitchIndex(1)}>
                                        <ListItemIcon style={{ color: '#969696' }}>
                                            <CalculateurIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Notifications" />
                                        </ListItem>
                                        <ListItem button style={{ marginTop: 64 }} onClick={() => SwitchIndex(2)}>
                                        <ListItemIcon style={{ color: '#969696' }}>
                                            <CalculateurIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Sécurité" />
                                        </ListItem>
                                        <ListItem button style={{ marginTop: 64 }} onClick={() => SwitchIndex(3)}>
                                        <ListItemIcon style={{ color: '#969696' }}>
                                            <CalculateurIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Apparence" />
                                        </ListItem>
                                        <ListItem button style={{ marginTop: 64 }} onClick={() => SwitchIndex(4)}>
                                        <ListItemIcon style={{ color: '#969696' }}>
                                            <CalculateurIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Aide" />
                                        </ListItem>
                                    </List>
                                </Paper>

                            </Grid>
                            <Grid item md={9.97}>
                                <Grid container justifyContent="center">
                                        <Grid item md={8.46}>
                                            <Paper sx={{ marginTop: '54px'  , paddingLeft : '92px' , paddingTop :'44px' , paddingBottom :'44px' ,  paddingRight : '92px' , borderRadius : '15px'}}>

                                            <Grid container spacing={6}>
    <Grid item md={12}>
        <TextField label="Nom de l'organisation" fullWidth size="large"sx={{
        borderRadius: '15px',
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0F172A !important',
            borderRadius: '15px',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0F172A !important',
            borderRadius: '15px',
        },
        '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0F172A !important',
            borderRadius: '15px',
        },
        '& .MuiFormLabel-root': {
            color: '#0F172A !important', // Couleur du label
        }
    }} />
    </Grid>
    <Grid item md={12}>
        <TextField label="Adresse" fullWidth size="large" sx={{
        borderRadius: '15px',
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0F172A !important',
            borderRadius: '15px',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0F172A !important',
            borderRadius: '15px',
        },
        '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0F172A !important',
            borderRadius: '15px',
        },
        '& .MuiFormLabel-root': {
            color: '#0F172A !important', // Couleur du label
        }
    }}  />
    </Grid>
    <Grid item md={6}>
        <TextField label="Nombre de l'employés" fullWidth size="large"sx={{
        borderRadius: '15px',
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0F172A !important',
            borderRadius: '15px',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0F172A !important',
            borderRadius: '15px',
        },
        '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0F172A !important',
            borderRadius: '15px',
        },
        '& .MuiFormLabel-root': {
            color: '#0F172A !important', // Couleur du label
        }
    }}  />
    </Grid>
    <Grid item md={6}>
        <TextField label="Nombre de locaux" fullWidth size="large" sx={{
        borderRadius: '15px',
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0F172A !important',
            borderRadius: '15px',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0F172A !important',
            borderRadius: '15px',
        },
        '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0F172A !important',
            borderRadius: '15px',
        },
        '& .MuiFormLabel-root': {
            color: '#0F172A !important', // Couleur du label
        }
    }} />
    </Grid>
    <Grid item md={12}>
        <Select fullWidth size="large" sx={{
        borderRadius: '15px',
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0F172A !important',
            borderRadius: '15px',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0F172A !important',
            borderRadius: '15px',
        },
        '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0F172A !important',
            borderRadius: '15px',
        },
        '& .MuiFormLabel-root': {
            color: '#0F172A !important', // Couleur du label
        }
    }} >
            <MenuItem value={1}>Option 1</MenuItem>
            <MenuItem value={2}>Option 2</MenuItem>
            <MenuItem value={3}>Option 3</MenuItem>
        </Select>
    </Grid>
    <Grid item md={12}>
        <Select fullWidth size="large" sx={{
        borderRadius: '15px',
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0F172A !important',
            borderRadius: '15px',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0F172A !important',
            borderRadius: '15px',
        },
        '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0F172A !important',
            borderRadius: '15px',
        },
        '& .MuiFormLabel-root': {
            color: '#0F172A !important', // Couleur du label
        }
    }} >
            <MenuItem value={1}>Option 1</MenuItem>
            <MenuItem value={2}>Option 2</MenuItem>
            <MenuItem value={3}>Option 3</MenuItem>
        </Select>
    </Grid>
    <Grid item md={12}>
    <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Grid item md={2.2} >
            <Button variant="outlained" sx={{
        background: '#FFFFFF',
        border: '1px solid #D62828',
        color: '#D62828',
        borderRadius: '15px',
        '&:hover': {
            background: '#F5F5F5',
        }}}>Annuler</Button>
        </Grid>
        <Grid item md={2.2} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="outlained" sx={{
        background: '#003049',
        border: '1px',
        color: '#FFFFFF',
        borderRadius: '15px',
        '&:hover': {
            background: '#002438',
        }
    }}>Valider</Button>
        </Grid>
    </Grid>
    </Grid>
</Grid>
                                            
                                            </Paper>
                                        </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Parametres;
