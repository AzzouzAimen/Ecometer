import React, { useState } from 'react';
import { Grid, Typography, Paper, Button, Box, ThemeProvider,Stepper, Step, StepLabel , createTheme } from '@mui/material';
import { WhatshotOutlined, BatteryFullOutlined, DirectionsCarOutlined, ShoppingCartOutlined, DeleteOutlineOutlined } from '@mui/icons-material';
import AppBarComponent from './AppBarComponent';


const Styles = {
    titreEtape: {
        color: '#003049',
        fontWeight: 700,
        fontSize: '30px',
        fontFamily: 'Inter, sans-serif',
        lineHeight: '47px',
    },
    contenuEtape: {
        fontSize: '18px',
        fontWeight: 400,
        lineHeight: '24px',
        textAlign: 'left',
        color: '#003049',
    },
    ajouterActiviteButton : {
        width: '150px',
        height: '32px',
        gap: '0px',
        borderRadius: '10px 10px 10px 10px',
        border: '1px solid #003049',
        background: '#FFFFFF',
        color: '#003049',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '16px',
        textAlign: 'center',
    },
    suivantButton: {
       
            color: '#FFFFFF',
            background: '#003049',
            fontFamily: 'Inter, sans-serif',
            width: '121px',
            height: '48px',
            padding: '14px 32px',
            gap: '10px',
            borderRadius: '15px',
       
    },
    backButton : {
            color: '#FFFFFF',
            background: '#003049',
            fontFamily: 'Inter, sans-serif',
            width: '121px',
            height: '48px',
            padding: '14px 32px',
            gap: '10px',
            borderRadius: '15px',
    },
    buttonText: {
        fontFamily: 'Inter, sans-serif',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '20px',
        textAlign: 'center',
        color: '#FFFFFF',
    },
};
function Calculateur() {
    const [activeStep, setActiveStep] = useState(0); // État pour suivre l'étape active du stepper

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    // Tableau des étapes du stepper
    const steps = [
        { label: 'Emissions directes', icon: <WhatshotOutlined />, backgroundColor: '#F0F2F7' },
        { label: 'Energie', icon: <BatteryFullOutlined />, backgroundColor: '#E0E5EC' },
        { label: 'Déplacement', icon: <DirectionsCarOutlined />, backgroundColor: '#D1D9E4' },
        { label: 'Achats', icon: <ShoppingCartOutlined />, backgroundColor: '#C1CDE0' },
        { label: 'Déchets', icon: <DeleteOutlineOutlined />, backgroundColor: '#B2C8DC' },
    ];


    return (
        <Grid container height={'auto'}>
            <Grid item height={'64px'} xs={12} sx={{fontFamily : 'Inter, sans-serif'}}>
                <AppBarComponent />
            </Grid>
            <Grid item height={'auto'} xs={12} sx={{ background: '#F2F4F8', minHeight: 'calc(100vh - 64px)', fontFamily: 'Inter, sans-serif' }}>
                
                    <Grid container justifyContent={'center'} marginTop={'50px'}>
                        <Grid item xs={12} md={8}>
                            <Paper elevation={3} sx={{ minHeight: 'fit-content' , borderRadius : '15px'}}>
                                <Grid container rowSpacing={0} justifyContent="center" sx={{ minHeight: '100%', p: 2 }}>
                                    {/* Titre de l'étape */}
                                    <Grid item xs={12} md={10}>
                                        <Typography variant="h5" align="center" gutterBottom   style={Styles.titreEtape}>
                                            {steps[activeStep].label}
                                        </Typography>
                                    </Grid>
                                    {/* Stepper */}
                                    <Grid item xs={12} md={10} sx={{marginTop : "30px"}}>
                                        <Stepper activeStep={activeStep} alternativeLabel>
                                            {steps.map((step, index) => (
                                                <Step key={index}>
                                                    <StepLabel 
                                                    sx={{ color: '#C92C39' }}
                                                        icon={step.icon}
                                                    >
                                                        {/*{step.label}*/}
                                                    </StepLabel>
                                                </Step>
                                            ))}
                                        </Stepper>

                                    </Grid>
                                    {/* Contenu du formulaire pour chaque étape */}
                                    <Grid item xs={12} md={10} sx={{marginTop : "30px"}}>
                                        <Box p={2} bgcolor={steps[activeStep].backgroundColor} mb={2} borderRadius={4}>
                                            <Grid container justifyContent="space-between" alignItems="center">
                                                <Grid item xs={12} md={9}>
                                                    <Typography 
                                                        variant="h6" 
                                                        gutterBottom 
                                                        style={Styles.contenuEtape}
                                                        sx={{fontSize : '2000px'}}
                                                    >
                                                        Émissions indirectes liées à la consommation d'électricité
                                                    </Typography>

                                                </Grid>
                                                <Grid item xs={12} md={3} sx={{ textAlign: 'center' }}>
                                                <Button style={Styles.ajouterActiviteButton}>                                                 
                                                        Votre bouton                                  
                                                </Button>

                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Grid>
                                    {/* Boutons de navigation */}
                                    <Grid item xs={12} md={10} sx={{marginTop : "30px"}}>
                                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', pt: 2 }}>
                                            <Button
                                                disabled={activeStep === 0}
                                                onClick={handleBack}
                                                style={Styles.backButton}
                                            >
                                                <Typography style={Styles.buttonText}>
                                                        Back
                                                </Typography>
                                            </Button>
                                            <Button  onClick={activeStep === steps.length - 1 ? handleReset : handleNext} style={Styles.suivantButton}>
                                                <Typography style={Styles.buttonText}>
                                                        {activeStep === steps.length - 1 ? 'Reset' : 'Suivant'}
                                                </Typography>
                                            </Button>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
              
            </Grid>
        </Grid>
                                        
    );
}

export default Calculateur;
