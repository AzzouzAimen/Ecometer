import React from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton, Menu, MenuItem, Avatar, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const pages = ['Accueil', 'Calculateur', 'Rapport', 'Objectifs'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function AppBarComponent() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
        setIsMenuOpen(true);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setIsMenuOpen(false);
    };

    return (
        <AppBar position="static">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', color: '#003049', backgroundColor: '#FFFFFF' }}>
                {isSmallScreen && (
                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="menu"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenuOpen}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                )}

                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        
                        fontWeight: 700,
                        fontSize: '25px',
                        lineHeight: '24px',
                        textAlign: 'center',
                        color: '#003049',
                        margin: '0 20px', 
                    }}
                >
                    Ecometer
                </Typography>

                {!isSmallScreen && (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexGrow: 1,
                    }}
                >
                    {pages.map((page, index) => (
                        <Typography
                            key={index}
                            variant="body1"
                            sx={{
                                mx: 2,
                                margin: '0 25px', 
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '24px',
                            }}
                        >
                            {page}
                        </Typography>
                    ))}
                </Box>
            )}

                <Box>
                <IconButton
      size="large"
      edge="end"
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      onClick={handleMenuOpen}
    >
      <FontAwesomeIcon icon={faUserCircle} style={{ color: '#F68002' }} />
    </IconButton>


                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl && isMenuOpen)}
                        onClose={handleMenuClose}
                    >
                        {isSmallScreen ? (
                           settings.map((setting, index) => (
                            <MenuItem key={index} onClick={handleMenuClose}>
                                {setting}
                            </MenuItem>
                        ))
                        ) : (
                            settings.map((setting, index) => (
                                <MenuItem key={index} onClick={handleMenuClose}>
                                    {setting}
                                </MenuItem>
                            ))
                        )}
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default AppBarComponent;
