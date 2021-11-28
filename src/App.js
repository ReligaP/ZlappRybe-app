import { BrowserRouter } from "react-router-dom";
import { Routes} from "react-router";
import HeaderNavMenu from "./components/common/HeaderNavMenu";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import "./scss/main.scss";
import HeaderInfo from "./components/common/HeaderInfo";
import Footer from "./components/common/Footer";


function App() {
  return (
      <BrowserRouter>
        <Container maxWidth="md">
            <CssBaseline />
            <HeaderNavMenu />
            <HeaderInfo />
            <Routes>

            </Routes>
            <Footer />
        </Container>
      </BrowserRouter>
  );
}

export default App;