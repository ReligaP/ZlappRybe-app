import { BrowserRouter } from "react-router-dom";
import { Routes,Route} from "react-router";
import HeaderNavMenu from "./components/common/HeaderNavMenu";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import "./scss/main.scss";
import HeaderInfo from "./components/common/HeaderInfo";
import Footer from "./components/common/Footer";
import Home from "./components/pages/Home";
import Rivers from "./components/pages/Rivers";


function App() {
  return (
      <BrowserRouter>
        <Container maxWidth="md">
            <CssBaseline />
                <HeaderNavMenu />
                <HeaderInfo />
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/danehydro" element={<Rivers/>}/>
                </Routes>
                <Footer />
        </Container>
      </BrowserRouter>
  );
}

export default App;

/*
                    <Route exact path="/danehydro" element={}/>
                    <Route exact path="/danesynop" element={}/>
 */