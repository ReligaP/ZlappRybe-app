import { BrowserRouter } from "react-router-dom";
import { Routes} from "react-router";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import "./scss/main.scss";


function App() {
  return (
      <BrowserRouter>
        <Container maxWidth="md">
          <CssBaseline />
          <Routes>

          </Routes>
        </Container>
      </BrowserRouter>
  );
}

export default App;