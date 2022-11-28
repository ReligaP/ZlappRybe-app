import { getAuth , signOut} from "firebase/auth";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Box , Typography } from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import app from "../../firebase/firebaseconfig";

const LoginBar = ( props ) => {

    const ClickHandler = () => {
        const auth=getAuth(app);
        signOut(auth).then(() => {
            console.log("Wylogowany");
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        })
    };
    return (
        <Box className="loginBarBox">
            { props.email ?
                <Box className="loginBarBox_logged">
                    <Typography variant="body">
                        Witaj, {props.email}
                    </Typography>
                    <CheckCircleIcon
                        className="loginBarBox_logged__icon"
                        fontSize="xsmall"
                    />
                    <Button
                        size="small"
                        onClick={ClickHandler}
                    >
                        &nbsp;Wyloguj się
                    </Button>
                </Box>
                :
                <Box className="loginBarBox_unlogged">
                    <Typography variant="body2">
                        Użytkownik niezalogowany&nbsp;
                    </Typography>
                    <CancelIcon
                        className="loginBarBox_unlogged__icon"
                        fontSize="xsmall"
                    />
                    <Link to="/logowanie">
                        <Button size="small">
                            &nbsp;Zaloguj się
                        </Button>
                    </Link>
                </Box>
            }
        </Box>
    );
};

export default LoginBar;
