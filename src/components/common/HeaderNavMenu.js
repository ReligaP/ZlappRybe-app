import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState,{ bindTrigger, bindMenu } from "material-ui-popup-state"
import {Link} from "react-router-dom"
import {Typography} from "@mui/material";

const HeaderNavMenu = () => {
    return (
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
                <div className="headerNavMenu_box">
                    <div className="headerNavMenu_box__logo">
                        <Typography
                            variant="subtitle"
                            color="primary-text"
                        >
                            <span className="span_headerNavMenu_1">Złapp</span><br/>
                            <span className="span_headerNavMenu_2">&nbsp;&nbsp;Rybę</span>
                            &reg;
                        </Typography>
                    </div>
                    <Button style={{backgroundColor:"rgba(108,108,233,0.7)"}} variant="contained" {...bindTrigger(popupState)}>
                        Menu
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                        <MenuItem onClick={popupState.close}><Link to="/">Strona główna</Link></MenuItem>
                        <MenuItem onClick={popupState.close}><Link to="/danehydro">Dane Hydro</Link></MenuItem>
                        <MenuItem onClick={popupState.close}><Link to="/danesynop">Dane Meteo</Link></MenuItem>
                    </Menu>
                </div>
            )}
        </PopupState>
    );
}
export default HeaderNavMenu;
