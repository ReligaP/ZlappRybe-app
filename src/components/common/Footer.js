import React from 'react';
import {Box, Typography} from "@mui/material";

const Footer = () => {
    return (
        <>
            <Box className="footerBox">
                <h4><sup>&copy;</sup></h4>
                <Typography className="footerBox_title" variant="h5">Złapp</Typography>
                <Typography className="footerBox_title2" variant="h5">Rybę</Typography>
                <Typography variant="h5">2021</Typography>
            </Box>
        </>
    );
};

export default Footer;