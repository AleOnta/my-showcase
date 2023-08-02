import { Accordion, Button, Col, Row } from "react-bootstrap";
import { useSessionStorage } from "../../hooks/useSessionStorage";
import data from "../../assets/content/Placeholder.json";
import { useState, useEffect } from "react";
import { AboutMeItemComponent } from "./about_me/AboutMeItemComponent";
import { InfoAndContactsItemComponent } from "./info_contacts/InfoAndContactsItemComponent";
import { EduExpItemComponent } from "./educations_experiences/EduExpItemComponent";
import { EduExpInterface } from "../../assets/interfaces/EduExpInterface";
import { EduExpAddModalComponent } from "./educations_experiences/edu_exp_modals/EduExpAddModalComponent";

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

  const [showEdu, setShowEdu] = useState<boolean>(false);
  const [showExp, setShowExp] = useState<boolean>(false);

  useEffect(() => {
    setEducations(staticEducations);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [staticEducations]);

  useEffect(() => {
    setExperiences(staticExperiences);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [staticExperiences]);

  const edit_deleteEduExp = (
    i: number,
    type: string,
    eduExp?: EduExpInterface
  ) => {
    switch (type) {
      case "del_exp": {
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
      case "del_edu": {
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
      case "edit_edu": {
        if (i <= staticEducations.length - 1 && eduExp) {
          const updatedEdu = [
            ...staticEducations.slice(0, i),
            ...staticEducations.slice(i + 1),
          ];
          updatedEdu.push(eduExp);
          setStaticEducations(updatedEdu);
        } else {
          window.alert("Error while updating education - try again later");
        }
        break;
      }
      case "edit_exp": {
        if (i <= staticExperiences.length - 1 && eduExp) {
          const updatedEdu = [
            ...staticExperiences.slice(0, i),
            ...staticExperiences.slice(i + 1),
          ];
          updatedEdu.push(eduExp);
          setStaticExperiences(updatedEdu);
        } else {
          window.alert("Error while updating experience - try again later");
        }
        break;
      }
    }
  };

  const addEduExp = (eduExp: EduExpInterface, nature: string) => {
    console.log(nature);
    switch (nature) {
      case "edu": {
        const updatedEdu = [...staticEducations, eduExp];
        setStaticEducations(updatedEdu);
        break;
      }
      case "exp": {
        const updatedExp = [...staticExperiences, eduExp];
        setStaticExperiences(updatedExp);
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
                  edit_delete={edit_deleteEduExp}
                  key={"edu-" + i}
                />
              ))}
              <Button
                className="w-100 confirmation-btn rounded-pill"
                onClick={() => setShowEdu(true)}
              >
                Add a new Education
              </Button>
            </Accordion.Body>
            <EduExpAddModalComponent
              show={showEdu}
              onHide={() => setShowEdu(false)}
              nature="edu"
              addEduExp={addEduExp}
            />
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
                  edit_delete={edit_deleteEduExp}
                  key={"exp-" + i}
                />
              ))}
              <Button
                className="w-100 confirmation-btn rounded-pill"
                onClick={() => setShowExp(true)}
              >
                Add a new Experience
              </Button>
            </Accordion.Body>
            <EduExpAddModalComponent
              show={showExp}
              onHide={() => setShowExp(false)}
              nature="exp"
              addEduExp={addEduExp}
            />
          </Accordion.Item>
        </Accordion>
      </Col>
    </Row>
  );
};
