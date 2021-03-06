import { useState } from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase/firebaseconfig";
import {useNavigate} from "react-router";
import {Box} from "@mui/material";



const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error,setError]=useState(false);
    const [second,setSecond] = useState(false);
    let navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        console.log(userCredential);
                        navigate("/")
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorCode, errorMessage);
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if(errorCode === "auth/email-already-in-use") {
                    setError(true)
                } if (errorCode === "auth/weak-password") {
                    setSecond(true)
                }
                console.log(errorCode, errorMessage);
            });
    }

    return (
        <Box className="registerBox">
            <Box className="registerBox_content">
                <Typography
                    variant="h6"
                    align="center"
                >
                    Rejestracja
                </Typography>
                <form className="registerBox_content__form" onSubmit={e => submitHandler(e)}>
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
                        label="Has??o"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        size="medium"
                        fullWidth
                        margin="normal"
                    />
                    {
                        error === true ? <Typography variant="body2" gutterBottom={true} sx={{color:"red"}}>
                            Podany adres e-mail jest ju?? zaj??ty.
                        </Typography>: ""
                    }
                    {
                        second === true ? <Typography variant="body2" gutterBottom={true} sx={{color:"red"}}>
                            Podane has??o jest zbyt kr??tkie,powinno mie?? co najmniej 6 znak??w.
                        </Typography>: ""
                    }
                    <Button
                        variant="contained"
                        type="submit"
                        size="small"
                    >
                        Zarejestruj si??
                    </Button>
                </form>
            </Box>
        </Box>
    );
};

export default Register;