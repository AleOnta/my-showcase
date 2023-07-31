import { Accordion, Col, Row } from "react-bootstrap";
import { useSessionStorage } from "../../hooks/useSessionStorage";
import data from "../../assets/content/Placeholder.json";
import { useState } from "react";
import { AboutMeInterface } from "../../assets/interfaces/AboutMeInterface";
import { motion } from "framer-motion";
import { AboutMeItemComponent } from "./about_me/AboutMeItemComponent";
import { InfoAndContactsItemComponent } from "./info_contacts/InfoAndContactsItemComponent";
import { EduExpItemComponent } from "./educations_experiences/EduExpItemComponent";
import { EduExpInterface } from "../../assets/interfaces/EduExpInterface";

export const PrivateAreaComponent = () => {
  const [educations, setEducations] = useSessionStorage(
    "educations",
    data.educations
  );
  const [experiences, setExperiences] = useSessionStorage(
    "experiences",
    data.experiences
  );

  const [staticExperiences, setStaticExperiences] =
    useState<EduExpInterface[]>(experiences);
  const [staticEducations, setStaticEducations] =
    useState<EduExpInterface[]>(educations);

  const deleteEduExp2 = (i: number, type: string) => {
    switch (type) {
      case "exp": {
        if (i <= staticExperiences.length - 1) {
          const updatedExp = [
            ...staticExperiences.slice(0, i),
            ...staticExperiences.slice(i + 1),
          ];
          setStaticExperiences(updatedExp);
        } else {
          window.alert("Error while deleting experience - try again later");
        }
        break;
      }
      case "edu": {
        if (i <= staticEducations.length - 1) {
          const updatedEdu = [
            ...staticEducations.slice(0, i),
            ...staticEducations.slice(i + 1),
          ];
          setStaticEducations(updatedEdu);
        } else {
          window.alert("Error while deleting education - try again later");
        }
        break;
      }
    }
  };

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
            <Accordion.Body className="py-3 px-2">
              {staticEducations.map((el, i) => (
                <EduExpItemComponent
                  index={i}
                  nature="edu"
                  eduOrExp={el}
                  allEduExp={staticEducations}
                  setEduExp={setStaticEducations}
                  remove={deleteEduExp2}
                  key={"edu-" + i}
                />
              ))}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="accordion-item experiences">
            <Accordion.Header>Experiences</Accordion.Header>
            <Accordion.Body>
              {staticExperiences.map((el, i) => (
                <EduExpItemComponent
                  index={i}
                  nature="exp"
                  eduOrExp={el}
                  allEduExp={staticExperiences}
                  setEduExp={setStaticExperiences}
                  remove={deleteEduExp2}
                  key={"exp-" + i}
                />
              ))}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>
    </Row>
  );
};
