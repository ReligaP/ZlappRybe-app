import React from 'react';
import {Box, Typography} from "@mui/material";
import homeFunctionality from "../../database/homeFunctionality";
import homeInterestingFacts from "../../database/homeInterestingFacts";
import Image from "../../images/fishingrod.jpg"
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

const Home = () => {
    return (
        <Box className="homeBox">
            <Box className="homeBox_title">
                <Typography
                    className="homeBox_title__content"
                    variant="h4"
                >
                    Złapp
                </Typography>
                <Typography
                    className="homeBox_title__content2"
                    variant="h4"
                >
                    Rybę
                </Typography>
            </Box>
            <Box className="homeBox_functionality">
                <ul className="homeBox_functionality__list">
                    {
                        homeFunctionality.map((el,index) => {
                            return(
                                <li key={index}>
                                    <Typography variant="subtitle2" gutterBottom={true}>
                                        {el}
                                    </Typography>
                                </li>
                            )
                        })
                    }
                </ul>
            </Box>
            <Box className="homeBox_image">
                <img src={Image} alt="Wędka przy zachodzie słońca" className="homeBox_image__content"/>
            </Box>
            <Box className="homeBox_interestingFacts" >
                <Typography
                    className="homeBox_interestingFacts__title"
                    variant="h6"
                >
                    Czy wiesz że ...
                </Typography>
                <ul className="homeBox_interestingFacts__list" >
                    {
                        homeInterestingFacts.map((el,index) => {
                            return(
                                <li key={index}>
                                    <Typography variant="subtitle2" gutterBottom={true}>
                                        {el}
                                    </Typography>
                                </li>
                            )
                        })
                    }
                </ul>
            </Box>
            <Box className="homeBox_link">
                <a href={"#top"}><ArrowCircleUpIcon/></a>
            </Box>
        </Box>
    );
};

export default Home;
