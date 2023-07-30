import { motion } from "framer-motion";
import {
  BiLogoGithub,
  BiLogoGmail,
  BiLogoLinkedin,
  BiMobileAlt,
} from "react-icons/bi";

export const ContactsComponent = () => {
  return (
    <motion.div className="col col-12 col-sm-6 col-md-12 resume-contact-info mb-4">
      <h3 className="resume-section-title">CONTACTS</h3>
      <div className="d-flex aling-items-center mb-2 mb-sm-3">
        <span className="resume-icon-container d-flex justify-content-center align-items-center me-2 me-xl-3">
          <BiLogoGithub className="resume-icon" />
        </span>
        <p className="resume-info-p m-0">AleOnta</p>
      </div>
      <div className="d-flex aling-items-center mb-2 mb-sm-3">
        <span className="resume-icon-container d-flex justify-content-center align-items-center me-2 me-xl-3">
          <BiLogoLinkedin className="resume-icon" />
        </span>
        <p className="resume-info-p m-0">Alessandro Ontani</p>
      </div>
      <div className="d-flex aling-items-center mb-2 mb-sm-3">
        <span className="resume-icon-container d-flex justify-content-center align-items-center me-2 me-xl-3">
          <BiMobileAlt className="resume-icon" />
        </span>
        <p className="resume-info-p m-0">IT (+39) 327 4794091</p>
      </div>
      <div className="d-flex aling-items-center mb-2 mb-sm-3">
        <span className="resume-icon-container d-flex justify-content-center align-items-center me-2 me-xl-3">
          <BiLogoGmail className="resume-icon" />
        </span>
        <p className="resume-info-p email m-0">Alessandro-Ontani@outlook.com</p>
      </div>
    </motion.div>
  );
};
