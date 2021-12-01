import { useState } from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase/firebaseconfig";
import {useNavigate} from "react-router";
import {Box} from "@mui/material";


const SignIn = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error,setError] = useState(false);
    let navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate("/")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                setError(true)
                console.log("Złe hasło bądź login")
            })
    }
    return (
        (props.email) ?

            <Box className="noSignInBox">
                <Box className="noSignInBox_content">
                    <Typography variant="h6">
                        Jesteś już zalogowany
                    </Typography>
                </Box>
            </Box>
            :
            <Box className="signInBox">
                <Box className="signInBox_content">
                    <Typography variant="h6" align="center">Zaloguj się</Typography>
                    <form className="signInBox_content__form" onSubmit={e => submitHandler(e)}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Adres e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            size="medium"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Hasło"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            size="medium"
                            fullWidth
                            margin="normal"
                        />
                        {
                            error === true ? <Typography variant="body2" gutterBottom={true} sx={{color:"red"}}>
                                Błędny e-mail lub hasło
                            </Typography>: ""
                        }
                        <Button
                            variant="contained"
                            type="submit"
                            size="small"
                        >
                            Zaloguj się
                        </Button>
                    </form>
                </Box>
            </Box>
    );
};

export default SignIn;