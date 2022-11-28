import { useState } from "react";
import { addDoc , collection , getFirestore } from "firebase/firestore";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box , Typography } from "@mui/material";
import app from "../../firebase/firebaseconfig";

const AddRelation = ( props ) => {
    const [place, setPlace] = useState("");
    const [text, setText] = useState("");
    const [data,setData] = useState("");
    const [fish,setFish] = useState("");
    const [start,setStart] = useState("");
    const [end,setEnd] = useState("");
    const [weather,setWeather] = useState("");
    const [success, setSuccess] = useState("");
    const [info,setInfo] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
        const db = getFirestore(app);
        const docRef = await addDoc(collection(db, `/${props.local.localId}`), {
            place,
            data,
            text,
            fish,
            start,
            end,
            weather,
            info,
        });
        if (docRef) {
            setSuccess(true);
        }
    }
    const HandleClick =(e)=> {
        e.preventDefault()
        setSuccess(false);
        setPlace("");
        setText("");
        setData("");
        setFish("");
        setStart("");
        setEnd("");
        setWeather("");
        setInfo("");
    }
    return (
        (props.email) ?
            <Box className="addRelationBox">
                <Box className="addRelationBox_content">
                    <Typography
                        className="addRelationBox_content__title"
                        variant="h6"
                        align="center"
                    >
                        Dodaj swoją relację z wędkowania
                    </Typography>
                    {
                        success && <Typography
                            className="addRelationBox_content__success"
                            variant="h6"
                            align="center"
                        >
                            Relacja dodana pomyślnie
                        </Typography>
                    }
                    <form onSubmit={e => submitHandler(e)}>
                        <TextField
                            required
                            id="standard-basic"
                            variant="standard"
                            label="Data wędkowania"
                            value={data}
                            onChange={(e) => setData(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            required
                            id="standard-basic"
                            variant="standard"
                            label="Godzina rozpoczęcia wędkowania"
                            value={start}
                            onChange={(e) => setStart(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            required
                            id="standard-basic"
                            variant="standard"
                            label="Godzina zakończenia wędkowania"
                            value={end}
                            onChange={(e) => setEnd(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            required
                            id="standard-basic"
                            variant="standard"
                            label="Miejsce"
                            value={place}
                            onChange={(e) => setPlace(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            id="standard-basic"
                            variant="standard"
                            label="Dodatkowy opis"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            required
                            id="standard-basic"
                            variant="standard"
                            label="Pogoda podczas wędkowania"
                            value={weather}
                            onChange={(e) => setWeather(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            required
                            id="standard-basic"
                            variant="standard"
                            label="Złowione ryby"
                            value={fish}
                            onChange={(e) => setFish(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            id="standard-basic"
                            variant="standard"
                            label="Użyte zanęty,przynęty i sprzęt"
                            value={info}
                            onChange={(e) => setInfo(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <Box className="addRelationBox_content__submit">
                            <Button
                                variant="contained"
                                type="submit"
                            >
                                Dodaj relację
                            </Button>
                        </Box>
                    </form>
                    <Box className="addRelationBox_content__clear">
                        <Button
                            variant="contained"
                            type="click"
                            onClick={HandleClick}
                        >
                            Wyczyść
                        </Button>
                    </Box>
                </Box>
            </Box>
            :
            <Box className="noAddRelationBox">
                <Typography
                    variant="h6"
                    className="noRelationBox_content"
                >
                    Zaloguj się aby dodać swoją relację
                </Typography>
            </Box>
    );
};

export default AddRelation;