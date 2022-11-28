import { useState , useEffect } from 'react';
import { MapContainer , TileLayer } from 'react-leaflet';
import { Box , Typography } from "@mui/material";
import OpenWeatherApiKey from "../../database/openWeatherApiKey";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

const Weather = () => {
    const [city,setCity] = useState("Sandomierz");
    const [temp,setTemp] = useState([]);
    const [wind,setWind] =useState([]);
    const [clouds,setClouds] = useState([]);
    const ApiKey = OpenWeatherApiKey;
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pl&units=metric&appid=${ApiKey}`;

    useEffect(() => {
        fetch(API)
            .then(res => res.json())
            .then(res => setTemp(res.main))
            .catch(err => console.log(err))
    },[API]);

    useEffect(() => {
        fetch(API)
            .then(res => res.json())
            .then(res => setWind(res.wind))
            .catch(err => console.log(err))
    },[API]);

    useEffect(() => {
        fetch(API)
            .then(res => res.json())
            .then(res => setClouds(res.clouds))
            .catch(err => console.log(err))
    },[API]);

    return (
        <>
            <Box className="weatherBox">
                <Box className="weatherBox_title">
                    <Typography
                        variant="h6"
                        align="center"
                    >
                        Dane Meteorologiczne
                    </Typography>
                </Box>
                <Box className="weatherBox_map">
                    <MapContainer
                        className="weatherBox_map__content"
                        center={[52.06898,19.47997]}
                        zoom={5}
                        scrollWheelZoom={false}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </MapContainer>
                </Box>
                <Box className="weatherBox_searchBox">
                    <form className="weatherBox_searchBox__form">
                        <Typography variant="h6">
                            Twoja miejscowość:
                        </Typography>
                        <input
                            className="weatherBox_searchBox__input"
                            onChange={(e) => setCity(e.target.value)}
                            type="text"
                            placeholder="Miasto"
                            name="city"
                        />
                    </form>
                </Box>
                {(temp !== undefined && wind !== undefined && clouds !== undefined) ?
                    <Box className="weatherBox_data">
                        <Typography variant="h6" >
                            Aktualna sytuacja pogodowa:
                        </Typography>
                        <Typography
                            variant="h6"
                            align="left"
                            gutterBottom={true}
                        >
                            Miejscowość: {city}
                        </Typography>
                        <Box className="weatherBox_data__items">
                            <Typography
                                variant="body2"
                                gutterBottom={true}
                            >
                                Temperatura: <span className="data_item">{temp.temp} &ordm;C</span>
                            </Typography>
                            <Typography
                                variant="body2"
                                gutterBottom={true}
                            >
                                Cisnienie: <span className="data_item">{temp.pressure} hpa</span>
                            </Typography>
                            <Typography
                                variant="body2"
                                gutterBottom={true}
                            >
                                Wilgotność: <span className="data_item">{temp.humidity} %</span>
                            </Typography>
                            <Typography
                                variant="body2"
                                gutterBottom={true}
                            >
                                Zachmurzenie: <span className="data_item">{clouds.all} %</span>
                            </Typography>
                            <Typography
                                variant="body2"
                                gutterBottom={true}
                            >
                                Temperatura min: <span className="data_item">{temp.temp_min} &ordm;C</span>
                            </Typography>
                            <Typography
                                variant="body2"
                                gutterBottom={true}
                            >
                                Temperatura max: <span className="data_item">{temp.temp_max} &ordm;C</span>
                            </Typography>
                            <Typography
                                variant="body2"
                                gutterBottom={true}
                            >
                                Predkość wiatru: <span className="data_item">{wind.speed} m/s</span>
                            </Typography>
                            <Typography
                                variant="body2"
                                gutterBottom={true}
                            >
                                Predkość wiatru porywy: <span className="data_item">{wind.gust} m/s</span>
                            </Typography>
                            <Typography
                                variant="body2"
                                gutterBottom={true}
                            >
                                Temperatura odczuwalna: <span className="data_item">{temp.feels_like} &ordm;C</span>
                            </Typography>
                        </Box>
                    </Box>
                    :
                    <Box className="weatherBox_data__noItems">
                        <Typography variant="subtitle2">
                            Niestety nie możemy znaleźć tej miejscowości
                        </Typography>
                    </Box>
                }
                <Box className="weatherBox_link">
                    <a href={"#top"}>
                        <ArrowCircleUpIcon/>
                    </a>
                </Box>
            </Box>
        </>
    );
};

export default Weather;