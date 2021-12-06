import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState,{ bindTrigger, bindMenu } from 'material-ui-popup-state';
import {Link} from "react-router-dom";
import {Box, Typography} from "@mui/material";

const HeaderNavMenu = () => {

    return (
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
                <Box className="headerNavMenuBox">
                    <Box className="headerNavMenuBox_logo">
                        <Typography
                            className="headerNavMenuBox_logo__title"
                            variant="subtitle"
                        >
                            Złapp
                        </Typography>
                        <Typography
                            className="headerNavMenuBox_logo__title2"
                            variant="subtitle"
                        >
                            &nbsp;&nbsp;Rybę<span className="headerNavMenuBox_logo__sign">&reg;</span>
                        </Typography>
                    </Box>
                    <Button className="headerNavMenuBox_button" variant="contained" {...bindTrigger(popupState)}>
                        Menu
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                        <MenuItem onClick={popupState.close}><Link to="/">Strona główna</Link></MenuItem>
                        <MenuItem onClick={popupState.close}><Link to="/danehydro">Dane Hydro</Link></MenuItem>
                        <MenuItem onClick={popupState.close}><Link to="/danesynop">Dane Meteo</Link></MenuItem>
                        <MenuItem onClick={popupState.close}><Link to="/dodajrelacje">Dodaj Relacje</Link></MenuItem>
                        <MenuItem onClick={popupState.close}><Link to="/twojerelacje">Pokaż Relacje</Link></MenuItem>
                        <MenuItem onClick={popupState.close}><Link to="/zdjecia">Dodaj Zdjęcia</Link></MenuItem>
                        <MenuItem onClick={popupState.close}><Link to="/wyswietlanie">Pokaż Zdjęcia</Link></MenuItem>
                        <MenuItem onClick={popupState.close}><Link to="/rejestracja">Zarejestruj się</Link></MenuItem>
                    </Menu>
                </Box>
            )}
        </PopupState>
    );
};

export default HeaderNavMenu;