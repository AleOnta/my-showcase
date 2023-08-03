import { Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { EduExpComponent } from "./edu_exp_column/EduExpComponent";
import { TechStackComponent } from "./personal_column/tech-stack/TechStackComponent";
import { PersonalInfoComponent } from "./personal_column/personal_info/PersonalInfoComponent";
import { ContactsComponent } from "./personal_column/contacts_info/ContactsComponent";
import { useSessionStorage } from "../../hooks/useSessionStorage";
import data from "../../assets/content/Placeholder.json";
import { EduExpInterface } from "../../assets/interfaces/EduExpInterface";
import { ContactFormComponent } from "./contact_me/ContactFormComponent";

export const ResumePageComponent = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [aboutMe, setAboutMe] = useSessionStorage("about_me", data.about_me);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [educations, setEducations] = useSessionStorage(
    "educations",
    data.educations
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [experiences, setExperiences] = useSessionStorage(
    "experiences",
    data.experiences
  );

  return (
    <>
      <Row className="mx-0 resume-container">
        <motion.div
          className="col col-md-4 resume-info-column "
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            duration: 0.5,
          }}
        >
          <Row className="d-flex justify-content-center">
            <motion.div className="resume-mobile-recap d-md-none p-0 mb-4 mb-sm-5">
              <div className="d-flex align-items-center justify-content-around">
                <div className="resume-mobile-img"></div>
                <div>
                  <h2 className="resume-title mobile">{aboutMe.fullname}</h2>
                  <h4 className="resume-profession mobile m-0">
                    {aboutMe.job}
                  </h4>
                </div>
              </div>
              <p></p>
            </motion.div>
            <motion.div className="col col-12 d-none d-md-block resume-img-rounded mb-5"></motion.div>
            <PersonalInfoComponent />
            <ContactsComponent />
            <motion.div className="col col-12 resume-stack-info">
              <h3 className="resume-section-title ">TECH STACK</h3>
              <TechStackComponent />
            </motion.div>
          </Row>
        </motion.div>
        <motion.div
          className="col col-12 col-md-8 resume-edu-exp-column "
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            duration: 0.5,
          }}
        >
          <Row className="m-0">
            <motion.div className="col col-12 d-none d-md-block resume-about-me p-0">
              <h2 className="resume-about-me-title mb-0">{aboutMe.fullname}</h2>
              <h4 className="resume-about-me-job">{aboutMe.job}</h4>
              <p className="resume-about-me-text mb-0">{aboutMe.bio}</p>
            </motion.div>
            <motion.div className="col col-12 resume-edu-container p-0 mb-4">
              <div>
                <div className="d-flex align-items-center justify-content-between mb-3 mb-xxl-5">
                  <h3 className="resume-section-title mb-0 me-2">EDUCATION</h3>
                  <span className="resume-title-line"></span>
                </div>
                <Row className="m-0">
                  {educations.map((el: EduExpInterface, i: number) => (
                    <EduExpComponent eduExp={el} key={i} />
                  ))}
                </Row>
              </div>
            </motion.div>
            <motion.div className="col col-12 resume-exp-container p-0 mb-4">
              <div>
                <div className="d-flex align-items-center justify-content-between mb-3 mb-xxl-5">
                  <h3 className="resume-section-title mb-0 me-2">
                    EXPERIENCES
                  </h3>
                  <span className="resume-title-line"></span>
                </div>
                <Row className="m-0">
                  {experiences.map((el: EduExpInterface, i: number) => (
                    <EduExpComponent eduExp={el} key={i} />
                  ))}
                </Row>
              </div>
            </motion.div>
          </Row>
        </motion.div>
      </Row>
      <Row className="m-0 d-flex justify-content-center">
        <ContactFormComponent />
      </Row>
    </>
  );
};
