import React,{useEffect,useState} from 'react';
import {Box, Typography} from "@mui/material";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

const HeaderInfo =() => {
    const [info,setInfo]=useState([]);
    const Api=`https://api.sunrise-sunset.org/json?lat=52.22977&lng=21.01178&date=today `;
    useEffect(() => {
        fetch(Api)
            .then(res => res.json())
            .then(res => setInfo(res.results))
            .catch(err => console.log(err))
    },[info]);

    const SunCalc = require('suncalc');
    const times = SunCalc.getTimes(new Date(), 52.06898, 19.47997);
    const sunrise=  times.sunrise.getHours() + ':' + times.sunrise.getMinutes();
    const sunset = times.sunset.getHours() + ':' + times.sunset.getMinutes();

    return (
        <>
            <Box className="headerInfoBox">
                <Box className="headerInfoBox_boxes">
                    <Typography
                        variant="subtitle2"
                        align="left"
                    >
                        Wschód Słońca: {sunrise}
                    </Typography>
                    <Box className="headerInfoBox_boxes__icon">
                        <WbSunnyIcon className="SunIcon"/>
                    </Box>
                </Box>
                <Box className="headerInfoBox_boxes">
                    <Typography
                        variant="subtitle2"
                        align="left"
                    >
                        Zachód Słońca: {sunset}
                    </Typography>
                    <Box className="headerInfoBox_boxes__icon">
                        <ModeNightIcon className="MoonIcon"/>
                    </Box>
                </Box>
                <Box className="headerInfoBox_boxes">
                    <Typography
                        variant="subtitle2"
                        align="center"
                    >
                        Długość dnia: {info.day_length} godz.
                    </Typography>
                    <Box className="headerInfoBox_boxes__icon" >
                        <AccessTimeFilledIcon className="AccessIcon" />
                    </Box>
                </Box>
            </Box>
            <Box className="headerInfoBox_note">
                <p className="headerInfoBox_note__content">* Dane dla miejscowości Piątek(woj.Łódzkie)
                    -geograficzny środek Polski</p>
            </Box>
        </>
    )
};

export default HeaderInfo;