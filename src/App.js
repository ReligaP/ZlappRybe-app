import {BrowserRouter} from "react-router-dom";
import {Routes,Route} from "react-router"
import Home from "./components/pages/Home";
import Rivers from "./components/pages/Rivers";
import Weather from "./components/pages/Weather";
import Footer from "./components/common/Footer";
import "./scss/main.scss"
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import HeaderInfo from "./components/common/HeaderInfo";
import HeaderNavMenu from "./components/common/HeaderNavMenu";
import AddRelation from "./components/pages/AddRelation";
import ShowRelation from "./components/pages/ShowRelation";
import Register from "./components/pages/Register";
import {useEffect, useState} from "react";
import {getAuth,onAuthStateChanged} from "firebase/auth";
import app from "./firebase/firebaseconfig";
import LoginBar from "./components/common/LoginBar";
import SignIn from "./components/pages/SignIn";
import AddImage from "./components/pages/AddImage";
import ShowImage from "./components/pages/ShowImage"



function App() {
    const [email, setEmail] = useState("");
    const [local,setLocal] = useState([]);
    useEffect(() => {
        const auth = getAuth(app);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user.email);
                setLocal(user.reloadUserInfo)
                setEmail(user.email);
            }
            else {
                console.log("Użytkownik wylogowany")
                setEmail("");
            }
        });
    }, []);
    return (
        <BrowserRouter>
            <CssBaseline />
            <Container maxWidth="md" disableGutters={true}>
                <HeaderNavMenu />
                <HeaderInfo />
                <LoginBar email={email} />
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/danehydro" element={<Rivers />}/>
                    <Route exact path="/danesynop" element={<Weather />}/>
                    <Route exact path="/dodajrelacje" element={<AddRelation local={local} email={email} />}/>
                    <Route exact path="/twojerelacje" element={<ShowRelation local={local} email={email}/>}/>
                    <Route exact path="/logowanie" element={<SignIn email={email}/>}/>
                    <Route exact path="/rejestracja" element={<Register/>} />
                    <Route exact path="/zdjecia" element={<AddImage local={local} email={email}/>}/>
                    <Route exact path="/wyswietlanie" element={<ShowImage local={local} email={email}/>}/>
                </Routes>
                <Footer />
            </Container>
        </BrowserRouter>
    );
}

export default App;