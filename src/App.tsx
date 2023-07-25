import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { NavbarComponent } from "./components/navbar/NavbarComponent";
import { HomepageComponent } from "./components/homepage/HomepageComponent";
import { FooterComponent } from "./components/footer/FooterComponent";

function App() {
  return (
    <Container fluid className="p-0 h-100">
      {/*Navbar Component*/}
      <NavbarComponent />
      <Container className="body-container">
        <Routes>
          {/*Various Routes*/}
          <Route path="/homepage" element={<HomepageComponent />} />
          <></>
          <></>
          <></>
        </Routes>
      </Container>
      <FooterComponent />
    </Container>
  );
}

export default App;
