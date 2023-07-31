import {
  Accordion,
  Button,
  Col,
  Form,
  FormControl,
  Row,
} from "react-bootstrap";
import { useSessionStorage } from "../../hooks/useSessionStorage";
import data from "../../assets/content/Placeholder.json";
import { useState } from "react";
import { AboutMeInterface } from "../../assets/interfaces/AboutMeInterface";
import { motion } from "framer-motion";
import { AboutMeItemComponent } from "./about_me/AboutMeItemComponent";
import { InfoAndContactsItemComponent } from "./info_contacts/InfoAndContactsItemComponent";

export const PrivateAreaComponent = () => {
  const [educations, setEducations] = useSessionStorage(
    "educations",
    data.educations
  );
  const [experiences, setExperiences] = useSessionStorage(
    "experiences",
    data.experiences
  );

  const [aboutMe, setAboutMe] = useSessionStorage("about_me", data.about_me);
  const [staticAboutMe, setStaticAboutMe] = useState<AboutMeInterface>(aboutMe);

  return (
    <Row className="m-0 mt-5 private-row">
      <Col xs={12} className="p-0">
        <Accordion defaultActiveKey="0" flush className="private-accordion">
          <Accordion.Item eventKey="0" className="accordion-item wallet-info">
            <Accordion.Header>Wallet Informations</Accordion.Header>
            <Accordion.Body>SEZIONE UTENTE</Accordion.Body>
          </Accordion.Item>
          <div className="accordion-separator">
            <div className="d-flex align-items-center justify-content-center mb-1">
              <span className="separator-line me-2" />
              DATA MANAGEMENT
              <span className="separator-line ms-2" />
            </div>
            <p className="separator-explain text-center">
              in these next four sections, it's possibile to manipulate and
              delete data of my CV.
              <br />
              Please note that the updated informations are stored in the
              session storage of the browser and that means that your variations
              will be discarded with the closing of the browser tab.
            </p>
          </div>
          <Accordion.Item eventKey="1" className="accordion-item about-me">
            <Accordion.Header>About Me</Accordion.Header>
            <Accordion.Body>
              <AboutMeItemComponent />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="accordion-item info-contacts">
            <Accordion.Header>Informations & Contacts</Accordion.Header>
            <Accordion.Body>
              <InfoAndContactsItemComponent />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="accordion-item educations">
            <Accordion.Header>Educations</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="accordion-item experiences">
            <Accordion.Header>Experiences</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>
    </Row>
  );
};
