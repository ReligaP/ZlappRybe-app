import React from 'react';
import {Typography} from "@mui/material";
import homeFunctionality from "../../database/homeFunctionality";
import homeInterestingFacts from "../../database/homeInterestingFacts";


const Home = () => {
    return (
        <div className="homeBox">
            <div className="homeBox_title">
                <Typography className="homeBox_title__content" variant="h5" >
                    <span className="homeBox_title__span1">Złapp</span>
                    <span className="homeBox_title__span2">Rybę</span>
                </Typography>
            </div>
            <div className="homeBox_functionality">
                <ul className="homeBox_functionality__list">
                    {
                        homeFunctionality.map((el,index) => {
                            return(
                                <Typography style={{paddingBottom:"10px"}} key={index} variant="subtitle2" gutterBottom={true}>
                                    {el}
                                </Typography>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="homeBox_interestingFacts" >
                <Typography className="homeBox_interestingFacts__title" variant="h6">
                    Czy wiesz że ...
                </Typography>
                <ul className="homeBox_interestingFacts__list" >
                    {
                        homeInterestingFacts.map((el,index) => {
                            return(
                                <Typography style={{paddingBottom:"10px"}} key={index} variant="subtitle2" gutterBottom={true}>
                                    {el}
                                </Typography>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default Home;