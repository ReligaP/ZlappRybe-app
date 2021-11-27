import React,{useEffect,useState} from 'react';
import {Typography} from "@mui/material";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

const HeaderInfo =() => {
    const [info,setInfo]=useState([]);
    const Api=`https://api.sunrise-sunset.org/json?lat=52.22977&lng=21.01178&date=today `
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
            <div className="headerInfo_box">
                <div className="headerInfo_div" style={{paddingRight:"5px"}}>
                    <Typography
                        variant="subtitle2"
                        align="left"
                    >
                        Wschód Słońca:  {sunrise}
                    </Typography>
                    <div className="headerInfo_box_div__icon">
                        <WbSunnyIcon className="SunIcon"/>
                    </div>
                </div>
                <div className="headerInfo_div">
                    <Typography
                        variant="subtitle2"
                        align="left"
                    >
                        Zachód Słońca: {sunset}
                    </Typography>
                    <div className="headerInfo_box_div__icon">
                        <ModeNightIcon className="MoonIcon"/>
                    </div>
                </div>
                <div className="headerInfo_div">
                    <Typography
                        variant="subtitle2"
                        align="center"
                    >
                        Długość dnia: {info.day_length} godz
                    </Typography>
                    <div className="headerInfo_box_div__icon" >
                        <AccessTimeFilledIcon className="AccessIcon" />
                    </div>
                </div>
            </div>
            <div className="headerInfo_box_note">
                <p className="headerInfo_box_note__content">* Dane dla miejscowości Piątek(woj.Łódzkie)
                    -geograficzny środek Polski</p>
            </div>
        </>
    )
}
export default HeaderInfo;