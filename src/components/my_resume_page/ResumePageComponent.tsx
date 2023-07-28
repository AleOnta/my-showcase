import { Row } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  BiUser,
  BiHomeAlt2,
  BiInfoCircle,
  BiCalendar,
  BiLogoGithub,
  BiLogoLinkedin,
  BiMobileAlt,
  BiLogoGmail,
  BiLogoPostgresql,
} from "react-icons/bi";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiSpring,
  SiHibernate,
} from "react-icons/si";
import { FaSass, FaBootstrap, FaJava } from "react-icons/fa";

export const ResumePageComponent = () => {
  return (
    <Row className="mx-0 resume-container">
      <motion.div className="col resume-info-column">
        <Row>
          <motion.div className="resume-mobile-recap d-md-none p-0  mb-4">
            <div className="d-flex align-items-center justify-content-between">
              <div className="resume-mobile-img"></div>
              <div>
                <h2 className="resume-title mobile">Alessandro Ontani</h2>
                <h4 className="resume-profession mobile m-0">
                  Junior Full Stack Web Developer
                </h4>
              </div>
            </div>
            <p></p>
          </motion.div>
          <motion.div className="col col-12 d-none d-md-block resume-img-rounded"></motion.div>
          <motion.div className="col col-12 resume-personal-info mb-4">
            <h3 className="resume-section-title">PERSONAL INFO</h3>
            <div className="d-flex aling-items-center mb-2">
              <span className="resume-icon-container d-flex justify-content-center align-items-center me-2">
                <BiUser className="resume-icon" />
              </span>
              <p className="resume-info-p m-0">Alessandro Ontani</p>
            </div>
            <div className="d-flex aling-items-center mb-2">
              <span className="resume-icon-container d-flex justify-content-center align-items-center me-2">
                <BiInfoCircle className="resume-icon" />
              </span>
              <p className="resume-info-p m-0">Jr Full-Stack Web Dev.</p>
            </div>
            <div className="d-flex aling-items-center mb-2">
              <span className="resume-icon-container d-flex justify-content-center align-items-center me-2">
                <BiHomeAlt2 className="resume-icon" />
              </span>
              <p className="resume-info-p m-0">Milan, Italy - IT</p>
            </div>
            <div className="d-flex aling-items-center mb-2">
              <span className="resume-icon-container d-flex justify-content-center align-items-center me-2">
                <BiCalendar className="resume-icon" />
              </span>
              <p className="resume-info-p m-0"> 24 yo. - 1999/01/11</p>
            </div>
          </motion.div>
          <motion.div className="col col-12 resume-contact-info mb-4">
            <h3 className="resume-section-title">CONTACTS</h3>
            <div className="d-flex aling-items-center mb-2">
              <span className="resume-icon-container d-flex justify-content-center align-items-center me-2">
                <BiLogoGithub className="resume-icon" />
              </span>
              <p className="resume-info-p m-0">AleOnta</p>
            </div>
            <div className="d-flex aling-items-center mb-2">
              <span className="resume-icon-container d-flex justify-content-center align-items-center me-2">
                <BiLogoLinkedin className="resume-icon" />
              </span>
              <p className="resume-info-p m-0">Alessandro Ontani</p>
            </div>
            <div className="d-flex aling-items-center mb-2">
              <span className="resume-icon-container d-flex justify-content-center align-items-center me-2">
                <BiMobileAlt className="resume-icon" />
              </span>
              <p className="resume-info-p m-0">IT (+39) 327 4794091</p>
            </div>
            <div className="d-flex aling-items-center mb-2">
              <span className="resume-icon-container d-flex justify-content-center align-items-center me-2">
                <BiLogoGmail className="resume-icon" />
              </span>
              <p className="resume-info-p m-0">Alessandro-Ontani@outlook.com</p>
            </div>
          </motion.div>
          <motion.div className="col col-12 resume-stack-info">
            <h3 className="resume-section-title mb-4">TECH STACK</h3>
            <Row className="m-0 icon-stack-row">
              <motion.div className="col col-3 p-0 d-flex align-items-center justify-content-center mb-3">
                <SiHtml5 className="resume-stack-icon" />
              </motion.div>
              <motion.div className="col col-3 p-0 d-flex align-items-center justify-content-center mb-3">
                <SiCss3 className="resume-stack-icon" />
              </motion.div>
              <motion.div className="col col-3 p-0 d-flex align-items-center justify-content-center mb-3">
                <SiJavascript className="resume-stack-icon" />
              </motion.div>
              <motion.div className="col col-3 p-0 d-flex align-items-center justify-content-center mb-3">
                <SiTypescript className="resume-stack-icon" />
              </motion.div>
            </Row>
            <Row className="m-0 icon-stack-row">
              <motion.div className="col col-3 p-0 d-flex align-items-center justify-content-center mb-3">
                <FaSass className="resume-stack-icon" />
              </motion.div>
              <motion.div className="col col-3 p-0 d-flex align-items-center justify-content-center mb-3">
                <FaBootstrap className="resume-stack-icon" />
              </motion.div>
              <motion.div className="col col-3 p-0 d-flex align-items-center justify-content-center mb-3">
                <SiReact className="resume-stack-icon" />
              </motion.div>
              <motion.div className="col col-3 p-0 d-flex align-items-center justify-content-center mb-3">
                <SiTailwindcss className="resume-stack-icon" />
              </motion.div>
            </Row>
            <Row className="m-0 icon-stack-row">
              <motion.div className="col col-3 p-0 d-flex align-items-center justify-content-center mb-3">
                <FaJava className="resume-stack-icon" />
              </motion.div>
              <motion.div className="col col-3 p-0 d-flex align-items-center justify-content-center mb-3">
                <SiSpring className="resume-stack-icon" />
              </motion.div>
              <motion.div className="col col-3 p-0 d-flex align-items-center justify-content-center mb-3">
                <SiHibernate className="resume-stack-icon" />
              </motion.div>
              <motion.div className="col col-3 p-0 d-flex align-items-center justify-content-center mb-3">
                <BiLogoPostgresql className="resume-stack-icon" />
              </motion.div>
            </Row>
          </motion.div>
        </Row>
      </motion.div>
      <motion.div className="col col-12 col-md-8 resume-edu-exp-column">
        <Row className="m-0">
          <motion.div className="col col-12 d-none d-md-block resume-about-me">
            <h2>Ontani Alessandro</h2>
            <h4>Junior Full Stack Web Developer</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
              incidunt quisquam reiciendis numquam optio cum alias id, animi
              quos natus consequatur odit modi consectetur at eligendi vero
              voluptate molestiae non! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Delectus voluptatem velit maiores dolorem
              obcaecati soluta quibusdam. Minus, repudiandae quaerat id omnis
              tenetur quis dignissimos cumque illo, quo voluptatibus dolorum
              aspernatur!
            </p>
          </motion.div>
          <motion.div className="col col-12 resume-edu-container p-0  mb-4">
            <div>
              <h3 className="resume-section-title">EDUCATION</h3>
              <span className="resume-title-line"></span>
            </div>
          </motion.div>
          <motion.div className="col col-12 resune-exp-container p-0  mb-4">
            <div>
              <h3 className="resume-section-title">EXPERIENCES</h3>
              <span className="resume-title-line"></span>
            </div>
          </motion.div>
        </Row>
      </motion.div>
    </Row>
  );
};
