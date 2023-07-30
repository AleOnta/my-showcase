import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { NavbarComponent } from "./components/navbar/NavbarComponent";
import { HomepageComponent } from "./components/homepage/HomepageComponent";
import { FooterComponent } from "./components/footer/FooterComponent";
import { ResumePageComponent } from "./components/my_resume_page/ResumePageComponent";
import { RedirectComponent } from "./components/redirect/RedirectComponent";
import data from "./assets/content/Placeholder.json";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    sessionStorage.setItem("about_me", JSON.stringify(data.about_me));
    sessionStorage.setItem("info_contacts", JSON.stringify(data.info_contacts));
    sessionStorage.setItem("educations", JSON.stringify(data.educations));
    sessionStorage.setItem("experiences", JSON.stringify(data.experiences));
  }, []);

  return (
    <Container fluid className="p-0 h-100">
      {/*Navbar Component*/}
      <NavbarComponent />
      <Container className="body-container">
        <Routes>
          {/*Various Routes*/}
          <Route path="/" element={<RedirectComponent />} />
          <Route path="/homepage" element={<HomepageComponent />} />
          <Route path="/my-resume" element={<ResumePageComponent />} />
          <></>
          <></>
        </Routes>
      </Container>
      <FooterComponent />
    </Container>
  );
}

export default App;
