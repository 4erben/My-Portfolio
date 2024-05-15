import { Route, Routes } from 'react-router-dom';
import "aos/dist/aos.css";
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./sass/custom.min.css";
import {Container} from "react-bootstrap";
import NavBar from './Components/NavBar';
import HomePage from  "./Pages/homepage";
import ProjectsPage from "./Pages/projectspage";
import AboutPage from "./Pages/aboutpage";
import ContactPage from "./Pages/contactpage";
function App() {
  return (
    <Container fluid className="app">
      <NavBar />
      <Routes>
        <Route 
        path="/"
        element={<HomePage/>}
        />
        <Route 
        path="/aboutpage"
        element={<AboutPage/>}
        />
        <Route 
        path="/projectspage"
        element={<ProjectsPage/>}
        />
      </Routes>
    </Container>
  );
}

export default App;
