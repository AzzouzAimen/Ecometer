import React, { useState } from 'react';
import { Box, Typography, Grid, Button, Paper, Dialog, DialogContent } from '@mui/material';

const Styles = {
    contenuEtape: {
        fontSize: '18px',
        fontWeight: 400,
        lineHeight: '24px',
        textAlign: 'left',
        color: '#003049',
    },
    ajouterActiviteButton: {
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
    customSelect: {
        fontFamily: 'Inter, sans-serif',
        height : '45px',
        width: '100%',
        padding: '10px',
        borderRadius: '15px',
        border: '0px solid #003049',
        backgroundColor: '#EEF5FC',
        outline: 'none',
        appearance: 'none',
        backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
            `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23003049'><path d='M7 10l5 5 5-5z'/></svg>`
        )}")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 10px top 50%',
        backgroundSize: '12px',
        cursor: 'pointer',
        color: '#4D4D4D', 
    },
    customTitle: {
        fontFamily: 'Inter, sans-serif',
        fontSize: '18px',
        fontWeight: 400,
        lineHeight: '24px',
        textAlign: 'left',
        color: '#212121',
    },
    rechercheButton: {
        fontFamily: 'Inter, sans-serif',
        width: '100%',
        height: '48px',
        padding: '14px 32px 14px 32px',
        gap: '10px',
        borderRadius: '15px 15px 15px 15px',
        background: 'linear-gradient(117.07deg, #003049 0%, #2094F3 301.94%)',
        color: 'white',
    },
    annulerButton: {
        fontFamily: 'Inter, sans-serif',
        border: '1px solid #D62828',
        borderRadius: '15px',
        backgroundColor: '#FFFFFF',
        color: '#D62828',
    },
    validerButton: {
        fontFamily: 'Inter, sans-serif',
        background: '#003049',
        borderRadius: '15px',
    },
    Button_Link_Medium: {
        fontFamily: 'Inter, sans-serif',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '20px',
        textAlign: 'center',
    },
};

const produitsAchetesList = [
    { label : "Achat de biens" , 
      dialogOptions : [{ label : 'Achat de biens' , value : 1}]  
    },
    { label : "Immobilisation de biens",
      dialogOptions : [{ label : 'Achat de biens' , value : 1}] 
    },
    { label : "Gestion des déchets",
      dialogOptions : [{ label : 'Déchets' , value : 1}]  
    },
    { label : "Actifs en leasing amont",
      dialogOptions : [{ label : 'None' , value : 1}]  
    },
    { label : "Achat de services",
      dialogOptions : [{ label : 'Achat de service' , value : 1}]  
    },
];

function ProduitsAchetes() {
    const [selectedEmissionIndex, setSelectedEmissionIndex] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);

    const handleClickOpen = (index) => {
        setSelectedEmissionIndex(index);
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
    };

    return (
        <div>
            {produitsAchetesList.map((produit, index) => (
                <Box key={index} p={2} bgcolor={'#F0F2F7'} mb={2} borderRadius={4}>
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Grid item xs={12} md={9}>
                            <Typography
                                variant="h6"
                                gutterBottom
                                style={Styles.contenuEtape}
                            >
                                {produit.label}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={3} sx={{ textAlign: 'center' }}>
                            <Button style={Styles.ajouterActiviteButton} onClick={() => handleClickOpen(index)}>
                                Ajouter
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            ))}

            
            <Dialog open={openDialog} onClose={handleClose} fullWidth maxWidth="md" borderRadius={15}>
                <DialogContent>
                    <Grid container spacing={2} sx={{ paddingLeft: '16px', paddingRight: '16px' }}>
                        {selectedEmissionIndex !== null && (
                            <Grid item xs={12} md={12}>
                                <Typography variant="h6" style={Styles.customTitle}>Catégorie 1</Typography>
                                <select style={{ ...Styles.customSelect, width: '100%' }}>
                                    {produitsAchetesList[selectedEmissionIndex].dialogOptions.map((option, index) => (
                                        <option key={index} value={option.value}>{option.label}</option>
                                    ))}
                                </select>
                            </Grid>
                        )}
                        <Grid item xs={12} md={12}>
                            <Typography variant="h6" style={Styles.customTitle}>Catégorie 2</Typography>
                            <select style={{ ...Styles.customSelect, width: '100%' }}>
                                <option value={1}>Option 1</option>
                                <option value={2}>Option 2</option>
                                <option value={3}>Option 3</option>
                            </select>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Typography variant="h6" style={Styles.customTitle}>Catégorie 3</Typography>
                            <select style={{ ...Styles.customSelect, width: '100%' }}>
                                <option value={1}>Option 1</option>
                                <option value={2}>Option 2</option>
                                <option value={3}>Option 3</option>
                            </select>
                        </Grid>

                        <Grid item xs={12} md={12}>
                            <Button style={Styles.rechercheButton}>Rechercher</Button>
                        </Grid>
                        <Grid item xs={12} md={12} style={{ overflow: 'auto' }}>
                            <Paper style={{ height: '152px', borderRadius: '15px', padding: '20px', backgroundColor: '#F2F4F8' }}>
                               
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Grid container spacing={3}>
                                <Grid item xs={6} md={6}>
                                    <Button variant="contained" fullWidth style={{ ...Styles.annulerButton }}>
                                        Annuler
                                    </Button>
                                </Grid>
                                <Grid item xs={6} md={6}>
                                    <Button variant="contained" fullWidth style={{ ...Styles.validerButton }} onClick={handleClose}>Valider</Button>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>

                </DialogContent>

            </Dialog>

        </div>
    );
}

export default ProduitsAchetes;
