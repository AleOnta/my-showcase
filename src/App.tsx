import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { NavbarComponent } from "./components/navbar/NavbarComponent";

function App() {
  return (
    <Container fluid className="p-0 h-100">
      {/*Navbar Component*/}
      <NavbarComponent />
      <Routes>
        {/*Various Routes*/}
        <></>
        <></>
        <></>
        <></>
      </Routes>
    </Container>
  );
}

export default App;
