import React, { useState } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import AppBarComponent from '../Components/AppBarComponent';
import SideBar from '../Components/SideBar';
import { Progress } from "antd";

const Styles = {
  Text1: {
    fontFamily: 'Inter',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
    textAlign: 'center',
    marginBottom : '20px',
  },
  Text11: {
    fontFamily: 'Inter',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
    textAlign: 'left',
    marginBottom : '10px',
  },
  Text2: {
    fontFamily: 'Eudoxus,sans-serif',
    fontSize: '60px',
    fontWeight: 400,
    lineHeight: '24px',
    textAlign: 'center',
    marginBottom : '20px',
  },
  TilteText : {
    fontFamily: 'Eudoxus,sans-serif',
    fontSize: '30px',
    fontWeight: 400,
    textAlign: 'left',
    color : "#003049",
  },
  SubTitleText : {
    fontFamily: 'Eudoxus,sans-serif',
    fontSize: '20px',
    fontWeight: 700,
    color : "#003049",
    marginBottom : '10px',
  },
  
};

const Objectifs = () => {
    const [percent , setPercent] = useState(89);
    const customFormat = () => (
        <div>
          <Typography style={Styles.Text1}>Vous avez atteint</Typography>
          <Typography style={Styles.Text2}>89%</Typography>
          <Typography style={Styles.Text1}>des objectifs</Typography>
         </div>
      );
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
            <AppBarComponent title="Objectifs"/>
          </Grid>

          {/* Main Content Body */}
          
            <Grid item xs={12} sx={{ background: '#F2F4F8', minHeight: 'calc(100vh - 64px)', fontFamily: 'Inter, sans-serif' }}>
              <Grid container justifyContent={'center'} marginTop={'50px'}>
                <Grid item md={10}>
                  <Paper sx={{ padding: '60px', marginTop: '20px', marginBottom: '20px', borderRadius: '15px' }}>
                     <Grid container>
                            <Grid item md={12} xs={12} marginBottom={'30px'}> 
                                <Typography style={Styles.TilteText}>Analyse des Objectifs</Typography>
                            </Grid>
                            
                            <Grid item md={6} xs={12} sx={{ display: 'flex', justifyContent: 'center' }} marginBottom={'30px'}> 
                               <Progress type="circle" percent={75} format={customFormat} width={243} strokeColor="#33FF69"/>
                           </Grid>
                           <Grid item md={6} xs={12} sx={{display : "flex" , flexDirection : 'column' , justifyContent : "center"}} marginBottom={'30px'}> 
                               <Typography style = {Styles.Text11}>Votre engagement envers l’environnement est remarquable, vos émissions en 2024 ont été meilleurs que plus de 70% des entreprises de votre domaine.</Typography>
                               <Typography style = {Styles.Text11}>Vous avez atteint 89% de vos objectifs !Ce chiffre vous intrigue ? Découvrir comment c’est calculé en cliquant ici</Typography>
                           </Grid>
                           <Grid item md={12} xs={12}> 
                            <Typography style = {Styles.SubTitleText}>Conseils pour réduire les émissions et atteindre vos objectifs</Typography>
                            <ul>
                                <li>
                                    <Typography style={Styles.Text11}>Adoptez les énergies renouvelables : investissez dans des options d’énergie solaire, éolienne ou hydroélectrique</Typography>
                                </li>
                                <li>
                                    <Typography style={Styles.Text11}>Adoptez les énergies renouvelables : investissez dans des options d’énergie solaire, éolienne ou hydroélectrique</Typography>
                                </li>
                                <li>
                                    <Typography style={Styles.Text11}>Adoptez les énergies renouvelables : investissez dans des options d’énergie solaire, éolienne ou hydroélectrique</Typography>
                                </li>
                                <li>
                                    <Typography style={Styles.Text11}>Adoptez les énergies renouvelables : investissez dans des options d’énergie solaire, éolienne ou hydroélectrique</Typography>
                                </li>
                             </ul>
                           </Grid>
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

export default Objectifs;
