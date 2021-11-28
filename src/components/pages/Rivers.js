import React,{useEffect,useState} from 'react';
import {Typography} from "@mui/material";
import {NativeSelect} from "@mui/material";
import riversBig10 from "../../database/riversBig10";
import otherRivers from "../../database/otherRivers";

const Rivers = () => {
    const [river,SetRiver] = useState("Wisła");
    const [data,setData] = useState([]);
    const API = `https://danepubliczne.imgw.pl/api/data/hydro`;
    useEffect(() => {
        fetch(API)
            .then(res => res.json())
            .then(res => setData(res))
            .catch(err => console.log(err))
    },[]);
    return (
        <div className="riversBox">
            <Typography
                variant="subtitle2"
                color="black"
                align="center"
                className="riversBox_title"
            >
                Dane hydrologiczne udostępniane przez IMGW
            </Typography>
            <div className="riversBox_selectBox">
                <div className="riversBox_selectBox__select">
                    <Typography variant="body">
                        Wybierz rzekę (10 największych)
                    </Typography>
                    <NativeSelect
                        style={{marginLeft:"10px"}}
                        inputProps={{
                            value: river,
                            onChange: e => SetRiver(e.target.value),
                        }}
                    >
                        <option>Wybierz</option>
                        {
                            riversBig10.map(el => {
                                return (
                                    <option value={el}>{el}</option>
                                )
                            })
                        }
                    </NativeSelect>
                </div>
                <div className="riversBox_selectBox__select">
                    <Typography variant="body">
                        Mniejsze rzeki :
                    </Typography>
                    <NativeSelect
                        style={{marginLeft:"10px"}}
                        inputProps={{
                            value: river,
                            onChange: e => SetRiver(e.target.value),
                        }}
                    >
                        <option>Wybierz</option>
                        {
                            otherRivers.map(el => {
                                return (
                                    <option value={el}>{el}</option>
                                )
                            })
                        }
                    </NativeSelect>
                </div>
            </div>
            <ul className="riversBox_selectedList">
                <div className="riversBox_selectedList__title">
                    <Typography
                        variant="h4"
                        align="center"

                    >
                        {river}
                    </Typography>
                </div>
                <div className="riversBox_selectedList__items">
                    {
                        data.filter(el => (el.rzeka === river)
                        ).map((el,index) => {
                            return (
                                <li className="selectedList_item" key={index}>
                                    <Typography variant="subtitle2">
                                        Stacja pomiarowa : {el.stacja}
                                    </Typography>
                                    <Typography variant="body">
                                        Województwo : {el.województwo}
                                    </Typography>
                                    <Typography variant="body">
                                        Stan wody : {el.stan_wody} cm
                                    </Typography>
                                    <Typography variant="body">
                                        Data i godzina pomiaru : {el.stan_wody_data_pomiaru}
                                    </Typography>
                                    {
                                        (el.temperatura_wody !== null) ? <p className="selectedList_item__paragraph">Temperatura wody : {el.temperatura_wody}
                                                &nbsp;&ordm;C </p>
                                            : <p className="selectedList_item__paragraph">Temperatura wody : Brak pomiaru</p>
                                    }
                                </li>
                            )
                        })
                    }
                </div>
            </ul>
        </div>
    );
};

export default Rivers;