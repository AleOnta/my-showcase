import { EduExpAddModalComponent } from "./educations_experiences/edu_exp_modals/EduExpAddModalComponent";
import { InfoAndContactsItemComponent } from "./info_contacts/InfoAndContactsItemComponent";
import { EduExpItemComponent } from "./educations_experiences/EduExpItemComponent";
import { EduExpInterface } from "../../assets/interfaces/EduExpInterface";
import { WalletItemComponent } from "./wallet_info/WalletItemComponent";
import { AboutMeItemComponent } from "./about_me/AboutMeItemComponent";
import { useSessionStorage } from "../../hooks/useSessionStorage";
import { Accordion, Button, Col, Row } from "react-bootstrap";
import data from "../../assets/content/Placeholder.json";
import { useState, useEffect } from "react";
import { WalletInterface } from "../../assets/interfaces/WalletInterface";
import { useNavigate } from "react-router";

interface PrivateAreaProps {
  loggedIn: boolean;
  wallet: WalletInterface;
}

export const PrivateAreaComponent = ({
  loggedIn,
  wallet,
}: PrivateAreaProps) => {
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
  const navigate = useNavigate();

  useEffect(() => {
    setEducations(staticEducations);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [staticEducations]);

  useEffect(() => {
    setExperiences(staticExperiences);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [staticExperiences]);

  useEffect(() => {}, []);

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
    <Row
      className={`m-0 mt-5 private-row ${
        !loggedIn && "d-flex justify-content-center"
      }`}
    >
      <Col
        xs={12}
        className={`p-0 ${!loggedIn && "private-rejected-col col-lg-9"}`}
      >
        {loggedIn ? (
          <>
            {wallet?.accounts.length > 0 &&
              wallet?.balance.length > 0 &&
              wallet?.chainId.length > 0 && (
                <Accordion
                  defaultActiveKey="0"
                  flush
                  className="private-accordion"
                >
                  <Accordion.Item
                    eventKey="0"
                    className="accordion-item wallet-info"
                  >
                    <Accordion.Header>Wallet Informations</Accordion.Header>
                    <Accordion.Body>
                      <WalletItemComponent
                        accounts={wallet.accounts}
                        balance={wallet.balance}
                        chainId={wallet.chainId}
                      />
                    </Accordion.Body>
                  </Accordion.Item>
                  <div className="accordion-separator">
                    <div className="d-flex align-items-center justify-content-center mb-1 mt-xl-5 mb-xl-4">
                      <span className="separator-line me-2" />
                      <span className="separator-title">DATA MANAGEMENT</span>
                      <span className="separator-line ms-2" />
                    </div>
                    <p className="separator-explain text-center">
                      in these next four sections, it's possibile to manipulate
                      and delete data of my CV.
                      <br />
                      Please note that the updated informations are stored in
                      the session storage of the browser and that means that
                      your variations will be discarded with the closing of the
                      browser tab.
                    </p>
                  </div>
                  <Accordion.Item
                    eventKey="1"
                    className="accordion-item about-me"
                  >
                    <Accordion.Header>About Me</Accordion.Header>
                    <Accordion.Body>
                      <AboutMeItemComponent />
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    eventKey="2"
                    className="accordion-item info-contacts"
                  >
                    <Accordion.Header>Informations & Contacts</Accordion.Header>
                    <Accordion.Body>
                      <InfoAndContactsItemComponent />
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    eventKey="3"
                    className="accordion-item educations"
                  >
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
                  <Accordion.Item
                    eventKey="4"
                    className="accordion-item experiences"
                  >
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
              )}
          </>
        ) : (
          <>
            <h2 className="px-3 py-1 py-md-3 mb-0 mt-lg-5">Private Area</h2>
            <div className="mt-3 mt-md-4 mt-lg-5 px-3 py-3">
              <h5 className="">
                The private area of this web application is dedicated only to
                logged in users.
              </h5>
              <p className="mt-5 mb-3 mb-md-4">
                To learn more about how to login in to the application, please,
                visit the homepage at /homepage and read the available guide.
              </p>
              <span className="or d-block mb-3 mb-md-4">OR</span>
              <span className="d-flex justify-content-between align-items-center">
                <Button
                  className="redirect-btn py-md-3"
                  onClick={() => navigate("/homepage")}
                >
                  Go to Homepage
                </Button>
                <Button
                  className="redirect-btn py-md-3"
                  onClick={() => navigate("/my-resume")}
                >
                  Go to My Resume
                </Button>
              </span>
            </div>
          </>
        )}
      </Col>
    </Row>
  );
};
