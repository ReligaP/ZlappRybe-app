import React from 'react';
import {Typography} from "@mui/material";

const Footer = () => {
    return (
        <>
            <div className="footer_box">
                <Typography
                    variant="h6"
                    color="primary-text"
                >
                    &copy;
                    <span className="span_footer_1"> Złapp</span>
                    <span className="span_footer_2">Rybę</span>
                    2021
                </Typography>
            </div>
        </>
    );
};

export default Footer;